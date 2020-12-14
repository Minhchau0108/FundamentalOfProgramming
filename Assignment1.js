//Log the string "Area of a circle" to the console.
console.log("Area of a circle");
//Declare a variable called pi and assign the value 3.14 to it in one statement.
var pi = 3.14;
//Log the type of pi to the console.
console.log(typeof pi);
//Declare a variable called radius and assign the value 5 to it in one statement.
var radius = 5;
console.log(typeof radius);
//Declare a variable called area which is calculated by pi and radius to get the area of a circle
var area = (radius**2) * pi; 
//Log the result to the console in this format using string concatenation:
console.log('The area of a circle given the radius ' + radius + '(m) is ' + area + '(m2)');
//Change the value of the radius to 7 and log the result again using template literal.
radius = 7;
console.log(`The area of a circle given the radius ${radius} (m) is ${(radius**2) * pi} (m2)`);