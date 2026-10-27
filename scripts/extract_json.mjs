import fs from 'fs';

const html = fs.readFileSync('seositecheckup_result.html', 'utf8');

const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
if (m) {
  const data = JSON.parse(m[1]);
  fs.writeFileSync('audit_data.json', JSON.stringify(data, null, 2));
  console.log('Saved audit_data.json');
} else {
  console.log('No __NEXT_DATA__ found');
}
