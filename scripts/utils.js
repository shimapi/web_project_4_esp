// controladores de eventos
// función abre/cierra popup

import Card from "./Card.js";


const openEditProfileButton = document.querySelector(".button-edit");
const openAddPlaceButton = document.querySelector(".button-add");

const closeModalButtons = document.querySelectorAll(".button-close");

const modals = document.querySelectorAll(".modal");

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");

const cardsContainer = document.querySelector(".main-cards");

const textName = document.querySelector(".main-text__name");
const textAbout = document.querySelector(".main-text__about");
const editProfileName = document.querySelector(".edit-profile__name");
const editProfileAbout = document.querySelector(".edit-profile__about");

const addPlaceName = document.querySelector(".add-place__name");
const addPlaceLink = document.querySelector(".add-place__link");



export function handleOpenPopUp(modal) {
  modal.classList.add("modal_active");
  document.addEventListener("keydown", handleEscapeKey);
}

function handleClosePopUp(){
  modals.forEach((modal) => {
    modal.classList.remove("modal_active");
  });
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  textName.textContent = editProfileName.value;
  textAbout.textContent = editProfileAbout.value;
  handleClosePopUp();
}


function handleAddPlaceFormSubmit(event) {
  event.preventDefault();
  const cardNewItem = JSON.parse(`{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`);
  const createNewCard = new Card(cardNewItem,"card-template");
  cardsContainer.prepend(createNewCard.generateCard());
  event.target.reset();
  handleClosePopUp();
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


function handleEscapeKey(e) {
  if (e.key === "Escape" || e.key === "esc") {
    handleClosePopUp();
  }
}

function handleClickOutsideModal(evt) {
  if (evt.target.classList.contains("modal_active")) {
    handleClosePopUp();
  }
}
modals.forEach((modal) => {
  modal.addEventListener("click", handleClickOutsideModal);
})


export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button-save",
  inactiveButtonClass: "button-inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  errorSufix: "-error"
}