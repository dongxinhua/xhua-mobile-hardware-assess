const devBaseUrl = "http://127.0.0.1:4399";
const proBaseUrl = "http://127.0.0.1:4399";

export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl;

export const TIMEOUT = 5000;