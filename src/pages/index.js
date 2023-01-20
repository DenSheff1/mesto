import './index.css';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards } from "../utils/data.js";
import {
  cardContainer,
  btnEdit,
  btnAdd,
  formAddCard,
  formProfile,
  profileName,
  profileAbout,
  popupEdit,
  popupPhoto,
  popupAdd,
  nameInput,
  jobInput,
  settings
} from "../utils/constants.js";

const imgPopup = new PopupWithImage({ selector: popupPhoto });
const userInfo = new UserInfo(profileName, profileAbout);

function handleCardClick(name, link) {
  imgPopup.open(name, link);
}

const generateCard = (data) => {
  const newCard = new Card(data, '#card-template', handleCardClick);
  return newCard.getView();
}

const renderCards = new Section({
  items: initialCards,
  renderer: (params) => { renderCards.addItem(generateCard(params))}}, cardContainer);
renderCards.renderItems();

const cardPopup = new PopupWithForm({
  selector: popupAdd,
  handleSubmitForm: (params) => {
    const addedcard = { name: params.placename, link: params.link };
    renderCards.addItem(generateCard(addedcard));
    cardPopup.close();
  },
});

const userPopup = new PopupWithForm({
  selector: popupEdit,
  handleSubmitForm: (params) => {
    userInfo.setUserInfo(params);
    userPopup.close();
  },
});

btnAdd.addEventListener('click', () => {
  validationFormAddCard.resetValidation();
  cardPopup.open();
});

btnEdit.addEventListener('click', () => {
  userPopup.setValues(userInfo.getUserInfo());
  validationFormProfile.resetValidation();
  userPopup.open();
})

imgPopup.setEventListeners();
cardPopup.setEventListeners();
userPopup.setEventListeners();

const validationFormProfile = new FormValidator(settings, formProfile);
validationFormProfile.enableValidation();

const validationFormAddCard = new FormValidator(settings, formAddCard);
validationFormAddCard.enableValidation();
