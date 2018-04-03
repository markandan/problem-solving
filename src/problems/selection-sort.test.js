import selectionSort from "./selection-sort";

describe("selection-sort", () => {
  test("should return '' if the value is ''/undefined/non Array value", () => {
    expect(selectionSort(undefined)).toEqual('');
    expect(selectionSort("")).toEqual('');
    expect(selectionSort("hello")).toEqual('');
    expect(selectionSort(true)).toEqual('');
    expect(selectionSort(false)).toEqual('');
    expect(selectionSort({})).toEqual('');
    expect(selectionSort(12)).toEqual('');
    expect(selectionSort(12.22)).toEqual('');
    expect(selectionSort(null)).toEqual('');
  });
  test("should return the sortedArray based on the input", () => {
    expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
  })
});