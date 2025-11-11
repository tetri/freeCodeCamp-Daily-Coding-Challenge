const generateSlug = require("./script");

//1. generateSlug("helloWorld") should return "helloworld".
//2. generateSlug("hello world!") should return "hello%20world".
//3. generateSlug(" hello-world ") should return "helloworld".
//4. generateSlug("hello  world") should return "hello%20world".
//5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".

test("generateSlug 1", () => {
  expect(generateSlug("helloWorld")).toStrictEqual("helloworld");
});

test("generateSlug 2", () => {
  expect(generateSlug("hello world!")).toStrictEqual("hello%20world");
});

test("generateSlug 3", () => {
  expect(generateSlug(" hello-world ")).toStrictEqual("helloworld");
});

test("generateSlug 4", () => {
  expect(generateSlug("hello  world")).toStrictEqual("hello%20world");
});

test("generateSlug 5", () => {
  expect(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")).toStrictEqual(
    "h3110%20w0r1d"
  );
});
