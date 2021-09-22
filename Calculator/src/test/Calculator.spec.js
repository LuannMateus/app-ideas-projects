import { expect, describe, test } from '@jest/globals';
import Calculator from '../main/calculator';

describe('#Calculator', () => {
  test('Should enter a number and calculate with all basic operations', () => {
    const calculator = new Calculator();

    calculator.calculatorState[0] = 1;
    calculator.calculatorState[2] = 1;

    calculator.calculatorState[1] = '+';
    expect(calculator.handleCalculate()).toBe(2);

    calculator.calculatorState[1] = '-';
    expect(calculator.handleCalculate()).toBe(0);

    calculator.calculatorState[1] = '*';
    expect(calculator.handleCalculate()).toBe(1);

    calculator.calculatorState[1] = '/';
    expect(calculator.handleCalculate()).toBe(1);
  });

  test('Should place the digit in the correct position', () => {
    const calculator = new Calculator();

    calculator.handleDigit(1);
    calculator.handleDigit(1);

    expect(calculator.calculatorState[0]).toBe('11');

    calculator.handleDigit('+');
    expect(calculator.calculatorState[1]).toBe('+');

    calculator.handleDigit(1);
    expect(calculator.calculatorState[2]).toBe('1');
  });

  test('Should clear the actual state if clear is pressed', () => {
    const calculator = new Calculator();

    calculator.calculatorState[0] = 10;
    calculator.clear();

    expect(calculator.calculatorState[0]).toBe('1');

    calculator.calculatorState[2] = 10;
    calculator.clear();

    expect(calculator.calculatorState[2]).toBe('1');
  });

  test('Should clear all state if clear all is pressed', () => {
    const calculator = new Calculator();

    calculator.calculatorState[0] = 1;
    calculator.calculatorState[2] = 1;
    calculator.clearAll();

    expect(calculator.calculatorState).toEqual([null, '', null]);
  });
});
