export function swapElements(index1, index2, inputArr) {
  const tmpValue = inputArr[index1];
  const arrayValue = inputArr;
  arrayValue[index1] = arrayValue[index2];
  arrayValue[index2] = tmpValue;
}

export default function bubbleSort(inputArr) {
  if (!Array.isArray(inputArr)) return '';
  const arrayLength = inputArr.length;
  for (let i = 0; i < arrayLength - 1; i += 1) {
    for (let j = 0; j < arrayLength - i - 1; j += 1) {
      if (inputArr[j] > inputArr[j + 1]) swapElements(j + 1, j, inputArr);
    }
  }
  return inputArr;
}
