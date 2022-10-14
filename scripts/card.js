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

const cardsContainer = document.querySelector(".main-cards");

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
  })
}

createCard();