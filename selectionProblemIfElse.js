// -----------------SELECION PROBLEM WITH IF AND ELSE-----------------
// 1
let max = 0;
let min = 999;
let number;
for(let r=0; r<5; r++){
   number = Math.floor(Math.random()*900)+100;
   console.log("generate random number_____" + number);
   if(number > max) {
    max = number;
}
if(number < min) {
    min = number;
}
console.log("smallest number = " + min);
console.log("Largest number = " +max);
}

//3
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Put YEAR to check LEAP YEAR OR NOT --- ", year => {
     let x = year % 4;
     let y = year % 100;
     let z = year % 400;
     if((x == 0 && y != 0) || z==0){
    console.log('Hey there ${year + " is a LEAP YEAR"}!');
    else
    console.log('Hey there ${year + " is a NOT LEAP YEAR"}!');
    readline.close();
  };
//4
var head = 0;
var tail = 1;
console.log("Coin is Flipping");
let toss = Math.floor(Math.random()*2);
setTimeout(coinFlip,2000);
function coinFlip(toss){
    if(toss == 0)
console.log("HEAD");
else
console.log("TAIL");}