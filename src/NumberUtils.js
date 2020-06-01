class NumberUtils {
  constructor() {
    // this line is used for fixing eslint error: useless constructor
    console.log('');
  }

  convertNumberFromDecimalToBinary(number) {
    return number.toString(2);
  }

  convertNumberFromDecimalToOctal(number) {
    return number.toString(8);
  }
}

module.exports = NumberUtils;
