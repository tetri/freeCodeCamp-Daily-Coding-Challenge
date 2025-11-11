const numberOfPhotos = require("./script");

//1. numberOfPhotos(1, 1) should return 1000.
//2. numberOfPhotos(2, 1) should return 500.
//3. numberOfPhotos(4, 256) should return 64000.
//4. numberOfPhotos(3.5, 750) should return 214285.
//5. numberOfPhotos(3.5, 5.5) should return 1571.

test("numberOfPhotos 1", () => {
  expect(numberOfPhotos(1, 1)).toStrictEqual(1000);
});

test("numberOfPhotos 2", () => {
  expect(numberOfPhotos(2, 1)).toStrictEqual(500);
});

test("numberOfPhotos 3", () => {
  expect(numberOfPhotos(4, 256)).toStrictEqual(64000);
});

test("numberOfPhotos 4", () => {
  expect(numberOfPhotos(3.5, 750)).toStrictEqual(214285);
});

test("numberOfPhotos 5", () => {
  expect(numberOfPhotos(3.5, 5.5)).toStrictEqual(1571);
});
