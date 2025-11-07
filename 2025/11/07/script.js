function combinations(cards) {
  const total = 52;
  return fatorial(total) / (fatorial(cards) * fatorial(total - cards));
}

function fatorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  return numero * fatorial(numero - 1);
}

module.exports = combinations;
