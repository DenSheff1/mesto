const showInputError = (formElement, inputElement, errMessage) => {
  const errElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup__input_type_error');
  errElement.textContent = errMessage;
  errElement.classList.add('form_input-message-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup__input_type_error');
  errElement.classList.remove('form_input-message-error_active');
  errElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form-userinfo'));
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};
enableValidation();
































const addSubmit = document.querySelector('.popup__button-submit_type_add');
const editSubmit = document.querySelector('.popup__button-submit_type_edit');

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    editSubmit.removeAttribute('disabled');
    editSubmit.classList.remove('popup__button-submit_disabled');
    addSubmit.removeAttribute('disabled');
    addSubmit.classList.remove('popup__button-submit_disabled');
  } else {
    editSubmit.setAttribute('disabled', true);
    editSubmit.classList.add('popup__button-submit_disabled');
    addSubmit.setAttribute('disabled', true);
    addSubmit.classList.add('popup__button-submit_disabled');
  }
}

formProfile.addEventListener('input', function (evt) {
  const editIsValid = nameInput.value.length > 0 && jobInput.value.length > 0;
  setSubmitButtonState(editIsValid);
});

formAddCard.addEventListener('input', function (evt) {
  const addIsValid = placeName.value.length > 0 && placeLink.value.length > 0;
  setSubmitButtonState(addIsValid);
});
