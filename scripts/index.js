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

const openEditProfileButton = document.querySelector(".button-edit");
const openAddPlaceButton = document.querySelector(".button-add");

const closeModalButtons = document.querySelectorAll(".button-close");

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
  newButtonDelete.className = "button-delete";
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
  newButtonLike.className = "button-like";
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

function handleCloseModal(){
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
  const enter = document.querySelector(".add-place__name")

  const createNewCard = createCard(newPhoto,newLink)
  cardsContainer.prepend(createNewCard);

  event.target.reset();
  handleCloseModal();
}



const cards = document.querySelectorAll(".card");
const photos = document.querySelectorAll(".card__image");

function handleLikeCard(e){
  e.target.classList.toggle("button-like-active");
}

function handleDeleteCard(e){ 
  e.target.parentNode.parentNode.remove();
}

function handleOpenPhoto(e){
  document.querySelector(".photo-popup").classList.remove("modal__inactive");
  document.querySelector(".photo-popup").classList.add("modal__active");

  e.target.classList.add("popUpPhoto");

  const newImgPopup = document.querySelector(".photo-popup__image");
  newImgPopup.src = e.target.src;
  newImgPopup.alt = e.target.alt;

  const newTitlePopup = document.querySelector(".photo-popup__title");
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