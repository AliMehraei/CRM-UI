import _axios from './axios'
import {setToken, getToken, removeToken} from './config';
import {an} from "@fullcalendar/core/internal-common";
import {Outlet, Navigate} from 'react-router-dom';

let URL: any;
let API_URL_PRODUCT: any;
let API_URL_USER: any;


class api {

    constructor(props: any = {}) {
        // userLocale = Cookies.get('current_user_locale');
        // URL = `${process.env.MIX_API_BASE_URL}/${userLocale}/v1`;
        URL = `/api/v1`;
        API_URL_PRODUCT = import.meta.env.VITE_API_URL_PRODUCT + URL;
        API_URL_USER = import.meta.env.VITE_API_URL_USER + URL;
    }

    async filterOption(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/filter_option`, data, {headers: Headers});
    }


    async searchCategoryProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search_category`, data, {headers: Headers});
    }

    async getUserPermissions(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user-permissions`, data, {headers: Headers});
    }

    async searchProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search`, data, {headers: Headers});
    }


    async fetchDataProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/list`, data, {headers: Headers});
    }

    async deleteSingleProduct(data: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/product/${data}`);
    }

    async fetchSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/${data}`);
    }

    async updateSingleProduct(data) {
        return await _axios.put(`${API_URL_PRODUCT}/product/${data.id}`, data, {headers: Headers});
    }

    async createSingleProduct(data) {
        return await _axios.post(`${API_URL_PRODUCT}/product`, data, {headers: Headers});
    }

    async loadAdminUsers(data, url = null) {
        if (!url) {
            url = `${API_URL_USER}/user/admin-users/search`;
        }
        return await _axios.post(`${url}`, data, {headers: Headers});
    }

    async loadUserById(id) {
        return await _axios.post(`${API_URL_USER}/user/admin-users/find-one`, id, {headers: Headers});
    }

    async loadCategory() {
        return await _axios.get(`${API_URL_PRODUCT}/product/category/list`);
    }

    async loadApiModelsPost(data, url, apiMethod) {
        if (apiMethod == 'GET')
            return await _axios.get(`${API_URL_PRODUCT}${url}`, data);
        else
            return await _axios.post(`${API_URL_PRODUCT}${url}`, {query: data}, {headers: Headers});
    }

    async login(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/login`, data, {headers: Headers});
    }

    async register(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/register`, data, {headers: Headers});
    }

    async logout(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/logout`, data, {headers: Headers});
    }

    async getSystemSettingData(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/setting`, data, {headers: Headers});
    }

    async changeLocale(locale: any) {
        return await _axios.get(`${API_URL_PRODUCT}/change-locale/${locale}`);
    }

    async uploadFile(file: any) {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await _axios.post(`${API_URL_PRODUCT}/upload`, formData, {
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
        return await _axios.post(`${API_URL_PRODUCT}/vendor/search`, data, {headers: Headers});
    }


    async fetchDataVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/list`, data, {headers: Headers});
    }

    async deleteSingleVendor(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async fetchSingleVendor(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async updateSingleVendor(data) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor/${data.id}`, data, {headers: Headers});
    }

    async createSingleVendor(data) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor`, data, {headers: Headers});
    }


    async searchManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/search`, data, {headers: Headers});
    }

    async fetchDataManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/list`, data, {headers: Headers});
    }

    async deleteSingleManufacturer(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/manufacturer/${id}`, {headers: Headers});
    }

    async fetchSingleManufacturer(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/${id}`, {headers: Headers});
    }

    async updateSingleManufacturer(data: any = null) {

        return await _axios.put(`${API_URL_PRODUCT}/manufacturer/${data.id}`, data, {headers: Headers});
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer`, data, {headers: Headers});
    }

    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/search`, data, {headers: Headers});
    }


    async fetchDataRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/list`, data, {headers: Headers});
    }

    async deleteSingleRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async fetchSingleRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async updateSingleRfq(data) {
        return await _axios.put(`${API_URL_PRODUCT}/rfq/${data.id}`, data, {headers: Headers});
    }

    async createSingleRfq(data) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq`, data, {headers: Headers});
    }

    //invoice
    async searchInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/search`, data, {headers: Headers});
    }


    async fetchDataInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/list`, data, {headers: Headers});
    }

    async deleteSingleInvoice(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async fetchSingleInvoice(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async updateSingleInvoice(data) {
        return await _axios.put(`${API_URL_PRODUCT}/invoice/${data.id}`, data, {headers: Headers});
    }

    async createSingleInvoice(data) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice`, data, {headers: Headers});
    }

    //contact
    async searchContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/search`, data, {headers: Headers});
    }


    async fetchDataContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/list`, data, {headers: Headers});
    }

    async deleteSingleContact(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async fetchSingleContact(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async updateSingleContact(data) {
        return await _axios.put(`${API_URL_PRODUCT}/contact/${data.id}`, data, {headers: Headers});
    }

    async createSingleContact(data) {
        return await _axios.post(`${API_URL_PRODUCT}/contact`, data, {headers: Headers});
    }

    //account
    async searchAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/search`, data, {headers: Headers});
    }

    async fetchDataAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/list`, data, {headers: Headers});
    }

    async deleteSingleAccount(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/account/${id}`);
    }

    async fetchSingleAccount(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/${id}`);
    }

    async updateSingleAccount(data) {
        return await _axios.put(`${API_URL_PRODUCT}/account/${data.id}`, data, {headers: Headers});
    }

    async createSingleAccount(data) {
        return await _axios.post(`${API_URL_PRODUCT}/account`, data, {headers: Headers});
    }

    async checkAccountExists(data: object) {
        return await _axios.post(`${API_URL_PRODUCT}/account/check-exists`, data, {headers: Headers});
    }


    //lead
    async convertLead(data) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/convert`, data, {headers: Headers});
    }

    async searchLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/search`, data, {headers: Headers});
    }

    async fetchDataLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/list`, data, {headers: Headers});
    }

    async deleteSingleLead(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async fetchSingleLead(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async updateSingleLead(data) {
        return await _axios.put(`${API_URL_PRODUCT}/lead/${data.id}`, data, {headers: Headers});
    }

    async createSingleLead(data) {
        return await _axios.post(`${API_URL_PRODUCT}/lead`, data, {headers: Headers});
    }

    //PurchaseOrder
    async searchPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/search`, data, {headers: Headers});
    }


    async fetchDataPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/list`, data, {headers: Headers});
    }

    async deleteSinglePurchaseOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async fetchSinglePurchaseOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async updateSinglePurchaseOrder(data) {
        return await _axios.put(`${API_URL_PRODUCT}/purchase_order/${data.id}`, data, {headers: Headers});
    }

    async createSinglePurchaseOrder(data) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order`, data, {headers: Headers});
    }

    //Quotes
    async searchQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/search`, data, {headers: Headers});
    }


    async fetchDataQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/list`, data, {headers: Headers});
    }

    async deleteSingleQuote(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async fetchSingleQuote(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async updateSingleQuote(data) {
        return await _axios.put(`${API_URL_PRODUCT}/quote/${data.id}`, data, {headers: Headers});
    }

    async createSingleQuote(data) {
        return await _axios.post(`${API_URL_PRODUCT}/quote`, data, {headers: Headers});
    }

    //deals
    async searchDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/search`, data, {headers: Headers});
    }


    async fetchDataDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/list`, data, {headers: Headers});
    }

    async deleteSingleDeal(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async fetchSingleDeal(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async updateSingleDeal(data) {
        return await _axios.put(`${API_URL_PRODUCT}/deal/${data.id}`, data, {headers: Headers});
    }

    async createSingleDeal(data) {
        return await _axios.post(`${API_URL_PRODUCT}/deal`, data, {headers: Headers});
    }

    //availability
    async searchAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/search`, data, {headers: Headers});
    }


    async fetchDataAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/list`, data, {headers: Headers});
    }

    async deleteSingleAvailability(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async fetchSingleAvailability(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async updateSingleAvailability(data) {
        return await _axios.put(`${API_URL_PRODUCT}/availability/${data.id}`, data, {headers: Headers});
    }

    async createSingleAvailability(data) {
        return await _axios.post(`${API_URL_PRODUCT}/availability`, data, {headers: Headers});
    }

    //excess
    async searchExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/search`, data, {headers: Headers});
    }


    async fetchDataExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/list`, data, {headers: Headers});
    }

    async deleteSingleExcess(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async fetchSingleExcess(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async updateSingleExcess(data) {
        return await _axios.put(`${API_URL_PRODUCT}/excess/${data.id}`, data, {headers: Headers});
    }

    async createSingleExcess(data) {
        return await _axios.post(`${API_URL_PRODUCT}/excess`, data, {headers: Headers});
    }

    //sales_order
    async searchSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/search`, data, {headers: Headers});
    }


    async fetchDataSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/list`, data, {headers: Headers});
    }

    async deleteSingleSalesOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async fetchSingleSalesOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async updateSingleSalesOrder(data) {
        return await _axios.put(`${API_URL_PRODUCT}/sales_order/${data.id}`, data, {headers: Headers});
    }

    async createSingleSalesOrder(data) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order`, data, {headers: Headers});
    }

    //task
    async searchTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/search`, data, {headers: Headers});
    }


    async fetchDataTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/list`, data, {headers: Headers});
    }

    async deleteSingleTask(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/task/${id}`);
    }

    async fetchSingleTask(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/${id}`);
    }

    async updateSingleTask(data) {
        return await _axios.put(`${API_URL_PRODUCT}/task/${data.id}`, data, {headers: Headers});
    }

    async createSingleTask(data) {
        return await _axios.post(`${API_URL_PRODUCT}/task`, data, {headers: Headers});
    }

    //vendor_rfq
    async searchVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/search`, data, {headers: Headers});
    }


    async fetchDataVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/list`, data, {headers: Headers});
    }

    async deleteSingleVendorRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async fetchSingleVendorRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async updateSingleVendorRfq(data) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor_rfq/${data.id}`, data, {headers: Headers});
    }

    async createSingleVendorRfq(data) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq`, data, {headers: Headers});
    }


    //User
    async searchUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/search`, data, {headers: Headers});
    }


    async fetchDataUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/list`, data, {headers: Headers});
    }

    async deleteSingleUser(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/user/${id}`);
    }

    async fetchSingleUser(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/${id}`);
    }

    async updateSingleUser(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/user/${data.id}`, data, {headers: Headers});
    }

    async createSingleUser(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/user`, data, {headers: Headers});
    }

    async searchRoles(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/roles/all`, data, {headers: Headers});
    }

    async getFormLayout(data: object) {
        return await _axios.post(`${API_URL_PRODUCT}/form/layout`, data);
    }

}

export default api
