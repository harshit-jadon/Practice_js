// factorial using loop
const prompt = require('prompt-sync')();

const num = Number(prompt('Enter number '));
let res = 1;
for(let i = 2 ; i <= num; i++)
{
  res = res * i;
}
console.log("Factorial of " +num+ " is " +res); 

// prime number using loop
const prompt = require('prompt-sync')();

const num = Number(prompt('Enter number '));
if(num <= 1){
    console.log("Not a Prime Number");
    return;
}
for(let i = 2; i < Math.sqrt(num); i++){
    if(num%i == 0){
        console.log("Not a Prime Number");
        return;
    }
}
console.log("Prime Number"); 