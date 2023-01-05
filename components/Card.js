import { open, popupPhoto, bigPhotoItself, bigPhotoCaption } from "../pages/index.js";

export default class Card {
  constructor({ name, link }) {
    this._name = name;
    this._link = link;
    this._newCard = this._getTemplate();
    this._likeBtn = this._newCard.querySelector('.card__button_type_like-disabled');
    this._deleteBtn = this._newCard.querySelector('.card__button_type_remove');
    this._cardImg = this._newCard.querySelector('.card__photo');
  }

  _getTemplate() {
    const card = document
     .querySelector('#card-template')
     .content.querySelector('.card')
     .cloneNode(true);
     return card;
  }

  _setData() {
    const cardTitle = this._newCard.querySelector('.card__title');
    cardTitle.textContent = this._name;

    const cardPhoto = this._newCard.querySelector('.card__photo');
    cardPhoto.src = this._link;
    cardPhoto.alt = this._name;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _likeCard() {
    this._likeBtn.classList.toggle('card__button_type_like-normal');
  }

  _enlargePhoto() {
    bigPhotoItself.src = this._link;
    bigPhotoItself.alt = this._name;
    bigPhotoCaption.textContent = this._name;
    open(popupPhoto);
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener('click', () => this._deleteCard());
    this._likeBtn.addEventListener('click', () => this._likeCard());
    this._cardImg.addEventListener('click', () => this._enlargePhoto());
  }

  getView() {
    this._setData();
    this._setEventListeners();
    return this._newCard;
  }
}
