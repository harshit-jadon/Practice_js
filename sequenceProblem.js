//------------SEQUENCE PRACTICE PROBLEMS-----------------
//1
let random = Math.floor(Math.random()*10);
console.log(random);
//2
let random = Math.floor(Math.random()*5)+1;
console.log(random);
// 3
let x = Math.floor(Math.random()*5)+1;
let y = Math.floor(Math.random()*5)+1;
let sum = x + y;
console.log("value of x " + x);
console.log("value of y " + y);
console.log("sum of two dices = " + sum);
//4
sum = 0;
for(let r=0; r<5; r++){
   let number = Math.floor(Math.random()*89)+10;
   console.log("generate random number_____" + number);
   sum += number ;
   console.log("Sum ======== " + sum);
}