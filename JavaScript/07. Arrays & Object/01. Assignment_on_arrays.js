// # 1.

// What is the definition of an array in JavaScript?
// What is the technical term for the position of a value inside an array?
// At which number does the index of an array always start?
// Given the array var numbers = [10, 20, 30, 40];, what value is stored at index 2?
// For the same array var numbers = [10, 20, 30, 40];, what is the index of the number 40?


// 1. An array in JavaScript is used to contain multiple values.

// 2. 

let name = ["Raju","Om","Jay"];

// 3. Zero(0)

// 4. Ans => 30

// 5. index of the number 40 is "3"

// # 2.

// What are the two ways mentioned in the notes to create an array in JavaScript?
// Which method of creating an array is recommended by the notes?
// Write the syntax to create an array named students containing the names "Jenil", "Mahir", "Priyesha", and "Yashvi" using the recommended method.
// Write the syntax to create an array named marks containing 85, 90, and 78 using the Array constructor.
// What keyword is used when instantiating an array using the constructor approach?

// 1. i] let fruits = ["Banana", "Apple", "Mango"]
//   ii] let fruits = new Array("Banana", "Apple", "Mango")

// 2. This method => let fruits = ["Banana", "Apple", "Mango"]

// 3. let names = ["Jenil","Mahir","Priyesha","Yashvi"]

// 4. marks = new Array(85,90,78);

// 5. the keyword is new.

// # 3.

// What do you use to access a specific value stored in an array?
// Given var students = ["Jenil", "Mahir", "Priyesha"];, what does console.log(students[0]); output?
// For the same array, what does console.log(students[2]); output?
// What value does JavaScript return if you attempt to access an index that does not exist (such as students[10])?
// Write a line of code to log the first element of an array named colors.

// 1.
let fruits = ["Banana","Mango","Apple"];
console.log(fruits[0]);

// 2. output is : Jenil

// 3. output is : Priyensha

// 4. Ans : -1

// 5. 
let color = ["Red","Blue","Green"];
console.log(color[0]);

// # 4.

// 1. Update using the index.
marks[0] = newValue;

// 2.
marks[1] = 95;

// 3. Output: [80, 95, 90]

// 4. False. No special method is needed.

// 5. Yes. Assigning a higher index increases array length
//    and creates empty slots between indexes.

// # 5.

// 1.
console.log(arr.length);

// 2. ans => 4;

// 3. ans => 0(Zero)

// 4. It helps us know the size of an array and control the loops.

// 5. length is a property not a function. & function required "()" but property is not required.
//    like Ex. push() => function
//    like Ex. length => property

// # 6.


let subject = ["Python", "JavaScript", "HTML"]

for (sub of subject) {
    console.log(sub);
}

// 7. Because it is very easy to access arrays elements. 
//    Like no reqiured indices(i) and increment(i++)

// 8.

const colors = ["Red", "Blue", "Green"];

for (const color of colors) {
    console.log(color, indexOf(color)); // Reff Err => indexOf is not defined.
}


// # 7.

// Which method is used to add an element at the end of an array?
// Which method is used to add an element at the beginning of an array?
// Given let nums = [1, 2, 3];, write the code to add 4 at the end using the appropriate method. What will console.log(nums); show after that?
// Continuing from the previous question, write the code to add 0 at the beginning. What will the final array look like?
// True or False: push() and unshift() both modify the original array (they are mutating methods).

// 1. push();

// 2. unshift();

// 3. output => [1, 2, 3]

// 4. push(0); output => [0, 1, 2, 3]

// 5. True

// # 8.

// Which method removes the last element of an array?
// Which method removes the first element of an array?
// Given let nums = [100, 200, 300, 400, 500];, what does nums.pop(); do, and what will the array contain after calling it?
// After the previous operation, what does nums.shift(); do, and what will the remaining array contain?
// Do pop() and shift() return the removed element, or do they only modify the array?

// 1. pop();

// 2. shift();

// 3. output => [100, 200, 300, 400]

// 4. output => [200, 300, 400]

// 5. Yes

// # 9.

// What does the indexOf() method return when the searched value is found in the array?
// What does indexOf() return when the value is not present in the array?
// Given const names = ["Jenil", "Mahir", "Arjun"];, what does console.log(names.indexOf("Mahir")); output?
// For the same array, what does console.log(names.indexOf("Krishna")); output?
// Write a line of code that finds the index of "Priyesha" in an array named students.

// 1. Element in the array.

// 2. -1

// 3. 1

// 4. -1

// 5. 

names = ["Jenil", "Mahir", "Arjun"];
console.log();

// # 10.

// Can a JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array?
// Write the syntax to create an array named data that contains a number, a string, a boolean, and null.
// How can you check the data type of each element in such an array?
// Given const data = [100, "Hello", true, null];, what does typeof data[0] return?
// What does typeof data[2] return for the same array?

// 1. Yes

// 2. 

let array = ["Hello", 21, true, null];

// 3. typeof(array)

// 4. number

// 5. boolean

// # 11.

// Create a 4×2 matrix and print all elements of the second column.
// Given this matrix of student marks, print only the marks of the third student:

// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];

// Write code to find and print the total number of elements present in a 3×4 matrix.
// Create a 3×3 matrix filled with numbers 1 to 9. Then update the center element (index [1][1]) to 0 and print the matrix.
// Access and print the element that is present at the first row and last column of any 3×3 matrix you create.

// 1.

let name1 = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
];
for (i=0; i<4; i++) {
    console.log(name1[i][1]);
};

// 2. console.log(name[2])

// 3.

let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]

let total = matrix.length * matrix[0].length;
console.log(total);

// 4.

let matrice = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(matrice[1][1]);

// 5.

let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log([0][2]);

// # 12.

const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82, 89]  // Krishna
];

for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg);
}

// In the given marks example, what does marks[i] represent inside the loop?
// Why do we use marks.length in the outer loop instead of hard-coding the number 3?
// What will happen if one student has only 2 subject marks instead of 3? (Think about the calculation)

// 1. 
    [85, 90, 92] 
    [70, 75, 80] 
    [88, 82, 89]

// 2. because it automatically gives the total number of rows (students) in the array.

// 3. the given answer is undefined
