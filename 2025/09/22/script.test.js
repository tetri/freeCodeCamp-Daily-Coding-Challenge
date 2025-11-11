const digitsOrLetters = require("./script");

//1. digitsOrLetters("abc123") should return "tie".
//2. digitsOrLetters("a1b2c3d") should return "letters".
//3. digitsOrLetters("1a2b3c4") should return "digits".
//4. digitsOrLetters("abc123!@#DEF") should return "letters".
//5. digitsOrLetters("H3110 W0R1D") should return "digits".
//6. digitsOrLetters("P455W0RD") should return "tie".

test("digitsOrLetters 1", () => {
  expect(digitsOrLetters("abc123")).toStrictEqual("tie");
});

test("digitsOrLetters 2", () => {
  expect(digitsOrLetters("a1b2c3d")).toStrictEqual("letters");
});

test("digitsOrLetters 3", () => {
  expect(digitsOrLetters("1a2b3c4")).toStrictEqual("digits");
});

test("digitsOrLetters 4", () => {
  expect(digitsOrLetters("abc123!@#DEF")).toStrictEqual("letters");
});

test("digitsOrLetters 5", () => {
  expect(digitsOrLetters("H3110 W0R1D")).toStrictEqual("digits");
});

test("digitsOrLetters 6", () => {
  expect(digitsOrLetters("P455W0RD")).toStrictEqual("tie");
});
