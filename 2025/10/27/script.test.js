const sequence = require("./script");

//1. sequence(5) should return "12345".
//2. sequence(10) should return "12345678910".
//3. sequence(1) should return "1".
//4. sequence(27) should return "123456789101112131415161718192021222324252627".

test("sequence 1", () => {
  expect(sequence(5)).toBe("12345");
});

test("sequence 2", () => {
  expect(sequence(10)).toBe("12345678910");
});

test("sequence 3", () => {
  expect(sequence(1)).toBe("1");
});

test("sequence 4", () => {
  expect(sequence(27)).toBe("123456789101112131415161718192021222324252627");
});
