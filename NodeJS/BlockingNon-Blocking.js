//Synchronus (Blocking Execution)

//Asynchronus (Non-Blocking Execution)
//      |
//      |
//     \ / 
const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");

