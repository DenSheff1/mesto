export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._inputs = Array.from(form.querySelectorAll(settings.inputSelector));
    this._submitBtn = form.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errMessage) {
    const errElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._inputErrorClass);
    errElement.classList.add(this._errorClass);
    errElement.textContent = errMessage;
  }

  _hideInputError(inputElement) {
    const errElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._inputErrorClass);
    errElement.classList.remove(this._errorClass);
    errElement.textContent = '';
  }

  _checkValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _setEventListeners() {
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState(this._hasInvalidInput());
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputs)) {
      this._submitBtn.classList.add(this._inactiveButtonClass);
      this._submitBtn.disabled = true;
    } else {
      this._submitBtn.classList.remove(this._inactiveButtonClass);
      this._submitBtn.disabled = false;
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
