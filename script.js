// alert("Im working"); // it shows an dialogue box iver the window 

// Variables 

// variables are like storage box which is used to store data for operations 

// let person = "Bhuvan"  es6 version and it is also variable / changable

// const person = "Bhuvan" once declared cannot be reassigned 

// var person = "Bhuvan"  old version not recommended 

//  !!! note use const more than let because it is recommended !!!

// rules for naming the variable 

// variable must need to start with alphabets $ and _ signs 

//  Variables should not start  with numbers 

//  variable should not be assigned with keyword

// Data Types in Javascript 

// numbers 
// booleans
// Float
// string 
// objects and 
//  Arrays 

// javascript is not a typed language so it does not require to add what type of data is stored in that varaible like c and java 
// we can also find the type of an data by using typeof keyword 

// let person = "bhuvan";
// console.log(typeof (person));

//             !!!Type conversion in javascript !!!

//  as javascript is not a typed language we can convert one form of data to another

// let person = "bhuvan"
// console.log(Number(person));

//  A quick note we cannot convert a string to a number it always return Nan (Not a number)

// let age = 21;
// console.log(String(age));
// console.log(typeof (age))

//  Boolean conversion 

// NOTE : in javascript all the non zero(0) data is returned as true and all the(zeros) are converted in to(false)

// Arithmetic Operators 


// Addition => Adding a two or more numbers    + 
// Substraction => substracting the numbers between each other  -
// Multiplication => Multiplies between 2 numbers    *
// Division => divides the given number  /
// Modulus => it takes only the remainder from the divider  %
// incremental operator a++ = a + 1
// decrement operator a-- = a - 1 
// 2**3 = 2 to the power 3 = 8


// let age = 21;
// let mygoal = 1;
// let rich = age + mygoal;
// console.log(rich);

// !!! conditional operators !!!

// it applies certain condition to the program 

// == it represents as equality operator 
// === it represnts strict equality operator 
// > it represent greater than sign 
// < it represents lesser than sign 
//  >= it represents if greater or equals to the value
// <= it represents if lesser or equal to the value 


// !!!!!  Logical operator !!!!

// && and 1 and 1 = 1 and 0 and 0 = 0 others are 0
// || if one value 1 it return true and also 1 and 1 = false 0
// ! it gives only opposite result 


// conditional statements 

// simple vote eligible calculator logic 

// let age = prompt(Number('What is your age'));
// if (age == 18) {
//     alert("you are eligible for voting");
// } else if (age < 10) {
//     alert("get back home kiddo")
// } else if (age >= 18) {
//     alert("Welcome bruh");
// } else {
//     alert(' are you a human :)')
// }

// Ternary operator

// let age = 18;
// age >= 18 ? console.log("im working") : console.log('bye bye good bye ')

