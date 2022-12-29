import { editProfileAbout, editProfileName } from "./constants.js";
export default class UserInfo {

  constructor(textName, textAbout) {
    
    this.textNameElement = document.querySelector(textName);
    this.textAboutElement = document.querySelector(textAbout);

    this.editProfileName = document.querySelector(editProfileName)
    this.editProfileAbout = document.querySelector(editProfileAbout);

    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo(){

    this.editProfileName.value = this.textNameElement.innerText;
    this.editProfileAbout.value = this.textAboutElement.innerText;

    const obj = { name: this.textNameElement.innerText,
                  about: this.textAboutElement.innerText }

    return obj;
  };

  setUserInfo(name,about) {
    this.textNameElement.textContent = name;
    this.textAboutElement.textContent = about;
    this.editProfileName.value = name;
    this.editProfileAbout.value = about;
  };
}