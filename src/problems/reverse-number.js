export default function reverseNumber(inputValue) {
  // check for correct input format
  if (inputValue === null || inputValue === undefined) return '';
  if (typeof inputValue !== 'number') return '';
  if (inputValue % 1 !== 0) return '';

  let reverseNumberStr = '';
  let input = inputValue;
  let lengthInput = inputValue.toString().length;
  while (lengthInput > 0) {
    reverseNumberStr += (input % 10).toString();
    input = parseInt(input / 10, 10);
    lengthInput -= 1;
  }
  return reverseNumberStr;
}
