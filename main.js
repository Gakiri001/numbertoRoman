console.log('Numeric to Roman')

const number = document.getElementById("number")
const error = document.getElementById("error")
const convertButton = document.getElementById("convert-button")
const output = document.getElementById("output")

function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}


function errorResetInterpretation(){
    output.textContent = "You will see you roman number here";
}

function conversionEngine(){
    const inputNumber = parseInt(number.value,10);

    if (number.value === ""){
        error.textContent = "Please input a value";
        errorResetInterpretation();
        return;
    }
    else if(inputNumber <= 0 || inputNumber >= 4000000){
        error.textContent = "Number should be within 1 to 4,000,000";
        errorResetInterpretation();
        return;
    }
    else{
        error.textContent = "";
        const roman = intToRoman(inputNumber);
        output.innerHTML = ` ${inputNumber} : ${roman}`;
    }
}



convertButton.addEventListener("click", function(){
    console.log("clicked")
    conversionEngine()
    
})

// https://www.calculateme.com/roman-numerals/to-roman/
