export const allPopups = document.querySelectorAll('.popup');
export const cardContainer = document.querySelector('.cards__list');
export const btnEdit = document.querySelector('.profile__button-edit');
export const popupEdit = document.querySelector('.popup_type_edit-profile');
export const btnAdd = document.querySelector('.profile__button-add');
export const popupAdd = document.querySelector('.popup_type_add-card');
export const formProfile = document.querySelector('.popup__form-userinfo');
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');
export const nameInput = document.querySelector('.popup__input_userinfo_name');
export const jobInput = document.querySelector('.popup__input_userinfo_job');
export const formAddCard = document.querySelector('.popup__form-newplace');
export const placeName = document.querySelector('.popup__input_place_name');
export const placeLink = document.querySelector('.popup__input_place_link');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const bigPhotoItself = document.querySelector('.popup__big-photo');
export const bigPhotoCaption = document.querySelector('.popup__caption');

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-message-error_active'
};
