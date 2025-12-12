const getNextLocation = require("./script");

//1. getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
//2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
//3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
//4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
//5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].

test("getNextLocation 1", () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 2, 0],
      [0, 0, 0, 0],
    ])
  ).toStrictEqual([2, 3]);
});
test("getNextLocation 2", () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ])
  ).toStrictEqual([3, 0]);
});
test("getNextLocation 3", () => {
  expect(
    getNextLocation([
      [0, 2, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
  ).toStrictEqual([1, 2]);
});
test("getNextLocation 4", () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
      [0, 1, 0, 0],
    ])
  ).toStrictEqual([1, 1]);
});
test("getNextLocation 5", () => {
  expect(
    getNextLocation([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 2],
    ])
  ).toStrictEqual([2, 2]);
});
