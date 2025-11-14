const decode = require("./script");

//1. decode("(f(b(dc)e)a)") should return "abcdef".
//2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
//3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".

test("decode 1", () => {
  expect(decode("(f(b(dc)e)a)")).toStrictEqual("abcdef");
});

test("decode 2", () => {
  expect(decode("((is?)(a(t d)h)e(n y( uo)r)aC)")).toStrictEqual(
    "Can you read this?"
  );
});

test("decode 3", () => {
  expect(decode("f(Ce(re))o((e(aC)m)d)p")).toStrictEqual("freeCodeCamp");
});
