import reverseNumber from './reverse-number';

export default function nearestPallindrome(inputValue) {
  // check for correct input format
  if (inputValue === null || inputValue === undefined) return null;
  if (typeof inputValue !== 'number') return null;
  if (inputValue % 1 !== 0) return null;

  // if the value is <10  or 10 multiples then return value - 1
  if ((inputValue < 10) || (inputValue % 10 === 0)) { return (inputValue - 1); }

  const inputValueStr = inputValue.toString();
  const lengthInput = inputValueStr.length;

  const leftString = (lengthInput % 2 === 0) ?
    inputValueStr.substr(0, (lengthInput / 2) - 1) : inputValueStr.substr(0, (lengthInput / 2));
  const rightString = reverseNumber(parseInt(leftString, 10));
  let midString = '';
  let midPallindrome = 0;
  let upperPallindrome = 0;
  let lowerPallindrome = 0;
  let upperString = '';
  let lowerString = '';

  if ((lengthInput % 2 === 0)) {
    midString = inputValueStr.substr((lengthInput / 2) - 1, 1);
    upperString = (parseInt(midString, 10) + 1).toString();
    lowerString = (parseInt(midString, 10) - 1).toString();
    midPallindrome = parseInt((leftString + midString + midString + rightString), 10);
    upperPallindrome = parseInt((leftString + upperString + upperString + rightString), 10);
    lowerPallindrome = parseInt((leftString + lowerString + lowerString + rightString), 10);
  } else {
    midString = inputValueStr.substr(parseInt((lengthInput / 2), 10), 1);
    upperString = (parseInt(midString, 10) + 1).toString();
    lowerString = (parseInt(midString, 10) - 1).toString();
    midPallindrome = parseInt((leftString + midString + rightString), 10);
    upperPallindrome = parseInt((leftString + upperString + rightString), 10);
    lowerPallindrome = parseInt((leftString + lowerString + rightString), 10);
  }

  if (midPallindrome < inputValue) {
    return ((inputValue - midPallindrome) > (upperPallindrome - inputValue)) ?
      upperPallindrome : midPallindrome;
  }

  return ((midPallindrome - inputValue) > (inputValue - lowerPallindrome)) ?
    lowerPallindrome : midPallindrome;
}
