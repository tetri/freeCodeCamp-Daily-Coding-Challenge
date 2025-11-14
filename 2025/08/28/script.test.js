const getLaptopCost = require("./script");

//1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
//2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
//3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
//4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
//5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400

test("getLaptopCost 1", () => {
  expect(getLaptopCost([1500, 2000, 1800, 1400], 1900)).toStrictEqual(1800);
});

test("getLaptopCost 2", () => {
  expect(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)).toStrictEqual(
    1800
  );
});

test("getLaptopCost 3", () => {
  expect(getLaptopCost([2099, 1599, 1899, 1499], 2200)).toStrictEqual(1899);
});

test("getLaptopCost 4", () => {
  expect(getLaptopCost([2099, 1599, 1899, 1499], 1000)).toStrictEqual(0);
});

test("getLaptopCost 5", () => {
  expect(
    getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)
  ).toStrictEqual(1400);
});
