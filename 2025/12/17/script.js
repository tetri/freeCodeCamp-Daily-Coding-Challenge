function parseBlockquote(markdown) {
    markdown = markdown.trim();
    if (markdown[0] == ">")
        return `<blockquote>${markdown.replace(/^>/g, "").trim()}</blockquote>`;
    return markdown;
}

module.exports = parseBlockquote;
