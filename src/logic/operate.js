import Big from "big.js";

function operate(numberOne, numberTwo, operation) {
  let total;
  const opertionCalc = ["+", "-", "x", "÷", "%"];
  let x = 0;
  let y = 0;

  if (numberOne != null) {
    x = Big(numberOne);
  }

  if (numberTwo != null) {
    y = Big(numberTwo);
  }

  switch (operation) {
    case opertionCalc[0]:
      total = x.plus(y);
      break;
    case opertionCalc[1]:
      total = y.minus(x);
      break;
    case opertionCalc[2]:
      total = x.times(y);
      break;
    case opertionCalc[3]:
      if (numberOne === "0") {
        total = "INFINITY";
        break;
      }
      total = y.div(x);
      break;
    case opertionCalc[4]:
      total = y / 100;
      break;
    default:
      break;
  }

  return { total };
}

export default operate;
