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

    const newImg = document.createElement("img");
    newImg.src = place.link;
    newImg.alt = place.name;

    const newSection = document.createElement("section")
    newSection.className = "card__name";

    const newTitle = document.createElement('h3');
    newTitle.classList.add("card__title");
    newTitle.textContent = place.name;

    const newButton = document.createElement("button");
    newButton.className = "button__like";

    cardsContainer.appendChild(newCard)
    newCard.appendChild(newImg)
    newCard.appendChild(newSection)
    newSection.appendChild(newTitle)
    newSection.appendChild(newButton)
  })
}

createCard();