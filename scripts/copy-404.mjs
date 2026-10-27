import fs from 'fs'
import path from 'path'

const src = path.resolve('dist/404/index.html')
const dest = path.resolve('dist/404.html')

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest)
  console.log('Successfully copied dist/404/index.html -> dist/404.html')
} else {
  console.warn('dist/404/index.html does not exist to copy.')
}
