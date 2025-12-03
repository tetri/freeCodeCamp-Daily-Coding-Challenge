const convertListItem = require("./script");

//1. convertListItem("1. My item") should return "<li>My item</li>".
//2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
//3. convertListItem("1 . invalid item") should return "Invalid format".
//4. convertListItem("2. list item text") should return "<li>list item text</li>".
//5. convertListItem(". invalid again") should return "Invalid format".
//6. convertListItem("A. last invalid") should return "Invalid format".

test("convertListItem 1", () => {
  expect(convertListItem("1. My item")).toBe("<li>My item</li>");
});

test("convertListItem 2", () => {
  expect(convertListItem(" 1.  Another item")).toBe("<li>Another item</li>");
});

test("convertListItem 3", () => {
  expect(convertListItem("1 . invalid item")).toBe("Invalid format");
});

test("convertListItem 4", () => {
  expect(convertListItem("2. list item text")).toBe("<li>list item text</li>");
});

test("convertListItem 5", () => {
  expect(convertListItem(". invalid again")).toBe("Invalid format");
});

test("convertListItem 6", () => {
  expect(convertListItem("A. last invalid")).toBe("Invalid format");
});
