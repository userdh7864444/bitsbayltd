import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

async function convertImages() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()

  const dirs = ['public/banners', 'public/listing', 'public/staff']

  for (const dirName of dirs) {
    const dir = path.resolve(dirName)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir)

    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue
      const fullPath = path.join(dir, file)
      const originalSize = fs.statSync(fullPath).size
      const baseName = file.replace(/\.[^.]+$/, '')
      const targetFile = path.join(dir, `${baseName}.webp`)

    const dataBuffer = fs.readFileSync(fullPath)
    const base64 = dataBuffer.toString('base64')
    const mime = file.endsWith('.png') ? 'image/png' : file.endsWith('.webp') ? 'image/webp' : 'image/jpeg'
    const dataUrl = `data:${mime};base64,${base64}`

    const webpDataUrl = await page.evaluate(async (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          // Max dimension 1920 for banners
          let w = img.width
          let h = img.height
          if (w > 1920) {
            h = Math.round((h * 1920) / w)
            w = 1920
          }
          canvas.width = w
          canvas.height = h
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, w, h)
          resolve(canvas.toDataURL('image/webp', 0.80))
        }
        img.onerror = reject
        img.src = src
      })
    }, dataUrl)

    const base64Data = webpDataUrl.replace(/^data:image\/webp;base64,/, '')
    const newBuffer = Buffer.from(base64Data, 'base64')
    fs.writeFileSync(targetFile, newBuffer)
    const newSize = newBuffer.length
    console.log(`Converted ${file} (${(originalSize/1024).toFixed(1)} KB) -> ${baseName}.webp (${(newSize/1024).toFixed(1)} KB, -${(100 - (newSize/originalSize)*100).toFixed(0)}%)`)
    }
  }

  await browser.close()
}

convertImages().catch(console.error)
