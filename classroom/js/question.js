// 1. Reverse a String Without Using reverse()
let str = "JavaScript";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log("Original String:", str);
console.log("Reversed String:", reverse);

// 2. Function to Check Whether a String Is a Palindrome
function isPalindrome(str) {

    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str === reverse) {
        console.log(str, "is a Palindrome");
    } else {
        console.log(str, "is not a Palindrome");
    }
}

isPalindrome("madam");
isPalindrome("hello");
isPalindrome("level");

// 3. Count the Number of Vowels and Consonants in a String
// let str = "JavaScript Programming";

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    if (ch >= 'a' && ch <= 'z') {

        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Total Vowels:", vowels);
console.log("Total Consonants:", consonants);