import axios from "axios";
import { getToken } from "../utils/token";
import lconfig from "../config";
const API_URL = lconfig.API_BASE_URL + "/v1/property";

export const GetProperty = ({ id } = {}) => {
  if (id) {
    return axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: getToken() },
    });
  } else {
    return axios.get(`${API_URL}/`, { headers: { Authorization: getToken() } });
  }
};

export const PostProperty = (payload) => {
  return axios.post(`${API_URL}`, payload,{
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: getToken() 
    // }
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTM5NDQzMTAsImlhdCI6MTU5MTM1MjMxMCwidmVyc2lvbiI6MSwiYWNjb3VudF9pZCI6MSwiYWNjb3VudF91c2VybmFtZSI6Iis2MjgxMjEyMzQ1Njc4MCIsImFjY291bnRfdHlwZSI6IkdVREFORyIsImFjY291bnRfcm9sZSI6IkFETUlOIn0.ImoVaJHbvdFRWsEZbiTNYCo0x_CzitBV9lNfSbBhiMFXi88IhhG-KkwHemIWI6OeceuB8e6JjyupvUuONBeedbTiI1yDe0JCpXlIsbATKLMcOsSOuLKU2VWdtmqrp4JcsRdB3OJ66szdlVYUeiDzCWfyQVhEBNIoF4ALPTTCqXgkGk6e6r6A368c0s83zoHo_jNgUklXP7swoo5z4QbOKUPywIr0nH5VE_IXd0mBt2OYpfeX6SOwYd3kmRLrmeG_JwHuipyISqSVI6oP05k7qmSTd3zuuGQrSRJoAIJ_BvRomJ6Lv_3AAHTdAotnIHnksl29Spf7etM7w7RngTB1PQ",
    }
  });
};

export const UpdateProperty = (id, payload) => {
  return axios.put(`${API_URL}/${id}`, payload, {
    headers: { Authorization: getToken() },
  });
};

export const DeleteProperty = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: getToken() },
  });
};
