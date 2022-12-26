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
  textName,
  textAbout,
  originalAbout,
  originalName,
} from "./constants.js";

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardItem) => {
    const createNewCard = 
      new Card(cardItem, config.cardTemplate);
      cardsContainer.appendChild(createNewCard.generateCard());     
  }
});



const handleProfileFormSubmit = () => {
  const profileForm = document.forms.editProfile;
  const newName = profileForm.elements.editProfileName;
  const newAbout = profileForm.elements.editProfileAbout;

  console.log("newName", newName.value)
  console.log("newAbout", newAbout.value)

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
  new UserInfo(textName, textAbout).getUserInfo();
  new PopupWithForm(openEditProfilePopUp, handleProfileFormSubmit).open();
})
openAddPlaceButton.addEventListener("click", () => {
  new PopupWithForm(openAddPlacePopUp, handleAddPlaceFormSubmit).open();
})

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);

handleInitialCards.renderItems();

const exportUserInfo = new UserInfo(textName,textAbout)
exportUserInfo.setUserInfo(originalName,originalAbout)