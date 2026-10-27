import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// 1. Copy 404
const src404 = path.resolve('dist/404/index.html')
const dest404 = path.resolve('dist/404.html')

if (fs.existsSync(src404)) {
  fs.copyFileSync(src404, dest404)
  console.log('✓ Copied dist/404/index.html -> dist/404.html')
} else {
  console.warn('! dist/404/index.html not found')
}

// Ensure ads.txt is in dist/
const srcAds = path.resolve('public/ads.txt')
const destAds = path.resolve('dist/ads.txt')
if (fs.existsSync(srcAds)) {
  fs.copyFileSync(srcAds, destAds)
  console.log('✓ Copied public/ads.txt -> dist/ads.txt')
}

// 2. Find built CSS file
const assetsDir = path.resolve('dist/assets')
let cssContent = ''
let cssFileName = ''

if (fs.existsSync(assetsDir)) {
  const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith('.css'))
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

function toHtmlEntities(str) {
  return str
    .split('')
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join('')
}

const encodedSupportEmail = toHtmlEntities('support@bitsbayltd.com')
const encodedSupportMailto = toHtmlEntities('mailto:support@bitsbayltd.com')
const encodedSolutionsEmail = toHtmlEntities('solutions@bitsbayltd.com')
const encodedSolutionsMailto = toHtmlEntities('mailto:solutions@bitsbayltd.com')

let optimizedCount = 0

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, 'utf8')
  let changed = false

  // A. Non-blocking Google Fonts:
  // Remove any nested/duplicate noscript blocks and make sure fonts are non-blocking
  html = html.replace(/<noscript>\s*<link[^>]+fonts\.googleapis\.com[^>]+>\s*<\/noscript>/gi, '')

  const rawFontRegex = /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+"\s+rel="stylesheet"\s*\/?>/gi
  if (rawFontRegex.test(html)) {
    html = html.replace(rawFontRegex, (match) => {
      const urlMatch = match.match(/href="([^"]+)"/)
      const url = urlMatch
        ? urlMatch[1]
        : 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap'
      return `<link rel="preload" as="style" href="${url}" />\n    <link href="${url}" rel="stylesheet" media="print" onload="this.media='all'" />`
    })
    changed = true
  }

  // B. Make Vite CSS non-blocking and inline it (eliminates render-blocking CSS completely)
  const cssLinkRegex = /<link\s+rel="stylesheet"\s+crossorigin(?:="")?\s+href="(\/assets\/[^"]+\.css)"\s*\/?>/gi
  if (cssLinkRegex.test(html)) {
    html = html.replace(cssLinkRegex, (match, href) => {
      const nonBlockingCss = [
        `<style id="bitsbay-critical-css">${cssContent}</style>`,
        `<link rel="preload" as="style" href="${href}" crossorigin="" />`,
        `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" crossorigin="" />`,
      ].join('\n    ')
      return nonBlockingCss
    })
    changed = true
  }

  // C. Protect plaintext emails from spam harvesters (Plaintext Emails Test)
  // 1) Inside JSON-LD: use valid JSON unicode escape (\u0040)
  if (html.includes('"email": "support@bitsbayltd.com"')) {
    html = html.replace(/"email": "support@bitsbayltd.com"/g, '"email": "support\\u0040bitsbayltd.com"')
    changed = true
  }

  // 2) Mailto links (full HTML entity encoding: no plaintext "mailto:" or "@")
  if (html.includes('href="mailto:support@bitsbayltd.com"')) {
    html = html.replace(/href="mailto:support@bitsbayltd\.com"/g, `href="${encodedSupportMailto}"`)
    changed = true
  }
  if (html.includes('href="mailto:solutions@bitsbayltd.com"')) {
    html = html.replace(/href="mailto:solutions@bitsbayltd\.com"/g, `href="${encodedSolutionsMailto}"`)
    changed = true
  }

  // 3) Visible text & residual mentions: full HTML entity encoding
  if (html.includes('support@bitsbayltd.com')) {
    html = html.replace(/support@bitsbayltd\.com/g, encodedSupportEmail)
    changed = true
  }
  if (html.includes('solutions@bitsbayltd.com')) {
    html = html.replace(/solutions@bitsbayltd\.com/g, encodedSolutionsEmail)
    changed = true
  }

  fs.writeFileSync(file, html, 'utf8')
  optimizedCount++
}

console.log(`✓ Optimized ${optimizedCount} HTML files (zero render-blocking resources + email protection)`)

// 4. Automatically package dist.zip for instant 1-click deployment
try {
  console.log('📦 Creating fresh dist.zip...')
  execSync('tar -a -c -f dist.zip -C dist .', { stdio: 'inherit' })
  const zipSize = (fs.statSync('dist.zip').size / (1024 * 1024)).toFixed(2)
  console.log(`✓ Successfully updated dist.zip (${zipSize} MB)`)
} catch (err) {
  console.warn('! Could not auto-create dist.zip:', err.message)
}
