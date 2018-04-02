export function compareHelper(x, y) {
  const xyCombination = x.toString() + y.toString();
  const yxCombination = y.toString() + x.toString();
  return xyCombination.localeCompare(yxCombination) > 0 ? 1 : 0;
}

export default function biggestNumberFromArray(inputArray) {
  if (!Array.isArray(inputArray)) return null;
  const sortedArray = inputArray.sort((a, b) => compareHelper(a, b)).reverse();
  return sortedArray.join('');
}

