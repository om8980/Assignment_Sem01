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

