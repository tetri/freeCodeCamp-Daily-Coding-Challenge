const sumDivisors = require("./script");

//1. sumDivisors(6) should return 12.
//2. sumDivisors(13) should return 14.
//3. sumDivisors(28) should return 56.
//4. sumDivisors(84) should return 224.
//5. sumDivisors(549) should return 806.
//6. sumDivisors(9348) should return 23520.

test("sumDivisors 1", () => {
    expect(sumDivisors(6)).toStrictEqual(12);
});
test("sumDivisors 2", () => {
    expect(sumDivisors(13)).toStrictEqual(14);
});
test("sumDivisors 3", () => {
    expect(sumDivisors(28)).toStrictEqual(56);
});
test("sumDivisors 4", () => {
    expect(sumDivisors(84)).toStrictEqual(224);
});
test("sumDivisors 5", () => {
    expect(sumDivisors(549)).toStrictEqual(806);
});
test("sumDivisors 6", () => {
    expect(sumDivisors(9348)).toStrictEqual(23520);
});
