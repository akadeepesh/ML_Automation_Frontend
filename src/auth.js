import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/user/";

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}login/`, formData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}register/`, formData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}profile/`, {
      headers: { Authorization: `Bearer ${token.access}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};

export const logout = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}logout/`,
      { refresh: token.refresh },
      {
        headers: { Authorization: `Bearer ${token.access}` },
      }
    );
    console.log("Token Deleted");
    // localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    return error;
  }
};
