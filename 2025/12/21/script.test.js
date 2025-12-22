const daylightHours = require("./script");

//1. daylightHours(45) should return 9.
//2. daylightHours(0) should return 12.
//3. daylightHours(-90) should return 24.
//4. daylightHours(-10) should return 12.
//5. daylightHours(23) should return 10.
//6. daylightHours(88) should return 0.
//7. daylightHours(-33) should return 13.
//8. daylightHours(70) should return 2.

test("daylightHours 1", () => {
    expect(daylightHours(45)).toStrictEqual(9);
});
test("daylightHours 2", () => {
    expect(daylightHours(0)).toStrictEqual(12);
});
test("daylightHours 3", () => {
    expect(daylightHours(-90)).toStrictEqual(24);
});
test("daylightHours 4", () => {
    expect(daylightHours(-10)).toStrictEqual(12);
});
test("daylightHours 5", () => {
    expect(daylightHours(23)).toStrictEqual(10);
});
test("daylightHours 6", () => {
    expect(daylightHours(88)).toStrictEqual(0);
});
test("daylightHours 7", () => {
    expect(daylightHours(-33)).toStrictEqual(13);
});
test("daylightHours 8", () => {
    expect(daylightHours(70)).toStrictEqual(2);
});
