class Card {
  constructor(name, link){ //selector de elemento de plantilla (?)
    this._name = name;
    this._link = link;
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

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }



 _eventListeners(){}


  //static createCard(name,link){
  createCard(){
   
    const newImg = newCard.querySelector(".card__image");
    const newTitle = newCard.querySelector(".card__title");
    newImg.src = this.link;
    newImg.alt = this.name;
    //newImg.addEventListener("click", handleOpenPhoto);
    newTitle.textContent = this.name;

    const newButtonDelete = newCard.querySelector(".button-delete");
    newButtonDelete.addEventListener("click", _handleDeleteCard);
    return newCard;
  }

  _handleLikeCard(e){
    return e.target.classList.toggle("button-like-active");
  }
  
  _handleDeleteCard(e){ 
    return e.target.closest(".card").remove();
  }
   
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