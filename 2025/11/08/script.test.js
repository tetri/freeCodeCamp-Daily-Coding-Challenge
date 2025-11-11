const canPost = require("./script");

//1. canPost("Hello world") should return "short post".
//2. canPost("This is a longer message but still under eighty characters.") should return "long post".
//3. canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post".

test("canPost 1", () =>
  expect(canPost("Hello world")).toStrictEqual("short post"));
test("canPost 2", () =>
  expect(
    canPost("This is a longer message but still under eighty characters.")
  ).toStrictEqual("long post"));
test("canPost 3", () =>
  expect(
    canPost(
      "This message is too long to fit into either of the character limits for a social media post."
    )
  ).toStrictEqual("invalid post"));
