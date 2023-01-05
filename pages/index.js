import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards } from "../utils/data.js";
import {
  settings,
  allPopups,
  cardContainer,
  btnEdit,
  popupEdit,
  btnAdd,
  popupAdd,
  formProfile,
  profileName,
  profileAbout,
  nameInput,
  jobInput,
  formAddCard,
  placeName,
  placeLink,
  popupPhoto,
  bigPhotoItself,
  bigPhotoCaption
} from "../utils/constants.js";

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

//Карточки из класса
const renderCard = (params) => {
  const card = new Card(params);
  cardContainer.prepend(card.getView());
};

initialCards.forEach((params) => {
  renderCard(params);
});

//Валидация из класса
const validationFormProfile = new FormValidator(settings, formProfile);
validationFormProfile.enableValidation();

const validationFormAddCard = new FormValidator(settings, formAddCard);
validationFormAddCard.enableValidation();

//Экспорт
export { open, popupPhoto, bigPhotoItself, bigPhotoCaption };
