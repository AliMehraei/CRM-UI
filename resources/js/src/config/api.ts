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
        URL = `/api`;
        API_URL_PRODUCT = import.meta.env.VITE_API_URL_PRODUCT;
        API_URL_USER = import.meta.env.VITE_API_URL_USER;
        Headers = {
            Authorization: `Bearer ${getToken('token')}`
        }
    }

    async searchCategoryProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product/search_category`, data, {headers: Headers});
    }

    async searchProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product/search`, data, {headers: Headers});
    }

    async filterOptionProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product/filter_option`);
    }

    async fetchDataProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product/list`, data, {headers: Headers});
    }

    async deleteSingleProduct(data: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/product/${data}`);
    }

    async fetchSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/product/${data}`);
    }

    async updateSingleProduct(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/product/${data.id}`, data, {headers: Headers});
    }

    async createSingleProduct(data) {
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


    // async loadRfqs(query) {
    //     try {
    //         const response = await _axios.get(`${API_URL_PRODUCT}/api/rfq/search-rfq`, {
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
        return await _axios.get(`${API_URL_PRODUCT}/api/product/category/list`);
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

    async updateSingleVendor(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/vendor/${data.id}`, data, {headers: Headers});
    }

    async createSingleVendor(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor`, data, {headers: Headers});
    }

    //manifacture
    // async searchManufacturersById(id) {
    //     return await _axios.post(`${API_URL_USER}/api/manufacture/search-manufactures/find-one`, id, { headers: Headers });
    // }

    // async searchManufacturers(query) {
    //     try {
    //         const response = await _axios.get(`${API_URL_PRODUCT}/api/manufacture/search-manufactures`, {
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
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture/filter_option`);
    }

    async searchManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture/search`, data, {headers: Headers});
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

        return await _axios.put(`${API_URL_PRODUCT}/api/manufacture/${data.id}`, data, {headers: Headers});
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/manufacture`, data, {headers: Headers});
    }


    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq/search`, data, {headers: Headers});
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
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq/${id}`);
    }

    async updateSingleRfq(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/rfq/${data.id}`, data, {headers: Headers});
    }

    async createSingleRfq(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/rfq`, data, {headers: Headers});
    }

    //invoice
    async searchInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice/search`, data, {headers: Headers});
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
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice/${id}`);
    }

    async updateSingleInvoice(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/invoice/${data.id}`, data, {headers: Headers});
    }

    async createSingleInvoice(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/invoice`, data, {headers: Headers});
    }


    //contact
    async searchContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/contact/search`, data, {headers: Headers});
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
        return await _axios.post(`${API_URL_PRODUCT}/api/contact/${id}`);
    }

    async updateSingleContact(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/contact/${data.id}`, data, {headers: Headers});
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
        return await _axios.post(`${API_URL_PRODUCT}/api/account/${id}`);
    }

    async updateSingleAccount(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/account/${data.id}`, data, {headers: Headers});
    }

    async createSingleAccount(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/account`, data, {headers: Headers});
    }


    //lead
    async searchLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/lead/search`, data, {headers: Headers});
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
        return await _axios.post(`${API_URL_PRODUCT}/api/lead/${id}`);
    }

    async updateSingleLead(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/lead/${data.id}`, data, {headers: Headers});
    }

    async createSingleLead(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/lead`, data, {headers: Headers});
    }


    //PurchaseOrder
    async searchPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/purchase_order/search`, data, {headers: Headers});
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

    async updateSinglePurchaseOrder(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/purchase_order/${data.id}`, data, {headers: Headers});
    }

    async createSinglePurchaseOrder(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/purchase_order`, data, {headers: Headers});
    }


    //Quotes
    async searchQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/quote/search`, data, {headers: Headers});
    }

    async filterOptionQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/quote/filter_option`);
    }

    async fetchDataQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/quote/list`, data, {headers: Headers});
    }

    async deleteSingleQuote(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/quote/${id}`);
    }

    async fetchSingleQuote(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/quote/${id}`);
    }

    async updateSingleQuote(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/quote/${data.id}`, data, {headers: Headers});
    }

    async createSingleQuote(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/quote`, data, {headers: Headers});
    }

    //deals
    async searchDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/deal/search`, data, {headers: Headers});
    }

    async filterOptionDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/deal/filter_option`);
    }

    async fetchDataDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/deal/list`, data, {headers: Headers});
    }

    async deleteSingleDeal(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/deal/${id}`);
    }

    async fetchSingleDeal(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/deal/${id}`);
    }

    async updateSingleDeal(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/deal/${data.id}`, data, {headers: Headers});
    }

    async createSingleDeal(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/deal`, data, {headers: Headers});
    }


    //availability
    async searchAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/availability/search`, data, {headers: Headers});
    }

    async filterOptionAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/availability/filter_option`);
    }

    async fetchDataAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/availability/list`, data, {headers: Headers});
    }

    async deleteSingleAvailability(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/availability/${id}`);
    }

    async fetchSingleAvailability(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/availability/${id}`);
    }

    async updateSingleAvailability(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/availability/${data.id}`, data, {headers: Headers});
    }

    async createSingleAvailability(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/availability`, data, {headers: Headers});
    }

    //excess
    async searchExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/excess/search`, data, {headers: Headers});
    }

    async filterOptionExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/excess/filter_option`);
    }

    async fetchDataExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/excess/list`, data, {headers: Headers});
    }

    async deleteSingleExcess(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/excess/${id}`);
    }

    async fetchSingleExcess(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/excess/${id}`);
    }

    async updateSingleExcess(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/excess/${data.id}`, data, {headers: Headers});
    }

    async createSingleExcess(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/excess`, data, {headers: Headers});
    }

    //sales_order
    async searchSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/sales_order/search`, data, {headers: Headers});
    }

    async filterOptionSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/sales_order/filter_option`);
    }

    async fetchDataSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/sales_order/list`, data, {headers: Headers});
    }

    async deleteSingleSalesOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/sales_order/${id}`);
    }

    async fetchSingleSalesOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/sales_order/${id}`);
    }

    async updateSingleSalesOrder(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/sales_order/${data.id}`, data, {headers: Headers});
    }

    async createSingleSalesOrder(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/sales_order`, data, {headers: Headers});
    }

    //task
    async searchTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/task/search`, data, {headers: Headers});
    }

    async filterOptionTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/task/filter_option`);
    }

    async fetchDataTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/task/list`, data, {headers: Headers});
    }

    async deleteSingleTask(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/task/${id}`);
    }

    async fetchSingleTask(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/task/${id}`);
    }

    async updateSingleTask(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/task/${data.id}`, data, {headers: Headers});
    }

    async createSingleTask(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/task`, data, {headers: Headers});
    }


    //vendor_rfq
    async searchVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor_rfq/search`, data, {headers: Headers});
    }

    async filterOptionVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor_rfq/filter_option`);
    }

    async fetchDataVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor_rfq/list`, data, {headers: Headers});
    }

    async deleteSingleVendorRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/api/vendor_rfq/${id}`);
    }

    async fetchSingleVendorRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor_rfq/${id}`);
    }

    async updateSingleVendorRfq(data) {
        return await _axios.put(`${API_URL_PRODUCT}/api/vendor_rfq/${data.id}`, data, {headers: Headers});
    }

    async createSingleVendorRfq(data) {
        return await _axios.post(`${API_URL_PRODUCT}/api/vendor_rfq`, data, {headers: Headers});
    }

}

export default api
