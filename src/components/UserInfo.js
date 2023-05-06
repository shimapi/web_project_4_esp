export default class UserInfo {
  constructor(textNameElementSelector, textAboutElementSelector, avatarElementSelector) {
    this.textNameElement = document.querySelector(textNameElementSelector);
    this.textAboutElement = document.querySelector(textAboutElementSelector);
    this.avatarElement = document.querySelector(avatarElementSelector);
  }

  getUserInfo() {
    return {
      name:this.textNameElement.textContent,
      about:this.textAboutElement.textContent,
      avatar:this.avatarElement.src
    };
  }

  updateUserAvatar(avatar){
    this.avatarElement.src = avatar;
  }

  setUserInfo(userInfo) {
    this.textNameElement.textContent = userInfo.name;
    this.textAboutElement.textContent = userInfo.about;
    this.avatarElement.src = userInfo.avatar;
  }
}
