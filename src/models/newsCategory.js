import React from "react";
import { observable, action, runInAction } from "mobx";
import {API_CONFIG} from "./../config/api";

class NewsCategory {
	//文章分类
	@observable showapi_res_body = {
		typeList: [],
	}
	//文章详情
	@observable showapi_res_detaile_body = {
		contentlist: [],
	}
	//笑话
	@observable showapi_res_image_body = {
		list: [],
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
	//获取来福笑话借口数据；
	@action async getFunnyImgUri() {
		const ret = await fetch(API_CONFIG.funnyImgUri, {
			method: "GET"
		}).then((response) => {
			return response.json();
		}).then((jsonData) => {
			return jsonData;
		}).catch((error) => {
			alert(error);
		})
		if(ret) {
			runInAction("request success", () => {
				this.showapi_res_image_body = Object.assign({}, ret.showapi_res_body);
				console.log(this.showapi_res_image_body);
			})
		}
	}
}

export default new NewsCategory();