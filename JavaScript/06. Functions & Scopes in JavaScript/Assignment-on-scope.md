
```js

// Q.1

var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();

// i] city is a Global Variable.
// ii] country is a Declared inside the function.
// iii] Yes 

// Q.2

var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax); // 550
}
calculate();
console.log(price); // 500

// Q.3

var college = "ABC College"; // Global Scope
function student() {
    var name = "Rahul";  // function scoped
    var age = 20;        // function scoped
}
function teacher() {
    var subject = "JavaScript"; // function scoped
}

// Q.4

function first() {
    var number = 100;
}
function second() {
    console.log(number);  // Ref Err => number is not defined.
}
first();
second();

// Q.5

// i & ii

var name = "om"
console.log(name)

function age() {
    var age = 20;
    console.log(age)
}
age();

// iii & iv

var rollNumber = 49;

function myFun() {
    var age = 20;
    var name = "om";
    console.log(name);
    console.log(age);
    console.log(rollNumber);
}
myFun();


// Q.6

var game = "Cricket";
function play() {
    console.log("I like " + game); // I like Cricket
}
play();
console.log(game); // Cricket 

// 7. good  Thodok baki che

var language = "English";
function showLanguage() {
    console.log(language); // English
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language); // Gujarati

// 8. Good

function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

// Ans => No Because the reason is hoisting in JS.

// 9.

var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color); // Favorite color: Red
}
showColor();
console.log(color);  // red
console.log(message); // Ref Err => message is not defined.

// 10.

var school = "Sunrise School";

function showSchool() {
    console.log(school)
}
showSchool();

var school = "Green Valley School"

function updateSchool() {   
    console.log(school);
}
updateSchool();

// 11.

function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second); // 300
}
calculateTotal();
console.log(first); // Ref Err => first is not defined.

// 12.

function employee() {
    var salary = 30000;
}
employee();
console.log(salary); // Reff Err => salary is not defined. because var is a function scoped.

// 13. Good

var number = 15;
function test() {
    var number = 25;
    console.log(number); // 25
}
test();
console.log(number); // 15

// 14. Good

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result); // 50 50
}
calculate();
calculate();

// ii] Yes every function call creates a new local variable named result.
// iii] No, The local variable result has function scope because it is declared using var inside the function.
//      when the function finished executing, the variable is no longer accessible from outside the function.

// 15.

var length = 8;
var width = 4;

function myFun() {
    var area = length*width;
    console.log("Area :", area);
}

// 16.

if (10 > 5) {
    var result = "Success";
}
console.log(result); // Success

// 17.

var number = 1;
if (true) {
    var number = 2;
}
console.log(number); // Because var is a function scoped not a block scope.

// 18.

var message = "Start";
{
    var message = "End";
}
console.log(message); // End

// 19. very good to understand.

if (false) {
    var result = 100;
}
console.log(result);

// the condition is false so that inside the if block will Not Execute. So result = 100 is Never Assigned.

// 20.

if (true) {
    let secret = "Hidden";
    console.log(secret);
}

// Because let and const are blocked scope but var is only function scoped.

// 21.

for (var number = 2; number <= 6; number += 2) {
    console.log(number); // 2 4 6
}
console.log("Final:", number); // Final: 8

// Q.22

var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count); // 1 2 3
}
console.log("Count:", count); // 4

// Q.23

var i = 5;
while (i > 2) {
    console.log(i); // 5 4 3
    i--;
}
console.log("After loop:", i); // 2

// Q.24

for (var item = 1; item <= 3; item++) {
    console.log("Item:", item); // 1 2 3
}
console.log("Last item:", item); // 4

// Q.25

for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);

// Because let and const are blocked scope but var is only function scoped.

// Q.26

function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number); // Because var is function scoped.
}
calculate();

// Q.27

function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks); // 60 70 80
    }
    console.log(marks); // 90
}
student();
console.log(marks); // Reff Err => marks is not defined.

// Q.28

function test() {
    var value = 5;
    while (value < 8) {
        console.log(value); // 5 6 7
        value++;
    }
    console.log("Final value:", value); // Final value: 8
}
test();


// Q.29

function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i); // Reff Err => i is not defined because the ver isfunction scoped.
calculate();

// Q.30

function printNumbers() {
    for (var i = 1; i<=5; i++) {
        console.log(i);
    }

    console.log("Final :", i);

}
printNumbers();
console.log(i); // Reff Err => i is not defined because the ver isfunction scoped.

// Q.31



```
