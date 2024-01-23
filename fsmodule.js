const fs = require('fs');

//fs.readFile('rohan.txt', 'utf-8',(err, data)=>{
//    console.log(err, data)
//})

//const a = fs.readFileSync('rohan.txt');
//console.log(a.toString());

//fs.writeFile('file2.txt', "This is a writeFile function.", () => {
//    console.log("Written.")
//})

const b = fs.writeFileSync('file2.txt', "Work Hard and worry less.");
console.log(b)

console.log("Welcome to Himachal Pradesh.")