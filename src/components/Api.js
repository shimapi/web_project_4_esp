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
			`${this.originURL}/users/me/avatar`,
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
		return newCard;
	}

	async deleteCard(cardId) {
		const deletedCard = await this._useFetch(
			`${this.originURL}/cards/${cardId}`,
			"DELETE"
		);
		return deletedCard;
	}

	async likeCard(cardId) {
		const likesCard = await this._useFetch(
			`${this.originURL}/cards/likes/${cardId}`,
			"PUT"
		);
		return likesCard;
	}

	async dislikeCard(cardId) {
		const dislikesCard = await this._useFetch(
			`${this.originURL}/cards/likes/${cardId}`,
			"DELETE"
		);
		return dislikesCard;
	}
}
