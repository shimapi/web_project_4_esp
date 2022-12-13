import { originalAbout, originalName, initialCards, formSelectorAddPlace, formSelectorProfile, cardsContainer, editProfileName, editProfileAbout, textAbout, textName, config } 
  from "./constants.js";
export class Section{
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer; // renderer es una función    
    this._container = document.querySelector(containerSelector);
  }

  // renderiza todos los elementos en la pagina.
  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item); // llama a renderer() y pásale item
    });
  }
  
  // toma un elemento del DOM y lo agrega al contenedor
  addItem(element){ 
    this._container.append(element)
  };
}


export class Popup{
  constructor(modal){
    this.modal = modal;
  }
  
  open(modal){
/*     modal.classList.add("modal_active");
 */  };
  
  close(e){
/*     modals.forEach((modal) => {
      modal.classList.remove("modal_active");
      document.removeEventListener("keydown", 
        this._handleEscClose(e));
    }); */
  };

  //cerrar cuando la tecla esc es pulsada
  _handleEscClose(e){ 
 /*    if (e.key === "Escape" || e.key === "esc") {
      this.close(e);
    } */
  }

  //cerrar cuando hacen click fuera del popup
  _handleOutClose(e){ 
 /*    if (e.target.classList.contains("modal_active")) {
      this.close(e);
    } */
  }

  //click al icono de cerrar el popup
  setEventListeners(){ 
/*     closeModalButtons.forEach((button) => {
      button.addEventListener("click", this.close(e));
    })
    document.addEventListener("keydown", this._handleEscClose(e));
 */
  }
}

export class PopupWithImage extends Popup{
  constructor(){
    //super
  }
  open(openPopupImage){
    //src = img
    //alt = titulo
    //alt leyenda de imagen
  };
}

export class PopupWithForm extends Popup{
  constructor(modal){
    super(this.modal)
  }
  _getInputValues(){
    //recopila datos de entrada
    console.log( "name", originalName )
    console.log( "about", originalAbout )
  };
  setEventListeners(){
  /*   //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
    openEditProfileButton.addEventListener("click", () => {
      new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
      //handleOpenPopUp(openEditProfilePopUp)
      this.open(this.modal)
    }) */
  }

  close(){
    //reiniciar formulario cuando se cierra el popup
  }
}

export class UserInfo{
  constructor({username,userwork}){
    this.username = username;
    this.userwork = userwork;
  }
  getUserInfo(){
    //devuelve un obj con info
    //se usa para mostrar los datos del usuario en el POPUP
    return {username,userwork}
  };
  setUserInfo(){
    //toma los datos del nuevo usuario y los agrega a la pag
    

  };
}

export class Card{
  constructor(data,cardSelector){
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
    new Popup(openPhotoPopUp).open(openPhotoPopUp);
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
      .addEventListener("click", this._handleOpenPhoto)
  }
}