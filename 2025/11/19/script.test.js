const convert = require('./script');

//1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
//2. convert("My heading") should return "Invalid format".
//3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
//4. convert("#My heading") should return "Invalid format".
//5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
//6. convert("####### My level 7 heading") should return "Invalid format".
//7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".

test("convert 1", () => {
    expect(convert("# My level 1 heading")).toStrictEqual("<h1>My level 1 heading</h1>");
});

test('convert 2', () => {
    expect(convert("My heading")).toStrictEqual("Invalid format");
});

test('convert 3', () => {
    expect(convert("##### My level 5 heading")).toStrictEqual("<h5>My level 5 heading</h5>");
});

test('convert 4', () => {
    expect(convert("#My heading")).toStrictEqual("Invalid format");
});

test('convert 5', () => {
    expect(convert("  ###  My level 3 heading")).toStrictEqual("<h3>My level 3 heading</h3>");
});

test('convert 6', () => {
    expect(convert("####### My level 7 heading")).toStrictEqual("Invalid format");
});

test('convert 7', () => {
    expect(convert("## My #2 heading")).toStrictEqual("<h2>My #2 heading</h2>");
});
