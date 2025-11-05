function isBalanced(s) {
  const m = Math.floor(s.length / 2);
  let a = s.substring(0, m);
  let b = s.substring(m);
  if (b.length > a.length) b = s.substring(m + 1);

  const regex = /[AEIOUaeiou]/g;
  let ma = (a.match(regex) || []).length;
  let mb = (b.match(regex) || []).length;

  return ma == mb;
}

module.exports = isBalanced;
