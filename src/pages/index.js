import "./index.css";
import Api from "../components/Api";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import {
  cardsContainer,
  openAddPlacePopUp,
  openEditProfilePopUp,
  openEditProfileButton,
  openEditAvatarPopUp,
  openAddPlaceButton,
  //openDeleteCardPopUp,
  //openEditAvatarPopUp,
  deleteCardForm,
  config,
  textName,
  textAbout,
  avatar,
  editAvatar,
} from "../components/constants.js";

async function main() {
  const api = new Api();
  const getApiCards = await api.getCards();
  const getApiProfileInfo = await api.getProfileInitialInfo();

  const setNewProfileInfoApi = async (name, about, avatar) => {
    await api.editProfileInfo(name, about, avatar);
  };
  const setNewCardApi = async (name, about) => {
    await api.addNewCard(name, about);
  };

  /*   const setEditAvatarApi = async (avatar) => {
    await api.editProfileAvatar(avatar);
  }; */

  const PopUpEditProfile = new PopupWithForms(openEditProfilePopUp);
  //en popupWithForms
  const PopUpDeleteCard = new PopupWithForms(openDeleteCardPopUp);
  const PopUpEditAvatar = new PopupWithForms(openEditAvatarPopUp);
  const PopUpAddPhoto = new PopupWithForms(openAddPlacePopUp);
  const AddUserInfo = new UserInfo(textName, textAbout, avatar);

  //  console.log(UserInfo._handleGetAvatar()); ERROR

  const handleInitialCards = new Section({
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

    AddUserInfo.setUserInfo(
      newName.value,
      newAbout.value,
      getApiProfileInfo.avatar
    );
    setNewProfileInfoApi(
      newName.value,
      newAbout.value,
      getApiProfileInfo.avatar
    );
    PopUpEditProfile.close();
  };

  /*   const handleProfileAvatarFormSubmit = () => {
    const profileForm = document.forms.editProfile;
    const newAvatar = profileForm.elements.editProfileAvatar;

    setEditAvatarApi(getApiProfileInfo.avatar, editProfileAvatar.avatar);
    PopUpEditAvatar.close();
  }; */

  const handleAddPlaceFormSubmit = () => {
    const addPlaceForm = document.forms.addPlace;
    const addPlaceName = addPlaceForm.elements.addPlaceName;
    const addPlaceLink = addPlaceForm.elements.addPlaceLink;

    const cardNewItem = JSON.parse(
      `{"name": "${addPlaceName.value}", "link": "${addPlaceLink.value}"}`
    );

    setNewCardApi(addPlaceName.value, addPlaceLink.value);

    const createNewCard = new Card(cardNewItem, config.cardTemplate);
    cardsContainer.prepend(createNewCard.generateCard());
    PopUpAddPhoto.close();
  };

  AddUserInfo.setUserInfo(
    getApiProfileInfo.name,
    getApiProfileInfo.about,
    getApiProfileInfo.avatar
  );

  openEditProfileButton.addEventListener("click", () => {
    AddUserInfo.getUserInfo();
    PopUpEditProfile._getInputValues();
    PopUpEditProfile.open();
  });

  /*   const editAvatarImg = document.querySelector(editAvatar);
  console.log(editAvatarImg); */

  //PopUpEditAvatar.addEventListener("click", handleProfileAvatarFormSubmit);

  openAddPlaceButton.addEventListener("click", () => {
    PopUpAddPhoto.open();
  });

  openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
  openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);
  // openDeleteCardPopUp.addEventListener("submit", handleDeleteCard);

  handleInitialCards.renderItems();
}

main();
