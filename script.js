let btton = document.getElementsByClassName("buttons");
let display = document
  .getElementsByClassName("screen")[0]
  .querySelector(".scElement");
let operator = "";
let operand1 = "";
let operand2 = "";
console.log(btton);
let secondopr = false;

for (let i = 0; i < btton.length; i++) {
  btton[i].addEventListener("click", function () {
    let value = this.getAttribute("data-value");
    if (value === "=") {
      display.innerText = eval(operand1 + operator + operand2);
      operator = "";
      operand1 = display.innerText;
      operand2 = "";
      secondopr = true;
    } else if (value === "+") {
      operator = "+";
      secondopr = true;
    } else if (value === "-") {
      operator = "-";
      secondopr = true;
    } else if (value === "*") {
      operator = "*";
      secondopr = true;
    } else if (value === "/") {
      operator = "/";
      secondopr = true;
    } else if (value === "%") {
      operator = "%";
      secondopr = true;
    } else if (value === "-/+") {
      if (secondopr == false) {
        operand1 = operand1 * -1;
        display.innerText = operand1;
      } else if (secondopr == true) {
        operand2 = operand2 * -1;
        display.innerText = operand2;
      }
    } else if (value === "ac") {
      display.innerText = "";
      operator = "";
      operand1 = "";
      operand2 = "";
      secondopr = false;
    } else {
      if (secondopr == false) {
        operand1 += value;
        display.innerText = operand1;
      } else if (secondopr == true) {
        operand2 += value;
        display.innerText = operand2;
      }
    }
  });
}
