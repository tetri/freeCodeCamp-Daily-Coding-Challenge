const longestWord = require("./script");

//1. longestWord("The quick red fox") should return "quick".
//2. longestWord("Hello coding challenge.") should return "challenge".
//3. longestWord("Do Try This At Home.") should return "This".
//4. longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation".
//5. longestWord("A tie? No way!") should return "tie".
//6. longestWord("Wouldn't you like to know.") should return "Wouldnt".

test("longestWord 1", () => {
  expect(longestWord("The quick red fox")).toStrictEqual("quick");
});

test("longestWord 2", () => {
  expect(longestWord("Hello coding challenge.")).toStrictEqual("challenge");
});

test("longestWord 3", () => {
  expect(longestWord("Do Try This At Home.")).toStrictEqual("This");
});

test("longestWord 4", () => {
  expect(
    longestWord(
      "This sentence... has commas, ellipses, and an exlamation point!"
    )
  ).toStrictEqual("exlamation");
});

test("longestWord 5", () => {
  expect(longestWord("A tie? No way!")).toStrictEqual("tie");
});

test("longestWord 6", () => {
  expect(longestWord("Wouldn't you like to know.")).toStrictEqual("Wouldnt");
});
