import { AxiosResponse } from "axios";
import axios from "./axios";
import axiosJSON from "./axiosJSON";


export async function authLogin(f: FormData): Promise<AxiosResponse> {
    return await axios.post("/api/auth/login", f);
}

export async function fetchRancanganList(
    filters: any
): Promise<AxiosResponse<any>> {
    return await axiosJSON.post(`/api/rancangan/rancangan-by-jenis`, filters);
}

export async function testCors(): Promise<AxiosResponse<any>> {
    return await axiosJSON.post(`/test-cors.php`);
}

export async function fetchRancanganListByJenis(
    payload: any,
): Promise<AxiosResponse> {
    return await axios.post("/api/rancangan/rancangan-by-jenis", payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}