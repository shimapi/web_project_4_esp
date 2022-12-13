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
  editProfileAbout
}from "./constants.js";

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardItem) => {
    const createNewCard = 
      new Card(cardItem, config.cardTemplate);
      cardsContainer.appendChild(createNewCard.generateCard());     
  }
}
);
const setGetUserInfo = { textName: editProfileName,
                         textAbout: editProfileAbout }
const aa = (setGetUserInfo) => {
   new UserInfo(setGetUserInfo).setUserInfo()
}

console.log(setGetUserInfo)

openEditProfileButton.addEventListener("click", () => {
  new PopupWithForm(openEditProfilePopUp).open()
})
openAddPlaceButton.addEventListener("click", () => {
  new PopupWithForm(openAddPlacePopUp).open();
})


handleInitialCards.renderItems();


