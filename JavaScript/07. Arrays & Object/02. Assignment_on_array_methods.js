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
