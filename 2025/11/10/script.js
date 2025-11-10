function getExtension(filename) {
  if (!filename.includes(".")) return "none";
  const parts = filename.split(".");
  const ext = parts[parts.length - 1];
  if (ext === "") return "none";
  else return ext;
}

module.exports = getExtension;
