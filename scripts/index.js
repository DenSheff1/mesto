import Card from "./Card.js";
import initialCards from "./data.js";

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

const renderCard = (everyCardData) => {
  const card = new Card(everyCardData);
  cardContainer.prepend(card.getView());
};

initialCards.forEach((everyCardData) => {
  renderCard(everyCardData);
});

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
  open(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

btnAdd.addEventListener('click', function() {
  open(popupAdd);
  placeName.value = '';
  placeLink.value = '';
  const btnAddSubmit = document.querySelector('.popup__button-submit_type_add');
  btnAddSubmit.disabled = true;
  btnAddSubmit.classList.add('popup__button-submit_disabled');
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

export default open;
