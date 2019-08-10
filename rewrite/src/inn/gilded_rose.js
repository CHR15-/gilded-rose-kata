let items = [];

export const update_quality = (items) => {
  items.forEach(item => {
    item.updateItem();
  });
}
