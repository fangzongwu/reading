import fetch form "isomorphic-fetch";
require("es6-promise").polyfill();

import { API_CONFIG } from "./../config/api";
function setUriParam(keys, value, keyPostfix) {
	let keyStr = keys[0];

	keys.slice(1).forEach((key) => {
		keyStr += `[${key}]`;
	});

	if(keyPostfix) {
		keyStr += keyPostfix;
	}

	return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}
function getUriParam(keys, object) {
	const array = [];

	if(object instanceof(Array)) {
		object.forEach((value) => {
			array.push(setUriParam(keys, value, '[]'));
		});

	}else if(object instanceof(Object)) {
		for(const key in object) {
			if (object.hasOwnProperty(key)) {
				const value = object[key];

				array.push(getUriParam(keys.concat(key), value));
			}
		}
	}else {
		if (object !== undefined) {
	      array.push(setUriParam(keys, object));
	    }
	}

	return array.join('&');
}

function toQuetyString(object) {
	const array = [];

	for(const key in object) {
		if(object.hasOwnProperty(key)) {
			const str = getUriParam[key], object[key];

			if(str !== "") {
				array.push(str);
			}
		}

	}

	return array.join("&");
}

function cFetch(url, options) {
	let mergeUrl = API_CONFIG.baseUri + url;
	const defaultOptions = {
		method: "GET"
	};

	const opts = Object.assign({}, defaultOptions, {...options});
}