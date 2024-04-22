import axios from "axios";
import store from "../src/store/index";

// Create an instance of axios with custom configurations
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
});

// Add a request interceptor to attach the bearer token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Fetch the token from wherever you have stored it (e.g., localStorage, Redux store)
    // const token = localStorage.getItem('garirmela'); // Example using localStorage

    const { user } = store.getState();
    const token = user.token;

    // If a token exists, set the Authorization header with the token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
