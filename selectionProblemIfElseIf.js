// -----------------SELECTION PROBLEM WITH IF_ELSE_IF AND ELSE----------------
//1 
const prompt = require('prompt-sync')();
const num = prompt('Enter number ');
var digitWord = ['zero','one','two','three','four','five','six','seven','eight','nine'];
var numString = digitWord.toString();
if(num<9){
    return digitWord;
}
console.log(numString);
// 2
const prompt = require('prompt-sync')();
const day = prompt("Enter Week Day number from 1-7 => ");
if(Number(day == 1))
console.log("SUNDAY");
else if(Number(day == 2))
console.log("MONDAY");
else if(Number(day == 3))
console.log("TUESDAY");
else if(Number(day == 4))
console.log("WEDNESDAY");
else if(Number(day == 5))
console.log("THURSDAY");
else if(Number(day == 6))
console.log("FRIDAY");
else if(Number(day == 7))
console.log("SATURDAY");
else
console.log("you enter wrong number");