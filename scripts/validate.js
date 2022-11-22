const addSubmit = document.querySelector('.popup__button-submit_type_add');
const editSubmit = document.querySelector('.popup__button-submit_type_edit');

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    editSubmit.removeAttribute('disabled');
    editSubmit.classList.remove('popup__button-submit_disabled');
  } else {
    editSubmit.setAttribute('disabled', true);
    editSubmit.classList.add('popup__button-submit_disabled');
  }
}

formProfile.addEventListener('input', function (evt) {
  const isValid = nameInput.value.length > 0 && jobInput.value.length > 0;
  setSubmitButtonState(isValid);
});
