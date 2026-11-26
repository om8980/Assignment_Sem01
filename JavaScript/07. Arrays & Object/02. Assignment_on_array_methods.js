// # 1

// Create an array of 3 colors. Use push() to add two more colors and print the final array.
// Start with an empty array. Use push() three times to add the numbers 5, 10 and 15. Print the array.
// Create an array ["Pen", "Book"]. Add "Eraser" and "Scale" using a single push() call and print the result.
// Where does push() add the new element(s) in the array?
// Does push() change the original array? Explain in one sentence.

// 1.

let color = ["red","blue","green"]
color.push("black","white");
console.log(color);

// 2.

let num = []
num.push(5,10,15);

// 3.
// Already done

// 4. in the last

// 5. Yes

// # 2

// Create an array of 5 numbers. Use pop() twice and print the modified array and the two removed values.
// Create an array ["Red", "Blue", "Green"]. Remove the last element using pop() and print both the array and the removed element.
// Start with [100, 200, 300, 400]. Call pop() once and store the returned value in a variable. Print the variable and the array.
// What does pop() return?
// What happens if you call pop() on an empty array?

// 1

let num1 = [1,2,3,4,5];
num1.pop();
num1.pop();
console.log(num1)

// 2. 

let arr = ["Red", "Blue", "Green"]
arr.pop();
console.log(arr);

// 3.

let arr2 = [100, 200, 300, 400];
arr2.pop();
arr2.push(500);

// 4. pop bassicaly removed last element in the array.

// 5. output => []

let arr3 = [];
arr3.pop();
console.log(arr3);

// # 3

// Start with ["CSS", "JavaScript"]. Use unshift() to add "HTML" at the beginning and print the array.
// Create an array [20, 30]. Add 5 and 10 at the beginning using unshift() and print the result.
// Create an empty array. Use unshift() to add three city names one by one and print the final array.
// Where does unshift() add the new element(s)?
// Can unshift() add more than one element at the same time? Give a short explanation.

// 1.

let array4 = ["CSS", "JavaScript"];
array4.unshift("HTML");
console.log(array4);

// 2.

let array5 = [20,30];
array5.unshift(5,10);
console.log(array5);

// 3.

let array6 = [];
array6.unshift("surat");
array6.unshift("gandhinagar");
array6.unshift("ahemdabad");
console.log(array6);

// 4. firat in the array

// 5. Yes the example given in 2nd question.


// # 4

// Create an array of 4 city names. Remove the first city using shift() and print the remaining array and the removed city.
// Create [10, 20, 30, 40]. Call shift() twice and print the final array and both removed values.
// Start with ["Apple", "Banana", "Mango"]. Remove the first element and store it in a variable. Print the variable and the array.
// How is shift() different from pop()?
// What does shift() return?

// 1.

let city = ["surat", "ahemdabad", "vadodara", "dahod"];
let a1 = city.shift();
console.log(city);
console.log(a1);

// 2.

let array7 = [10, 20, 30, 40];
let a = array7.shift();
let b = array7.shift();
console.log(array7,a,b);

// 3.

let fruit1 = ["Apple", "Banana", "Mango"];
let f = fruit1.shift();
console.log(fruit1, "&", f);

// 4. shift() removed 1st element in the array & pop() removed last element in the array.

// 5. shift() returns removed values.


// # 5

// Create an array of 6 fruits. Find the index of a fruit that exists and one that does not exist using indexOf().
// Create an array ["A", "B", "C", "B", "D"]. Print the index of "B" using indexOf().
// Create an array of 4 student names. Check the index of your name (or any name) and print the result.
// What does indexOf() return if the element is not found?
// What will indexOf() return if the element appears more than once in the array?


// 1.

let fruit2 = ["Apple", "Banana", "Mango", "Grapes"];
console.log(fruit2.indexOf("Banana"));     // 1
console.log(fruit2.indexOf("Watermelon")); // -1

// 2. check it nice question.

let abc = ["A", "C", "B", "B", "D"];
console.log(abc.indexOf("B"));

// 3.

let name1 = ["raju","jay","om"]
console.log(name1.indexOf("om"));

// 4. -1

// 5. print the first element's index.

// # 6
