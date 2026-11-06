// ==========================================
// 1. TYPES OF FUNCTIONS
// ==========================================

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Raj"));


// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));


// 3. Anonymous Function
setTimeout(function () {
    console.log("Anonymous function executed");
}, 1000);


// 4. Arrow Function
const square = n => n * n;
console.log(square(5));


// 5. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed immediately");
})();


// 6. Callback Function
function processData(callback) {
    callback("JavaScript");
}

processData(function (value) {
    console.log("Learning " + value);
});


// 7. Higher-Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, (x, y) => x + y));


// 8. Recursive Function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));


// 9. Object Method
const student = {
    name: "Raj",
    greet: function () {
        return `Hello, ${this.name}`;
    }
};
console.log(student.greet());


// ==========================================
// 2. TYPES OF PARAMETERS AND ARGUMENTS
// ==========================================

// 1. No Arguments
function sayHello() {
    console.log("Hello Students");
}
sayHello();


// 2. Positional Arguments
function subtract(a, b) {
    return a - b;
}
console.log(subtract(20, 10));


// 3. Default Parameters
function welcome(name = "Student") {
    return `Welcome ${name}`;
}
console.log(welcome());
console.log(welcome("Aman"));


// 4. Multiple Parameters
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 3, 4));


// 5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(10, 20, 30, 40));


// 6. Passing an Array as Argument
function displayArray(arr) {
    console.log(arr);
}
displayArray([10, 20, 30]);


// 7. Passing an Object as Argument
function displayStudent(student) {
    console.log(student.name, student.age);
}
displayStudent({ name: "Raj", age: 20 });


// 8. arguments Object (Regular Function)
function showArguments() {
    console.log(arguments);
}
showArguments(10, 20, 30);


// ==========================================
// 3. STRINGS AND STRING METHODS
// ==========================================

let str = "  JavaScript Is Fun  ";

console.log("Original:", str);

// Length
console.log(str.length);

// Case Conversion
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Remove Spaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Character Access
console.log(str.charAt(2));
console.log(str[2]);

// Searching
console.log(str.indexOf("Script"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Java"));
console.log(str.startsWith("  Java"));
console.log(str.endsWith("Fun  "));

// Extracting
console.log(str.slice(2, 12));
console.log(str.substring(2, 12));

// Replacing
console.log(str.replace("Fun", "Powerful"));
console.log("apple apple".replaceAll("apple", "orange"));

// Splitting
console.log("HTML,CSS,JavaScript".split(","));

// Repeating
console.log("JS ".repeat(3));

// Concatenation
console.log("Hello".concat(" ", "World"));

// Check String Content
console.log("123".includes("2"));

// Template Literals
let name = "Raj";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);


// ==========================================
// 4. ARRAYS AND ARRAY METHODS
// ==========================================

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);

// Accessing Elements
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Adding Elements
numbers.push(60);       // Add at end
numbers.unshift(5);     // Add at beginning
console.log(numbers);

// Removing Elements
numbers.pop();          // Remove from end
numbers.shift();        // Remove from beginning
console.log(numbers);

// slice() - Does not modify original array
console.log(numbers.slice(1, 3));

// splice() - Modifies original array
numbers.splice(1, 2, 99);
console.log(numbers);

// Searching
console.log(numbers.indexOf(99));
console.log(numbers.includes(30));

// Iteration
numbers.forEach(function (value) {
    console.log(value);
});

// map()
console.log(numbers.map(n => n * 2));

// filter()
console.log(numbers.filter(n => n > 25));

// reduce()
console.log(numbers.reduce((sum, n) => sum + n, 0));

// find()
console.log(numbers.find(n => n > 30));

// findIndex()
console.log(numbers.findIndex(n => n > 30));

// sort()
let values = [40, 10, 30, 20];
console.log([...values].sort((a, b) => a - b));

// reverse()
console.log([...values].reverse());

// join()
console.log(values.join(" - "));

// Check Array
console.log(Array.isArray(numbers));


// ==========================================
// 5. OBJECTS - CREATE, READ, UPDATE, DELETE
// ==========================================

// CREATE
let studentObj = {
    name: "Raj",
    age: 20,
    course: "BCA"
};

console.log(studentObj);


// READ
console.log(studentObj.name);
console.log(studentObj["age"]);


// UPDATE
studentObj.age = 21;
studentObj.course = "MCA";

console.log(studentObj);


// CREATE A NEW PROPERTY
studentObj.city = "Mohali";

console.log(studentObj);


// DELETE A PROPERTY
delete studentObj.city;

console.log(studentObj);


// Access All Keys
console.log(Object.keys(studentObj));

// Access All Values
console.log(Object.values(studentObj));

// Access Key-Value Pairs
console.log(Object.entries(studentObj));

// Check Property
console.log(studentObj.hasOwnProperty("name"));


// Loop Through Object
for (let key in studentObj) {
    console.log(key, studentObj[key]);
}


// Object Destructuring
const { name: studentName, age: studentAge } = studentObj;

console.log(studentName);
console.log(studentAge);


// ==========================================
// 6. POPUP DIALOG BOXES
// ==========================================

// 1. Alert Box
alert("Welcome to JavaScript!");


// 2. Confirm Box
let answer = confirm("Do you want to continue?");

if (answer) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}


// 3. Prompt Box
let userName = prompt("Enter your name:");

if (userName !== null) {
    console.log("Hello " + userName);
} else {
    console.log("User cancelled the prompt");
}


// Prompt with Default Value
let city = prompt("Enter your city:", "Mohali");

if (city !== null) {
    console.log("Your city is " + city);
}