const toCamelCase = require("./script");

//1. toCamelCase("hello world") should return "helloWorld".
//2. toCamelCase("HELLO WORLD") should return "helloWorld".
//3. toCamelCase("secret agent-X") should return "secretAgentX".
//4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
//5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".

test("toCamelCase 1", () => {
  expect(toCamelCase("hello world")).toStrictEqual("helloWorld");
});

test("toCamelCase 2", () => {
  expect(toCamelCase("HELLO WORLD")).toStrictEqual("helloWorld");
});

test("toCamelCase 3", () => {
  expect(toCamelCase("secret agent-X")).toStrictEqual("secretAgentX");
});

test("toCamelCase 4", () => {
  expect(toCamelCase("FREE cODE cAMP")).toStrictEqual("freeCodeCamp");
});

test("toCamelCase 5", () => {
  expect(
    toCamelCase(
      "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"
    )
  ).toStrictEqual("yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk");
});
