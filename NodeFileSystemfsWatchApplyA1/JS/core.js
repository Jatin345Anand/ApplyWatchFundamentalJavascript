const fs = require('fs');
console.log("Rec request from outside");
var content = fs.readFileSync("CalsFirstFile.js");
console.log("First File Content is "+content);
var contene2 = fs.readFileSync("CalcCaller.js");
console.log("Second File Content is "+contene2);

console.log("Now I am Free,What can i do for u ");