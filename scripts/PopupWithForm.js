// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { config, openEditProfilePopUp, userInfo } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal,handleSubmit) {

    super(modal)
    
    this.handleSubmit = handleSubmit;
    this.inputList = this.modal.querySelectorAll(config.inputSelector)
    //Esta es la que deje comentada en el new PopupWithForm()
    this.setEventListeners()
  }

 
  _setInputValues(){
    //console.log(userInfo.getUserInfo())
    //console.log(this.inputList)
    if(this.inputList){
      this.inputList.forEach((input) => {
        console.log(userInfo.getUserInfo())
        console.log(input.dataset.target)
        input.value = userInfo.getUserInfo()[input.dataset.target]
      })
    }
  }

  _getInputValues(){
    //this.inputList = this.modal.querySelectorAll(config.inputSelector);
    const inputValues = {};

    this.inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    
    console.log(inputValues)

    this._inputValues = inputValues;
    return inputValues;
  }

  close(){
    //reiniciar formulario cuando se cierra el popup
    super.close();
    this.modal.querySelector('.form').reset();
  }
  
  setEventListeners(){
    if(this.modal.className.includes("profile")){
      this._setInputValues()
    }

    console.log("setEventListeners de PopupWithForm")
    super.setEventListeners();

    this.modal.querySelector('.form').addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit()
    })
    //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
    /* openEditProfileButton.addEventListener("click", () => {
      new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
      //handleOpenPopUp(openEditProfilePopUp)
      this.open(this.modal)
    }) */
  }
}