import Section from "./Section.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import { exportUserInfo, UserInfo } from "./UserInfo.js"; //aunque no se está usando, 
// en este archivo, se despliega al exportarla! :0
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
  modals
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
  new PopupWithForm(openEditProfilePopUp).open()
})
openAddPlaceButton.addEventListener("click", () => {
  new PopupWithForm(openAddPlacePopUp).open();
})

closeModalButtons.forEach((buttonClose) => {
  buttonClose.addEventListener("click", () => {
    const modalActive = document.querySelector(".modal_active");
    new Popup(modalActive).close();
  });
})










const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  const setGetUserInfo = {  textName: editProfileName.value,
                            textAbout: editProfileAbout.value }
  new UserInfo(setGetUserInfo).setUserInfo()

  textName.textContent = editProfileName.value;
  textAbout.textContent = editProfileAbout.value;
  //handleClosePopUp();
  const modalActive = document.querySelector(".modal_active");
  new Popup(modalActive).close();
}

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);



//handle esc key
//handle out click setEventListeners

handleInitialCards.renderItems();

//console.log(Array.from(modals))
