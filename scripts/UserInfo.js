// presentar información sobre el usuario en la

export default class UserInfo{
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