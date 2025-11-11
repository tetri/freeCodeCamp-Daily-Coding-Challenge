const stripTags = require("./script.js");

//1. stripTags('<a href="#">Click here</a>') should return "Click here".
//2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
//3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
//4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return sectionsection.

test("stripTags 1", () => {
  expect(stripTags('<a href="#">Click here</a>')).toStrictEqual("Click here");
});

test("stripTags 2", () => {
  expect(stripTags('<p class="center">Hello <b>World</b>!</p>')).toStrictEqual(
    "Hello World!"
  );
});

test("stripTags 3", () => {
  expect(stripTags('<img src="cat.jpg" alt="Cat">')).toStrictEqual("");
});

test("stripTags 4", () => {
  expect(
    stripTags(
      '<main id="main"><section class="section">section</section><section class="section">section</section></main>'
    )
  ).toStrictEqual("sectionsection");
});
