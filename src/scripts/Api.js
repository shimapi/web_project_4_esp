export default class Api {
  constructor() {
    this.authorization = "e693c678-e26f-42f9-a95c-4c1ab4d74246";
  }

  async _useFetch(url, method, body) {
    const res = await fetch(url, {
      headers: {
        authorization: this.authorization,
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
      "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
      "GET"
    );
    console.log("API profileInitialInfo", profileInitialInfo);
    return profileInitialInfo;
  }

  async getCards() {
    const cards = await this._useFetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_03/cards",
      "GET"
    );
    //console.log(cards);
    return cards;
    /*  return fetch(
      "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
      {
        headers: {
          authorization: "e693c678-e26f-42f9-a95c-4c1ab4d74246",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    }); */
  }

  // otros métodos para trabajar con la API
}
