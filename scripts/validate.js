const formElement = document.querySelector('.popup__form-userinfo');
const formInput = formElement.querySelector('.popup__input_userinfo_name');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (elem, errMessage) => {
  elem.classList.add('popup__input_type_error');
  formError.textContent = errMessage;
  formError.classList.add('form_input-message-error_active');
};

const hideInputError = (elem) => {
  elem.classList.remove('popup__input_type_error');
  formError.classList.remove('form_input-message-error_active');
  formError.textContent = '';
};

const isValid = () => {
  if(!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

formInput.addEventListener('input', isValid);


































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
