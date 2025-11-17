const isMatch = require("./script");

//1. isMatch("helloworld", "helloworld") should return true.
//2. isMatch("helloworld", "helloworlds") should return false.
//3. isMatch("helloworld", "jelloworld") should return true.
//4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
//5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
//6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.

test("isMatch 1", () => {
  expect(isMatch("helloworld", "helloworld")).toStrictEqual(true);
});

test("isMatch 2", () => {
  expect(isMatch("helloworld", "helloworlds")).toStrictEqual(false);
});

test("isMatch 3", () => {
  expect(isMatch("helloworld", "jelloworld")).toStrictEqual(true);
});

test("isMatch 4", () => {
  expect(
    isMatch(
      "thequickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthelazydog"
    )
  ).toStrictEqual(true);
});

test("isMatch 5", () => {
  expect(
    isMatch(
      "theslickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthehazydog"
    )
  ).toStrictEqual(true);
});

test("isMatch 6", () => {
  expect(
    isMatch(
      "thequickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthehazycat"
    )
  ).toStrictEqual(false);
});
