const validate = require("./script.js");

//1. validate("a@b.cd") should return true.
//2. validate("hell.-w.rld@example.com") should return true.
//3. validate(".b@sh.rc") should return false.
//4. validate("example@test.c0") should return false.
//5. validate("freecodecamp.org") should return false.
//6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.
//7. validate("hello.@wo.rld") should return false.
//8. validate("hello@world..com") should return false.
//9. validate("git@commit@push.io") should return false.

test("validate 1", () => {
  expect(validate("a@b.cd")).toBe(true);
});

test("validate 2", () => {
  expect(validate("hell.-w.rld@example.com")).toBe(true);
});

test("validate 3", () => {
  expect(validate(".b@sh.rc")).toBe(false);
});

test("validate 4", () => {
  expect(validate("example@test.c0")).toBe(false);
});

test("validate 5", () => {
  expect(validate("freecodecamp.org")).toBe(false);
});

test("validate 6", () => {
  expect(validate("develop.ment_user@c0D!NG.R.CKS")).toBe(true);
});

test("validate 7", () => {
  expect(validate("hello.@wo.rld")).toBe(false);
});

test("validate 8", () => {
  expect(validate("hello@world..com")).toBe(false);
});

test("validate 9", () => {
  expect(validate("git@commit@push.io")).toBe(false);
});
