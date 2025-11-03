function infected(days) {
  let infectedComputers = 1;

  for (let i = 1; i <= days; i++) {
    infectedComputers *= 2;

    if (i % 3 == 0) {
      let patched = Math.ceil(infectedComputers * 0.2);
      infectedComputers -= patched;
    }
  }

  return infectedComputers;
}

module.exports = infected;
