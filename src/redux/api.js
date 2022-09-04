import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5001"});

API.interceptors.request.use((req) => {
    let user = localStorage.getItem("userData")
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      user
    ).accessToken}`;
  }
  return req
})
export const logIn = async (formData) => {
    console.log('auth')
    return await API.post("/auth/login", formData);
  };