class Card {
  constructor(name, link){
    this.name = name;
    this.link = link;
  }
  //static createCard(name,link){
   createCard(){
    const cardTemplate = document.getElementById("card-template").content;
    const newCard = cardTemplate.cloneNode(true);
    const newImg = newCard.querySelector(".card__image");
    newImg.src = this.link;
    newImg.alt = this.name;
    const newTitle = newCard.querySelector(".card__title");
    newTitle.textContent = this.name;
    return newCard
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