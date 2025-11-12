const spaceJam = require("./script");

//1. spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
//2. spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
//3. spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
//4. spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
//5. spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".

test("spaceJam 1", () => {
  expect(spaceJam("freeCodeCamp")).toStrictEqual(
    "F  R  E  E  C  O  D  E  C  A  M  P"
  );
});

test("spaceJam 2", () => {
  expect(spaceJam("   free   Code   Camp   ")).toStrictEqual(
    "F  R  E  E  C  O  D  E  C  A  M  P"
  );
});

test("spaceJam 3", () => {
  expect(spaceJam("Hello World?!")).toStrictEqual(
    "H  E  L  L  O  W  O  R  L  D  ?  !"
  );
});

test("spaceJam 4", () => {
  expect(spaceJam("C@t$ & D0g$")).toStrictEqual("C  @  T  $  &  D  0  G  $");
});

test("spaceJam 5", () => {
  expect(spaceJam("allyourbase")).toStrictEqual(
    "A  L  L  Y  O  U  R  B  A  S  E"
  );
});
