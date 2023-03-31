import request from "@/utils/request.js";
// import qs from "qs";

const BASEURL = "/api/contact/";
const BAIDU = "/baidu/";

// code
export function contactcode(data) {
  return request({
    url: BASEURL + "code",
    method: "post",
    data,
  });
}

// sign
export function contactsign(data) {
  return request({
    url: BASEURL + "sign",
    method: "post",
    data,
  });
}

// login
export function contactlogin(data) {
  return request({
    url: BASEURL + "login",
    method: "post",
    data,
  });
}

//联系人列表
export function contactlist(data) {
  return request({
    url: BASEURL + "list",
    method: "post",
    data,
  });
}

//联系人列表
export function contactinfo(data) {
  return request({
    url: BASEURL + "info",
    method: "post",
    data,
  });
}

// BaiduOCR https://aip.baidubce.com/rest/2.0/ocr/v1/business_card

//获取 Access_token https://aip.baidubce.com/oauth/2.0/token
export function bdtoken(data) {
  return request({
    url: BAIDU + "oauth/2.0/token",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    params: data,
  });
}

export function business_card(data, token) {
  return request({
    url: BAIDU + "rest/2.0/ocr/v1/business_card?access_token=" + token,
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data,
  });
}
