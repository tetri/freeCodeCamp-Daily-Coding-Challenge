const decode = require("./script");

//1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
//2. decode("Byffi Qilfx!", 20) should return "Hello World!"
//3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
//4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"

test("decode 1", () => {
  expect(decode("Xlmw mw e wigvix qiwweki.", 4)).toStrictEqual(
    "This is a secret message."
  );
});

test("decode 2", () => {
  expect(decode("Byffi Qilfx!", 20)).toStrictEqual("Hello World!");
});

test("decode 3", () => {
  expect(decode("Zqd xnt njzx?", -1)).toStrictEqual("Are you okay?");
});

test("decode 4", () => {
  expect(decode("oannLxmnLjvy", 9)).toStrictEqual("freeCodeCamp");
});
