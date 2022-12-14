import Section from "./Section.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import {
  initialCards,
  cardsContainer,
  openAddPlacePopUp,
  openEditProfilePopUp,
  openEditProfileButton,
  openAddPlaceButton,
  config,
  editProfileName,
  editProfileAbout,
  closeModalButtons,
  textName,
  textAbout,
  originalAbout,
  originalName
}from "./constants.js";

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardItem) => {
    const createNewCard = 
      new Card(cardItem, config.cardTemplate);
      cardsContainer.appendChild(createNewCard.generateCard());     
  }
});

openEditProfileButton.addEventListener("click", () => {
  new UserInfo(textName, textAbout).getUserInfo();
  new PopupWithForm(openEditProfilePopUp, handleProfileFormSubmit).open();
})
openAddPlaceButton.addEventListener("click", () => {
  new PopupWithForm(openAddPlacePopUp, handleAddPlaceFormSubmit).open();
})

closeModalButtons.forEach((buttonClose) => {
  buttonClose.addEventListener("click", () => {
    const modalActive = document.querySelector(".modal_active");
    new Popup(modalActive).close();
  });
})


const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  const setGetUserInfo = {  textName: editProfileName.valueOf,
                            textAbout: editProfileAbout.valueOf }
  new UserInfo(setGetUserInfo).setUserInfo()
  new UserInfo.setUserInfo(data.name, data.about);


 // textName.textContent = editProfileName.value;
  //textAbout.textContent = editProfileAbout.value;
  //handleClosePopUp();
  const modalActive = document.querySelector(".modal_active");
  new Popup(modalActive).close();
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

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);



//handle esc key
//handle out click setEventListeners

handleInitialCards.renderItems();

//console.log(Array.from(modals))
const exportUserInfo = new UserInfo(textName,textAbout)
exportUserInfo.setUserInfo(originalName,originalAbout)