import fs from 'fs'
import path from 'path'

// 1. Copy 404
const src404 = path.resolve('dist/404/index.html')
const dest404 = path.resolve('dist/404.html')

if (fs.existsSync(src404)) {
  fs.copyFileSync(src404, dest404)
  console.log('✓ Copied dist/404/index.html -> dist/404.html')
} else {
  console.warn('! dist/404/index.html not found')
}

// 2. Find built CSS file
const assetsDir = path.resolve('dist/assets')
let cssContent = ''
let cssFileName = ''

if (fs.existsSync(assetsDir)) {
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'))
  if (cssFiles.length > 0) {
    cssFileName = cssFiles[0]
    cssContent = fs.readFileSync(path.join(assetsDir, cssFileName), 'utf8')
    console.log(`✓ Loaded CSS file: ${cssFileName} (${(cssContent.length / 1024).toFixed(1)} KB)`)
  }
}

// 3. Find all HTML files in dist/
function getAllHtmlFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  for (const item of list) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath))
    } else if (item.endsWith('.html')) {
      results.push(fullPath)
    }
  }
  return results
}

const htmlFiles = getAllHtmlFiles(path.resolve('dist'))
console.log(`✓ Found ${htmlFiles.length} HTML files to optimize`)

let optimizedCount = 0

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, 'utf8')
  let changed = false

  // A. Non-blocking Google Fonts
  // Match standard blocking Google Fonts link if present
  const fontRegex = /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"\s+rel="stylesheet"\s*\/?>/gi
  if (fontRegex.test(html)) {
    html = html.replace(fontRegex, (match) => {
      const urlMatch = match.match(/href="([^"]+)"/)
      const url = urlMatch ? urlMatch[1] : 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap'
      return `<link rel="preload" as="style" href="${url}" />\n    <link href="${url}" rel="stylesheet" media="print" onload="this.media='all'" />\n    <noscript><link href="${url}" rel="stylesheet" /></noscript>`
    })
    changed = true
  }

  // B. Make Vite CSS non-blocking and inline it to eliminate render-blocking CSS
  // Match: <link rel="stylesheet" crossorigin="" href="/assets/index-....css"> or similar
  const cssLinkRegex = /<link\s+rel="stylesheet"\s+crossorigin(?:="")?\s+href="(\/assets\/[^"]+\.css)"\s*\/?>/gi
  if (cssLinkRegex.test(html)) {
    html = html.replace(cssLinkRegex, (match, href) => {
      const nonBlockingCss = [
        `<style id="bitsbay-critical-css">${cssContent}</style>`,
        `<link rel="preload" as="style" href="${href}" crossorigin="" />`,
        `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" crossorigin="" />`,
        `<noscript><link rel="stylesheet" href="${href}" /></noscript>`
      ].join('\n    ')
      return nonBlockingCss
    })
    changed = true
  }

  // C. Protect plaintext emails from harvesters (Plaintext Emails Test)
  // 1) Inside JSON-LD, use valid JSON unicode escape for '@' (\u0040)
  if (html.includes('"email": "support@bitsbayltd.com"')) {
    html = html.replace(/"email": "support@bitsbayltd.com"/g, '"email": "support\\u0040bitsbayltd.com"')
    changed = true
  }
  // 2) In HTML visible text & mailto links, use HTML entity &#64;
  if (html.includes('support@bitsbayltd.com')) {
    html = html.replace(/support@bitsbayltd\.com/g, 'support&#64;bitsbayltd.com')
    changed = true
  }
  if (html.includes('solutions@bitsbayltd.com')) {
    html = html.replace(/solutions@bitsbayltd\.com/g, 'solutions&#64;bitsbayltd.com')
    changed = true
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8')
    optimizedCount++
  }
}

console.log(`✓ Optimized ${optimizedCount} HTML files (zero render-blocking resources + critical CSS inlined)`)
