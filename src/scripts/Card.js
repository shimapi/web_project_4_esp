import { PopupWithForms, popupWithFormsDeleteCard } from "./PopupWithForms.js";
import { popupWithImage } from "./PopupWithImage.js";
import { openDeleteCardPopUp } from "./constants.js";
import Api from "./Api.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._getTemplate = this._getTemplate.bind(this);
    this.generateCard = this.generateCard.bind(this);

    this._api = new Api();
    const PopUpDeleteCard = new PopupWithForms(openDeleteCardPopUp);
    /*     const deleteCardApi = async (_id) => {
      await this._api.deleteCard(_id);
    }; */
  }
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    const cardLikes = this._element.querySelector(".count-likes");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardImage.id = this._id;
    cardTitle.textContent = this._name;
    cardLikes.textContent =
      (Array.isArray(this._likes) && this._likes.length) || 0;

    return this._element;
  }

  _handleLikeCard(e) {
    e.target.classList.toggle("button-like-active");
  }

  _handleDeleteCard = async (e) => {
    e.target.closest(".card").remove();
    console.log("id", this._id);
    const result = await this._api.deleteCard(this._id);
    console.log("result", result);
    // deleteCardApi;

    const deleteCardForm = document.forms.deleteCard;
    const deleteCardId = deleteCardForm.elements._id;
    console.log(this);
    PopUpDeleteCard.close();
  };
  //openDeleteCardPopUp.addEventListener("submit", handleDeleteCard);

  _setEventListeners() {
    this._element
      .querySelector(".button-like")
      .addEventListener("click", (e) => {
        this._handleLikeCard(e);
      });

    this._element
      .querySelector(".button-delete")
      .addEventListener("click", (e) => {
        popupWithFormsDeleteCard.open(e);
        console.log("se abre popup", e);
      });

    /*     this._element
      .querySelector(".button-save")
      .addEventListener("submit", (e) => {
        console.log("button-save", e);
        this._handleDeleteCard(e);
        popupWithFormsDeleteCard.close(e);
      }); */

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (e) => {
        popupWithImage.open(e);
      });
  }
}
