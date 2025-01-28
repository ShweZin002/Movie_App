import axios from "axios";

export const api_key = "3cd0d96586bdba39913d8ae83bf32dc7";
export const api = axios.create({
    baseURL: ' https://api.themoviedb.org/3',
})