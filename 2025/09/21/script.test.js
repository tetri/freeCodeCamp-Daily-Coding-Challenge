const numberOfVideos = require("./script");

//1. numberOfVideos(500, "MB", 100, "GB") should return 200.
//2. numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit".
//3. numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit".
//4. numberOfVideos(500000, "KB", 2, "TB") should return 4000.
//5. numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466.

test("numberOfVideos 1", () => {
  expect(numberOfVideos(500, "MB", 100, "GB")).toStrictEqual(200);
});

test("numberOfVideos 2", () => {
  expect(numberOfVideos(1, "TB", 10, "TB")).toStrictEqual("Invalid video unit");
});

test("numberOfVideos 3", () => {
  expect(numberOfVideos(2000, "MB", 100000, "MB")).toStrictEqual(
    "Invalid drive unit"
  );
});

test("numberOfVideos 4", () => {
  expect(numberOfVideos(500000, "KB", 2, "TB")).toStrictEqual(4000);
});

test("numberOfVideos 5", () => {
  expect(numberOfVideos(1.5, "GB", 2.2, "TB")).toStrictEqual(1466);
});
