//Cards container
export const cardContainer = document.querySelector('.cards__list');
//Buttons
export const btnEdit = document.querySelector('.profile__button-edit');
export const btnAdd = document.querySelector('.profile__button-add');
//Forms
export const formAddCard = document.querySelector('.popup__form-newplace');
export const formProfile = document.querySelector('.popup__form-userinfo');
//Texts
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');
//Popups
export const popupEdit = document.querySelector('.popup_type_edit-profile');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupAdd = document.querySelector('.popup_type_add-card');
//Inputs
export const nameInput = document.querySelector('.popup__input_userinfo_name');
export const jobInput = document.querySelector('.popup__input_userinfo_job');
//Configuration for validation
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-message-error_active'
};
