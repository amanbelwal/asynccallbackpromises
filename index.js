const fs = require("fs");
//readFile is by deafult the asynchronous function.
// node js is single thread thats why we use async function
fs.readFile("aman.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

var counter = 0;
function printscreen() {
  console.clear();
  console.log(counter);
  counter = counter + 1;
}
setInterval(printscreen, 1000);

console.log("Github commit check");
