// Q1. Write a program to calculate the perimeter of a circle. C=2 PI r
    let r=7;
    const PI=3.1416;
    let C= 2*PI*r;
    console.log("perimeter of a circle = ",C);

// Q2. Write a program to calculate the area of a rectangle.
    let l=10;
    let w=20;
    let area=l*w;
    console.log("area of a rectangle = ",area);

// Q3. Write a program to calculate the perimeter of a rectangle.
    let perimeter_of_rectangle=2*(l+w);
    console.log("perimeter of a rectangle = ",perimeter_of_rectangle);

// Q4. Write a program to calculate the area of a triangle.
    let side_a=10;
    let side_b=20;
    let side_c=25;
    let semi_perimeter=(side_a+side_b+side_c)/2;
    let areaOfTriangle=Math.sqrt(semi_perimeter*(semi_perimeter-side_a)*(semi_perimeter-side_b)*(semi_perimeter-side_c));
    console.log("Area of Triangle = ",areaOfTriangle.toFixed(2));

// Q5. Write a program to calculate the perimeter of a triangle
    let perimeter_of_triangle=side_a+side_b+side_c
    console.log("perimeter of a triangle = ",perimeter_of_triangle);


// Q1. Write a program to calculate the area of a circle.
// Formula: Area = π * r^2
// Hint: Use Math.PI and Math.pow(radius, 2)
let radius = 7;
// Write your code here:



// Q2. Write a program to calculate the area and perimeter of a square.
// Formula: 
//   Area = side * side
//   Perimeter = 4 * side
let squareSide = 8;
// Write your code here:



// Q3. Write a program to calculate the volume and total surface area of a cube.
// Formula: 
//   Volume = a^3
//   Surface Area = 6 * a^2
let cubeSide = 4.5;
// Write your code here:



// Q4. Write a program to calculate the volume of a cylinder.
// Formula: Volume = π * r^2 * h
let cylinderRadius = 5;
let cylinderHeight = 12;
// Write your code here:



// Q5. Write a program to calculate the volume of a sphere.
// Formula: Volume = (4 / 3) * π * r^3
let sphereRadius = 6.2;
// Write your code here:



// Q6. Write a program to calculate the area of a trapezoid (trapezium).
// Formula: Area = ((a + b) / 2) * h
let baseA = 10;
let baseB = 14;
let trapezoidHeight = 8;
// Write your code here:



// Q7. Write a program to calculate the area of a parallelogram.
// Formula: Area = base * height
let pBase = 15.5;
let pHeight = 9.2;
// Write your code here:



// Q8. Write a program to calculate the hypotenuse of a right-angled triangle.
// Formula: c = √(a^2 + b^2)
// Hint: Use Math.sqrt()
let legA = 6;
let legB = 8;
// Write your code here:



// Q9. Write a program to calculate the volume of a cone.
// Formula: Volume = (1 / 3) * π * r^2 * h
let coneRadius = 4;
let coneHeight = 9.5;
// Write your code here:



// Q10. Write a program to calculate Simple Interest (SI) and the Total Amount.
// Formula: 
//   SI = (P * R * T) / 100
//   Total Amount = P + SI
let principal = 10000;
let rate = 7.5; // in percent per annum
let timeInYears = 3;
// Write your code here: