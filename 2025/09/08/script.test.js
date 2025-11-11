const buildAcronym = require("./script");

//1. buildAcronym("Search Engine Optimization") should return "SEO".
//2. buildAcronym("Frequently Asked Questions") should return "FAQ".
//3. buildAcronym("National Aeronautics and Space Administration") should return "NASA".
//4. buildAcronym("Federal Bureau of Investigation") should return "FBI".
//5. buildAcronym("For your information") should return "FYI".
//6. buildAcronym("By the way") should return "BTW".
//7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".

test("buildAcronym 1", () => {
  expect(buildAcronym("Search Engine Optimization")).toStrictEqual("SEO");
});

test("buildAcronym 2", () => {
  expect(buildAcronym("Frequently Asked Questions")).toStrictEqual("FAQ");
});

test("buildAcronym 3", () => {
  expect(
    buildAcronym("National Aeronautics and Space Administration")
  ).toStrictEqual("NASA");
});

test("buildAcronym 4", () => {
  expect(buildAcronym("Federal Bureau of Investigation")).toStrictEqual("FBI");
});

test("buildAcronym 5", () => {
  expect(buildAcronym("For your information")).toStrictEqual("FYI");
});

test("buildAcronym 6", () => {
  expect(buildAcronym("By the way")).toStrictEqual("BTW");
});

test("buildAcronym 7", () => {
  expect(
    buildAcronym(
      "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"
    )
  ).toStrictEqual("AUHWPOTIMSH");
});
