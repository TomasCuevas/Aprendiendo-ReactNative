import axios from "axios";

export const cafeApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASEURL,
});
