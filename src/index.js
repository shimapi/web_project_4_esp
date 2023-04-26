import "./index.css";
import Api from "./scripts/Api";
import Section from "./scripts/Section.js";
import Card from "./scripts/Card.js";
import UserInfo from "./scripts/UserInfo.js";
import { PopupWithForms } from "./scripts/PopupWithForms.js";
import {
  cardsContainer,
  openAddPlacePopUp,
  openEditProfilePopUp,
  openEditProfileButton,
  openAddPlaceButton,
  openDeleteCardPopUp,
  //openEditAvatarPopUp,
  config,
  textName,
  textAbout,
} from "./scripts/constants.js";

(async function () {
  const api = new Api();
  const getApiCards = await api.getCards();
  const getApiProfileInfo = await api.getProfileInitialInfo();

  const setNewProfileInfoApi = async (name, about) => {
    await api.editProfileInfo(name, about);
  };
  const setNewCardApi = async (name, about) => {
    await api.addNewCard(name, about);
  };
  const deleteCardApi = async (_id) => {
    await api.deleteCard(_id);
  };
  /*   const editAvatarApi = async (_id) => {
    await api.editAvatar(_id);
  }; */

  const PopUpEditProfile = new PopupWithForms(openEditProfilePopUp);
  //en popupWithForms
  const PopUpDeleteCard = new PopupWithForms(openDeleteCardPopUp);
  //const PopUpEditAvatar = new PopupWithForms(openEditAvatarPopUp);
  const PopUpAddPhoto = new PopupWithForms(openAddPlacePopUp);
  const AddUserInfo = new UserInfo(textName, textAbout);

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
    setNewProfileInfoApi(newName.value, newAbout.value);
    PopUpEditProfile.close();
  };

  const handleDeleteCard = () => {
    const deleteCardForm = document.forms.deleteCard;
    const deleteCardId = deleteCardForm.elements._id;
    console.log(this);
    deleteCardApi(deleteCardId);
    console.log("Sí quiero borrar esto");
    console.log(deleteCardId);
    PopUpDeleteCard.close();
  };

  const handleAddPlaceFormSubmit = () => {
    const addPlaceForm = document.forms.addPlace;
    const addPlaceName = addPlaceForm.elements.addPlaceName;
    const addPlaceLink = addPlaceForm.elements.addPlaceLink;

    const cardNewItem = JSON.parse(
      `{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`
    );

    setNewCardApi(addPlaceName.value, addPlaceLink.value);
    console.log("setNewCardApi", setNewCardApi);

    const createNewCard = new Card(cardNewItem, config.cardTemplate);
    cardsContainer.prepend(createNewCard.generateCard());
    PopUpAddPhoto.close();
  };

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
  openDeleteCardPopUp.addEventListener("submit", handleDeleteCard);

  handleInitialCards.renderItems();
})();
