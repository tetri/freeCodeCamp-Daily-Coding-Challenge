function titleCase(title) {
    return title
        .toLowerCase()
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1, w.length))
        .join(" ");
}

module.exports = titleCase;
