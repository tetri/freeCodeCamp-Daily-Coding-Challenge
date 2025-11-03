const verify = require("./script");

//1. verify("foo", "bar", 57) should return true.
//2. verify("foo", "bar", 54) should return false.
//3. verify("freeCodeCamp", "Rocks", 238) should return true.
//4. verify("Is this valid?", "No", 210) should return false.
//5. verify("Is this valid?", "Yes", 233) should return true.
//6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true.

test("verify 1", () => {
  expect(verify("foo", "bar", 57)).toBe(true);
});

test("verify 2", () => {
  expect(verify("foo", "bar", 54)).toBe(false);
});

test("verify 3", () => {
  expect(verify("freeCodeCamp", "Rocks", 238)).toBe(true);
});

test("verify 4", () => {
  expect(verify("Is this valid?", "No", 210)).toBe(false);
});

test("verify 5", () => {
  expect(verify("Is this valid?", "Yes", 233)).toBe(true);
});

test("verify 6", () => {
  expect(
    verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514)
  ).toBe(true);
});
