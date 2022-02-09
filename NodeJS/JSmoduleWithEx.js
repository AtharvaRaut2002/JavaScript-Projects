const fs = require("fs");
let text =  fs.readFileSync("dele.txt", "utf-8");
text = text.replace("I am", "Rohan is");

console.log("The content of the file is  acfsadv  writting in js");
console.log(text);

console.log("Creating a new file2...");
fs.writeFileSync("Rohanr.txt", text);
