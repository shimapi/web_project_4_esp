import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { cardsContainer, editProfileName, editProfileAbout, textAbout, textName, config, openEditProfileButton,openAddPlaceButton, openEditProfilePopUp, openAddPlacePopUp, closeModalButtons, modals } 
  from "./constants.js";
import Popup from "./Popup.js";
  

/* export function handleOpenPopUp(modal) {
  modal.classList.add("modal_active");
  document.addEventListener("keydown", handleEscapeKey);
}

function handleClosePopUp(){
  modals.forEach((modal) => {
    modal.classList.remove("modal_active");
  });
  document.removeEventListener("keydown", handleEscapeKey);
} */

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  textName.textContent = editProfileName.value;
  textAbout.textContent = editProfileAbout.value;
  //handleClosePopUp();
    new Popup(event).close(event);

}

const handleAddPlaceFormSubmit = (event) => {
  event.preventDefault();
  const cardNewItem = JSON.parse(`{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`);
  const createNewCard = new Card(cardNewItem,"card-template");
  const formSelectorAddPlace = ".add-place__form";
  cardsContainer.prepend(createNewCard.generateCard());
  handleClosePopUp();
  event.target.reset();
  new FormValidator(config,formSelectorAddPlace).enableValidation();
}

openEditProfileButton.addEventListener("click", () => {
  new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
  //handleOpenPopUp(openEditProfilePopUp)
})

openAddPlaceButton.addEventListener("click", () => {
  handleOpenPopUp(openAddPlacePopUp)
})

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);

/*
closeModalButtons.forEach((button) => {
  button.addEventListener("click", handleClosePopUp);
})

function handleEscapeKey(event) {
  if (event.key === "Escape" || event.key === "esc") {
    handleClosePopUp();
  }
}

function handleClickOutsideModal(event) {
  if (event.target.classList.contains("modal_active")) {
    handleClosePopUp();
  }
}
modals.forEach((modal) => {
  modal.addEventListener("click", handleClickOutsideModal);
})
*/