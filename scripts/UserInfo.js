export default class UserInfo {

  constructor( textName, textAbout ) {
    this.textNameElement = document.querySelector(textName);
    this.textAboutElement = document.querySelector(textAbout);

    console.log("textNameElement: ",this.textNameElement);
    console.log("textAboutElement: ",this.textAboutElement);
  }

  getUserInfo(){
    console.log("getUserInfo this.textNameElement.innerText", this.textNameElement.innerText)
    console.log("getUserInfo this.textAboutElement.innerText", this.textAboutElement.innerText)
    //devuelve un obj con info
    //se usa para mostrar los datos del usuario en el POPUP
    const obj = { name: this.textNameElement.innerText,
                  about: this.textAboutElement.innerText }
      console.log("obj",obj)
      console.log(Object.values(obj))


      return obj;
  };

  setUserInfo(name,about) {
    //toma los datos del nuevo usuario y los agrega a la pag
    this.textNameElement.textContent = name;
    this.textAboutElement.textContent = about;
    console.log("name setUserInfo", name)
    console.log("about setUserInfo", about)
  };
}