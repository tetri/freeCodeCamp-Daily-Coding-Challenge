const parseBlockquote = require("./script");

//1. parseBlockquote("> This is a quote") should return "<blockquote>This is a quote</blockquote>".
//2. parseBlockquote(" > This is also a quote") should return "<blockquote>This is also a quote</blockquote>".
//3. parseBlockquote("  >    So  Is  This") should return "<blockquote>So  Is  This</blockquote>".

test("parseBlockquote 1", () => {
    expect(parseBlockquote("> This is a quote")).toStrictEqual(
        "<blockquote>This is a quote</blockquote>"
    );
});
test("parseBlockquote 2", () => {
    expect(parseBlockquote(" > This is also a quote")).toStrictEqual(
        "<blockquote>This is also a quote</blockquote>"
    );
});
test("parseBlockquote 3", () => {
    expect(parseBlockquote("  >    So  Is  This")).toStrictEqual(
        "<blockquote>So  Is  This</blockquote>"
    );
});
