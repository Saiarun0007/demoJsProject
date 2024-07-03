var figlet = require("figlet");

const col=require('colors')

figlet("Shanmukh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
console.log(data.green.bgGrey);
console.log(data.yellow.bgRed);
console.log("Mohan KAKI".red);
});
