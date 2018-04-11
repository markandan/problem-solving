import bubbleSort from "./bubble-sort";

describe("bubble-sort", () => {
  test("should return '' if the value is ''/undefined/non Array value", () => {
    expect(bubbleSort(undefined)).toEqual('');
    expect(bubbleSort("")).toEqual('');
    expect(bubbleSort("hello")).toEqual('');
    expect(bubbleSort(true)).toEqual('');
    expect(bubbleSort(false)).toEqual('');
    expect(bubbleSort({})).toEqual('');
    expect(bubbleSort(12)).toEqual('');
    expect(bubbleSort(12.22)).toEqual('');
    expect(bubbleSort(null)).toEqual('');
  });
  test("should return the sortedArray based on the input", () => {
    expect(bubbleSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
  })
});