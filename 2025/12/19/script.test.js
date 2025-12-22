const pairwise = require("./script");

//1. pairwise([2, 3, 4, 6, 8], 10) should return 9.
//2. pairwise([4, 1, 5, 2, 6, 3], 7) should return 15.
//3. pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20) should return 22.
//4. pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24) should return 10.

test("pairwise 1", () => {
    expect(pairwise([2, 3, 4, 6, 8], 10)).toStrictEqual(9);
});
test("pairwise 2", () => {
    expect(pairwise([4, 1, 5, 2, 6, 3], 7)).toStrictEqual(15);
});
test("pairwise 3", () => {
    expect(pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20)).toStrictEqual(22);
});
test("pairwise 4", () => {
    expect(
        pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24)
    ).toStrictEqual(10);
});
