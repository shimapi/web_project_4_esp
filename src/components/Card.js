import { popupWithImage } from "./PopupWithImage.js";
export default class Card {
  constructor(
    data,
    userId,
    cardSelector,
    handleDeleteCard,
    handleLikeCard,
    handleDislikeCard
  ) {
    this._name = data.name;
    this._userId = userId;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
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
    this.cardLikes = this._element.querySelector(".count-likes");
    this.likeButton = this._element.querySelector(".button-like");
    this.trashButton = this._element.querySelector(".button-delete");

    console.log(
      "USER IDDDDD",
      this._ownerId === this._userId,
      this._ownerId,
      this.userId
    );
    if (!(this._ownerId === this._userId)) {
      this.trashButton.remove();
    }

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardImage.id = this._id;
    cardTitle.textContent = this._name;
    this.cardLikes.textContent = this.likeCountNumber();

    console.log(this._userId);

    if (this._likes.some((like) => like._id === this._userId)) {
      this.likeButton.classList.add("button-like-active");
    }

    return this._element;
  }

  likeCountNumber() {
    return (Array.isArray(this._likes) && this._likes.length) || 0;
  }

  updateLikes() {
    cardLikes.textContent;
  }

  _setEventListeners() {
    this._element
      .querySelector(".button-like")
      .addEventListener("click", async (e) => {
        if (
          this._likes.some((like) => {
            return like._id === this._userId;
          })
        ) {
          this._likes = await this._handleDislikeCard(this._id);
          this.cardLikes.textContent = this._likes.length;
          this.likeButton.classList.remove("button-like-active");
        } else {
          this._likes = await this._handleLikeCard(this._id);
          this.cardLikes.textContent = this._likes.length;
          this.likeButton.classList.add("button-like-active");
        }
      });

    this._element
      .querySelector(".button-delete")
      .addEventListener("click", (e) => {
        this._handleDeleteCard(e);
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (e) => {
        popupWithImage.open(e);
      });
  }
}
