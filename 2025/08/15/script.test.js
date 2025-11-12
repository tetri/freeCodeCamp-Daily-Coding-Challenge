const jbelmu = require("./script");

//1. jbelmu("hello world") should return "hello wlord".
//2. jbelmu("i love jumbled text") should return "i love jbelmud text".
//3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
//4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".

test("jbelmu 1", () => {
  expect(jbelmu("hello world")).toStrictEqual("hello wlord");
});

test("jbelmu 2", () => {
  expect(jbelmu("i love jumbled text")).toStrictEqual("i love jbelmud text");
});

test("jbelmu 3", () => {
  expect(
    jbelmu("freecodecamp is my favorite place to learn to code")
  ).toStrictEqual("faccdeeemorp is my faiortve pacle to laern to cdoe");
});

test("jbelmu 4", () => {
  expect(jbelmu("the quick brown fox jumps over the lazy dog")).toStrictEqual(
    "the qciuk borwn fox jmpus oevr the lazy dog"
  );
});
