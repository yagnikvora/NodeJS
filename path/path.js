const path = require('path');

path1 = "E:\\SEM-4\\subjects\\WT-II\\Node_Path\\path.js";
path2 = "E:\\SEM-4\\subjects\\PYTHON\\Demo.py";

console.log("path.basename : ", path.basename(path1));

process.env.PATH.split(path.delimiter);
console.log(process.env.PATH);

console.log("path.dirname : ", path.dirname(path1));

console.log("path.extname : ", path.extname(path1));

console.log("path.format : ", path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored',
}));

console.log("path.isAbsolute : ", path.isAbsolute(path1));

console.log("path.join", path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log("Path-1 : ", path.normalize(path1));
console.log("Path-2 : ", path.normalize(path2));

console.log("path.parse : ", path.parse(path1));

console.log("path.relative(path1,path2) : ", path.relative(path1, path2));

console.log("path.resolve(path1, path2) : ", path.resolve(path1, path2));

console.log("path1.split(path.sep) : ", path1.split(path.sep));
