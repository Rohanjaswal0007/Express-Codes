const path = require('path');

const a = path.basename(__filename);
console.log(a)

const b = path.dirname(__filename);
console.log(b)

const c = path.extname(__filename);
console.log(__filename , c)