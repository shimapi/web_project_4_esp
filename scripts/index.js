const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const openEditProfileButton = document.querySelector(".button__edit");
const openAddPlaceButton = document.querySelector(".button__add");

const closeModalButtons = document.querySelectorAll(".button__close");

const modals = document.querySelectorAll(".modal");
const selectedModals = document.querySelectorAll("[data-target]");

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const cardsContainer = document.querySelector(".main-cards");


function createCard(name,link){
  const newCard = document.createElement("article");
  newCard.classList.add("card");

  const newSectionPhoto = document.createElement("section")
  newSectionPhoto.className = "card__photo";

  const newButtonDelete = document.createElement("button");
  newButtonDelete.className = "button__delete";
  newButtonDelete.addEventListener("click", handleDeleteCard);

  const newImg = document.createElement("img");
  newImg.src = link;
  newImg.alt = name;
  newImg.className = "card__image";
  newImg.dataset.target = "#photoPopUp";
  newImg.addEventListener('click', handleOpenPhoto);

  const newSectionName = document.createElement("section")
  newSectionName.className = "card__name";

  const newTitle = document.createElement('h3');
  newTitle.className = "card__title";
  newTitle.textContent = name;

  const newButtonLike = document.createElement("button");
  newButtonLike.className = "button__like";
  newButtonLike.addEventListener("click", handleLikeCard);

  newCard.appendChild(newSectionPhoto);
  newSectionPhoto.appendChild(newButtonDelete);
  newSectionPhoto.appendChild(newImg);
  newCard.appendChild(newSectionName);
  newSectionName.appendChild(newTitle);
  newSectionName.appendChild(newButtonLike);

  return newCard;
}

function handleInitialCards(){
  initialCards.forEach((card) => {
    const name = card.name;
    const link = card.link;
    const new_card = createCard(name,link);
    cardsContainer.appendChild(new_card);
  })
}

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
  handleInitialCards();
}

infoInicial();

function handleCloseModal(event){
  modals.forEach((modal) => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal__inactive");
  })
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
  handleCloseModal();
}

function handleAddPlaceFormSubmit(event) {
  event.preventDefault();
  const newPhoto = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;

  const createNewCard = createCard(newPhoto,newLink)
  cardsContainer.prepend(createNewCard);
  
  event.target.reset();
  handleCloseModal();
}

const cards = document.querySelectorAll(".card");
const photos = document.querySelectorAll(".card__image");

//funciona OK
function handleLikeCard(e){
  e.target.classList.toggle("button__like-active");
}

//funciona OK
function handleDeleteCard(e){ 
  cards.forEach((card) => {
    e.target.classList.add("deletedCard");
  })
  const deletedCard = document.querySelector(".deletedCard");
  const toRemoveCard = deletedCard.parentNode.parentNode;
  toRemoveCard.remove();
}

//funciona OK
function handleOpenPhoto(e){
  document.querySelector(".photo-popup").classList.remove("modal__inactive");
  document.querySelector(".photo-popup").classList.add("modal__active");

  photos.forEach((photo) => {
    e.target.classList.add("popUpPhoto");
  })

  const newImgPopup = document.querySelector(".photo-popup__image");
  //newImgPopup.src = document.querySelector(".popUpPhoto").getAttribute('src');
  //newImgPopup.alt = document.querySelector(".popUpPhoto").getAttribute('alt');
  newImgPopup.src = e.target.src;
  newImgPopup.alt = e.target.alt;

  const newTitlePopup = document.querySelector(".photo-popup__title");
  //newTitlePopup.textContent = document.querySelector(".popUpPhoto").getAttribute('alt');
  newTitlePopup.textContent = e.target.alt;
}

const selectedPopUp = selectedModals.forEach((selectedModal)=>{
  selectedModal.addEventListener("click", () => {
    document.querySelector(selectedModal.dataset.target).classList.remove("modal__inactive");
    document.querySelector(selectedModal.dataset.target).classList.add("modal__active");
  })
})

openEditProfilePopUp.addEventListener('submit', handleProfileFormSubmit);
openAddPlacePopUp.addEventListener('submit', handleAddPlaceFormSubmit);

closeModalButtons.forEach((button) => {
  button.addEventListener("click",handleCloseModal);
})