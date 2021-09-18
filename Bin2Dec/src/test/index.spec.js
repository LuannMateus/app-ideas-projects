import { describe, test, expect } from '@jest/globals';
import ConversionBinToDec from '../main/index.js';

describe('#ConversionBinToDec', () => {
  test('Should throw an error if an array is passed', () => {
    const conversionBinToDec = new ConversionBinToDec();

    const invalidArgument = [];

    expect(() => {
      conversionBinToDec.convert(invalidArgument);
    }).toThrow(new Error('The value is not a binary!'));
  });

  test('Should throw an error if the parameter value is greater than 8 digits or less than 0 digits', () => {
    const conversionBinToDec = new ConversionBinToDec();

    const invalidArgument = '123456789';

    expect(() => {
      conversionBinToDec.convert(invalidArgument);
    }).toThrow(
      new Error(
        'The value must not be less than 1 digit or greater than 8 digits!'
      )
    );
  });

  test('Should throw an error if the parameter value is different from 0 or 1', () => {
    const conversionBinToDec = new ConversionBinToDec();

    const invalidArgument = '0112';

    expect(() => {
      conversionBinToDec.convert(invalidArgument);
    }).toThrow(new Error('The binary is invalid!'));
  });

  test('Should return value converted from binary to decimal', () => {
    const conversionBinToDec = new ConversionBinToDec();

    const validArgument = '1100';

    const convertedDecimal = conversionBinToDec.convert(validArgument);

    expect(convertedDecimal).toBe(12);
  });
});
