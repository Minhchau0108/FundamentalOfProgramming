//Declare variable a with value 111 and variable b with value 999
let a = 111;
let b = 999;
//Declare a temporary variable called temp
//Write the code to swap the value of a and b
//Log the values of a and b before and after swapping in an "user-friendly" way
function swap(a,b){
  console.log(`a = ${a} ,b = ${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`After swap a = ${a},b = ${b}`);
}
swap(a,b);
//Rocket (optional): Swap values without using the temporary variable.
function swapNoTemp(a,b){
  console.log(`a = ${a} ,b = ${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After swap a = ${a},b = ${b}`);
}

swapNoTemp(a,b);