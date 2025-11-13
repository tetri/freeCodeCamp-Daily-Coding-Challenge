function generateHex(color) {
  let r = randomColorComponent();
  let g = randomColorComponent();
  let b = randomColorComponent();
  switch (color) {
    case "red":
      while (r < g || r < b) {
        r = randomColorComponent();
        g = randomColorComponent();
        b = randomColorComponent();
      }
      break;
    case "green":
      while (g < r || g < b) {
        r = randomColorComponent();
        g = randomColorComponent();
        b = randomColorComponent();
      }
      break;
    case "blue":
      while (b < r || b < g) {
        r = randomColorComponent();
        g = randomColorComponent();
        b = randomColorComponent();
      }
      break;
    default:
      return "Invalid color";
  }

  r = r.toString(16).padStart(2, "0");
  g = g.toString(16).padStart(2, "0");
  b = b.toString(16).padStart(2, "0");

  return `${r}${g}${b}`.toUpperCase();

  function randomColorComponent() {
    return Math.floor(Math.random() * 255);
  }
}

module.exports = generateHex;
