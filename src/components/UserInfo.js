import { editProfileAbout, editProfileName } from "./constants.js";
export default class UserInfo {
  constructor(textName, textAbout, avatar) {
    this.textNameElement = document.querySelector(textName);
    this.textAboutElement = document.querySelector(textAbout);
    this.avatarElement = document.querySelector(avatar);

    this.editProfileName = document.querySelector(editProfileName);
    this.editProfileAbout = document.querySelector(editProfileAbout);
    //this.editProfileAvatar = document.querySelector(editProfileAvatar);

    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      textName: this.textNameElement.textContent,
      textAbout: this.textAboutElement.textContent,
    };
  }

  setUserInfo(name, about, avatar) {
    this.textNameElement.textContent = name;
    this.textAboutElement.textContent = about;
    this.avatarElement.src = avatar;

    this.editProfileName.value = name;
    this.editProfileAbout.value = about;
    //this.editProfileAvatar.src = avatar;
  }
}
