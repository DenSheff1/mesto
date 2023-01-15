export default class Popup {
  constructor({ selector }) {
    this._selector = selector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._selector.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget || event.target.classList.contains('popup__button-close')) {
        this.close();
      }
  });
}
}
