const hasConsonantCount = require("./script");

//1. hasConsonantCount("helloworld", 7) should return true.
//2. hasConsonantCount("eieio", 5) should return false.
//3. hasConsonantCount("freeCodeCamp Rocks!", 11) should return true.
//4. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24) should return false.
//5. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23) should return true.

test("hasConsonantCount 1", () => {
    expect(hasConsonantCount("helloworld", 7)).toStrictEqual(true);
});
test("hasConsonantCount 2", () => {
    expect(hasConsonantCount("eieio", 5)).toStrictEqual(false);
});
test("hasConsonantCount 3", () => {
    expect(hasConsonantCount("freeCodeCamp Rocks!", 11)).toStrictEqual(true);
});
test("hasConsonantCount 4", () => {
    expect(
        hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)
    ).toStrictEqual(false);
});
test("hasConsonantCount 5", () => {
    expect(
        hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)
    ).toStrictEqual(true);
});
