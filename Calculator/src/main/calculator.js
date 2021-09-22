export default class Calculator {
  constructor() {
    this.calculatorState = [null, '', null];
  }

  sum() {
    return this.calculatorState[0] + this.calculatorState[2];
  }

  subtraction() {
    return this.calculatorState[0] - this.calculatorState[2];
  }

  multiplication() {
    return this.calculatorState[0] * this.calculatorState[2];
  }

  division() {
    return this.calculatorState[0] / this.calculatorState[2];
  }

  handleDigit(digit) {
    if (['+', '-', '*', '/'].includes(digit)) {
      return (this.calculatorState[1] = String(digit));
    }

    if (this.calculatorState[0] !== null && this.calculatorState[1] !== '') {
      if (digit === '.' && this.calculatorState[2] === null) {
        return;
      }

      if (this.calculatorState[2] === null) {
        return (this.calculatorState[2] = String(digit));
      }

      return (this.calculatorState[2] = String(this.calculatorState[2]).concat(
        digit
      ));
    }

    if (digit === '.' && this.calculatorState[0] === null) {
      return;
    }

    if (this.calculatorState[0] === null) {
      return (this.calculatorState[0] = digit);
    }

    this.calculatorState[0] = String(this.calculatorState[0]).concat(digit);

    return;
  }

  handleCalculate() {
    const isValidToCalculate = !!(
      this.calculatorState[0] &&
      this.calculatorState[1] &&
      this.calculatorState[2]
    );

    if (isValidToCalculate) {
      if (this.calculatorState[1] === '+') return this.sum();
      else if (this.calculatorState[1] === '-') return this.subtraction();
      else if (this.calculatorState[1] === '*') return this.multiplication();
      else if (this.calculatorState[1] === '/') return this.division();
      else return;
    }
  }

  clear() {
    if (this.calculatorState[2] !== null) {
      const result = String(this.calculatorState[2])
        .split('')
        .slice(0, -1)
        .join('');

      return result === ''
        ? (this.calculatorState[2] = null)
        : (this.calculatorState[2] = result);
    }

    if (this.calculatorState[1] !== '') {
      return (this.calculatorState[1] = String(this.calculatorState[1])
        .split('')
        .slice(0, -1)
        .join(''));
    }

    if (this.calculatorState[0] !== null) {
      const result = (this.calculatorState[0] = String(this.calculatorState[0])
        .split('')
        .slice(0, -1)
        .join(''));

      result === ''
        ? (this.calculatorState[0] = null)
        : (this.calculatorState[0] = result);

      return null;
    }
  }

  clearAll() {
    this.calculatorState = [null, '', null];
  }
}
