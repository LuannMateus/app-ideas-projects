export default class ConversionBinToDec {
  convert(binary) {
    if (typeof binary !== 'string')
      throw new Error('The value is not a binary!');

    if (binary.length <= 0 || binary.length > 8)
      throw new Error(
        'The value must not be less than 1 digit or greater than 8 digits!'
      );

    const isBinaryInvalid = !binary
      .split('')
      .every((digit) => digit.includes('0') || digit.includes('1'));

    if (isBinaryInvalid) throw new Error('The binary is invalid!');

    const parseBinaryToArray = binary.split('').reverse();

    const result = parseBinaryToArray.reduce((acc, act, index) => {
      return (acc += parseInt(act) * Math.pow(2, index));
    }, 0);

    return result;
  }
}
