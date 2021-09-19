import { changeBorderRadius } from './changeBorderRadius.js';

const rangeValues = {
  topLeftValue: 0,
  topRightValue: 0,
  bottomLeftValue: 0,
  bottomRightValue: 0,
};

const squareElement = document.querySelector('.main__square');
const clipboardInput = document.querySelector('.clipboard__input');
const copyButton = document.querySelector('.clipboard__button');
const inputCopyTooltip = document.querySelector('#myTooltip');
const rangeInputs = {
  topLeft: document.querySelector('#border-top-left'),
  topRight: document.querySelector('#border-top-right'),
  bottomLeft: document.querySelector('#border-bottom-left'),
  bottomRight: document.querySelector('#border-bottom-right'),
};

function updateClipboardView(inputView, rangeValues) {
  inputView.value = `
    ${rangeValues.topLeftValue}%  / 
    ${rangeValues.topRightValue}%  / 
    ${rangeValues.bottomLeftValue}%  / 
    ${rangeValues.bottomRightValue}%`;
}

function copyToClipboard(clipboardInput, inputCopyTooltip) {
  clipboardInput.select();
  clipboardInput.setSelectionRange(0, 99999); // To mobile

  const valueToCopy = String(clipboardInput.value).replace(
    /[\[\].!'@,><|://\\;&*()_+=]/g,
    ''
  );

  navigator.clipboard.writeText(valueToCopy);

  inputCopyTooltip.innerHTML = 'Copied';
}

rangeInputs.topLeft.addEventListener('input', (event) => {
  rangeValues.topLeftValue = event.target.value;

  updateClipboardView(clipboardInput, rangeValues);

  changeBorderRadius(squareElement, rangeValues);
});

rangeInputs.topRight.addEventListener('input', (event) => {
  rangeValues.topRightValue = event.target.value;

  updateClipboardView(clipboardInput, rangeValues);

  changeBorderRadius(squareElement, rangeValues);
});

rangeInputs.bottomLeft.addEventListener('input', (event) => {
  rangeValues.bottomLeftValue = event.target.value;

  updateClipboardView(clipboardInput, rangeValues);

  changeBorderRadius(squareElement, rangeValues);
});

rangeInputs.bottomRight.addEventListener('input', (event) => {
  rangeValues.bottomRightValue = event.target.value;

  updateClipboardView(clipboardInput, rangeValues);

  changeBorderRadius(squareElement, rangeValues);
});

copyButton.addEventListener('mouseenter', () => {
  inputCopyTooltip.innerHTML = 'Copy to clipboard';
});

copyButton.addEventListener('click', () =>
  copyToClipboard(clipboardInput, inputCopyTooltip)
);
