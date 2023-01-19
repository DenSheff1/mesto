export default class Card {
  constructor({ name, link }, handleCardClick) {
    this._name = name;
    this._link = link;
    this._newCard = this._getTemplate();
    this._likeBtn = this._newCard.querySelector('.card__button_type_like-disabled');
    this._deleteBtn = this._newCard.querySelector('.card__button_type_remove');
    this._cardPhoto = this._newCard.querySelector('.card__photo');
    this._cardTitle = this._newCard.querySelector('.card__title');
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = document
    .querySelector('#card-template')
    .content.querySelector('.card')
    .cloneNode(true);
    return card;
  }

  _setData() {
    this._cardTitle.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _likeCard() {
    this._likeBtn.classList.toggle('card__button_type_like-normal');
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener('click', () => this._deleteCard());
    this._likeBtn.addEventListener('click', () => this._likeCard());
    this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  getView() {
    this._setData();
    this._setEventListeners();
    return this._newCard;
  }
}
