import axios from "axios";
import { getToken } from "../utils/token";
import lconfig from "../config";
const API_URL = lconfig.API_BASE_URL + "/v1/auth";

// export const getAccount = () => {
//   return axios.get(`${API_URL}/`);
// };

// export const FetchAccount = () => {
//   return axios.get(`${API_URL}/getprofile`, {
//     headers: { Authorization: getToken() },
//   });
// };

export const AccountLogin = (payload) => {
  return axios.post(`${API_URL}/login`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const AccountRegister = (payload) => {
//   return axios.post(`${API_URL}/register`, payload);
// };
