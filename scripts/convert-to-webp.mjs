/**
 * convert-to-webp.mjs
 * Converts all .jpg / .jpeg / .png images in public/ subdirectories to .webp
 * using the sharp library. Run once with: node scripts/convert-to-webp.mjs
 *
 * Install sharp if needed:  npm install sharp -D
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const DIRS = [
  path.resolve('public/hero'),
  path.resolve('public/banners'),
  path.resolve('public/shots'),
  path.resolve('public/amazon'),
  path.resolve('public/listing'),
  path.resolve('public/staff'),
  path.resolve('public/projects'),
  path.resolve('public/blog'),
]

const EXTS = ['.jpg', '.jpeg', '.png']

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (!EXTS.includes(ext)) continue
    const srcPath = path.join(dir, file)
    const destPath = path.join(dir, path.basename(file, ext) + '.webp')
    if (fs.existsSync(destPath)) {
      console.log(`  skip  ${destPath} (already exists)`)
      continue
    }
    try {
      await sharp(srcPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(destPath)
      const srcKb = (fs.statSync(srcPath).size / 1024).toFixed(0)
      const destKb = (fs.statSync(destPath).size / 1024).toFixed(0)
      console.log(`  ok  ${file}  -->  ${path.basename(destPath)}  (${srcKb}KB -> ${destKb}KB)`)
    } catch (err) {
      console.error(`  fail  ${file}: ${err.message}`)
    }
  }
}

console.log('Converting images to WebP...\n')
for (const dir of DIRS) {
  console.log('Dir: ' + path.relative(process.cwd(), dir))
  await convertDir(dir)
}
console.log('\nDone! You can now rebuild: npm run build')
