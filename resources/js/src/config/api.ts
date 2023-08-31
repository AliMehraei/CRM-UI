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
        API_URL_PRODUCT = import.meta.env.VITE_API_URL_PRODUCT + URL;
        API_URL_USER = import.meta.env.VITE_API_URL_USER + URL;
        Headers = {
            Authorization: `Bearer ${getToken('token')}`
        }
    }

    async searchCategoryProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search_category`, data, {headers: Headers});
    }

    async searchProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search`, data, {headers: Headers});
    }

    async filterOptionProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/filter_option`);
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


    // async loadRfqs(query) {
    //     try {
    //         const response = await _axios.get(`${API_URL_PRODUCT}/rfq/search-rfq`, {
    //             headers: Headers,
    //             params: {
    //                 query: query
    //             },
    //         });
    //         if (response.status !== 200) {
    //             throw new Error("Failed to fetch data from server.");
    //         }
    //         if (!response.data.status) {
    //             throw new Error(response.data.message || "Error retrieving rfqs.");
    //         }
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error loading rfqs:", error);
    //         throw error;
    //     }
    // }

    async loadCategory() {
        return await _axios.get(`${API_URL_PRODUCT}/product/category/list`);
    }

    async loadApiModelsPost(data, url, apiMethod) {
        if (apiMethod == 'GET')
            return await _axios.get(`${url}`, data);
        else
            return await _axios.post(`${url}`, data, {headers: Headers});
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

    async filterOptionVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/filter_option`);
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

    //manifacture
    // async searchManufacturersById(id) {
    //     return await _axios.post(`${API_URL_USER}/manufacture/search-manufactures/find-one`, id, { headers: Headers });
    // }

    // async searchManufacturers(query) {
    //     try {
    //         const response = await _axios.get(`${API_URL_PRODUCT}/manufacture/search-manufactures`, {
    //             headers: Headers,
    //             params: {
    //                 query: query
    //             },
    //         });
    //         if (response.status !== 200) {
    //             throw new Error("Failed to fetch data from server.");
    //         }
    //         if (!response.data.status) {
    //             throw new Error(response.data.message || "Error retrieving manufacturers.");
    //         }
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error loading manufacturers:", error);
    //         throw error;
    //     }
    // }

    async filterOptionManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacture/filter_option`);
    }

    async searchManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacture/search`, data, {headers: Headers});
    }

    async fetchDataManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacture/list`, data, {headers: Headers});
    }

    async deleteSingleManufacturer(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/manufacture/${id}`, {headers: Headers});
    }

    async fetchSingleManufacturer(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacture/${id}`, {headers: Headers});
    }

    async updateSingleManufacture(data: any = null) {

        return await _axios.put(`${API_URL_PRODUCT}/manufacture/${data.id}`, data, {headers: Headers});
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacture`, data, {headers: Headers});
    }


    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/search`, data, {headers: Headers});
    }

    async filterOptionRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/filter_option`);
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

    async filterOptionInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/filter_option`);
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

    async filterOptionContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/filter_option`);
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

    async filterOptionAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/filter_option`);
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


    //lead
    async searchLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/search`, data, {headers: Headers});
    }

    async filterOptionLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/filter_option`);
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

    async filterOptionPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/filter_option`);
    }

    async fetchDataPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/list`, data, {headers: Headers});
    }

    async deleteSinglePurchaseOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async fetchSinglePurchaseOrder(id: any = null) {
        return await _axios.get(`${API_URL_PRODUCT}/purchase_order/${id}`);
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

    async filterOptionQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/filter_option`);
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

    async filterOptionDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/filter_option`);
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

    async filterOptionAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/filter_option`);
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

    async filterOptionExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/filter_option`);
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

    async filterOptionSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/filter_option`);
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

    async filterOptionTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/filter_option`);
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

    async filterOptionVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/filter_option`);
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

}

export default api
