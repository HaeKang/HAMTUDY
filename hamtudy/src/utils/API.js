import axios from "axios";

const API = axios.create({
  baseURL: "http://3.142.49.52:8080/",
  headers: {},
  withCredentials: true,
});

export default API;
