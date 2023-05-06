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
  config,
  textName,
  textAbout,
  imgAvatar,
  editAvatar,
  userInfo,
} from "../components/constants.js";

async function main() {
  const api = new Api();
  const getApiCards = await api.getCards();
  const userInfoConstants = new UserInfo(textName, textAbout, imgAvatar);
  const profileInfo = await userInfoConstants.getUserInfo();
    
  console.log("userInfoConstants", userInfoConstants);

/*   const setNewProfileInfoApi = async (name, about, avatar) => {
    await api.editProfileInfo(name, about, avatar);
  }; */
  const setNewCardApi = async (name, about) => {
    await api.addNewCard(name, about);
  };

  const setEditAvatarApi = async (imgAvatar) => {
    await api.editProfileAvatar(imgAvatar);
  };

  const PopUpEditProfile = new PopupWithForms(openEditProfilePopUp);
  //en popupWithForms
  //const PopUpDeleteCard = new PopupWithForms(openDeleteCardPopUp); -> card
  const PopUpEditAvatar = new PopupWithForms(openEditAvatarPopUp);
  const PopUpAddPhoto = new PopupWithForms(openAddPlacePopUp);

  //  console.log(UserInfo._handleGetAvatar()); ERROR

  const handleInitialCards = new Section({
    data: getApiCards,
    renderer: (cardNewItem) => {
      const createNewCard = new Card(cardNewItem, config.cardTemplate);
      cardsContainer.appendChild(createNewCard.generateCard());
    },
  });

  const handleProfileFormSubmit = async () => {
    const profileForm = document.forms.editProfile;
    const newName = profileForm.elements.editProfileName;
    const newAbout = profileForm.elements.editProfileAbout;
    const updatedUserInfo = await userInfo.updateUserInfo(
      newName.value,
      newAbout.value
    );
    console.log(updatedUserInfo);
    userInfo.setUserInfo(updatedUserInfo);
    PopUpEditProfile.close();
  };

  const handleProfileAvatarFormSubmit = () => {
    const profileForm = document.forms.editProfile;
    const newAvatar = profileForm.elements.editProfileAvatar;


/*     const updatedUserInfo = userInfo.updateUserInfo(
      newAvatar.value

      );
      console.log(updatedUserInfo);
      userInfo.setUserInfo(updatedUserInfo);
      PopUpEditAvatar.close();

     //setEditAvatarApi(getApiProfileInfo.avatar, editProfileAvatar.avatar); */

    //PopUpEditAvatar.close(); 

  };

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

  userInfo.setUserInfo(profileInfo);

  openEditProfileButton.addEventListener("click", () => {
    PopUpEditProfile._getInputValues();
    PopUpEditProfile.open();
  });

    const editAvatarImg = document.querySelector(editAvatar);
  console.log(editAvatarImg);

  editAvatarImg.addEventListener("click", handleProfileAvatarFormSubmit);

  openAddPlaceButton.addEventListener("click", () => {
    PopUpAddPhoto.open();
  });

  openEditProfilePopUp.addEventListener("submit", handleProfileFormSubmit);
  openAddPlacePopUp.addEventListener("submit", handleAddPlaceFormSubmit);
   //openDeleteCardPopUp.addEventListener("submit", handleDeleteCard);

  handleInitialCards.renderItems();
}

main();
