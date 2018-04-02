import reverseNumber from "./reverse-number";

describe("reverse-number", () => {
  test("should return '' if the value is ''/undefined/non number value", () => {
    expect(reverseNumber(undefined)).toEqual('');
    expect(reverseNumber("")).toEqual('');
    expect(reverseNumber("hello")).toEqual('');
    expect(reverseNumber(true)).toEqual('');
    expect(reverseNumber(false)).toEqual('');
    expect(reverseNumber({})).toEqual('');
    expect(reverseNumber([])).toEqual('');
    expect(reverseNumber(null)).toEqual('');
  });
  test("should return '' if the value is float", () => {
    expect(reverseNumber(10.22)).toEqual('');
  });
  test("should return the reverse of the number given", () => {
    expect(reverseNumber(2)).toEqual("2");
    expect(reverseNumber(1432)).toEqual("2341");
    expect(reverseNumber(2231)).toEqual("1322");
    expect(reverseNumber(1111)).toEqual("1111");
  })
});