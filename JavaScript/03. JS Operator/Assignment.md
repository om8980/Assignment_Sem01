
A]

1. Addition `+`

1.

```javascript
let oneclass = 15000;
let secclass = 12500;
let total = oneclass + secclass
console.log(total)
```

2.

```javascript
let morningpage = 18;
let eveningpage = 25;
let totalreadingpage = morningpage + eveningpage;
console.log(totalreadingpage)
```

3.

```javascript
let monselling = 125;
let tueselling = 178;
let totalsoldingitems = monselling + tueselling;
console.log(totalsoldingitems)
```

4.

Ans = 105

5.

Ans = 53

6.

Ans = 42

7.

Ans = 395

8.

Ans = 2510

In JS, when `+` is used with a string, the number is converted to a string and concatenation happens.

9.

```javascript
let balance = 2000;
let item1 = 750;
let item2 = 320;
let total = item1 + item2;
let remainingbalance = balance - total
console.log(total)
console.log(remainingbalance)
```

10.

```javascript
console.log(5 + "5" + 5);
console.log(5 + 5 + "5");
console.log("5" + 5 + 5);
```

---

2. Subtraction `-`

1.

```javascript
let totalseats = 80;
let bookedseats = 53;
let emptyseats = totalseats - bookedseats;
console.log(emptyseats)
```

2.

```javascript
let totalMarks = 500;
let loseMarks = 35;
let finalMarks = totalMarks - loseMarks;
console.log(finalMarks)
```

3.

```javascript
let totalBoxes = 2500;
let sendBoxes = 875;
let remainingBoxes = totalBoxes - sendBoxes;
console.log(remainingBoxes)
```

4.

Ans = 7

5.

Ans = 15

6.

Ans = 63

7.

worth it

8.

=> In first que one value string & second value is number.
=> And Second que both value are string.

9.

worth it

10.

```javascript
console.log("100" - 50);//50
console.log("abc" - 10);//NaN
console.log(10 - "5" - "2");//3
console.log("10" - "5" - "2");//3
```

=> que no. 1 3 4 JS can convert string to number but in 2nd que JS cannot convert string to number that's why its output is NaN.

---

3. Multiplication `*`

1.

```javascript
let noteBookCost = 45;
let totalNoteBook = 8;
let toatlCost = noteBookCost * totalNoteBook
console.log(toatlCost)
```

2.

```javascript
let bottlePerHour = 120;
let totalHours = 6;
let totalBottle = bottlePerHour * totalHours;
console.log(totalBottle)
```

3.

```javascript
let rows = 7;
let plants = 15;
let totalPlants = rows * plants;
console.log(totalPlants)
```

4.

```javascript
let a = "5";
let b = 4;
let result = a * b;
console.log(result);
```

Ans = 20

5.

```javascript
let x = "10";
let y = "2";
let result = x * y;
console.log(result);
```

Ans = 20

6.

Ans = 96

7.

```javascript
let pizzaCost = 299;
let totalPizza = 4;
let totalCost = pizzaCost * totalPizza;
console.log(totalCost)
```

Ans = 1196

8.

```javascript
console.log("7" * 6);
console.log("7" * "6");
```

Ans = 42
Ans = 42

9.

```javascript
let unitPerHour = 45;
let totalHours = 8;
let totalUnits = unitPerHour * totalHours;
console.log(totalUnits)
```

Ans = 360

10.

```javascript
console.log("5" * 3 * "2");
console.log("abc" * 4);
console.log(10 * "2.5");
console.log("10" * "2.5" * "0");
```

Ans = 30
Ans = NaN  because JS cannot change string to number for this sentence that's why ans = NaN
Ans = 25
Ans = 0

---

4. Division `/`

1.

```javascript
let totalPencils = 144;
let totalStudents = 12;
let pencilsEach = totalPencils / totalStudents;
console.log(pencilsEach)
```

Ans = 12

2.

```javascript
let totalDistance = 360;
let totalHours = 6;
let distancePerHour = totalDistance / totalHours;
console.log(distancePerHour)
```

Ans = 60

3.

```javascript
let totalMoney = 72000;
let totalDepartment = 9;
let moneyEach = totalMoney / totalDepartment;
console.log(moneyEach)
```

Ans = 8000

4.

```javascript
let a = "20";
let b = 4;
let result = a / b;
console.log(result);
```

Ans = 5

5.

```javascript
let x = "100";
let y = "5";
let result = x / y;
console.log(result);
```

Ans = 20

6.

Ans = 12

7.

```javascript
let totalStudents = 360;
let totalClassroom = 9;
let studentsEach = totalStudents / totalClassroom;
console.log(studentsEach)
```

Ans = 40

8.

```javascript
console.log("100" / 4);
console.log("100" / "4");
```

Ans = 25
Ans = 25
because JS can chnge value type string to number.

9.

```javascript
let totalBill = 2400;
let totalFriends = 6;
let billEach = totalBill / totalFriends;
console.log(billEach)
```

Ans = 400

10.

```javascript
console.log(10 / 0);
console.log(-10 / 0);
console.log(0 / 0);
console.log("20" / "4" / 2);
console.log("abc" / 5);
```

Ans = Infinity
Ans = -Infinity
Ans = NaN
Ans = 2.5
Ans = NaN

---

5. Modulus `%`

1.

```javascript
let students = 53;
let group = 5;
let remaining = students % group;
console.log(remaining)
```

Ans = 3

2.

```javascript
let candies = 128;
let box = 10;
let remaining = candies % box;
console.log(remaining)
```

Ans = 8

3.

```javascript
let toys = 237;
let box = 6;
let remaining = toys % box;
console.log(remaining)
```

Ans = 3

4.

```javascript
let people = 185;
let passengers = 40;
let remaining = people % passengers;
console.log(remaining)
```

Ans = 25

5.Imp

```javascript
let a = 10;
let b = 0;
let result = a % b;
console.log(result);
```

Ans = NaN

6.

Ans = 4

7.

```javascript
let chocolates = 23;
let box = 4;
let remaining = chocolates % box;
console.log(remaining)
```

Ans = 3

8.relate to que no.5`imp`

```javascript
console.log(0 % 7);
console.log(15 % 0);
```

Ans = 0
Ans = NaN

divide by 0, the result of modulus is "NaN".

<!-- 

9.  Query

```javascript
let pages = 47;
let pagesPerSheet = 6;


``` -->

10.Query?

```javascript
console.log(17 % 5);
console.log(-17 % 5);
console.log(17 % -5);
console.log(-17 % -5);
console.log(10 % 0);
```
Query

Ans = 2
Ans = -2
Ans = 2
Ans = -2
Ans = NaN

---

6. Exponentiation `**`

1.

```javascript
let side = 6;
let volume = side ** 3;
console.log(volume)
```

Ans = 216

2.

```javascript
let side = 9;
let totalCells = side ** 2;
console.log(totalCells)
```

Ans = 81

3.

```javascript
let result = 5 ** 4;
console.log(result)
```

Ans = 625

4.

```javascript
let pixels = 1024;
let totalPixels = pixels ** 2;
console.log(totalPixels)
```

Ans = 1048576

5.

```javascript
let base = 2;
let power = -1;
let result = base ** power;
console.log(result);
```

Ans = 0.5

6.

Ans = 81

7.

```javascript
let side = 9;
let area = side ** 2;
console.log(area)
```

Ans = 81

8.

```javascript
console.log(2 ** 5);
console.log(5 ** 2);
```

Ans = 32
Ans = 25

No, they are not same.

9.
```javascript
console.log(2 ** 3 ** 2);          // right-associative  Query?
console.log((2 ** 3) ** 2);
console.log(2 ** -3);
// console.log(-2 ** 2);           // Remember: Syntax error
console.log((-2) ** 2);
console.log(4 ** 0.5);
```

Ans = 512
Ans = 64
Ans = 0.125
Ans = Syntax Error if `-2 ** 2` is used directly
Ans = 4
Ans = 2

** is right-associative. why?

10.

```javascript
let a = 10;
let b = 0;
let result = a ** b;
console.log(result);
```

Ans = 1

---

B] Assignment Operators

1. Simple Assignment `=`

1.

```javascript
let studentName = "Priya";
let marks = 92;
console.log(studentName);
console.log(marks);
```

2.

```javascript
let score = 0;
console.log(score);
```

3.

```javascript
let a = 50;
let b = a;
let c = b;
console.log(a, b, c);
```

4.

```javascript
let x;
x = 100;
console.log(x);
```

Ans = 100

5.

```javascript
let p = 15;
let q = p;
q = 30;
console.log(p, q);
```

Ans = 15 30

---

2. Add and Assign `+=`

1.

```javascript
let score = 80;
score += 25;
console.log(score);
```

Ans = 105

2.

```javascript
let balance = 1500;
balance += 120;
console.log(balance);
```

Ans = 1620

3.

```javascript
let count = 10;
count += 5;
console.log(count);
```

Ans = 15

4.

```javascript
let message = "Good";
message += " Morning";
console.log(message);
```

Ans = Good Morning

5.

```javascript
let n = 20;
n += "5";
console.log(n);
```

Ans = 205

Because += with a string works like string concatenation.

---

3. Subtract and Assign `-=`

1.

```javascript
let health = 100;
health -= 35;
console.log(health);
```

Ans = 65

2.

```javascript
let stock = 300;
stock -= 45;
console.log(stock);
```

Ans = 255

3.

```javascript
let lives = 5;
lives -= 2;
console.log(lives);
```

Ans = 3

4.

```javascript
let num = "40";
num -= 15;
console.log(num);
```

Ans = 25

5.

```javascript
let x = "abc";
x -= 5;
console.log(x);
```

Ans = NaN

JS cannot convert "abc" into a number.

---

4. Multiply and Assign `*=`

1.

```javascript
let price = 500;
price *= 1.18;
console.log(price);
```

Ans = 590

2.

```javascript
let quantity = 8;
quantity *= 3;
console.log(quantity);
```

Ans = 24

3.

```javascript
let amount = 200;
amount *= 1.1;
console.log(amount);
```

Ans = 220

4.

```javascript
let val = "7";
val *= 3;
console.log(val);
```

Ans = 21

5.

```javascript
let y = "hello";
y *= 2;
console.log(y);
```

Ans = NaN

Because `"hello"` cannot be converted into a number.

---

5. Divide and Assign `/=`

1.

```javascript
let total = 180;
total /= 6;
console.log(total);
```

Ans = 30

2.

```javascript
let distance = 300;
distance /= 5;
console.log(distance);
```

Ans = 60

3.

```javascript
let total = 400;
total /= 8;
console.log(total);
```

Ans = 50

4.

```javascript
let num = "100";
num /= 4;
console.log(num);
```

Ans = 25

5.

```javascript
let z = 50;
z /= 0;
console.log(z);
```

Ans = Infinity

---

6. Modulus and Assign `%=`

1.

```javascript
let num = 47;
num %= 6;
console.log(num);
```

Ans = 5

2.

```javascript
let counter = 23;
counter %= 12;
console.log(counter);
```

Ans = 11

3.

```javascript
let num = 29;
num %= 5;
console.log(num);
```

Ans = 4

4.

```javascript
let x = "17";
x %= 3;
console.log(x);
```

Ans = 2

5.

```javascript
let m = 15;
m %= 0;
console.log(m);
```

Ans = NaN

---

7. Exponentiation and Assign `**=`

1.

```javascript
let side = 5;
side **= 3;
console.log(side);
```

Ans = 125

2.

```javascript
let num = 4;
num **= 2;
console.log(num);
```

Ans = 16

3.

```javascript
let base = 2;
base **= 5;
console.log(base);
```

Ans = 32

4.

```javascript
let n = 4;
n **= 0.5;
console.log(n);
```

Ans = 2

5.

```javascript
let p = 2;
p **= -1;
console.log(p);
```

Ans = 0.5

---
