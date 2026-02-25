import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
});

// Add JWT token automatically
API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default API;
