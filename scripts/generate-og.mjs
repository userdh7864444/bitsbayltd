import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

async function generateOgImage() {
  const logoPath = path.resolve('./public/logo.png')
  const logoData = fs.readFileSync(logoPath).toString('base64')
  const logoUri = 'data:image/png;base64,' + logoData

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        width: 1200px;
        height: 630px;
        background: radial-gradient(circle at 80% 20%, #1e1e2f 0%, #0c0d14 60%, #050608 100%);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 70px 80px;
        position: relative;
        overflow: hidden;
      }
      .glow {
        position: absolute;
        width: 500px;
        height: 500px;
        background: #f15a24;
        opacity: 0.14;
        filter: blur(120px);
        border-radius: 50%;
        top: -100px;
        right: -100px;
        pointer-events: none;
      }
      .glow2 {
        position: absolute;
        width: 400px;
        height: 400px;
        background: #0084ff;
        opacity: 0.09;
        filter: blur(100px);
        border-radius: 50%;
        bottom: -100px;
        left: -100px;
        pointer-events: none;
      }
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
      }
      .logo {
        height: 64px;
        width: auto;
        filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
      }
      .badge {
        background: rgba(241, 90, 36, 0.15);
        border: 1px solid rgba(241, 90, 36, 0.4);
        color: #f15a24;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 8px 18px;
        border-radius: 9999px;
      }
      .middle {
        margin: auto 0;
        z-index: 10;
        max-width: 960px;
      }
      h1 {
        font-size: 48px;
        font-weight: 800;
        line-height: 1.18;
        letter-spacing: -0.02em;
        margin-bottom: 20px;
        background: linear-gradient(135deg, #ffffff 60%, #cfd4dc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        font-size: 23px;
        line-height: 1.45;
        color: #9da8b6;
        font-weight: 400;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 28px;
        z-index: 10;
      }
      .tags {
        display: flex;
        gap: 24px;
        font-size: 16px;
        font-weight: 600;
        color: #d1d5db;
        letter-spacing: 0.5px;
      }
      .tags span {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .tags span::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #f15a24;
      }
      .url {
        font-size: 18px;
        color: #f15a24;
        font-weight: 700;
        letter-spacing: 0.5px;
      }
    </style>
  </head>
  <body>
    <div class="glow"></div>
    <div class="glow2"></div>
    <div class="top">
      <img src="${logoUri}" class="logo" alt="Bitsbay" />
      <div class="badge">Software Engineering & Growth</div>
    </div>
    <div class="middle">
      <h1>Impacting Future Markets with Top-Notch Digital Solutions</h1>
      <p>Custom Web Applications, Mobile Development, Cloud SaaS Platforms & Amazon Growth Systems.</p>
    </div>
    <div class="bottom">
      <div class="tags">
        <span>Web & Mobile Apps</span>
        <span>SaaS Architecture</span>
        <span>Amazon SP-API</span>
        <span>Staff Augmentation</span>
      </div>
      <div class="url">bitsbayltd.com</div>
    </div>
  </body>
  </html>
  `

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.screenshot({ path: path.resolve('./public/og-image.jpg'), type: 'jpeg', quality: 90 })
  await browser.close()
  console.log('OG image created successfully at public/og-image.jpg')
}

generateOgImage().catch(console.error)
