function toRoman(num) {
  let roman = "";

  if (num >= 1000) {
    let _m = (num - (num % 1000)) / 1000;
    roman += "M".repeat(_m);
    num -= _m * 1000;
  }

  if (num >= 900) {
    roman += "CM";
    num -= 900;
  }

  if (num >= 500) {
    roman += "D";
    num -= 500;
  }

  if (num >= 400) {
    roman += "CD";
    num -= 400;
  }

  if (num >= 100) {
    let _c = (num - (num % 100)) / 100;
    roman += "C".repeat(_c);
    num -= _m * 100;
  }

  if (num >= 90) {
    roman += "XC";
    num -= 90;
  }

  if (num >= 50) {
    roman += "L";
    num -= 50;
  }

  if (num >= 10) {
    let _x = (num - (num % 10)) / 10;
    roman += "X".repeat(_x);
    num -= _x * 10;
  }

  if (num >= 9) {
    roman += "IX";
    num -= 9;
  }

  if (num >= 5) {
    let _v = (num - (num % 5)) / 5;
    roman += "V".repeat(_v);
    num -= _v * 5;
  }

  if (num >= 4) {
    roman += "IV";
    num -= 4;
  }

  if (num >= 1) {
    let _i = (num - (num % 1)) / 1;
    roman += "I".repeat(_i);
    num -= _i * 1;
  }

  return roman;
}

module.exports = toRoman;
