import { editProfileAbout, editProfileName, editProfileAvatar } from "./constants.js";
import Api from "./Api.js";
export default class UserInfo {
  //clase HTML
  constructor(textNameElementSelector, textAboutElementSelector, avatarElementSelector) {
    this.textNameElement = document.querySelector(textNameElementSelector);
    this.textAboutElement = document.querySelector(textAboutElementSelector);
    this.avatarElement = document.querySelector(avatarElementSelector);

    this.editProfileName = document.querySelector(editProfileName);
    this.editProfileAbout = document.querySelector(editProfileAbout);
    this.editProfileAvatar = document.querySelector(editProfileAvatar);

    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
    this._api = new Api();
  }

  async getUserInfo() {
    const getApiProfileInfo = await this._api.getProfileInitialInfo();
    return getApiProfileInfo;
  }

  async updateUserInfo(name,about){
    const updateApiProfileInfo = await this._api.editProfileInfo(name,about);
    return updateApiProfileInfo;
  }

  setUserInfo(userInfo) {
    this.textNameElement.textContent = userInfo.name;
    this.textAboutElement.textContent = userInfo.about;
    this.avatarElement.src = userInfo.avatar;

    this.editProfileName.value = userInfo.name;
    this.editProfileAbout.value = userInfo.about;
    this.editProfileAvatar.src = userInfo.avatar;


    console.log("editProfileAvatar", editProfileAvatar);
    console.log("this.editProfileName.value", this.editProfileName.value)
    console.log("this.editProfileAvatar.avatar", this.editProfileAvatar.avatar)
    console.log("userInfo",userInfo)
  }
}
