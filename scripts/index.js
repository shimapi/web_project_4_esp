const originalName = "Jacques Cousteau";
const originalAbout = "Explorer";

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

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const cardsContainer = document.querySelector(".main-cards");

let textName = document.querySelector(".main-text__name");
let textAbout = document.querySelector(".main-text__about");
let editProfileName = document.querySelector(".edit-profile__name");
let editProfileAbout = document.querySelector(".edit-profile__about");

const addPlaceName = document.querySelector(".add-place__name");
const addPlaceLink = document.querySelector(".add-place__link");

const cards = document.querySelectorAll(".card");
const photos = document.querySelectorAll(".card__image");

const imgPopup = document.querySelector(".photo-popup__image");
const titlePopup = document.querySelector(".photo-popup__title");

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
  newImg.addEventListener("click", handleOpenPhoto);

  const newSectionName = document.createElement("section")
  newSectionName.className = "card__name";

  const newTitle = document.createElement("h3");
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
    cardsContainer.appendChild(createCard(card.name,card.link));
  })
}

function initApp(){
  textName.textContent = originalName;
  textAbout.textContent = originalAbout;
  editProfileName.value = originalName;
  editProfileAbout.value = originalAbout;
  handleInitialCards();
}

function handleOpenPopUp(popup) {
  popup.classList.remove("modal_inactive");
  popup.classList.add("modal_active");
}

function handleClosePopUp(){
  modals.forEach((modal) => {
    modal.classList.remove("modal_active");
    modal.classList.add("modal_inactive");
    modal.classList.add("modal_closing");
  })
} 

function handleProfileFormSubmit(event) {
  event.preventDefault();
  textName.textContent = editProfileName.value;
  textAbout.textContent = editProfileAbout.value;
  handleClosePopUp();
}

function handleAddPlaceFormSubmit(event) {
  event.preventDefault();
  cardsContainer.prepend(createCard(addPlaceName.value,addPlaceLink.value));
  event.target.reset();
  handleClosePopUp();
}

function handleLikeCard(e){
  e.target.classList.toggle("button-like-active");
}

function handleDeleteCard(e){ 
  //e.target.parentNode.parentNode.remove();
  e.target.closest(".card").remove();
}

function handleOpenPhoto(e){
  handleOpenPopUp(openPhotoPopUp);
  imgPopup.src = e.target.src;
  imgPopup.alt = e.target.alt;
  titlePopup.textContent = e.target.alt;
}

openEditProfileButton.addEventListener("click", function (){
  handleOpenPopUp(openEditProfilePopUp)
})

openAddPlaceButton.addEventListener("click", function (){
  handleOpenPopUp(openAddPlacePopUp)
})

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);

closeModalButtons.forEach((button) => {
  button.addEventListener("click", handleClosePopUp);
})

initApp();
