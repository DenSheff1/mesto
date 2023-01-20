import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selector, handleSubmitForm }) {
    super({ selector });
    this._form = selector.querySelector('form');
    this._inputData = {};
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._inputs.forEach((input) => {
    this._inputData[input.name] = input.value
    });
    return this._inputData;
  }

  setValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      this._handleSubmitForm(this._getInputValues());
      event.preventDefault();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
