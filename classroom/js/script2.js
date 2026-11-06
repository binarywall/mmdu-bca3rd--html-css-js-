// Q1. Write a program to print the numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++){
    console.log(i);
}

// Q2. Write a program to print the even numbers between 1 and 20 using a for loop.
for(let i=1;i<=20;i++){
    if(i%2==0) console.log(i);
}

// Q3. Write a program to print the odd numbers between 1 and 20 using a for loop.
for(let i=1;i<=20;i++){
    if(i%2!=0) console.log(i);
}
// Q4. Write a program to print the sum of numbers from 1 to 10 using a for loop.
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i
}
console.log("sum = ",sum);

// Q5. Write a program to print the product of numbers from 1 to 10 using a for loop.
let product=1;
for(let i=1;i<=10;i++){
    product*=i
}
console.log("product = ",product);

// Q6. Write a program to find the factorial of a given number using a for loop.
let n=5;
let factorial=1;
for(let i=n;i>=1;i--){
    factorial*=i;
}
console.log("factorial = ",factorial)

// Q7. Write a program to print the Fibonacci series up to a given number using a for loop.
let seriesCount=10;
let a=0;
let b=1;
for(let i=1;i<=seriesCount;i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}


// Q8. Write a program to check if a given number is a prime number using a for loop.
let givenNumber=13;
let isPrime=true;
for(let i=2;i<=givenNumber/2;i++){
    if(givenNumber%i==0){
        isPrime=false;
        break;
    }
}
console.log(isPrime?"Given no is Prime No":"Given no is not a Prime No");

// Q9. Write a program to check if a given number is a perfect number using a for loop.
let number=6;
let sumOfNumber=0;
for(let i=1;i<=number/2;i++){
    if(number%i==0){
        sumOfNumber+=i;
    }
}
if(sumOfNumber==number){console.log("Perfect No = ",number)}
else {console.log("Not a perfect No = ",number)}

// Q10. Write a program to find the sum of digits of a given number using a while loop
let number1=154;
let sumOfDigit=0;
for(let i=number1;i>0;i=Math.floor(i/10)){
    sumOfDigit+=i%10;
}
console.log("Sum of Digit = ",sumOfDigit)

// P.16 
console.log("===== STUDENT RESULT SYSTEM =====");

// 1. VARIABLES
let studentName = "Rahul";
let age = 20;
let marks = 85;
let attendance = 90;
const totalMarks = 100;

// 2. DATA TYPES
console.log("\n--- Student Details ---");
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Attendance:", attendance);
console.log("Total Marks:", totalMarks);

console.log("Type of Name:", typeof studentName);
console.log("Type of Age:", typeof age);
console.log("Type of Marks:", typeof marks);

// 3. OPERATORS
console.log("\n--- Operators ---");

let n1 = 20;
let n2 = 10;

console.log("Addition:", n1 + n2);
console.log("Subtraction:", n1 - n2);
console.log("Multiplication:", n1 * n2);
console.log("Division:", n1 / n2);
console.log("Remainder:", n1 % n2);

console.log("Marks greater than 40:", marks > 40);
console.log("Age equal to 20:", age === 20);

let hasPaidFees = true;
let isEligible = marks >= 40 && hasPaidFees;

console.log("Eligible:", isEligible);

// 4. CONDITIONAL STATEMENTS
console.log("\n--- Grade Calculation ---");

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Result: Fail");
}

// 5. FOR LOOP
console.log("\n--- Numbers from 1 to 10 ---");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 6. WHILE LOOP
console.log("\n--- Even Numbers from 1 to 10 ---");

let num = 1;

while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// 7. DO-WHILE LOOP
console.log("\n--- Countdown ---");

let count = 5;

do {
    console.log(count);
    count--;
} while (count >= 1);

// 8. SUM USING A LOOP
console.log("\n--- Sum of Numbers ---");

let sumUsingLoop = 0;

for (let i = 1; i <= 10; i++) {
    sumUsingLoop += i;
}

console.log("Sum from 1 to 10:", sum);

// 9. FINAL RESULT
console.log("\n--- Final Student Report ---");

console.log("Student:", studentName);
console.log("Percentage:", (marks / totalMarks) * 100 + "%");
console.log("Attendance:", attendance + "%");

if (marks >= 40 && attendance >= 75) {
    console.log("Status: Eligible for Examination");
} else {
    console.log("Status: Not Eligible for Examination");
}