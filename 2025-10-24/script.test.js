const dive = require("./script");

//1. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered".
//2. dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty".
//3. dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found".
//4. dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found".
//5. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered".
//6. dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty".

test("dive 1", () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "X"],
        ["-", "O"],
      ],
      [2, 1]
    )
  ).toEqual("Recovered");
});

test("dive 2", () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "X"],
        ["-", "O"],
      ],
      [2, 0]
    )
  ).toEqual("Empty");
});

test("dive 3", () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "O"],
        ["-", "O"],
      ],
      [1, 1]
    )
  ).toEqual("Found");
});

test("dive 4", () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["X", "O", "X"],
        ["-", "-", "-"],
      ],
      [1, 2]
    )
  ).toEqual("Found");
});

test("dive 5", () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["O", "X", "X"],
      ],
      [2, 0]
    )
  ).toEqual("Recovered");
});

test("dive 6", () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["O", "X", "X"],
      ],
      [1, 2]
    )
  ).toEqual("Empty");
});
