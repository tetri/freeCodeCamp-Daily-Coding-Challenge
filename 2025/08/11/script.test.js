const isBalanced = require('./script');

//1. isBalanced("racecar") should return true.
//2. isBalanced("Lorem Ipsum") should return true.
//3. isBalanced("Kitty Ipsum") should return false.
//4. isBalanced("string") should return false.
//5. isBalanced(" ") should return true.
//6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
//7. isBalanced("123A#b!E&*456-o.U") should return true.

test("isBalanced 1", () => expect(isBalanced("racecar")).toBe(true));

test("isBalanced 2", () => expect(isBalanced("Lorem Ipsum")).toBe(true));

test("isBalanced 3", () => expect(isBalanced("Kitty Ipsum")).toBe(false));

test("isBalanced 4", () => expect(isBalanced("string")).toBe(false));

test("isBalanced 5", () => expect(isBalanced(" ")).toBe(true));

test("isBalanced 6", () => expect(isBalanced("abcdefghijklmnopqrstuvwxyz")).toBe(false));

test("isBalanced 7", () => expect(isBalanced("123A#b!E&*456-o.U")).toBe(true));