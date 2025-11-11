function generateSlug(str) {
  let slug = str.toLowerCase();
  slug = slug.replace(/[^\w\d\s]/g, "");
  slug = slug.trim();
  slug = slug.replace(/\s+/g, "%20");
  return slug;
}

module.exports = generateSlug;
