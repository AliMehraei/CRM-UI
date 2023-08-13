import _axios from './axios'
import { setToken,getToken,removeToken } from './config';

let URL:any;
let Headers:any;
let API_URL_PRODUCT :any;

class api {

    constructor(props: any) {
        // userLocale = Cookies.get('current_user_locale');
        // URL = `${process.env.MIX_API_BASE_URL}/${userLocale}/v1`;
        URL = `/api/v1`;
        API_URL_PRODUCT =import.meta.env.VITE_API_URL_PRODUCT;
        Headers = {
            Authorization: `Bearer ${getToken('token')}`
        }
    }
    
    async filter_option (data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/filter_option`);
    }
    
    async fetch_data_product (data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/list?page=${data.page}&pageSize=${data.pageSize}&sortField=${data.sortField}&sortDirection=${data.sortDirection}&filters=${data.filterParam}`);
    }
    
    async delete_single_product(data: any = null){
        return await _axios.delete(`${API_URL_PRODUCT}/api/product/${data}`);
    }
    async fetch_single_product(data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/${data}`);
    }
    async update_single_product(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/product/${id}`, data, { headers: Headers });
    }
    async create_single_product(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product`, data, { headers: Headers });
    }
    async loadAdminUsers(data,url) {
        return await _axios.post(`${url}`, data, { headers: Headers });
    }   
    async loadApiModelsPost(data,url) {
        return await _axios.post(`${url}`, data, { headers: Headers });
    }  
    async login (data: any) {
        return await _axios.post(`${URL}/login`, data,{headers: Headers});
    }

    async register (data: any) {
        return await _axios.post(`${URL}/register`, data,{headers: Headers});
    }

    async logout (data: any = null) {
        return await _axios.post(`${URL}/logout`,data,{headers: Headers});
    }
    
    async getSystemSettingData (data: any) {
        return await _axios.post(`${URL}/setting`, data,{headers: Headers});
    }



    async changeLocale (locale: any) {
        return await _axios.get(`${URL}/change-locale/${locale}`);
    }



}

export default api
