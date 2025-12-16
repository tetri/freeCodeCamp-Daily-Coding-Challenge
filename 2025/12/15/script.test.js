const speedCheck = require("./script");

//1. speedCheck(30, 70) should return "Not Speeding".
//2. speedCheck(40, 60) should return "Warning".
//3. speedCheck(40, 65) should return "Not Speeding".
//4. speedCheck(60, 90) should return "Ticket".
//5. speedCheck(65, 100) should return "Warning".
//6. speedCheck(88, 40) should return "Ticket".

test("speedCheck 1", () => {
    expect(speedCheck(30, 70)).toStrictEqual("Not Speeding");
});
test("speedCheck 2", () => {
    expect(speedCheck(40, 60)).toStrictEqual("Warning");
});
test("speedCheck 3", () => {
    expect(speedCheck(40, 65)).toStrictEqual("Not Speeding");
});
test("speedCheck 4", () => {
    expect(speedCheck(60, 90)).toStrictEqual("Ticket");
});
test("speedCheck 5", () => {
    expect(speedCheck(65, 100)).toStrictEqual("Warning");
});
test("speedCheck 6", () => {
    expect(speedCheck(88, 40)).toStrictEqual("Ticket");
});
