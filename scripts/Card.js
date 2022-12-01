import {handleOpenPopUp} from './utils.js'

class Card {
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate(){
  /* forma antigua:
    const cardTemplate = document.getElementById("card-template").content;
    const newCard = cardTemplate.cloneNode(true);
    return newCard; */
    const cardTemplate = document
      .getElementById("card-template")
      .content
      .cloneNode(true);

    return cardTemplate; //devuelvo DOM
  }
 
  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }

  _setEventListeners(){
    this._element.querySelector(".button-like")
    .addEventListener("click", (e) => {
      this._handleLikeCard(e);
    })

    this._element.querySelector(".button-delete")
    .addEventListener("click", (e) => {
      this._handleDeleteCard(e);
    })

    this._element.querySelector(".card__image")
    .addEventListener("click", (e) => {
      this._handleOpenPhoto(e);
    })
  }

  _handleLikeCard(e){ 
    //no sé porqué no funciona -> this._element.querySelector(".button-like").classList.toggle("button-like-active");
    e.target.classList.toggle("button-like-active");
  }
  
  _handleDeleteCard(e){ 
    e.target.closest(".card").remove();
  }

  _handleOpenPhoto(e){
    const openPhotoPopUp = document.querySelector(".photo-popup");
    const imgPopup = document.querySelector(".photo-popup__image");
    const titlePopup = document.querySelector(".photo-popup__title");
    handleOpenPopUp(openPhotoPopUp);
    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    titlePopup.textContent = e.target.alt;
  }
  //static método(){} -> se ejecuta sin ser llamado, sin crear new
}

export default Card;