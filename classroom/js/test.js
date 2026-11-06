function checkPasswordStrength(password) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let special = "!@#$%^&*()-_+=";

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (upper.includes(ch)) {
            hasUpper = true;
        } else if (lower.includes(ch)) {
            hasLower = true;
        } else if (digits.includes(ch)) {
            hasDigit = true;
        } else if (special.includes(ch)) {
            hasSpecial = true;
        }
    }

    if (
        password.length >= 8 &&
        hasUpper &&
        hasLower &&
        hasDigit &&
        hasSpecial
    ) {
        return "Strong Password";
    }

    let errors = [];

    if (password.length < 8)
        errors.push("Minimum 8 characters required");

    if (!hasUpper)
        errors.push("Add an uppercase letter");

    if (!hasLower)
        errors.push("Add a lowercase letter");

    if (!hasDigit)
        errors.push("Add a digit");

    if (!hasSpecial)
        errors.push("Add a special character");

    return "Weak Password: " + errors.join(", ");
}

// Function calls
console.log(checkPasswordStrength("Raj@1234"));
console.log(checkPasswordStrength("raj12345"));

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count === 1) {
            console.log(arr[i]);
        }
    }
}

findUnique([10, 20, 10, 30, 40, 20, 50]);