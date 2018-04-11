import nearestPallindrome from "./nearest-pallindrome";

describe("nearest-pallindrome", () => {
  test("should return the value - 1 when the value is less than 10", () => {
    expect(nearestPallindrome(5)).toEqual(4);
  });
  test("should return null if the value is null/undefined/non number value", () => {
    expect(nearestPallindrome(undefined)).toEqual(null);
    expect(nearestPallindrome("")).toEqual(null);
    expect(nearestPallindrome("hello")).toEqual(null);
    expect(nearestPallindrome(true)).toEqual(null);
    expect(nearestPallindrome(false)).toEqual(null);
    expect(nearestPallindrome({})).toEqual(null);
    expect(nearestPallindrome([])).toEqual(null);
    expect(nearestPallindrome(null)).toEqual(null);
  });
  test("should return null if the value is float", () => {
    expect(nearestPallindrome(10.22)).toEqual(null);
  });

  test("should return value - 1 if the value is multiplied by 10", () => {
    expect(nearestPallindrome(10)).toEqual(9);
    expect(nearestPallindrome(100)).toEqual(99);
    expect(nearestPallindrome(1000)).toEqual(999);
  });
  test("should return closet pallingdrome number for a 2 digit number", () => {
    expect(nearestPallindrome(9221)).toEqual(9229);
    expect(nearestPallindrome(29)).toEqual(33);
    expect(nearestPallindrome(25)).toEqual(22);    
    expect(nearestPallindrome(127)).toEqual(131);
    expect(nearestPallindrome(125)).toEqual(121);
    expect(nearestPallindrome(91)).toEqual(88);
    expect(nearestPallindrome(911)).toEqual(909);
    expect(nearestPallindrome(109)).toEqual(111);
    expect(nearestPallindrome(102)).toEqual(101);
    expect(nearestPallindrome(101)).toEqual(99);
  });
});