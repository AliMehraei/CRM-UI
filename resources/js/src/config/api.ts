import _axios from './axios'
import {setToken, getToken, removeToken} from './config';
import {an} from "@fullcalendar/core/internal-common";

let URL: any;
let Headers: any;
let API_URL_PRODUCT: any;
let API_URL_USER: any;

class api {

    constructor(props: any = {}) {
        // userLocale = Cookies.get('current_user_locale');
        // URL = `${process.env.MIX_API_BASE_URL}/${userLocale}/v1`;
        URL = `/api/v1`;
        API_URL_PRODUCT = import.meta.env.VITE_API_URL_PRODUCT;
        API_URL_USER = import.meta.env.VITE_API_URL_USER;
        Headers = {
            Authorization: `Bearer ${getToken('token')}`
        }
    }

    async filter_option(data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/filter_option`);
    }

    async fetch_data_product(data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/list?page=${data.page}&pageSize=${data.pageSize}&sortField=${data.sortField}&sortDirection=${data.sortDirection}&filters=${data.filterParam}`);
    }

    async delete_single_product(data: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/product/${data}`);
    }

    async fetch_single_product(data: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/${data}`);
    }

    async update_single_product(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/product/${id}`, data, {headers: Headers});
    }

    async create_single_product(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product`, data, {headers: Headers});
    }

    async loadAdminUsers(data, url = null) {
        if (!url) {
            url = `${API_URL_USER}/api/user/admin-users/search`;
        }
        return await _axios.post(`${url}`, data, {headers: Headers});
    }

    async loadUserById(id) {
        return await _axios.post(`${API_URL_USER}/api/user/admin-users/find-one`, id, {headers: Headers});
    }

    async loadManufacturersById(id) {
        return await _axios.post(`${API_URL_USER}/api/manufacture/search-manufactures/find-one`, id, {headers: Headers});
    }

    async loadManufacturers(query) {
        try {
            const response = await _axios.get(`${API_URL_PRODUCT}/api/manufacture/search-manufactures`, {
                headers: Headers,
                params: {
                    query: query
                },
            });
            if (response.status !== 200) {
                throw new Error("Failed to fetch data from server.");
            }
            if (!response.data.status) {
                throw new Error(response.data.message || "Error retrieving manufacturers.");
            }
            return response.data;
        } catch (error) {
            console.error("Error loading manufacturers:", error);
            throw error;
        }
    }

    async loadRfqs(query) {
        try {
            const response = await _axios.get(`${API_URL_PRODUCT}/api/search-rfq`, {
                headers: Headers,
                params: {
                    query: query
                },
            });
            if (response.status !== 200) {
                throw new Error("Failed to fetch data from server.");
            }
            if (!response.data.status) {
                throw new Error(response.data.message || "Error retrieving rfqs.");
            }
            return response.data;
        } catch (error) {
            console.error("Error loading rfqs:", error);
            throw error;
        }
    }

    async loadCategory() {
        return await _axios.get(`${API_URL_PRODUCT}/api/product/catagory/list`);
    }

    async loadApiModelsPost(data, url, apiMethod) {
        if (apiMethod == 'GET')
            return await _axios.get(`${url}`, data);
        else
            return await _axios.post(`${url}`, data, {headers: Headers});
    }

    async login(data: any) {
        return await _axios.post(`${URL}/login`, data, {headers: Headers});
    }

    async register(data: any) {
        return await _axios.post(`${URL}/register`, data, {headers: Headers});
    }

    async logout(data: any = null) {
        return await _axios.post(`${URL}/logout`, data, {headers: Headers});
    }

    async getSystemSettingData(data: any) {
        return await _axios.post(`${URL}/setting`, data, {headers: Headers});
    }


    async changeLocale(locale: any) {
        return await _axios.get(`${URL}/change-locale/${locale}`);
    }

    async uploadImage(file: any) {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await _axios.post(`${API_URL_PRODUCT}/api/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                return response; // Assuming the server returns the URL of the uploaded image
            } else {
                throw new Error('File upload failed');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    }


}

export default api
