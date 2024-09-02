import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.env.BACKEND_URL,
    withCredentials:true
})
// console.log(import.meta.env.VITE_APP_BACKEND_URL)
export default axiosInstance;