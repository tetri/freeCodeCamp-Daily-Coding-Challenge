function updateInventory(inventory, shipment) {
  let items = {};
  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    items[item[1]] = item[0];
  }

  for (let i = 0; i < shipment.length; i++) {
    let item = shipment[i];
    if (items[item[1]]) items[item[1]] += item[0];
    else items[item[1]] = item[0];
  }

  let updated = [];
  for (const item in items) {
    updated.push([items[item], item]);
  }

  return updated;
}

module.exports = updateInventory;
