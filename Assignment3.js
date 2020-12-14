//Declare a variable named x and assign it with a number of your choice.
let x = 5;
//Write code to log to the console whether x is equal to 0 or a positive/negative number in an "user-friendly" way. Example 5 is a positive number, 0 is zero.
if(x == 0){
  console.log(`${x} is zero`);
}
else if (x > 0){
  console.log(`${x} is positive number`);
}
else {
  console.log(`${x} is negative number`);
}
// Declare 3 variables named a, b, c, and assign them with values in the range 0 to 99 of your choice. Write code to print out the smallest and biggest number between them. 
let a = 50 , b = 40, c = 45;

let max = a;
if (b > max) { max = b;}
if (c > max) { max = c;}

let min = a;
if (b < min) { min = b;}
if (c < min) { min = c;}

console.log(`${min} is the smallest number, and ${max} is the biggest number between ${a}, ${b}, ${c}`);