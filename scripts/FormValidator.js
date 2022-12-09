export default class FormValidator{
  constructor(config,formSelector){
    this._config = config;
    this._formElement = document.querySelector(formSelector)
    this._inputList= Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
  }








}