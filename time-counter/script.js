const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const MAX_CHARS = 50;

textInput.addEventListener("input", () => {
let text = textInput.value;

if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS);
    textInput.value = text;
}

const length = text.length;

charCount.textContent = `Character Count: ${length}/${MAX_CHARS}`;

if (length >= MAX_CHARS) {
    charCount.classList.add("red");
} else {
    charCount.classList.remove("red");
}
});