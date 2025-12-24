function parseImage(markdown) {
    return markdown.replace(
        /!\[([^\]]+)\]\(([^\)]+)\)/g,
        '<img src="$2" alt="$1">'
    );
}

module.exports = parseImage;
