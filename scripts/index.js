import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { originalAbout, originalName, initialCards, formSelectorAddPlace, formSelectorProfile, cardsContainer, editProfileName, editProfileAbout, textAbout, textName, config } 
  from "./constants.js";
import Section from "./Section.js";


const handleInitialCards0 = () => {
  initialCards.forEach((cardItem) => {
    const createNewCard = new Card(cardItem,"card-template");
    cardsContainer.appendChild(createNewCard.generateCard());
  })
}

const initApp = () => {
  textName.textContent = originalName;
  textAbout.textContent = originalAbout;
  editProfileName.value = originalName;
  editProfileAbout.value = originalAbout;
  //handleInitialCards0();
  new FormValidator(config,formSelectorProfile).enableValidation();
  new FormValidator(config,formSelectorAddPlace).enableValidation();
  console.log("initt")
}

//initApp();

const handleInitialCards = new Section ({
  data: initialCards,
  renderer: (cardItem) => { // observa el parámetro cardItem
    const createNewCard = 
      new Card(cardItem, "card-template")

      cardsContainer.appendChild(createNewCard.generateCard());
      
    //const cardElement = card.generateCard();
    //handleInitialCards.setItem(cardElement);
  }
},
//cardListSection
);

handleInitialCards.renderItems(); 