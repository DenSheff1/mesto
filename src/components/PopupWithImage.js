import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ selector }) {
    super({ selector });
    this._popupImage = this._selector.querySelector('.popup__big-photo');
    this._popupImageText = this._selector.querySelector('.popup__caption');
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageText.textContent = name;
    super.open();
  }
}
