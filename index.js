const fs = require('fs');
const text = fs.readFileSync('docs/sample.txt', 'utf-8');
console.log(text);
