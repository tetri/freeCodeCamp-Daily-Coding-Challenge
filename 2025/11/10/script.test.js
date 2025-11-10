const getExtension = require("./script");

//1. getExtension("document.txt") should return "txt".
//2. getExtension("README") should return "none".
//3. getExtension("image.PNG") should return "PNG".
//4. getExtension(".gitignore") should return "gitignore".
//5. getExtension("archive.tar.gz") should return "gz".
//6. getExtension("final.draft.") should return "none".

test("getExtension 1", () => expect(getExtension("document.txt")).toBe("txt"));
test("getExtension 2", () => expect(getExtension("README")).toBe("none"));
test("getExtension 3", () => expect(getExtension("image.PNG")).toBe("PNG"));
test("getExtension 4", () =>
  expect(getExtension(".gitignore")).toBe("gitignore"));
test("getExtension 5", () => expect(getExtension("archive.tar.gz")).toBe("gz"));
test("getExtension 6", () => expect(getExtension("final.draft.")).toBe("none"));
