const parseBold = require("./script");

//1. parseBold("**This is bold**") should return "<b>This is bold</b>".
//2. parseBold("__This is also bold__") should return "<b>This is also bold</b>".
//3. parseBold("**This is not bold **") should return "**This is not bold **".
//4. parseBold("__ This is also not bold__") should return "__ This is also not bold__".
//5. parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.") should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.".

test("parseBold 1", () => {
  expect(parseBold("**This is bold**")).toStrictEqual("<b>This is bold</b>");
});

test("parseBold 2", () => {
  expect(parseBold("__This is also bold__")).toStrictEqual("<b>This is also bold</b>");
});

test("parseBold 3", () => {
  expect(parseBold("**This is not bold **")).toStrictEqual("**This is not bold **");
});

test("parseBold 4", () => {
  expect(parseBold("__ This is also not bold__")).toStrictEqual(
    "__ This is also not bold__"
  );
});

test("parseBold 5", () => {
  expect(
    parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.")
  ).toStrictEqual("The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.");
});
