// presentar información sobre el usuario en la pag

import {
  textName,
  textAbout,
  originalName,
  originalAbout
} from "./constants.js";

export class UserInfo {

  constructor({ textName, textAbout }) {
    this.textNameElement = document.querySelector(textName);
    this.textAboutElement = document.querySelector(textAbout);
  }

  getUserInfo(){
    //devuelve un obj con info
    //se usa para mostrar los datos del usuario en el POPUP
    const obj = { name: this.textNameElement.textContent,
                  about: this.textAboutElement.textContent }
    return obj;
  };

  setUserInfo({ name, about }) {
    //toma los datos del nuevo usuario y los agrega a la pag
    this.textNameElement.textContent = name;
    this.textAboutElement.textContent = about;
  };
}

export const exportUserInfo = new UserInfo({textName,textAbout})
exportUserInfo.setUserInfo(originalName,originalAbout)

//export default const exportUserInfo