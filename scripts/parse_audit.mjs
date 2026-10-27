import fs from 'fs';

const html = fs.readFileSync('seositecheckup_result.html', 'utf8');

const targets = ['image-size', 'image-aspect-ratio', 'render-blocking-resources'];

for (const target of targets) {
  const marker = `id="${target}"`;
  const pos = html.indexOf(marker);
  if (pos !== -1) {
    console.log(`\n================= ${target} =================`);
    const chunk = html.substring(pos, pos + 3000);
    // Find table or details
    console.log(chunk.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, ''));
  } else {
    console.log(`\nNot found: ${marker}`);
  }
}
