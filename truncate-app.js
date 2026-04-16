const fs = require('fs');
const path = 'src/App.jsx';

// Read first 18 lines
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');
const first18Lines = lines.slice(0, 18).join('\n');

// Write back only first 18 lines
fs.writeFileSync(path, first18Lines);
console.log('App.jsx truncated to 18 lines');
