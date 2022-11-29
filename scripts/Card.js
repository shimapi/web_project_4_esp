class Card {
  constructor(data, cardSelector){ //arrayItem, idTemplate
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate(){
  /*   const cardTemplate = document.getElementById("card-template").content;
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

  }

  _handleLikeCard(e){ 
    //this._element.querySelector(".button-like").classList.toggle("button-like-active");
    e.target.classList.toggle("button-like-active");
  }
  
  _handleDeleteCard(e){ 
    e.target.closest(".card").remove();
  }

  //static createCard(name,link){
  /* createCard(){
   
    const newImg = newCard.querySelector(".card__image");
    const newTitle = newCard.querySelector(".card__title");
    newImg.src = this.link;
    newImg.alt = this.name;
    //newImg.addEventListener("click", handleOpenPhoto);
    newTitle.textContent = this.name;

    const newButtonDelete = newCard.querySelector(".button-delete");
    newButtonDelete.addEventListener("click", _handleDeleteCard);
    return newCard;
  } */


   
/*   createCard(name,link){
    const newCard = cardTemplate.cloneNode(true);
  
    const newImg = newCard.querySelector(".card__image");
    newImg.src = link;
    newImg.alt = name;
    //newImg.addEventListener("click", handleOpenPhoto);
  
    const newButtonDelete = newCard.querySelector(".button-delete");
    //newButtonDelete.addEventListener("click", handleDeleteCard);
  
    const newTitle = newCard.querySelector(".card__title");
    newTitle.textContent = name;
  
    const newButtonLike = newCard.querySelector(".button-like");
    //newButtonLike.addEventListener("click", handleLikeCard);
  
    return newCard;
  } */

}

export default Card;