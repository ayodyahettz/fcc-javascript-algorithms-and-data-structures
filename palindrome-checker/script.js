document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("check-btn").addEventListener("click", function () {
        const inputElement = document.getElementById("text-input");
        const resultElement = document.getElementById("result");
        const inputValue = inputElement.value.trim(); // Remove leading/trailing spaces

        if (inputValue === "") {
            alert("Please input a value");
            return;
        }

        if (isPalindrome(inputValue)) {
            resultElement.textContent = `'${inputValue}' is a palindrome.`;
        } else {
            resultElement.textContent = `'${inputValue}' is not a palindrome.`;
        }
});

    });

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Normalize by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}
