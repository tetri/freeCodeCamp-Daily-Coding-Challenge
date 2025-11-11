const reverseSentence = require("./script");

//1. reverseSentence("world hello") should return "hello world".
//2. reverseSentence("push commit git") should return "git commit push".
//3. reverseSentence("npm  install  sudo") should return "sudo install npm".
//4. reverseSentence("import    default   function  export") should return "export function default import".

test("reverseSentence 1", () => {
  expect(reverseSentence("world hello")).toStrictEqual("hello world");
});

test("reverseSentence 2", () => {
  expect(reverseSentence("push commit git")).toStrictEqual("git commit push");
});

test("reverseSentence 3", () => {
  expect(reverseSentence("npm  install  sudo")).toStrictEqual(
    "sudo install npm"
  );
});

test("reverseSentence 4", () => {
  expect(reverseSentence("import    default   function  export")).toStrictEqual(
    "export function default import"
  );
});
