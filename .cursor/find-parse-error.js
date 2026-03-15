const fs = require('fs');
const acorn = require('acorn');
const code = fs.readFileSync('assets/index-GniKqz-W.js', 'utf8');
try {
  acorn.parse(code, { ecmaVersion: 2020 });
  console.log('Parse OK');
} catch (e) {
  console.log('Error:', e.message);
  console.log('Pos:', e.pos);
  if (e.pos != null) {
    const start = Math.max(0, e.pos - 80);
    const end = Math.min(code.length, e.pos + 40);
    console.log('Context:', JSON.stringify(code.slice(start, end)));
  }
}
