const titleCase = require("./script");

//1. titleCase("hello world") should return "Hello World".
//2. titleCase("the quick brown fox") should return "The Quick Brown Fox".
//3. titleCase("JAVASCRIPT AND PYTHON") should return "Javascript And Python".
//4. titleCase("AvOcAdO tOAst fOr brEAkfAst") should return "Avocado Toast For Breakfast".

test("titleCase 1", () => {
    expect(titleCase("hello world")).toStrictEqual("Hello World");
});
test("titleCase 2", () => {
    expect(titleCase("the quick brown fox")).toStrictEqual(
        "The Quick Brown Fox"
    );
});
test("titleCase 3", () => {
    expect(titleCase("JAVASCRIPT AND PYTHON")).toStrictEqual(
        "Javascript And Python"
    );
});
test("titleCase 4", () => {
    expect(titleCase("AvOcAdO tOAst fOr brEAkfAst")).toStrictEqual(
        "Avocado Toast For Breakfast"
    );
});
