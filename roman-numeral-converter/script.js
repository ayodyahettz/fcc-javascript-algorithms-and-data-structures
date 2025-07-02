function toRoman(inputNum) {
    let num = inputNum;
    const romanMap = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];
  
    let result = "";
    for (let { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("convert-btn");
    const input = document.getElementById("number");
    const output = document.getElementById("output");
    const spartaBanner = document.getElementById("sparta-banner");

  
    function handleConversion() {
      const numberInput = input.value;
      const num = Number(numberInput);
  
      if (numberInput === "" || isNaN(num)) {
        output.textContent = "Please enter a valid number";
        spartaBanner.textContent = "";
        return;
      }
      if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        spartaBanner.textContent = "";
      } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        spartaBanner.textContent = "";
      } else if (num === 300){
        //wee little easter egg hehe

            output.textContent = toRoman(num);
            const audio = new Audio("thisissparta.mp3");
            audio.play().catch((err) => {
                console.warn("SPARTA could not play", err);
            });

            spartaBanner.textContent = "THIS. IS. SPARTAAA!!!";
            spartaBanner.classList.add("show");

      }else {
        output.textContent = toRoman(num);
        spartaBanner.textContent = "";
      }
    }
  
    button.addEventListener("click", handleConversion);
  
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleConversion();
      }
    });
  });
  