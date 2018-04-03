export function swapElements(index1, index2, inputArr) {
  const tmpValue = inputArr[index1];
  const arrayValue = inputArr;
  arrayValue[index1] = arrayValue[index2];
  arrayValue[index2] = tmpValue;
}

export default function selectionSort(inputArr) {
  if (!Array.isArray(inputArr)) return '';
  const arrayLength = inputArr.length;
  let minimumIndex;
  for (let i = 0; i < arrayLength; i += 1) {
    minimumIndex = i;
    for (let j = (i + 1); j < arrayLength; j += 1) {
      if (inputArr[j] < inputArr[minimumIndex]) swapElements(minimumIndex, j, inputArr);
    }
  }
  return inputArr;
}
