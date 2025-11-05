const toBinary = require("./script");

//1. toBinary(5) should return "101".
//2. toBinary(12) should return "1100".
//3. toBinary(50) should return "110010".
//4. toBinary(99) should return "1100011".

test("toBinary 1", () => expect(toBinary(5)).toBe("101"));

test("toBinary 2", () => expect(toBinary(12)).toBe("1100"));

test("toBinary 3", () => expect(toBinary(50)).toBe("110010"));

test("toBinary 4", () => expect(toBinary(99)).toBe("1100011"));
