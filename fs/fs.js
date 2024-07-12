
const fs = require('fs');

// fs.exists("demo.txt", (status) => {
//     console.log("Exists : ", status);
// });
// console.log("------------------------------------");

const ext = fs.existsSync("demo.txt");
console.log(ext);
console.log("------------------------------------");


// fs.stat("demo.txt", (err, stat) => {
//     console.log("Error : ", err);
//     console.log("Stat : ", stat);
// });
// console.log("------------------------------------");

const stat = fs.statSync("demo.txt");
console.log(stat);
console.log("------------------------------------");


// fs.open("demo.txt", "r+", (err, fd) => {
//     console.log("File description : ", fd)
// });
// console.log("------------------------------------");

const op = fs.openSync("demo.txt", "r+");
console.log(op);
console.log("------------------------------------");


// fs.readFile("demo.txt", "utf-8", (err, data) => {
//     console.log(data);
// })
// console.log("------------------------------------");


const rd = fs.readFileSync("demo.txt", "utf-8");
console.log(rd);
console.log("------------------------------------");


// fs.writeFile("demo.txt", "Yagnik", "utf-8", (e) => { });
// console.log("------------------------------------");

const wf = fs.writeFileSync("demo.txt", "Yagnik", "utf-8");
console.log(wf);
console.log("------------------------------------");

// fs.appendFile("demo.txt", " vora", "utf-8", (e) => { });
// console.log("------------------------------------");

const af = fs.appendFileSync("demo.txt", "Yagnik", "utf-8");
console.log(af);
console.log("------------------------------------");

// fs.close(3,(err)=>{
//     console.log("File colsed");
// });
// console.log("------------------------------------");

const cls = fs.closeSync(3);
console.log(cls);
