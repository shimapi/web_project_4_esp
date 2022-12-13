import Section from "./Section.js";
import Card from "./Card.js";
import UserInfo from "./UserInfo.js";
import Popup from "./Popup.js";

import FormValidator from "./FormValidator.js";
import {
  originalAbout,
  originalName,
  initialCards,
  formSelectorAddPlace,
  formSelectorProfile,
  cardsContainer,
  editProfileName,
  editProfileAbout,
  textAbout,
  textName,
  config } 
  from "./constants.js";

/* 
const handleInitialCards0 = () => {
  initialCards.forEach((cardItem) => {
    const createNewCard = new Card(cardItem,"card-template");
    cardsContainer.appendChild(createNewCard.generateCard());
  })
}

const initApp = () => {
  textName.textContent = originalName;
  textAbout.textContent = originalAbout;
  editProfileName.value = originalName;
  editProfileAbout.value = originalAbout;
  //handleInitialCards0();
  new FormValidator(config,formSelectorProfile).enableValidation();
  new FormValidator(config,formSelectorAddPlace).enableValidation();
  console.log("initt")
} */

//initApp();

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardItem) => { // observa el parámetro cardItem
    const createNewCard = 
      new Card(cardItem, "card-template")

      cardsContainer.appendChild(createNewCard.generateCard());
      
    //const cardElement = cardItem.generateCard();
    //handleInitialCards.setItem(cardElement);
  }
} //, cardsContainer 
);

handleInitialCards.renderItems();

//const popup = new Popup("edit-profile")
//popup.open("edit-profile")
//popup.close()

const user = new UserInfo(originalName,originalAbout)

user.getUserInfo();
console.log(user.setUserInfo)
console.log(user.getUserInfo)
console.log(user.getUserInfo())