//获取数据地址；
let host = "https://route.showapi.com";

const baseUri = host + "/582-1?showapi_appid=43544&showapi_sign=f151359ee58a4e42bb1a8b81c44366ee";
const detaileUri = host + "/582-2?showapi_appid=43544&showapi_sign=f151359ee58a4e42bb1a8b81c44366ee";
export const API_CONFIG = {
	host: host,
	baseUri: baseUri,
	detaileUri: detaileUri,
}
