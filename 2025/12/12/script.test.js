const updateInventory = require("./script");

//1. updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]) should return [[3, "apples"], [8, "bananas"]].
//2. updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]]) should return [[3, "apples"], [8, "bananas"], [4, "oranges"]].
//3. updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]) should return [[10, "apples"], [30, "bananas"], [20, "oranges"]].
//4. updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]].

test("updateInventory 1", () => {
  expect(
    updateInventory(
      [
        [2, "apples"],
        [5, "bananas"],
      ],
      [
        [1, "apples"],
        [3, "bananas"],
      ]
    )
  ).toStrictEqual([
    [3, "apples"],
    [8, "bananas"],
  ]);
});

test("updateInventory 2", () => {
  expect(
    updateInventory(
      [
        [2, "apples"],
        [5, "bananas"],
      ],
      [
        [1, "apples"],
        [3, "bananas"],
        [4, "oranges"],
      ]
    )
  ).toStrictEqual([
    [3, "apples"],
    [8, "bananas"],
    [4, "oranges"],
  ]);
});

test("updateInventory 3", () => {
  expect(
    updateInventory(
      [],
      [
        [10, "apples"],
        [30, "bananas"],
        [20, "oranges"],
      ]
    )
  ).toStrictEqual([
    [10, "apples"],
    [30, "bananas"],
    [20, "oranges"],
  ]);
});

test("updateInventory 4", () => {
  expect(
    updateInventory(
      [
        [0, "Bowling Ball"],
        [0, "Dirty Socks"],
        [0, "Hair Pin"],
        [0, "Microphone"],
      ],
      [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"],
      ]
    )
  ).toStrictEqual([
    [1, "Bowling Ball"],
    [0, "Dirty Socks"],
    [1, "Hair Pin"],
    [0, "Microphone"],
    [1, "Half-Eaten Apple"],
    [1, "Toothpaste"],
  ]);
});
