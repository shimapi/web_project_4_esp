import Section from "./Section.js";
import Card from "./Card.js";
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
  textName,
  textAbout,
  originalAbout,
  originalName,
} from "./constants.js";

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardNewItem) => {
    const createNewCard = new Card(cardNewItem, config.cardTemplate);
    cardsContainer.appendChild(createNewCard.generateCard());     
  }
});

const handleProfileFormSubmit = () => {
  const profileForm = document.forms.editProfile;
  const newName = profileForm.elements.editProfileName;
  const newAbout = profileForm.elements.editProfileAbout;

  AddUserInfo.setUserInfo(newName.value, newAbout.value);
  PopUpEditProfile.close();
}

const handleAddPlaceFormSubmit = () => {
  const addPlaceForm = document.forms.addPlace;
  const addPlaceName = addPlaceForm.elements.addPlaceName;
  const addPlaceLink = addPlaceForm.elements.addPlaceLink;

  const cardNewItem = JSON.parse(`{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`);

  const createNewCard = new Card(cardNewItem, config.cardTemplate);
  //const formSelectorAddPlace = ".add-place__form";
  cardsContainer.prepend(createNewCard.generateCard());
  //new FormValidator(config,formSelectorAddPlace).enableValidation(); 
  PopUpAddPhoto.close();
}

const PopUpEditProfile  = new PopupWithForm(openEditProfilePopUp);
const PopUpAddPhoto     = new PopupWithForm(openAddPlacePopUp);
const AddUserInfo       = new UserInfo(textName, textAbout);
//const NewCard           = new Card(cardNewItem, config.cardTemplate); 
//no funciona 


openEditProfileButton.addEventListener("click", () => {
/*   console.log("AddUserInfo: ", AddUserInfo)
  console.log("AddUserInfo.getUserInfo(): ", AddUserInfo.getUserInfo())
  console.log("PopUpEditProfile.getUserInfo(): ", PopUpEditProfile._getInputValues()) */
  AddUserInfo.getUserInfo();
  PopUpEditProfile._getInputValues();
  PopUpEditProfile.open();
});

openAddPlaceButton.addEventListener("click", () => {
  PopUpAddPhoto.open();
});

openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);

handleInitialCards.renderItems();

AddUserInfo.setUserInfo(originalName,originalAbout);