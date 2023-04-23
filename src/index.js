import "./index.css";
import Api from "./scripts/Api";
import Section from "./scripts/Section.js";
import Card from "./scripts/Card.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import {
  cardsContainer,
  openAddPlacePopUp,
  openEditProfilePopUp,
  openEditProfileButton,
  openAddPlaceButton,
  config,
  textName,
  textAbout,
} from "./scripts/constants.js";

(async function () {
  const api = new Api();
  const getApiCards = await api.getCards();
  const getApiProfileInfo = await api.getProfileInitialInfo();

  const setNewProfileInfo = async (name, about) => {
    await api.editProfileInfo(name, about);
  };
  const setNewCard = async (name, about) => {
    await api.addNewCard(name, about);
  };

  const handleInitialCards = new Section({
    //data: initialCards,
    data: getApiCards,
    renderer: (cardNewItem) => {
      const createNewCard = new Card(cardNewItem, config.cardTemplate);
      cardsContainer.appendChild(createNewCard.generateCard());
    },
  });

  const handleProfileFormSubmit = () => {
    const profileForm = document.forms.editProfile;
    const newName = profileForm.elements.editProfileName;
    const newAbout = profileForm.elements.editProfileAbout;

    AddUserInfo.setUserInfo(newName.value, newAbout.value);
    setNewProfileInfo(newName.value, newAbout.value);
    PopUpEditProfile.close();
  };

  const handleAddPlaceFormSubmit = () => {
    const addPlaceForm = document.forms.addPlace;
    const addPlaceName = addPlaceForm.elements.addPlaceName;
    const addPlaceLink = addPlaceForm.elements.addPlaceLink;

    const cardNewItem = JSON.parse(
      `{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`
    );

    setNewCard(addPlaceName.value, addPlaceLink.value);
    console.log("setNewCard", setNewCard);

    const createNewCard = new Card(cardNewItem, config.cardTemplate);
    cardsContainer.prepend(createNewCard.generateCard());
    PopUpAddPhoto.close();
  };

  const PopUpEditProfile = new PopupWithForm(openEditProfilePopUp);
  const PopUpAddPhoto = new PopupWithForm(openAddPlacePopUp);
  const AddUserInfo = new UserInfo(textName, textAbout);

  AddUserInfo.setUserInfo(getApiProfileInfo.name, getApiProfileInfo.about);

  openEditProfileButton.addEventListener("click", () => {
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
})();
