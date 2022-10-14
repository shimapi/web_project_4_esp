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

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  if (element.className != "undefined") {
    element.className = className;
  }else {
    element.className = "nada";
  }
  return element;
}

function initialCard(name,link){
  const cardDiv = createElementWithClass("article","card");
  return cardDiv
}

const main = document.querySelector(".main-cards");

/*
const cardElements = initialCards.map(
    initialCard(initialCard.name,initialCard.link){
      const cardDiv = createElementWithClass("article","card");
      cardImg.src = initialCard.link;
      cardDiv.appendChild(cardImg);
      const cardLink = document.createElement("div");
      cardDiv.textContent = initialCard.name;
      cardLink.textContent = initialCard.link;
      return cardDiv;
    })
*/
main.append(...cardElements)