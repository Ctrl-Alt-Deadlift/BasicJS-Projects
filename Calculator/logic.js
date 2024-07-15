const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {


  try {

    let expression = display.value;
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/%/g, '/100');
    display.value = eval(expression);


  }

  catch (error) {
    display.value = "ERROR";
  }

}
