export const PASSWORDRULES = [
  { required: true, message: '请输入密码!' },
  { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: "密码只包含 数字和英文，长度6-20" }
];

export const USERNAMERULES = [
  { required: true, message: '请输入账号!' },
  { pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, message: "账号为手机号格式" }
];

export const NICKNAMERULES = [
  { required: true, message: '请输入昵称!' }, 
  { pattern: /^[\u4E00-\u9FA5]{2,6}$/, message: "格式为2-6个汉字" }
]