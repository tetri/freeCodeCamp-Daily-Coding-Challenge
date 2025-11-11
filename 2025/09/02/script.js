function rgbToHex(rgb) {
  rgb = rgb.replace("rgb(", "").replace(")", "").split(",");
  let r = parseInt(rgb[0].trim()).toString(16).padStart(2, "0");
  let g = parseInt(rgb[1].trim()).toString(16).padStart(2, "0");
  let b = parseInt(rgb[2].trim()).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

module.exports = rgbToHex;