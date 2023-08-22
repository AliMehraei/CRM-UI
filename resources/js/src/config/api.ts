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


    async loadRfqs(query) {
        try {
            const response = await _axios.get(`${API_URL_PRODUCT}/api/rfq/search-rfq`, {
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

    async uploadFile(file: any) {
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

    //vendor
    async searchVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor/search`, data, {headers: Headers});
    }

    async filterOptionVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor/filter_option`);
    }

    async fetchDataVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor/list`, data, {headers: Headers});
    }

    async deleteSingleVendor(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/vendor/${id}`);
    }

    async fetchSingleVendor(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor/${id}`);
    }

    async updateSingleVendor(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/vendor/${id}`, data, {headers: Headers});
    }

    async createSingleVendor(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor`, data, {headers: Headers});
    }

    //manifacture
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

    async filterOptionManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture/filter_option`);
    }

    async searchManufacturer(data: any = null) {
        return await _axios.post(`${URL}/api/manufacture/search`, data, {headers: Headers});
    }

    async fetchDataManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture/list`, data, {headers: Headers});
    }

    async deleteSingleManufacturer(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/manufacture/${id}`, {headers: Headers});
    }

    async fetchSingleManufacturer(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture/${id}`, {headers: Headers});
    }

    async updateSingleManufacture(data: any = null) {
        const id = data.id;
        return await _axios.put(`${API_URL_PRODUCT}/api/manufacture/${id}`, data, {headers: Headers});
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture`, data, {headers: Headers});
    }


    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${URL}/api/rfq/search`, data, {headers: Headers});
    }

    async filterOptionRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq/filter_option`);
    }

    async fetchDataRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq/list`, data, {headers: Headers});
    }

    async deleteSingleRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/rfq/${id}`);
    }

    async fetchSingleRfq(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/rfq/${id}`);
    }

    async updateSingleRfq(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/rfq/${id}`, data, {headers: Headers});
    }

    async createSingleRfq(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq`, data, {headers: Headers});
    }

    //invoice
    async searchInvoice(data: any = null) {
        return await _axios.post(`${URL}/api/invoice/search`, data, {headers: Headers});
    }

    async filterOptionInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice/filter_option`);
    }

    async fetchDataInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice/list`, data, {headers: Headers});
    }

    async deleteSingleInvoice(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/invoice/${id}`);
    }

    async fetchSingleInvoice(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/invoice/${id}`);
    }

    async updateSingleInvoice(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/invoice/${id}`, data, {headers: Headers});
    }

    async createSingleInvoice(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice`, data, {headers: Headers});
    }


    //contact
    async searchContact(data: any = null) {
        return await _axios.post(`${URL}/api/contact/search`, data, {headers: Headers});
    }

    async filterOptionContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/contact/filter_option`);
    }

    async fetchDataContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/contact/list`, data, {headers: Headers});
    }

    async deleteSingleContact(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/contact/${id}`);
    }

    async fetchSingleContact(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/contact/${id}`);
    }

    async updateSingleContact(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/contact/${id}`, data, {headers: Headers});
    }

    async createSingleContact(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/contact`, data, {headers: Headers});
    }


    //account
    async searchAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/account/search`, data, {headers: Headers});
    }

    async filterOptionAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/account/filter_option`);
    }

    async fetchDataAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/account/list`, data, {headers: Headers});
    }

    async deleteSingleAccount(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/account/${id}`);
    }

    async fetchSingleAccount(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/account/${id}`);
    }

    async updateSingleAccount(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/account/${id}`, data, {headers: Headers});
    }

    async createSingleAccount(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/account`, data, {headers: Headers});
    }


    //lead
    async searchLead(data: any = null) {
        return await _axios.post(`${URL}/api/lead/search`, data, {headers: Headers});
    }

    async filterOptionLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/lead/filter_option`);
    }

    async fetchDataLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/lead/list`, data, {headers: Headers});
    }

    async deleteSingleLead(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/lead/${id}`);
    }

    async fetchSingleLead(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/lead/${id}`);
    }

    async updateSingleLead(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/lead/${id}`, data, {headers: Headers});
    }

    async createSingleLead(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/lead`, data, {headers: Headers});
    }


    //PurchaseOrder
    async searchPurchaseOrder(data: any = null) {
        return await _axios.post(`${URL}/api/purchase_order/search`, data, {headers: Headers});
    }

    async filterOptionPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/purchase_order/filter_option`);
    }

    async fetchDataPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/purchase_order/list`, data, {headers: Headers});
    }

    async deleteSinglePurchaseOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/purchase_order/${id}`);
    }

    async fetchSinglePurchaseOrder(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/api/purchase_order/${id}`);
    }

    async updateSinglePurchaseOrder(id, data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/purchase_order/${id}`, data, {headers: Headers});
    }

    async createSinglePurchaseOrder(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/purchase_order`, data, {headers: Headers});
    }

}

export default api
