// константы для генерации карточек
const cardContainer = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const bigPhotoItself = document.querySelector('.popup__big-photo');
const bigPhotoCaption = document.querySelector('.popup__caption');

//константы для попапов
//редактирование данных профиля
const btnEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit-profile');
const btnCloseEditProf = document.querySelector('.popup__button-close-edit-profile');
//добавление карточек мест
const btnAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add-card');
const btnCloseAddCard = document.querySelector('.popup__button-close-add-card');
//увеличение фотографии
const popupPhoto = document.querySelector('.popup_type_photo');
const btnCloseBigPhoto = document.querySelector('.popup__button-close-big-photo');

//константы для работы с данными профиля пользователя в попапе
const formProfile = document.querySelector('.popup__form-userinfo');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_userinfo_name');
const jobInput = document.querySelector('.popup__input_userinfo_job');

//добавление карточек через попап
const formAddCard = document.querySelector('.popup__form-newplace');
const placeName = document.querySelector('.popup__input_place_name');
const placeLink = document.querySelector('.popup__input_place_link');

//создание карточек и взаимодействие с ними
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
}

const handleLikeCard = (event) => {
  event.target.closest('.card__button_type_like-disabled').classList.toggle('card__button_type_like-normal');
}

const handleBigPhoto = (event) => {
  openPopup(popupPhoto);
  bigPhotoItself.src = event.target.src;
  bigPhotoItself.alt = event.target.alt;
  bigPhotoCaption.textContent = event.target.alt;
}

const generateCard = (everyCardData) => {
  const instanceCard = cardTemplate.cloneNode(true);

  const cardTitle = instanceCard.querySelector('.card__title');
  cardTitle.textContent = everyCardData.name;

  const cardPhoto = instanceCard.querySelector('.card__photo');
  cardPhoto.src = everyCardData.link;
  cardPhoto.alt = everyCardData.name;

  const cardDeleteBtn = instanceCard.querySelector('.card__button_type_remove');
  cardDeleteBtn.addEventListener('click', handleDeleteCard);

  const cardLikeBtn = instanceCard.querySelector('.card__button_type_like-disabled');
  cardLikeBtn.addEventListener('click', handleLikeCard);

  const cardImg = instanceCard.querySelector('.card__photo');
  cardImg.addEventListener('click', handleBigPhoto);

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

//открываем попапы
function openPopup(popupElem) {
  popupElem.classList.add('popup_opened');
};

btnEdit.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  setSubmitButtonState(true);
});

btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
  placeName.value = '';
  placeLink.value = '';
});

//закрываем попапы
function closePopup(popupElem) {
  popupElem.classList.remove('popup_opened');
};

btnCloseAddCard.addEventListener('click', function() {
  closePopup(popupAdd);
});

btnCloseEditProf.addEventListener('click', function() {
  closePopup(popupEdit);
});

btnCloseBigPhoto.addEventListener('click', function() {
  closePopup(popupPhoto);
});

// закрываем попапы кнопкой Esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(popupAdd);
    closePopup(popupEdit);
    closePopup(popupPhoto);
  };
});

//редактирование данных профиля
const handleSubmitProfileForm = (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEdit);
}
formProfile.addEventListener('submit', handleSubmitProfileForm);

//добавление карточек
const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({ name: placeName.value, link: placeLink.value });
  closePopup(popupAdd);
}
formAddCard.addEventListener('submit', handleSubmitAddCardForm);
