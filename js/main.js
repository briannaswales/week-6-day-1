// Basics of Javascript

/* 

    Multi-Line Comment in JS

    -- Variable Declaration in Javascript --
    Primitive Types: strings, integers, booleans, floats, arrays, objects(simmy to dict)
    Functions in Javascript
    Loops in Javascript

*/

// String Variable
var first_name = 'Bill'

// Display our value to the console
console.log(first_name)

// Integer Variable
var some_num = 21;

console.log(some_num);
console.log(typeof(some_num));

// Float Variable
var some_float = 3.14
console.log(some_float)

// Array Variable
var some_array = [1, 2, 3, 4]
console.log(some_array)

// Object Variable
var some_object = {"test": `Please Test Me`}
console.log(some_object)

// JAVASCRIPT HOISTING
console.log(some_random_variable);
var some_random_variable = 'This is a random string';
console.log(some_random_variable);

// console.log(some_other_variable);
// let some_other_variable = 45
// console.log(some_other_variable);

// a better way to declare variables is using 'let' and/or 'const'

let full_name = first_name + ` Brianna`
console.log(full_name)

full_name = `Brianna Swales`
console.log(full_name)

const super_hero = `Ironman`
console.log(super_hero)

/* 

Basic Math Operations in JavaScript

*/

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5 // sum = sum + 5
console.log(sum);

// Subtraction
let diff = 5 - 5;
console.log(diff);
diff -= 5; // diff = diff - 5
console.log(diff);

// Multiplication
let product = 5 * 5
product *= 5; // product = product * 5

// Division
let quotient = 5 / 5
quotient /= 5; // quotient = quotient / 5

// Exponent 
let square = 5 ** 2;
square **= 2; // square = square ** 23

// Finding floor of a decimal
let find_floor = Math.floor(10/3);

// Finding the ceiling of a decimal
let find_ceiling = Math.ceil(25.8);

// Modelo
let find_modelo = 15 % 4;
console.log(find_modelo);

// Mind Bender - just converts everything into a string after they identify another string and they concencatenate
let crazy_stuff = some_float + `4`;

// Mind Bender -- returns 7.14
let crazy_stuff_2 = some_float + parseFloat('4');




// Javascript Functions
// Regular Named Function
function addNums(){
    let num = 4
    let num2 = 5

    return num + num2;
}
console.log(addNums())


//  Regular named function with parameters
function addNums2(num1, num2){
    return num1 + num2
}
console.log(addNums2(12, 22))

// Variable Name Function
let addNums3 = function(){
    let num1 = 10
    let num2 = 15
    return num1 + num2
}

// Variable Name Function w/ Parameters
let nums4 = function(num1, num2){
    return num1 + num2
}

// ES Arrow Function
let multiplyNums = () => {
    let num1 = 4
    let num2 = 5
    return num1 * num2
}

// arrow function w/ paramysssss
let cubed = (num) => {
    return num ** 3
}

// Self-invoking functions
// Console.log doesn't have to be provided.. just using for better display

console.log((function(name){
    let hello = 'Hello World, ' + name
    return hello
})(`Brianna`))

// JavaScript Control Flow
// If Statements

function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return `butthole`
    } else {
        `boomer`
    }
}
console.log(determineAge(12))

// Javascript Ternary Operator
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >=18 && age <=65) ? 'Adult not retired' : 'boomer'
}

// Equal to - ==
let sum_num = 21
if (sum_num == 21){
    console.log('These are equal')
}

// Not equal = !=
if (sum_num != 12){
    console.log(`crackrock`)
}

// Loops in JavaScript
// For LOOP
//  syntax -- for keyword (counter; expression; incrementaion/decrementation)

function countByOne(){
    // For Loop
    for (let i=0; i < 20; i++){
        console.log(i)
    }
    return `Counting has STOPPED`
}

function decreaseByOne(){
    for (let i = 20; i > 0; i--){
        console.log(i)
    }
    return `decreasing has stopped`
}

// While Loop - JavaScript
function countWithWhile(){
    let i = 0; // Counter
    let text = '';

    while(i < 10) {
        text += `This number is ... ${i}\n`
        i++
    }
    return text
}
console.log(countWithWhile())

// Do While Loop -- Do the first portion at least once
//  If the while condition is still met, perform the while loop
// Starts with Do WHILE and runs at least once

function countWithDoWhile(){
    let i = 0; // Counter
    let text = '';
    // Do Statement
    do {
        text += `This number is now ... ${i}\n`
        i++ // keep increasing i
    }
    while (i > 10)
    return text
}
console.log(countWithDoWhile())

/* 

============================================
Looping with Arrays and Array/String Methods
============================================

*/

// Create Array
let group_of_names = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty']
// terry = a, ben = b, etc.

console.log(group_of_names[0]) // Terry

// Deconstruction of an Array
let terry, ben; // can change terry to a and ben to b
[terry, ben] = group_of_names // change terry to a and ben to b 

console.log(terry, ben) // a, b

// Method 1 for looping through an array
function all_names(){
    for (let i; i < group_of_names.length; i++){
        console.log(group_of_names[i]);
    }
};

all_names();

// Method 2: Using the forEach() method inside of an array
group_of_names.forEach((element) => {console.log(element)})

// Array.toString() / returns a string representation of array
console.log(group_of_names.toString())

