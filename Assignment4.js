//Declare two integers a and b (0 < a < b < 10). Write a for loop to print all numbers from a to b inclusively, in increasing order, if a < b, or in decreasing order, if a > b.
let a = 7;
let  b = 4;
if (a < b){
  for(let i = a; i <= b; i++){
    console.log(i);
  }
}
else{
  for(let i = b; i <= a; i++){
    console.log(i);
  }
}
//Write function
function print(a,b){
  if (a < b){
    for(let i = a; i <= b; i++){
      console.log(i);
    }
  }
  else{
    for(let i = b; i <= a; i++){
      console.log(i);
    }
  }
}
print(a,b);


//Declare two integers x and y (0 < x < y < 999). Write a loop to calculate the sum of numbers from x to y inclusively. Print out the result in an user-friendly way.
let x = 10;
let y = 90;
let sum = 0;
for(let i = x; i <= y; i++){
  sum += i;
}
console.log(`sum of numbers from ${x} to ${y} is ${sum}`);

//Write function
function sumTwoNumbers(x,y){
  let sum = 0;
  for(let i = x; i <= y; i++){
    sum += i;
  }
  console.log(`sum of numbers from ${x} to ${y} is ${sum}`);
}
sumTwoNumbers(x,y);

//Declare a number that has 4 digits of your choice. Write code to print out the sum of its digit.
let z = 1025;
let sumOfDigits = 0;
for(let d = z; d > 0; d = Math.floor(d/10)){
  sumOfDigits += d % 10;
}
console.log(`Sum of digits of ${z} is ${sumOfDigits}`);

//Write function
function sumDigits(x){
  let sumOfDigits = 0;
  for(let d = x; d > 0; d = Math.floor(d/10)){
  sumOfDigits += d % 10;
  }
  console.log(`Sum of digits of ${z} is ${sumOfDigits}`);
}
sumDigits(z);
