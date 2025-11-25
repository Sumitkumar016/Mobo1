import axios from "axios";

// base instance used everywhere
const api = axios.create({
  baseURL: "http://localhost:3000", // change for production
  withCredentials: true,            // IMPORTANT: send cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;