export default class FormValidator {
  constructor(settings, form) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = form;
  }

  _showInputError() {

  }

  _hideInputError() {

  }

  _checkValidity() {

  }

  _setEventListeners() {

  }

  _hasInvalidInput() {

  }

  _toggleButtonState() {

  }

  enableValidation() {
    console.log("test");
  }

}

const showInputError = (formElement, inputElement, errMessage, selectorList) => {
  const errElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(selectorList.inputErrorClass);
  errElement.textContent = errMessage;
  errElement.classList.add(selectorList.errorClass);
};

const hideInputError = (formElement, inputElement, selectorList) => {
  const errElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(selectorList.inputErrorClass);
  errElement.classList.remove(selectorList.errorClass);
  errElement.textContent = '';
};

const isValid = (formElement, inputElement, selectorList) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectorList);
  } else {
    hideInputError(formElement, inputElement, selectorList);
  }
};

const setEventListener = (formElement, selectorList) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorList.inputSelector));
  const buttonElement = formElement.querySelector(selectorList.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, selectorList);
      toggleButtonState(inputList, buttonElement, selectorList);
    });
  });
};

const enableValidation = (selectorList) => {
  const formList = Array.from(document.querySelectorAll(selectorList.formSelector));
  formList.forEach((formElement) => {
    setEventListener(formElement, selectorList);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, selectorList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorList.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(selectorList.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-message-error_active'
});
