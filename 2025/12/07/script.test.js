const compressString = require("./script");

//1. compressString("yes yes yes please") should return "yes(3) please".
//2. compressString("I have have have apples") should return "I have(3) apples".
//3. compressString("one one three and to the the the the") should return "one(2) three and to the(4)".
//4. compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)".

test("compressString 1", () => {
  expect(compressString("yes yes yes please")).toBe("yes(3) please");
});

test("compressString 2", () => {
  expect(compressString("I have have have apples")).toBe("I have(3) apples");
});

test("compressString 3", () => {
  expect(compressString("one one three and to the the the the")).toBe(
    "one(2) three and to the(4)"
  );
});

test("compressString 4", () => {
  expect(
    compressString(
      "route route route route route route tee tee tee tee tee tee"
    )
  ).toBe("route(6) tee(6)");
});
