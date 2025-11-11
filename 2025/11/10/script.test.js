const getExtension = require("./script");

//1. getExtension("document.txt") should return "txt".
//2. getExtension("README") should return "none".
//3. getExtension("image.PNG") should return "PNG".
//4. getExtension(".gitignore") should return "gitignore".
//5. getExtension("archive.tar.gz") should return "gz".
//6. getExtension("final.draft.") should return "none".

test("getExtension 1", () =>
  expect(getExtension("document.txt")).toStrictEqual("txt"));
test("getExtension 2", () =>
  expect(getExtension("README")).toStrictEqual("none"));
test("getExtension 3", () =>
  expect(getExtension("image.PNG")).toStrictEqual("PNG"));
test("getExtension 4", () =>
  expect(getExtension(".gitignore")).toStrictEqual("gitignore"));
test("getExtension 5", () =>
  expect(getExtension("archive.tar.gz")).toStrictEqual("gz"));
test("getExtension 6", () =>
  expect(getExtension("final.draft.")).toStrictEqual("none"));
