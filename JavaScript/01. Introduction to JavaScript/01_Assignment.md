# Assignment - 1

## Introduction to JavaScript

---

# Section A: Short Answer Questions

### Q1. What is JavaScript?

JavaScript is a programming language used to make web pages dynamic and interactive.

---

### Q2. Who created JavaScript and in which year?

JavaScript was created by **Brendan Eich** in **1995**.

---

### Q3. What was the original name of JavaScript?

The original name of JavaScript was **Mocha**. It was later renamed to **LiveScript** and then to **JavaScript**.

---

### Q4. Is JavaScript the same as Java? Give one major difference.

No, JavaScript and Java are different programming languages.

**Major difference:** Java is commonly used for backend and application development, while JavaScript is widely used for frontend web development and can also be used for backend development with Node.js.

---

### Q5. What does it mean when we say JavaScript is a high-level programming language?

A high-level programming language is easy for humans to read, write, and understand because it uses simple and understandable syntax.

---

### Q6. Is JavaScript a compiled language or an interpreted language? Explain briefly.

JavaScript is traditionally called an **interpreted language**, but modern JavaScript engines also use **JIT (Just-In-Time) compilation** to improve performance.

---

### Q7. Name the JavaScript engines used by the following browsers.

* **Google Chrome** → V8
* **Mozilla Firefox** → SpiderMonkey
* **Apple Safari** → JavaScriptCore

---

### Q8. What is Dynamic Typing in JavaScript?

Dynamic typing means a variable can hold different types of values at different times.

```javascript
let x = 10;
x = "Hello";
```

Here, `x` first stores a number and later stores a string.

---

### Q9. What is the main difference between a static website and a dynamic website?

A **static website** mainly displays fixed content.

A **dynamic website** can change content and provide interactive functionality based on user actions or data.

---

### Q10. Name the three pillars of Front-end Web Development and write one line about each.

* **HTML** → Provides the structure of a webpage.
* **CSS** → Provides the design, styling, and layout.
* **JavaScript** → Provides functionality and interactivity.

---

### Q11. What is the difference between Frontend and Backend?

**Frontend:** It is what the user sees and interacts with.

**Backend:** It handles server-side logic, databases, authentication, and data processing.

---

### Q12. What is Node.js?

Node.js is a JavaScript runtime that allows JavaScript to run outside a web browser, mainly on servers.

---

### Q13. Explain ECMAScript. What is its relation with JavaScript?

**ECMAScript** is a standard/specification that defines how JavaScript should work.

JavaScript is an implementation of the ECMAScript standard.

---

# Section B: True or False

### 1. JavaScript is a statically typed language.

**False** - JavaScript is a dynamically typed language.

---

### 2. JavaScript can only run inside the browser.

**False** - Node.js allows JavaScript to run outside a browser.

---

### 3. HTML is responsible for the behaviour of a webpage.

**False** - JavaScript is mainly responsible for the behaviour and interactivity of a webpage.

---

### 4. Node.js allows JavaScript to run outside the browser.

**True**

---

### 5. JavaScript is case-insensitive.

**False** - JavaScript is a case-sensitive language.

---

### 6. `let name` and `let Name` are the same variable.

**False** - JavaScript is case-sensitive, so `name` and `Name` are different variables.

---

### 7. ECMAScript is a programming language.

**False** - ECMAScript is a standard/specification that defines the rules and features implemented by languages such as JavaScript.

---

### 8. React, Angular, and Vue.js are used for Backend development.

**False** - React, Angular, and Vue.js are mainly used for Frontend development.

---

# Section C: Fill in the Blanks

### 1.

JavaScript was created by **Brendan Eich** in the year **1995**.

### 2.

The three technologies used in Front-end development are **HTML**, **CSS**, and **JavaScript**.

### 3.

JavaScript engines: Chrome uses **V8**, Firefox uses **SpiderMonkey**.

### 4.

In the restaurant analogy:

**Customer = User, Waiter = Frontend/API, Chef = Backend**

### 5.

JavaScript file extension is **`.js`**.

---

# Section D: Conceptual Questions

## Q14. Differentiate between a static website and a dynamic website. Give one real-world example of each.

### Static Website

A static website mainly has fixed content that does not change based on user interaction.

**Example:** A simple personal portfolio website.

### Dynamic Website

A dynamic website can change content and provide different information or functionality based on user actions or data.

**Example:** Flipkart.

---

## Q15. Explain any two features of JavaScript that make it suitable for creating interactive web pages.

### 1. DOM Manipulation

JavaScript can change HTML elements and their content without reloading the page.

### 2. Event Handling

JavaScript can respond to user actions such as clicks, typing, mouse movement, and form submission.

---

## Q16. List any four areas (apart from web browsers) where JavaScript is used today. Mention one popular framework/library for each (if applicable).

1. **Backend Development** → Node.js
2. **Mobile App Development** → React Native
3. **Desktop App Development** → Electron
4. **Game Development** → Phaser

---

## Q17. What is the difference between writing JavaScript code inside an HTML file using `<script>` tag and in an external `.js` file? Mention two advantages of using an external JavaScript file.

JavaScript can be written directly inside an HTML file using the `<script>` tag, or it can be written in a separate `.js` file.

### Inline/Internal JavaScript

The JavaScript code is written inside the HTML file.

```html
<script>
    console.log("Hello");
</script>
```

### External JavaScript

The JavaScript code is written in a separate `.js` file.

```html
<script src="script.js"></script>
```

### Advantages of External JavaScript

1. Code is cleaner and easier to understand.
2. One JavaScript file can be used for multiple HTML pages.

---

## Q18. Explain the difference between Frontend and Backend using the restaurant analogy in your own words.

We can understand Frontend and Backend using a restaurant analogy.

* **Customer** → User
* **Waiter** → Frontend/API
* **Kitchen/Chef** → Backend

The customer interacts with the waiter, just like a user interacts with the frontend. The waiter takes the order to the kitchen, similar to how the frontend/API sends a request to the backend. The chef prepares the food, similar to how the backend processes data and performs the required work.

---

## Q19. Why should a beginner learn JavaScript? Write at least 4 points.

1. JavaScript is used to add functionality and interactivity to websites.
2. It can be used for both frontend and backend development.
3. It has many popular libraries and frameworks.
4. It can be used to create different types of applications such as web, mobile, desktop, and server applications.

---

# Section E: Code-Based Questions

## Q20. Predict the output of the following code and explain why.

```javascript
let value = 25;
console.log(typeof value);

value = "JavaScript";
console.log(typeof value);

value = false;
console.log(typeof value);
```

### Output:

```text
number
string
boolean
```

### Explanation:

JavaScript is dynamically typed. Therefore, the same variable can store different types of values at different times.

* `25` → `number`
* `"JavaScript"` → `string`
* `false` → `boolean`

---

## Q21. Write a simple HTML + JavaScript program that displays an alert box with the message "Welcome to JavaScript!" when a button is clicked.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Alert</title>
</head>
<body>

    <button onclick="showMessage()">Click Me</button>

    <script>
        function showMessage() {
            alert("Welcome to JavaScript!");
        }
    </script>

</body>
</html>
```

---

## Q22. Write JavaScript code to demonstrate event-driven programming.

When a user clicks a button with id `"myBtn"`, the text of a paragraph with id `"demo"` should change to `"Button was clicked!"`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Driven Programming</title>
</head>
<body>

    <p id="demo">Hello</p>

    <button id="myBtn">Click Me</button>

    <script>
        document.getElementById("myBtn").onclick = function() {
            document.getElementById("demo").textContent = "Button was clicked!";
        };
    </script>

</body>
</html>
```

---

# Section F: Practical / Application Based

## Q23. Create a complete web page that includes the following:

1. A heading: **"My First JavaScript Page"**
2. A button labeled **"Click Me"**
3. When the button is clicked:

   * Show an alert: **"Hello, B.Tech Student!"**
   * Change the background color of the page to light blue
4. Print **"JavaScript is running successfully!"** in the browser console.

### Complete Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First JavaScript Page</title>
</head>
<body>

    <h1>My First JavaScript Page</h1>

    <button onclick="changePage()">Click Me</button>

    <script>
        console.log("JavaScript is running successfully!");

        function changePage() {
            alert("Hello, B.Tech Student!");
            document.body.style.backgroundColor = "lightblue";
        }
    </script>

</body>
</html>
```

---

# Thank You!
