const fs = require("fs");

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
