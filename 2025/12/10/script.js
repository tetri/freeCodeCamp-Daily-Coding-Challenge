function parseBold(markdown) {
  let parts = markdown.split(" ");
  if (parts.includes("**") || parts.includes("__")) return markdown;

  let html = [];

  for (let i = 0; i < parts.length; i++) {
    let word = parts[i];

    if (word.startsWith("**")) word = word.replace(/^\*\*/g, "<b>");

    if (word.startsWith("__")) word = word.replace(/^\_\_/g, "<b>");

    if (word.endsWith("**")) word = word.replace(/\*\*$/g, "</b>");

    if (word.endsWith("__")) word = word.replace(/\_\_$/g, "</b>");

    html.push(word);
  }

  return html.join(" ");
}

module.exports = parseBold;
