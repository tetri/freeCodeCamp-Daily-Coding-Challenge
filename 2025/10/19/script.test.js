const extractAttributes = require("./script");

//1. extractAttributes('<span class="red"></span>') should return ["class, red"].
//2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
//3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
//4. extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
//5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].

test("extractAttributes 1", () => {
  expect(extractAttributes('<span class="red"></span>')).toBe(["class, red"]);
});

test("extractAttributes 2", () => {
  expect(extractAttributes('<meta charset="UTF-8" />')).toBe([
    "charset, UTF-8",
  ]);
});

test("extractAttributes 3", () => {
  expect(extractAttributes("<p>Lorem ipsum dolor sit amet</p>")).toBe([]);
});

test("extractAttributes 4", () => {
  expect(
    extractAttributes('<input name="email" type="email" required="true" />')
  ).toBe(["name, email", "type, email", "required, true"]);
});

test("extractAttributes 5", () => {
  expect(
    extractAttributes(
      '<button id="submit" class="btn btn-primary">Submit</button>'
    )
  ).toBe(["id, submit", "class, btn btn-primary"]);
});
