//conecta Card a Popup
//haz que card lleve la funcion handleCardClick() al constructor
//cuando el usuario hace click en la card, la funcion abre el popup con una imagen

import Popup from "./Popup.js";
export default class Card{
  constructor(data,cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate(){
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);
    return cardTemplate; 
  }
 
  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__title');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }
  
  _handleLikeCard(e){ 
    e.target.classList.toggle("button-like-active");
  }
  
  _handleDeleteCard(e){
    e.target.closest(".card").remove();
  }

  _handleOpenPhoto(e){
    const openPhotoPopUp = 
      document.querySelector(".photo-popup");
    const imgPopup = 
      document.querySelector(".photo-popup__image");
    const titlePopup = 
      document.querySelector(".photo-popup__title");
    new Popup(openPhotoPopUp).open();
    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    titlePopup.textContent = e.target.alt;
  }

  _setEventListeners(){
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
      this._handleOpenPhoto(e)
    })
  }

}