import {
  editProfileAbout,
  editProfileName,
  openEditAvatarPopUp,
} from "./constants.js";
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
    //this._setEventListeners();
    this.editProfileName.value = this.textNameElement.innerText;
    this.editProfileAbout.value = this.textAboutElement.innerText;
    //this.editProfileAvatar.value = this.avatarElement.innerText;

    const UserInfoObject = {
      name: this.textNameElement.innerText,
      about: this.textAboutElement.innerText,
      avatar: this.avatarElement.src,
    };

    return UserInfoObject;
  }

  setUserInfo(name, about, avatar) {
    this.textNameElement.textContent = name;
    this.textAboutElement.textContent = about;
    this.avatarElement.src = avatar;

    this.editProfileName.value = name;
    this.editProfileAbout.value = about;
    //this.editProfileAvatar.src = avatar;
  }

  _setEventListeners() {
    this._element
      .querySelector(".avatar__circle")
      .addEventListener("click", (e) => {
        openEditAvatarPopUp.open(e);
      });
  }
}
