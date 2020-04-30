/* eslint-disable import/extensions */
import Big from 'big.js';

function operate({ numberOne, numberTwo, operation }) {
  let total;
  const opertionCalc = ['+', '-', 'x', '÷', '%'];

  switch (operation) {
    case opertionCalc[0]:
      total = Big(numberOne).plus(numberTwo);
      break;
    case opertionCalc[1]:
      total = Big(numberOne).minus(numberTwo);
      break;
    case opertionCalc[2]:
      total = Big(numberOne).times(numberTwo);
      break;
    case opertionCalc[3]:
      total = Big(numberOne).div(numberTwo);
      break;
    case opertionCalc[4]:
      total = Big(numberOne) / 100;
      break;
    default:
      break;
  }

  return (
    { total }
  );
}

export default operate;
