import axios from "axios";

export const AxiosClient = axios.create({
    baseURL: 'https://localhost:3000/api/',
    timeout: 1000
});