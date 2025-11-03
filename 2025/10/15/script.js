function stripTags(html) {
  html = html.replace(/<.[^>]*>/g, "");
  return html;
}

module.exports = stripTags;
