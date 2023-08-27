import axios, {AxiosInterceptorManager} from "axios";



const _axios = axios.create({
    // withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
})


_axios.defaults.validateStatus = (status: number) => {
    return status >= 200 && status < 500
}

type ResponseManager = AxiosInterceptorManager<any>;

(_axios.interceptors.response as ResponseManager).use((response) => {
    response.isOk = response.data.status_code >= 200 && response.data.status_code < 300
    return response
})


export default _axios