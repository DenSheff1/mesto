export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._items.forEach((params) => {
      this._renderer(params);
    });
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }
}
