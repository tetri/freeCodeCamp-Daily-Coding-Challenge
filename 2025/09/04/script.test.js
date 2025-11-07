const repeatVowels = require("./script");

//1. repeatVowels("hello world") should return "helloo wooorld".
//2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
//3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
//4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".

test("repeatVowels 1", () =>
  expect(repeatVowels("hello world")).toBe("helloo wooorld"));

test("repeatVowels 2", () =>
  expect(repeatVowels("freeCodeCamp")).toBe("freeeCooodeeeeCaaaaamp"));

test("repeatVowels 3", () =>
  expect(repeatVowels("AEIOU")).toBe("AEeIiiOoooUuuuu"));

test("repeatVowels 4", () =>
  expect(repeatVowels("I like eating ice cream in Iceland")).toBe(
    "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"
  ));
