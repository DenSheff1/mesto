import initialCards from "./data.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-message-error_active'
};

const allPopups = document.querySelectorAll('.popup');
const cardContainer = document.querySelector('.cards__list');
const btnEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const btnAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add-card');
const formProfile = document.querySelector('.popup__form-userinfo');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_userinfo_name');
const jobInput = document.querySelector('.popup__input_userinfo_job');
const formAddCard = document.querySelector('.popup__form-newplace');
const placeName = document.querySelector('.popup__input_place_name');
const placeLink = document.querySelector('.popup__input_place_link');
const popupPhoto = document.querySelector('.popup_type_photo');
const bigPhotoItself = document.querySelector('.popup__big-photo');
const bigPhotoCaption = document.querySelector('.popup__caption');

const handleSubmitProfileForm = (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}
formProfile.addEventListener('submit', handleSubmitProfileForm);

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeName.value, link: placeLink.value });
  closePopup(popupAdd);
}
formAddCard.addEventListener('submit', handleSubmitAddCardForm);

btnEdit.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  open(popupEdit);
});

btnAdd.addEventListener('click', function() {
  placeName.value = '';
  placeLink.value = '';
  open(popupAdd);
  validationFormAddCard.fixBtnState();
});

allPopups.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    if (event.target === event.currentTarget || event.target.classList.contains('popup__button-close')) {
      closePopup(element);
    };
  });
});

const open = function openPopup(popupElem) {
  popupElem.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
};

function closePopup(popupElem) {
  popupElem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
};

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//???????????????? ???? ????????????
const renderCard = (params) => {
  const card = new Card(params);
  cardContainer.prepend(card.getView());
};

initialCards.forEach((params) => {
  renderCard(params);
});

//?????????????????? ???? ????????????
const validationFormProfile = new FormValidator(settings, formProfile);
validationFormProfile.enableValidation();

const validationFormAddCard = new FormValidator(settings, formAddCard);
validationFormAddCard.enableValidation();

//??????????????
export { open, popupPhoto, bigPhotoItself, bigPhotoCaption };
