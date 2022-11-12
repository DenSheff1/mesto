//данные для карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// переменные, которые потребуются для генерации карточек
const cardContainer = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

//создаем карточки
const generateCard = (everyCardData) => {
  const instanceCard = cardTemplate.cloneNode(true);

  const cardTitle = instanceCard.querySelector('.card__title');
  cardTitle.textContent = everyCardData.name;

  const cardPhoto = instanceCard.querySelector('.card__photo');
  cardPhoto.src = everyCardData.link;
  cardPhoto.alt = everyCardData.name;

  return instanceCard;
}

//добавляем созданные карточки в контейнер на странице
const renderCard = (everyCardData) => {
  cardContainer.prepend(generateCard(everyCardData));
};

//обходим массив с объектами, в каждом собираем инфу
initialCards.forEach((everyCardData) => {
  renderCard(everyCardData);
});

//открытие и закрытие попапов
const popupEdit = document.querySelector('.popup__edit-profile');
const popupAdd = document.querySelector('.popup__add-card');
const btnEdit = document.querySelector('.profile__button-edit');
const btnAdd = document.querySelector('.profile__button-add');
const btnCloseAddCard = document.querySelector('.popup__button-close-add-card');
const btnCloseEditProf = document.querySelector('.popup__button-close-edit-profile');

function openPopup(popupElem) {
  popupElem.classList.add('popup_opened');
};

btnEdit.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
  placeName.value = '';
  placeLink.value = '';
});

function closePopup(popupElem) {
  popupElem.classList.remove('popup_opened');
};

btnCloseAddCard.addEventListener('click', function() {
  closePopup(popupAdd);
});

btnCloseEditProf.addEventListener('click', function() {
  closePopup(popupEdit);
});

//работа с данными профиля пользователя в попапе
const formProfile = document.querySelector('.popup__form-userinfo');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_userinfo_name');
const jobInput = document.querySelector('.popup__input_userinfo_job');

const handleSubmitProfileForm = (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEdit);
}

formProfile.addEventListener('submit', handleSubmitProfileForm);

//добавление карточек через попап
const formAddCard = document.querySelector('.popup__form-newplace');
const placeName = document.querySelector('.popup__input_place_name');
const placeLink = document.querySelector('.popup__input_place_link');

const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeName.value, link: placeLink.value });
  closePopup(popupAdd);
}

formAddCard.addEventListener('submit', handleSubmitAddCardForm);
