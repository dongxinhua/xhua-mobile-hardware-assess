import request from "./request";

export const getPhoneGrade = () => {
  return request({
    url: "/phoneGrade",
    method: "GET",
  })
}
export const getPhoneGradeEdit = () => {
  return request({
    url: "/phoneGradeEdit",
    method: "GET",
  })
}

export const getPhoneSocGrade = () => {
  return request({
    url: "/phoneSocGrade",
    method: "GET"
  })
}

export const getPhoneSocGradeEdit = () => {
  return request({
    url: "/phoneSocGradeEdit",
    method: "GET"
  })
}

export const phoneGradeEdit = (options) => {
  return request({
    url: "/phoneGradeEdit",
    method: "POST",
    data: options
  })
}

export const socGradeEdit = (options) => {
  return request({
    url: "/socGradeEdit",
    method: "POST",
    data: options
  })
}

export const addPhoneData = (options) => {
  return request({
    url: "/addPhoneData",
    method: "POST",
    data: options
  })
}

export const deletePhoneData = (options) => {
  return request({
    url: "/deletePhoneData",
    method: "POST",
    data: options
  })
}

export const deleteSocData = (options) => {
  return request({
    url: "/deleteSocData",
    method: "POST",
    data: options
  })
}

export const getIndex = (type) => {
  return request({
    url: "/getIndex",
    method: "GET",
    params: { type }
  })
}

export const getConstarstArr = (name) => {
  return request({
    url: "/getContrastArr",
    method: "GET",
    params: { name }
  })
}

export const getConstrastData = (obj) => {
  return request({
    url: "/getConstrastData",
    method: "POST",
    data: obj 
  })
}