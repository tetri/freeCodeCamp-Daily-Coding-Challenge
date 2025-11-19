const hasExoplanet = require("./script");

//1. hasExoplanet("665544554") should return false.
//2. hasExoplanet("FGFFCFFGG") should return true.
//3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
//4. hasExoplanet("FREECODECAMP") should return true.
//5. hasExoplanet("9AB98AB9BC98A") should return false.
//6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.

test("hasExoplanet 1", () => {
  expect(hasExoplanet("665544554")).toStrictEqual(false);
});

test("hasExoplanet 2", () => {
  expect(hasExoplanet("FGFFCFFGG")).toStrictEqual(true);
});

test("hasExoplanet 3", () => {
  expect(hasExoplanet("MONOPLONOMONPLNOMPNOMP")).toStrictEqual(false);
});

test("hasExoplanet 4", () => {
  expect(hasExoplanet("FREECODECAMP")).toStrictEqual(true);
});

test("hasExoplanet 5", () => {
  expect(hasExoplanet("9AB98AB9BC98A")).toStrictEqual(false);
});

test("hasExoplanet 6", () => {
  expect(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")).toStrictEqual(true);
});
