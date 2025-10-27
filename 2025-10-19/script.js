function extractAttributes(element) {
  const attributePattern = /(\w+)=["']([^"']+)["']/g;
  const attributes = [];
  let match;
  while ((match = attributePattern.exec(element)) !== null) {
    attributes.push(`${match[1]}, ${match[2]}`);
  }
  return attributes;
}

module.exports = extractAttributes;
