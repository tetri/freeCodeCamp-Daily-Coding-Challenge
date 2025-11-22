function scaleRecipe(ingredients, scale) {
  for (let i in ingredients) {
    let quantity = parseFloat(ingredients[i].split(" ")[0]);
    let newQuantity = quantity * scale;
    ingredients[i] = ingredients[i].replace(
      quantity.toString(),
      newQuantity.toString()
    );
  }
  return ingredients;
}

module.exports = scaleRecipe;
