import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/user/";

export const login = async (formData) => {
  const response = await axios.post(`${API_URL}login/`, { formData });
  if (response.data.token.access) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }
  return response.data;
};
