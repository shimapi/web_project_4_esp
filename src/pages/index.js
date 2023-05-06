import "./index.css";
import Api from "../components/Api";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import { PopupWithForms } from "../components/PopupWithForms.js";
import {
	cardsContainer,
	openAddPlacePopUp,
	openEditProfilePopUp,
	openEditProfileButton,
	openEditAvatarPopUp,
	openAddPlaceButton,
	openDeleteCardPopUp,
	config,
	textName,
	textAbout,
	imgAvatar,
	editAvatar,
	userId,
} from "../components/constants.js";

const api = new Api();
const userInfoConstants = new UserInfo(textName, textAbout, imgAvatar);

const createCard = (cardInfo) => {
	const card = new Card(
		cardInfo,
		userId,
		config.cardTemplate,
		(e) => {
			const deleteCardPopUp = new PopupWithConfirmation(
				openDeleteCardPopUp,
				async () => {
					const deletedCard = await api.deleteCard(cardInfo._id);
					e.target.closest(".card").remove();
				}
			);
			deleteCardPopUp.open();
		},
		async (id) => {
			const likes = await api.likeCard(id);
			return likes.likes;
		},
		async (id) => {
			const likes = await api.dislikeCard(id);
			return likes.likes;
		}
	);
	return card;
};

const setInitialCards = async () => {
	const getApiCards = await api.getCards();
	const handleInitialCards = new Section({
		data: getApiCards,
		renderer: (cardNewItem) => {
			const createNewCard = createCard(cardNewItem);
			cardsContainer.appendChild(createNewCard.generateCard());
		},
	});
	handleInitialCards.renderItems();
};
setInitialCards();

const setInitialUserInfo = async () => {
	const profileInfo = await api.getProfileInitialInfo();
	userInfoConstants.setUserInfo(profileInfo);
};
setInitialUserInfo();

const PopUpEditProfile = new PopupWithForms(
	openEditProfilePopUp,
	async (value) => {
		const newProfileInfo = await api.editProfileInfo(
			value.editProfileName,
			value.editProfileAbout
		);
		userInfoConstants.setUserInfo(newProfileInfo);
	}
);

const PopUpEditAvatar = new PopupWithForms(
	openEditAvatarPopUp,
	async (value) => {
		const newAvatar = await api.editProfileAvatar(value.editAvatarLink);
		userInfoConstants.updateUserAvatar(newAvatar.avatar);
	}
);

const PopUpAddPhoto = new PopupWithForms(openAddPlacePopUp, async (value) => {
	const newCard = await api.addNewCard(value.addPlaceName, value.addPlaceLink);
	const createNewCard = createCard(newCard);
	cardsContainer.prepend(createNewCard.generateCard());
});

openEditProfileButton.addEventListener("click", () => {
	PopUpEditProfile.open();
});

const editAvatarImg = document.querySelector(editAvatar);
editAvatarImg.addEventListener("click", () => {
	PopUpEditAvatar.open();
});

openAddPlaceButton.addEventListener("click", () => {
	PopUpAddPhoto.open();
});
