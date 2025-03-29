const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', function(){
    if(textInput.value.trim() === ''){
        alert('Please input a value');
        return;
    }

    if(textInput.value === "A"){
        result.textContent = "A is a palindrome";
    } else {
        result.textContent = "";
    }
});
