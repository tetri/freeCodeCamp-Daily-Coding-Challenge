const hexToDecimal = require("./script");

//1. hexToDecimal("A") should return 10.
//2. hexToDecimal("15") should return 21.
//3. hexToDecimal("2E") should return 46.
//4. hexToDecimal("FF") should return 255.
//5. hexToDecimal("A3F") should return 2623.

test("hexToDecimal 1", () => expect(hexToDecimal("A")).toStrictEqual(10));

test("hexToDecimal 2", () => expect(hexToDecimal("15")).toStrictEqual(21));

test("hexToDecimal 3", () => expect(hexToDecimal("2E")).toStrictEqual(46));

test("hexToDecimal 4", () => expect(hexToDecimal("FF")).toStrictEqual(255));

test("hexToDecimal 5", () => expect(hexToDecimal("A3F")).toStrictEqual(2623));
