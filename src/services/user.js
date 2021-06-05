import request from "./request";

export const login = (options) => {
  return request({
    url: "/login",
    method: "POST",
    data: options
  })
}

export const register = (options) => {
  return request({
    url: "/register",
    method: "POST",
    data: options
  })
}

export const changeUserInfo = (userInfo) => {
  return request({
    url: "/infoChange",
    method: "POST",
    data: userInfo
  })
}

export const getFuncList = (rank) => {
  return request({
    url: "/getFuncList",
    method: "GET",
    params: { rank }
  })
}

export const getAllUsers = () => {
  return request({
    url: "/allUsers",
    method: "GET"
  })
}

export const empower = (username) => {
  return request({
    url: "/empower",
    method: "GET",
    params: { username }
  })
}

// export const getTopBanners = () => {
//   return request({
//     url: "/banner"
//   })
// }

// export const getHotRecommends = (limit) => {
//   return request({
//     url: "/personalized",
//     params: {
//       limit
//     }
//   })
// }

// export const getNewAlbums = (limit) => {
//   return request({
//     url: "/top/album",
//     params: {
//       limit
//     }
//   })
// }

// export const getTopList = (idx) => {
//   return request({
//     url: "/top/list",
//     params: {
//       idx
//     }
//   })
// }