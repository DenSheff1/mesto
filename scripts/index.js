const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

const cardContainer = document.querySelector('.cards__list');

const renderCard = (everyCardData) => {
  cardContainer.insertAdjacentHTML("afterbegin",
  `<li class="card">
  <article class="article">
    <img src=${everyCardData.link} alt=${everyCardData.alt} class="card__photo">
    <div class="card__footer">
      <h3 class="card__title">${everyCardData.name}</h3>
      <button class="card__button card__button_type_like" type="button"></button>
    </div>
  </article>
</li>
`
);
};

initialCards.forEach((everyCardData) => {
  renderCard(everyCardData);
});
















let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form-userinfo');
let profileEditButton = document.querySelector('.profile__button-edit')
let popupCloseButton = document.querySelector('.popup__button-close');
let popupSubmitButton = document.querySelector('.popup__button-submit');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_userinfo_name');
let jobInput = document.querySelector('.popup__input_userinfo_job');

function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

function hidePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    hidePopup();
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', hidePopup);
formElement.addEventListener('submit', formSubmitHandler);
