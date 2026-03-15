const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('assets/index-GniKqz-W.js', 'utf8');
try {
  new Function(code);
  console.log('Parse OK');
} catch (e) {
  console.log('Error:', e.message);
  const m = e.message.match(/\((\d+):(\d+)\)/);
  if (m) {
    const line = parseInt(m[1], 10);
    const col = parseInt(m[2], 10);
    const lines = code.split('\n');
    const target = lines[line - 1] || '';
    console.log('Line', line, 'Col', col);
    console.log('Context:', target.slice(Math.max(0, col - 60), col + 40));
  }
}
