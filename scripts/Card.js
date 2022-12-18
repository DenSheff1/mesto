import open from "./index.js";

class Card {
  constructor({ name, link }) {
    this._name = name;
    this._link = link;
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
    this._newCard
    .querySelector('.card__button_type_like-disabled')
    .classList.toggle('card__button_type_like-normal');
  }

  _enlargePhoto() {
    const popupPhoto = document.querySelector('.popup_type_photo');
    const bigPhotoItself = document.querySelector('.popup__big-photo');
    const bigPhotoCaption = document.querySelector('.popup__caption');
    open(popupPhoto);
    bigPhotoItself.src = this._link;
    bigPhotoItself.alt = this._name;
    bigPhotoCaption.textContent = this._name;
  }

  _setEventListeners() {
    const cardDeleteBtn = this._newCard
    .querySelector('.card__button_type_remove');
    cardDeleteBtn.addEventListener('click', () => { this._deleteCard() })

    const cardLikeBtn = this._newCard
    .querySelector('.card__button_type_like-disabled');
    cardLikeBtn.addEventListener('click', () => { this._likeCard() })

    const cardImg = this._newCard
    .querySelector('.card__photo');
    cardImg.addEventListener('click', () => { this._enlargePhoto() })
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();
    return this._newCard;
  }
}

export default Card;
