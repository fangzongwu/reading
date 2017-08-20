import React from "react";
import { observable, action } from "mobx";
import {API_CONFIG} from "./../config/api";

class NewsCategory {
	@observable a = {
		ab: 1,
	}
	@action getCategory() {
		fetch("https://route.showapi.com/582-1?showapi_appid=43544&showapi_sign=f151359ee58a4e42bb1a8b81c44366ee", {
			method: "GET",
		}).then((response) => {
			return response.json();
		}).then((jsonData) => {
			console.log(jsonData);
		}).catch((error) => {
			console.log(error);
		})
	}
}

export default new NewsCategory();