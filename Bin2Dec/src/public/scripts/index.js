import ConversionBinToDec from '/main/index.js';

const conversionBinToDec = new ConversionBinToDec();

const display = document.getElementById('display');
const input = document.getElementById('input-binary');
const section = document.querySelector('.main__input-value');

function handleOnKeyDown(event) {
  const value = event.target.value;

  if (value === '') {
    const existError = document.querySelector('.error');
    existError ? existError.remove() : null;

    display.innerHTML = 0;

    return;
  }

  try {
    const existError = document.querySelector('.error');
    existError ? existError.remove() : null;

    const result = conversionBinToDec.convert(value);

    display.innerHTML = result;
  } catch (error) {
    const existElement = !!document.querySelector('.error');

    if (!existElement) {
      const errorElement = document.createElement('p');

      errorElement.className = 'error';
      errorElement.innerHTML = error;

      section.append(errorElement);
    } else {
      return;
    }
  }
}

(function main() {
  input.addEventListener('keyup', handleOnKeyDown);
})();
