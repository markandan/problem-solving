import biggestNumberFromArray, { compareHelper } from "./biggest-number-from-array";

describe ("biggest-number-from-array", () => {
  test("return null if the value is not an array", () => {
    expect(biggestNumberFromArray(undefined)).toEqual(null);
    expect(biggestNumberFromArray("")).toEqual(null);
    expect(biggestNumberFromArray("hello")).toEqual(null);
    expect(biggestNumberFromArray(true)).toEqual(null);
    expect(biggestNumberFromArray(false)).toEqual(null);
    expect(biggestNumberFromArray({})).toEqual(null);
    expect(biggestNumberFromArray(121)).toEqual(null);
    expect(biggestNumberFromArray(121.23)).toEqual(null);
    expect(biggestNumberFromArray(null)).toEqual(null);
  });
  test("return biggest number from an array", () => {
    expect(biggestNumberFromArray([54, 546, 548, 60])).toEqual("6054854654");
    expect(biggestNumberFromArray([1, 34, 3, 98, 9, 76, 45, 4])).toEqual("998764543431");
  });
  test("compare helper to return bigger of the combinations xy or yx", () => {
    expect(compareHelper(12, 22)).toEqual(0);
    expect(compareHelper(12, 11)).toEqual(1);
    expect(compareHelper(548, 60)).toEqual(0);
    expect(compareHelper(60, 54)).toEqual(1);
  });
  
})