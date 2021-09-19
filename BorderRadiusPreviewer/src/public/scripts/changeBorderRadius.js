export function changeBorderRadius(element, rangeValues) {
  element.setAttribute(
    'style',
    `border-radius: 
      ${rangeValues.topLeftValue}% 
      ${rangeValues.topRightValue}% 
      ${rangeValues.bottomLeftValue}% 
      ${rangeValues.bottomRightValue}%`
  );
}
