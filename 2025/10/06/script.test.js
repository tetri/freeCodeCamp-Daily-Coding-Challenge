const sendMessage = require("./script");

//1. sendMessage([300000, 300000]) should return 2.5.
//2. sendMessage([384400, 384400]) should return 3.0627.
//3. sendMessage([54600000, 54600000]) should return 364.5.
//4. sendMessage([1000000, 500000000, 1000000]) should return 1674.3333.
//5. sendMessage([10000, 21339, 50000, 31243, 10000]) should return 2.4086.
//6. sendMessage([802101, 725994, 112808, 3625770, 481239]) should return 21.1597.

test("sendMessage 1", () => {
  expect(sendMessage([300000, 300000])).toStrictEqual(2.5);
});

test("sendMessage 2", () => {
  expect(sendMessage([384400, 384400])).toStrictEqual(3.0627);
});

test("sendMessage 3", () => {
  expect(sendMessage([54600000, 54600000])).toStrictEqual(364.5);
});

test("sendMessage 4", () => {
  expect(sendMessage([1000000, 500000000, 1000000])).toStrictEqual(1674.3333);
});

test("sendMessage 5", () => {
  expect(sendMessage([10000, 21339, 50000, 31243, 10000])).toStrictEqual(
    2.4086
  );
});

test("sendMessage 6", () => {
  expect(sendMessage([802101, 725994, 112808, 3625770, 481239])).toStrictEqual(
    21.1597
  );
});
