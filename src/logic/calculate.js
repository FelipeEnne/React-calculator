/* eslint-disable no-unused-vars */
import operate from './operate';


function calculate({ dataCalc, buttonCalc }) {
  let { total, next, operation } = dataCalc;
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const opertionCalc = ['+', '-', 'x', '÷', '%'];

  switch (buttonCalc) {
    case 'AC':
      [total, next, operation] = ['0', null, null];
      break;
    case '+/-':
      total = (parseFloat(total) * -1).toString();
      break;
    case opertionCalc.includes(buttonCalc):
      [total, next, operation] = [next, null, buttonCalc];
      break;
    case number.includes(buttonCalc):
      total = total ? total = buttonCalc : total += buttonCalc;
      break;
    case '=':
      total = dataCalc;
      next = total;
      break;
    default:
      break;
  }

  return (
    { total, next, operation }
  );
}

export default calculate;
