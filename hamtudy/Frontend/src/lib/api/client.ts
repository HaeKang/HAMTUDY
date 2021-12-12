import axios from "axios";

const client = axios.create();
client.defaults.baseURL="http://3.35.9.51:8080";

axios.interceptors.response.use(response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

export default client;