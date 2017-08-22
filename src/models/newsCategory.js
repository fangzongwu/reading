import React from "react";
import { observable, action, runInAction } from "mobx";
import {API_CONFIG} from "./../config/api";

class NewsCategory {
	@observable showapi_res_body = {
		typeList: [],
	}
	@action async getCategory() {
		const ret = await fetch(API_CONFIG.baseUri, {
			method: "GET",
		}).then((response) => {
			return response.json();
		}).then((jsonData) => {
			return jsonData;
		}).catch((error) => {
			console.log(error);
		})

		if(ret) {
			runInAction("request success", () => {
				this.showapi_res_body = Object.assign({}, ret.showapi_res_body);
				console.log(this.showapi_res_body);
			})
		}
	}
}

export default new NewsCategory();