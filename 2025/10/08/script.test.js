const goldilocksZone = require("./script");

//1. goldilocksZone(1) should return [0.95, 1.37].
//2. goldilocksZone(0.5) should return [0.28, 0.41].
//3. goldilocksZone(6) should return [21.85, 31.51].
//4. goldilocksZone(3.7) should return [9.38, 13.52].
//5. goldilocksZone(20) should return [179.69, 259.13].

test("goldilocksZone 1", () => {
  expect(goldilocksZone(1)).toStrictEqual([0.95, 1.37]);
});

test("goldilocksZone 2", () => {
  expect(goldilocksZone(0.5)).toStrictEqual([0.28, 0.41]);
});

test("goldilocksZone 3", () => {
  expect(goldilocksZone(6)).toStrictEqual([21.85, 31.51]);
});

test("goldilocksZone 4", () => {
  expect(goldilocksZone(3.7)).toStrictEqual([9.38, 13.52]);
});

test("goldilocksZone 5", () => {
  expect(goldilocksZone(20)).toStrictEqual([179.69, 259.13]);
});
