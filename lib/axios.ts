import axios from "axios";
import { getCookie } from "./cookies";

const axiosIns = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_EHARMON,
    headers: {
        "Access-Control-Allow-Headers":
            "Origin, Content-Type, Accept, Authorization, X-Auth-Token",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Max-Age": "3600",
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    },
    // adapter: "fetch",
    // fetchOptions: { cache: "force-cache" },
});

axiosIns.interceptors.request.use(
    (config) => {
        const token = process.env.NEXT_PUBLIC_TOKEN_EHARMON ?? "";

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosIns;
