const imageSearch = require("./script");

//1. imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].
//2. imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].
//3. imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].
//4. imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].

test("imageSearch 1", () =>
  expect(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")).toEqual([
    "dog.png",
  ]));

test("imageSearch 2", () =>
  expect(
    imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun")
  ).toEqual(["Sunset.jpg", "sunflower.jpeg"]));

test("imageSearch 3", () =>
  expect(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG")).toEqual([
    "Moon.png",
    "stars.png",
  ]));

test("imageSearch 4", () =>
  expect(
    imageSearch(
      [
        "cat.jpg",
        "dogToy.jpeg",
        "kitty-cat.png",
        "catNip.jpeg",
        "franken_cat.gif",
      ],
      "Cat"
    )
  ).toEqual(["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]));
