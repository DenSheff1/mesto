let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let profileEditButton = document.querySelector('.profile__button-edit')
let popupCloseButton = document.querySelector('.popup__button-close');
let popupSubmitButton = document.querySelector('.popup__button-submit');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('#username');
let jobInput = document.querySelector('#userjob');

function showPopup() {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function hidePopup() {
  popup.classList.remove('popup__opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', hidePopup);
formElement.addEventListener('submit', formSubmitHandler);
popupSubmitButton.addEventListener('click', hidePopup);
