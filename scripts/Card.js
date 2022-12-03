import { handleOpenPopUp } from "./utils.js";

class Card {
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate(){
    const cardTemplate = document
      .querySelector(`.${this._cardSelector}`)
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

  _setEventListeners(){
    this._element.querySelector(".button-like")
      .addEventListener("click", ()=>{
        this._handleLikeCard()
      })



    this._element.querySelector(".button-delete")
      .addEventListener("click", ()=>{
        this._handleDeleteCard()
      })

    this._element.querySelector(".card__image")
      .addEventListener("click", this._handleOpenPhoto)
  }
//Cuando una funcion se ejecuta y el "this" que tiene dentro no funciona el debugging es ir a ver donde se esta ejecuntando la funcion
  _handleLikeCard(){ 
    console.log(this._element.querySelector(".button-like"))
    this._element.querySelector(".button-like").classList.toggle("button-like-active");
   // e.target.classList.toggle("button-like-active");
  }
  
  _handleDeleteCard(){ 
    this._element.querySelector(".button-delete").closest(".card").remove();
   // e.target.closest(".card").remove();
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
}

export default Card;