/* eslint-disable no-unused-vars */
import operate from "./operate";

function calculate(dataCalc, buttonCalc) {
  let { total, next, operation } = dataCalc;
  let t = 0;
  if (total != null) {
    t = total.split("");
  }

  const errorMesg = ["It's not a number", "Something is wrong click the AC"];

  let countpont = 0;
  function countpontFunc(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === ".") {
        countpont += 1;
      }
    }
  }

  switch (buttonCalc) {
    case "AC":
      next = null;
      total = null;
      operation = null;
      break;
    case "+/-":
      total = (parseFloat(total) * -1).toString();
      break;
    case "%":
      next = total;
      total = null;
      operation = buttonCalc;
      total = operate(total, next, operation).total.toString();
      next = total;
      break;
    case "+":
    case "-":
    case "x":
    case "÷":
      countpontFunc(t);
      if (countpont > 1) {
        // eslint-disable-next-line no-console
        console.error(errorMesg[0]);
        next = null;
        total = null;
        operation = null;
        break;
      }
      next = total;
      total = null;
      operation = buttonCalc;
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      if (total == null) {
        total = buttonCalc;
      } else {
        total += buttonCalc;
      }
      break;
    case "=":
      countpontFunc(t);
      if (countpont > 1) {
        // eslint-disable-next-line no-console
        console.error(errorMesg[0]);
        next = null;
        total = null;
        operation = null;
        break;
      }

      if (operate != null && next != null && total != null) {
        total = operate(total, next, operation).total.toString();
        next = total;
      }
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(errorMesg[1]);
      break;
  }

  return { total, next, operation };
}

export default calculate;
