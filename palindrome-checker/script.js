document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("text-input");
    const checkButton = document.getElementById("check-btn");
    const resultElement = document.getElementById("result");

    // Function to check if input is a palindrome
    function checkPalindrome() {
        const inputValue = inputElement.value.trim(); // Remove leading/trailing spaces

        if (inputValue === "") {
            alert("Please input a value");
            return;
        }

        if (isPalindrome(inputValue)) {
            resultElement.textContent = `${inputValue} is a palindrome.`;
        } else {
            resultElement.textContent = `${inputValue} is not a palindrome.`;
        }
    }

    // Click event listener for the button
    checkButton.addEventListener("click", checkPalindrome);

    // 'Enter' key event listener using 'keydown'
    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission (if inside a form)
            checkButton.click(); // Simulates a button click
        }
    });
});

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalize input
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}
