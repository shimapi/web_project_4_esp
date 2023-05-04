export default class Api {
  constructor() {
    this.authorization = "e693c678-e26f-42f9-a95c-4c1ab4d74246";
    this.originURL = "https://around.nomoreparties.co/v1/web_es_cohort_03";
  }

  async _useFetch(url, method, body) {
    const res = await fetch(url, {
      headers: {
        authorization: this.authorization,
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getProfileInitialInfo() {
    const profileInitialInfo = await this._useFetch(
      `${this.originURL}/users/me`,
      "GET"
    );
    console.log("API profileInitialInfo", profileInitialInfo);
    return profileInitialInfo;
  }

  async getCards() {
    const cards = await this._useFetch(`${this.originURL}/cards`, "GET");
    console.log(cards);
    return cards;
  }

  async editProfileInfo(name, about) {
    const profileInfo = await this._useFetch(
      `${this.originURL}/users/me`,
      "PATCH",
      //{ name: "Marie Curie", about: "Física y química" }
      { name: name, about: about }
    );
    //console.log("API profileInfo", profileInfo);
    return profileInfo;
  }

  async editProfileAvatar(avatar) {
    const profileAvatar = await this._useFetch(
      `${this.originURL}/users/me`,
      "PATCH",
      { avatar: avatar }
    );
    console.log("API profileAvatar", profileAvatar);
    return profileAvatar;
  }

  async editProfileInfoAvatar(name, about, avatar) {
    const profileInfoAvatar = await this._useFetch(
      `${this.originURL}/users/me`,
      "PATCH",
      { name: name, about: about, avatar: avatar }
    );
    console.log("API profileInfoAvatar", profileInfoAvatar);
    return profileInfoAvatar;
  }

  async addNewCard(name, link) {
    const newCard = await this._useFetch(`${this.originURL}/cards`, "POST", {
      name: name,
      link: link,
    });
    console.log("addNewCard", newCard);
    return newCard;
  }

  async deleteCard(cardId, userId) {
    let deletingCard;

    //si el creador de la card es igual al userId, que aparezca el botón borrar
    //(el basurero), sino, no me muestra el basurero.
    if (userId === cardId) {
      try {
        deletingCard = await this._useFetch(
          `${this.originURL}/cards/${cardId}`,
          "DELETE"
        );
        console.log("deleteCard", deletingCard);
      } catch (err) {
        console.log(err);
      }
      console.log("MUESTRO BASURERO")
      return deletingCard;
    } else {
      console.log("ESCONDO BASURERO")
    }
  }

  async likeCard(cardId) {
    let likesCard;
    try {
      likesCard = await this._useFetch(
        `${this.originURL}/cards/likes/${cardId}`,
        "PUT"
      );
      console.log("likeCard", likesCard);
    } catch (err) {
      console.log(err);
    }
    return likesCard;
  }

  async dislikeCard(cardId) {
    let dislikesCard;
    try {
      dislikesCard = await this._useFetch(
        `${this.originURL}/cards/likes/${cardId}`,
        "DELETE"
      );
      console.log("dislikeCard", dislikesCard);
    } catch (err) {
      console.log(err);
    }
    return dislikesCard;
  }
}
