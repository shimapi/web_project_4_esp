import { openPhotoPopUp } from "./constants.js";
import { popupWithImage } from "./PopupWithImage.js";
export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__title');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }

  _handleLikeCard(e) {
    e.target.classList.toggle("button-like-active");
  }

  _handleDeleteCard(e) {
    e.target.closest(".card").remove();
  }


  _setEventListeners() {

    this._element.querySelector(".button-like")
      .addEventListener("click", (e) => {
        this._handleLikeCard(e)
      })

    this._element.querySelector(".button-delete")
      .addEventListener("click", (e) => {
        this._handleDeleteCard(e)
      })

    this._element.querySelector(".card__image")
      .addEventListener("click", (e) => {
        popupWithImage.open(e)
      })
  }
}