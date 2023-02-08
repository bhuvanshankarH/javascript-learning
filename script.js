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

//  !!!!! Loops in javascript 

// for loop 

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

//  While Loop

// let i = 0;
// let n = 10;
// while (i < n) {
//     console.log("hello", i);
//     i++;
// }


//  Do while loop

let i = 0;
// let n = 10;
// do {
//     console.log("Hello", i);
//     i++;

// } while (i < n)
//     ;


// How to break in a loop using condition ;

// differnecce between break and continue
// in break the iteration stops with that
// in continue the condtioned iteration is ignored and the next iteration starts

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         break
//     }
//     console.log("Bye")
//         ;

// }

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
// continue
//     }
//     console.log("Bye", i)
//         ;

// }

// advanced continue program lol!!!!

// for (let i = 0; i < 10; i++) {
//     if (i == 3 || i == 6) {
//         continue
//     }
//     console.log("Mission accomplished", i)

// }


//  !!!!! Most important concept Arrays

const names = ['Bhuvan', 'shankar', "rocky", "prem"];
// // names.pop();  // pop function removes the "last element" from the arrays
// // names.push("rivan")  // push function adds this element to the "last element" of the arrays
// // names.shift(); // removes the first element in the array
// // names.unshift() // adds to the first element
// names.sort(); // it sorts the element
// console.log(names.includes("Bhuvan"));  it return boolean
// console.log(names.indexOf("Bhuvan")); // show the index of the element
// names.splice(2, 1, "Bhuvan", "prem");  // refer mdn
// console.log(names)


// bonus !! For in

// let persons = ['Bhuvan', 'shankar', "rocky", "prem"];
// for (let person in persons) {
//     console.log("Hello", persons[person]);
// }


//     !!!!!functions

// function is a block of code which runs when we call it
// let name = "Bhuvan"
// function greeting(name) {
//     console.log('hi' + name);
// }
// greeting("bhuvan")

// Addition function

// function addition(a, b) {
//     // return a + b;    // after writing return the function will get out like break statment
// }
// let result = addition(3, 4);
// console.log(result);


//  Interesting stuff in javascript :)  Anonymous Function

// we can pass a function in variable and treat it like a variable

// let add = function (a, b) {
//     // console.log(a + b);
//     return a + b;
// }
// console.log(add(3, 7))

// let newone = (a, b) => {
//     return a + b;
// }
// console.log(newone(3, 5))

//  ForEach method 

// let element = 0;
// let arr = [3, 4, 5, 6, 7, 8, 9];
// arr.forEach((el) => {
//     element += el;
//     console.log(element)

// })