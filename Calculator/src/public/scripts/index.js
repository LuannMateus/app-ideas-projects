import Calculator from '../../main/calculator.js';

const display = document.querySelector('.display__value');
const displayCalculateValue = document.querySelector(
  '.display__calculate-value'
);
const keyboard = document.querySelectorAll('.keyboard__digit');

let displayValue = [null, '', null];
const operations = ['+', '-', '*', '/'];

const calculator = new Calculator();

keyboard.forEach((keyboard) => {
  keyboard.addEventListener('click', (event) => {
    const digit = event.target.innerText;

    if (digit === 'AC') {
      calculator.clearAll();

      display.innerText = 0;
      displayCalculateValue.innerText = '';
      displayValue = [null, '', null];

      return;
    }

    if (digit === 'C') {
      if (calculator.calculatorState[2] !== null) {
        calculator.clear();

        displayValue[2] = String(displayValue[2])
          .split('')
          .slice(0, -1)
          .join('');

        display.innerText = `${displayValue[0]} ${displayValue[1]} ${displayValue[2]}`;

        const newResult = calculator.handleCalculate() ?? null;

        return (displayCalculateValue.innerText = newResult);
      }

      if (calculator.calculatorState[1] !== '') {
        calculator.clear();

        displayValue[1] = String(displayValue[1])
          .split('')
          .slice(0, -1)
          .join('');

        return (display.innerText = `${displayValue[0]} `);
      }

      if (calculator.calculatorState[0] !== null) {
        if (String(calculator.calculatorState[0]).split('').length === 1) {
          return (display.innerText = '0');
        }

        calculator.clear();

        displayValue[0] = String(displayValue[0])
          .split('')
          .slice(0, -1)
          .join('');

        return (display.innerText = `${displayValue[0]}`);
      }

      return;
    }

    if (digit === '=') {
      if (
        !(
          (calculator.calculatorState[0] && calculator.calculatorState[2]) !==
          null
        )
      ) {
        return;
      }

      const calculateResult = calculator.handleCalculate();

      display.innerText = calculateResult;
      displayCalculateValue.innerText = '';

      calculator.calculatorState[0] = calculateResult;
      calculator.calculatorState[2] = null;
      calculator.calculatorState[1] = '';

      displayValue[0] = calculateResult;
      displayValue[2] = null;

      return;
    }

    if (digit === '.') {
      const sizeOfValueOne = String(calculator.calculatorState[0]).split(
        ''
      ).length;

      const sizeOfValueTwo = String(calculator.calculatorState[2]).split(
        ''
      ).length;

      if (calculator.calculatorState[2] !== null && sizeOfValueTwo >= 1) {
        if (String(calculator.calculatorState[2]).split('').includes('.'))
          return;

        calculator.handleDigit(digit);

        displayValue[0] = calculator.calculatorState[0];
        displayValue[1] = calculator.calculatorState[1];
        displayValue[2] = calculator.calculatorState[2];

        display.innerText = `${displayValue[0]} ${displayValue[1]} ${displayValue[2]}`;
      }

      if (calculator.calculatorState[0] !== null && sizeOfValueOne >= 1) {
        if (String(calculator.calculatorState[0]).split('').includes('.'))
          return;

        calculator.handleDigit(digit);

        displayValue[0] = calculator.calculatorState[0];

        display.innerText = `${displayValue[0]}`;
      }

      return;
    }

    if (operations.includes(digit) && calculator.calculatorState[0] !== null) {
      if (calculator.calculatorState[2] !== null) {
        const calculateResult = calculator.handleCalculate();

        displayCalculateValue.innerText = '';

        calculator.calculatorState[0] = calculateResult;
        calculator.calculatorState[2] = null;
        calculator.handleDigit(digit);

        displayValue[0] = calculateResult;
        displayValue[1] = digit;
        displayValue[2] = null;

        display.innerText = `${displayValue[0]} ${displayValue[1]}`;

        return;
      }

      calculator.handleDigit(digit);

      displayValue[1] = calculator.calculatorState[1];

      return (display.innerText = `${displayValue[0]} ${displayValue[1]}`);
    }

    if (calculator.calculatorState[1] !== '') {
      if (
        calculator.calculatorState[2] !== null &&
        calculator.calculatorState[2].toString().split('').length >= 8
      ) {
        display.innerText = `ERR`;
        return displayCalculateValue.remove();
      }

      calculator.handleDigit(digit);

      displayValue[2] = calculator.calculatorState[2];

      const calculateResult = calculator.handleCalculate();

      display.innerText = `${displayValue[0]} ${displayValue[1]} ${displayValue[2]}`;

      return (displayCalculateValue.innerText = calculateResult);
    }

    if (!operations.includes(digit)) {
      if (
        calculator.calculatorState[0] !== null &&
        calculator.calculatorState[0].toString().split('').length >= 8
      ) {
        return (display.innerText = `ERR`);
      }

      calculator.handleDigit(digit);

      displayValue[0] = calculator.calculatorState[0];

      return (display.innerText = displayValue[0]);
    }
  });
});
