import React from "react";
import { observable, action, runInAction } from "mobx";
import {API_CONFIG} from "./../config/api";

class NewsCategory {
	@observable showapi_res_body = {
		typeList: [],
	}
	@observable showapi_res_detaile_body = {
		contentlist: [],
	}
	//获取文章分类；
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
			})
		}
	}
	//获取文章详情；
	@action async getCategoryDetaile(num) {
		const ret = await fetch(API_CONFIG.detaileUri+`&typeId=${num}`, {
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
				this.showapi_res_detaile_body = Object.assign({}, ret.showapi_res_body.pagebean);
				console.log(this.showapi_res_detaile_body);
			})
		}
	}
}

export default new NewsCategory();