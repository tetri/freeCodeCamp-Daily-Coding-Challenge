function convert(heading) {
    heading = heading.trim();

    let h = 0;
    while (heading.startsWith('#')) {
        heading = heading.slice(1);
        h++;
    }

    if (h == 0)
        return 'Invalid format';

    if (h > 6)
        return 'Invalid format';

    if (heading[0] != ' ')
        return 'Invalid format';

    heading = heading.trim();

    return `<h${h}>${heading}</h${h}>`;
}

module.exports = convert;