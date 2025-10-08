import axios from "axios";

const axiosIns = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_EHARMON,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Add Authorization header if token exists
axiosIns.interceptors.request.use(
    (config) => {
        const token = process.env.NEXT_PUBLIC_TOKEN_EHARMON ?? "";
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosIns;
