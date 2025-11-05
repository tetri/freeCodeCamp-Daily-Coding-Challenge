const checkStrength = require('./script');

//1. checkStrength("123456") should return "weak".
//2. checkStrength("pass!!!") should return "weak".
//3. checkStrength("Qwerty") should return "weak".
//4. checkStrength("PASSWORD") should return "weak".
//5. checkStrength("PASSWORD!") should return "medium".
//6. checkStrength("PassWord%^!") should return "medium".
//7. checkStrength("qwerty12345") should return "medium".
//8. checkStrength("S3cur3P@ssw0rd") should return "strong".
//9. checkStrength("C0d3&Fun!") should return "strong".

test("checkStrength 1", () => expect(checkStrength("123456")).toBe("weak"));

test("checkStrength 2", () => expect(checkStrength("pass!!!")).toBe("weak"));

test("checkStrength 3", () => expect(checkStrength("Qwerty")).toBe("weak"));

test("checkStrength 4", () => expect(checkStrength("PASSWORD")).toBe("weak"));

test("checkStrength 5", () => expect(checkStrength("PASSWORD!")).toBe("medium"));

test("checkStrength 6", () => expect(checkStrength("PassWord%^!")).toBe("medium"));

test("checkStrength 7", () => expect(checkStrength("qwerty12345")).toBe("medium"));

test("checkStrength 8", () => expect(checkStrength("S3cur3P@ssw0rd")).toBe("strong"));

test("checkStrength 9", () => expect(checkStrength("C0d3&Fun!")).toBe("strong"));