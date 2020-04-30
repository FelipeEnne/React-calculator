import operate from './operate';


function calculate(dataCalc, buttonCalc) {
  let { total, next, operation } = dataCalc;

  switch (buttonCalc) {
    case 'AC':
      next = null;
      total = null;
      operation = null;
      break;
    case '+/-':
      total = (parseFloat(total) * -1).toString();
      break;
    case '%':
      next = total;
      total = null;
      operation = buttonCalc;
      total = operate(total, next, operation).total.toString();
      next = total;
      break;
    case '+': case '-': case 'x': case '÷':
      next = total;
      total = null;
      operation = buttonCalc;
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.':
      if (total == null) {
        total = buttonCalc;
      } else {
        total += buttonCalc;
      }
      break;
    case '=':
      if (operate != null) {
        total = operate(total, next, operation).total.toString();
        next = total;
      }
      break;
    default:
      break;
  }

  return (
    { total, next, operation }
  );
}

export default calculate;
