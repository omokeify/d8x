const fs = require('fs');
const path = 'assets/index-GniKqz-W.js';
const full = fs.readFileSync(path, 'utf8');
const start = full.indexOf('Frequently Asked');
const chunk = full.slice(start, start + 5000);
// Find FAQ answer strings (px-4 pb-4 div with p child)
const re = /text-white\/50 text-sm leading-relaxed",children:"([^"]+)"/g;
let m;
const answers = [];
while ((m = re.exec(chunk)) !== null) {
  answers.push(m[1]);
}
// First is intro (not in details), 2-7 are the 6 FAQ answers
const faqAnswers = answers.slice(1, 7);
console.log('FAQ answers:', faqAnswers.map(a => a.slice(0, 50) + '...'));
// Also try matching strings that might have escaped content - use a broader regex
const re2 = /children:"([^"]*(?:\\.[^"]*)*)"\}\)\]\}\)/g;
let m2;
const alt = [];
while ((m2 = re2.exec(chunk)) !== null) {
  if (m2[1].length > 100) alt.push(m2[1].slice(-50));
}
console.log('Alt matches (long strings with })]}) ):', alt.length);
let s = full;
let count = 0;
for (const a of faqAnswers) {
  const wrong = a + '"})]})';
  const right = a + '"})})';
  if (s.includes(wrong)) {
    s = s.replace(wrong, right);
    count++;
  }
}
fs.writeFileSync(path, s);
console.log('Fixed', count, 'FAQ items');
try {
  new Function(s);
  console.log('Parse OK');
} catch (e) {
  console.log('Parse error:', e.message);
}
