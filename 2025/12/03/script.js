function convertListItem(markdown) {
  markdown = markdown.trim();

  if (!markdown.match(/^\d\..*/)) return "Invalid format";

  let text = markdown.replace(/^\d\./, "").trim();

  return `<li>${text}</li>`;
}

module.exports = convertListItem;
