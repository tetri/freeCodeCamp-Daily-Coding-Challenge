const toSnake = require("./script");

//1. toSnake("helloWorld") should return "hello_world".
//2. toSnake("myVariableName") should return "my_variable_name".
//3. toSnake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".

test("toSnake 1", () => {
    expect(toSnake("helloWorld")).toStrictEqual("hello_world");
});

test("toSnake 2", () => {
    expect(toSnake("myVariableName")).toStrictEqual("my_variable_name");
});

test("toSnake 3", () => {
    expect(toSnake("freecodecampDailyChallenges")).toStrictEqual("freecodecamp_daily_challenges");
}); 