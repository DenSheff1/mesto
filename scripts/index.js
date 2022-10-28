let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form-userinfo');
let profileEditButton = document.querySelector('.profile__button-edit')
let popupCloseButton = document.querySelector('.popup__button-close');
let popupSubmitButton = document.querySelector('.popup__button-submit');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_userinfo_name');
let jobInput = document.querySelector('.popup__input_userinfo_job');

function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    hidePopup();
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', hidePopup);
formElement.addEventListener('submit', formSubmitHandler);

