import axios, { AxiosInterceptorManager } from "axios";
import { getToken } from './config';

const _axios = axios.create({
    // withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});

_axios.defaults.validateStatus = (status: number) => {
    return status >= 200 && status < 500;
};

type ResponseManager = AxiosInterceptorManager<any>;

(_axios.interceptors.response as ResponseManager).use((response) => {
    response.isOk = response.data.status_code >= 200 && response.data.status_code < 300;
    return response;
});

// Request interceptor to add the token to each request
_axios.interceptors.request.use((config) => {
    const token = getToken('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default _axios;
