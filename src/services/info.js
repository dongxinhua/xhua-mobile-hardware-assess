import request from "./request";

export const getInformation = (flag) => {
  return request({
    url: "/getInformation",
    method: "GET",
    params: { flag }
  })
}

export const getInformationList = () => {
  return request({
    url: "/getInformationList",
    method: "GET"
  })
}

