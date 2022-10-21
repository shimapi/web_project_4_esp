const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

//const cardsContainer = document.querySelector(".main-cards");
const openPhoto = document.querySelector(".photo-popup");
const openPhotoPopUp = document.querySelector(".photo-popup__container");


function createCard() {
  initialCards.forEach((place) => {

    const newCard = document.createElement("article");
    newCard.classList.add("card");

    const newSectionPhoto = document.createElement("section")
    newSectionPhoto.className = "card__photo";

    const newButtonDelete = document.createElement("button");
    newButtonDelete.className = "button__delete";

    const newImg = document.createElement("img");
    newImg.src = place.link;
    newImg.alt = place.name;
    newImg.className = "card__image"

    const newSectionName = document.createElement("section")
    newSectionName.className = "card__name";

    const newTitle = document.createElement('h3');
    newTitle.className = "card__title";
    newTitle.textContent = place.name;

    const newButtonLike = document.createElement("button");
    newButtonLike.className = "button__like";

    cardsContainer.appendChild(newCard)
    newCard.appendChild(newSectionPhoto)
    newSectionPhoto.appendChild(newButtonDelete)
    newSectionPhoto.appendChild(newImg)
    newCard.appendChild(newSectionName)
    newSectionName.appendChild(newTitle)
    newSectionName.appendChild(newButtonLike)

    newImg.addEventListener('click', handleOpenPhoto);
    

    function handleOpenPhoto(event){
      openPhoto.style.display = "block";
      console.log(newImg.alt);
    
      const newImgPopup = document.createElement("img");
      newImgPopup.src = place.link;
      newImgPopup.alt = place.name;
      newImgPopup.className = "photo-popup__image";

      const newTitlePopup = document.createElement('p');
      newTitlePopup.className = "photo-popup__title";
      newTitlePopup.textContent = place.name;

      openPhotoPopUp.appendChild(newImgPopup);
      openPhotoPopUp.appendChild(newTitlePopup);

      if (openPhoto.style.display = "block"){
         //openPhotoPopUp.remove();
        console.log("remove")
      }else{
        console.log("no remove")
      }
    }

    newButtonLike.addEventListener("click",(e)=>{
      e.target.classList.toggle("button__like-active");
    })
    
    newButtonDelete.addEventListener("click", () =>{
      newCard.remove();
    })
  })
}

createCard();