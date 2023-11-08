import _axios from './axios'

let URL: any;
let API_URL_PRODUCT: any;
let API_URL_USER: any;


class api {

    constructor() {
        // userLocale = Cookies.get('current_user_locale');
        // URL = `${process.env.MIX_API_BASE_URL}/${userLocale}/v1`;
        URL = `/api/v1`;
        API_URL_PRODUCT = (import.meta as any).env.VITE_API_URL_PRODUCT + URL;
        API_URL_USER = (import.meta as any).env.VITE_API_URL_USER + URL;
    }

    async filterOption(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/filter_option`, data, {headers: Headers as any});
    }


    async searchCategoryProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search_category`, data, {headers: Headers as any});
    }

    async getUserPermissions(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user-permissions`, data, {headers: Headers as any});
    }

    async searchProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search`, data, {headers: Headers as any});
    }


    async fetchDataProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/list`, data, {headers: Headers as any});
    }

    async deleteSingleProduct(data: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/product/${data}`);
    }

    async fetchSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/${data}`);
    }

    async updateSingleProduct(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/product/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product`, data, {headers: Headers as any});
    }

    async loadAdminUsers(data: any, url: any = null) {
        if (!url) {
            url = `${API_URL_USER}/user/admin-users/search`;
        }
        return await _axios.post(`${url}`, data, {headers: Headers as any});
    }

    async loadUserById(id: any) {
        return await _axios.post(`${API_URL_USER}/user/admin-users/find-one`, id, {headers: Headers as any});
    }

    async loadCategory() {
        return await _axios.get(`${API_URL_PRODUCT}/product/category/list`);
    }

    async loadApiModelsPost(data: any, url: any, apiMethod: any) {
        if (apiMethod == 'GET')
            return await _axios.get(`${API_URL_PRODUCT}${url}`, data);
        else
            return await _axios.post(`${API_URL_PRODUCT}${url}`, {query: data}, {headers: Headers as any});
    }

    async login(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/login`, data, {headers: Headers as any});
    }

    async register(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/register`, data, {headers: Headers as any});
    }

    async logout(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/logout`, data, {headers: Headers as any});
    }

    async getSystemSettingData(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/setting`, data, {headers: Headers as any});
    }

    async changeLocale(locale: any) {
        return await _axios.get(`${API_URL_PRODUCT}/change-locale/${locale}`);
    }

    async uploadFile(file: any, modelName: string, type: string) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('modelName', modelName);
            formData.append('type', type);

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

    async displayFile(model: any, attribute: any, path: any) {
        const base64Path = btoa(path);
        return await _axios.get(`${API_URL_PRODUCT}/display-file/${model}/${attribute}/${base64Path}`, {
            headers: Headers as any,
            responseType: 'blob'
        });
    }


    //vendor
    async searchVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/search`, data, {headers: Headers as any});
    }


    async fetchDataVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/list`, data, {headers: Headers as any});
    }

    async deleteSingleVendor(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async fetchSingleVendor(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async updateSingleVendor(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor`, data, {headers: Headers as any});
    }


    async searchManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/search`, data, {headers: Headers as any});
    }

    async fetchDataManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/list`, data, {headers: Headers as any});
    }

    async deleteSingleManufacturer(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/manufacturer/${id}`, {headers: Headers as any});
    }

    async fetchSingleManufacturer(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/${id}`, {headers: Headers as any});
    }

    async updateSingleManufacturer(data: any = null) {

        return await _axios.put(`${API_URL_PRODUCT}/manufacturer/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer`, data, {headers: Headers as any});
    }

    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/search`, data, {headers: Headers as any});
    }

    async convertRfqToQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/convert/quote/${data.id}`, data, {headers: Headers as any});
    }

    async fetchDataRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/list`, data, {headers: Headers as any});
    }

    async deleteSingleRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async fetchSingleRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async updateSingleRfq(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/rfq/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq`, data, {headers: Headers as any});
    }

    //invoice
    async searchInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/search`, data, {headers: Headers as any});
    }


    async fetchDataInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/list`, data, {headers: Headers as any});
    }

    async deleteSingleInvoice(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async fetchSingleInvoice(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async updateSingleInvoice(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/invoice/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice`, data, {headers: Headers as any});
    }

    //contact
    async searchContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/search`, data, {headers: Headers as any});
    }


    async fetchDataContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/list`, data, {headers: Headers as any});
    }

    async deleteSingleContact(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async fetchSingleContact(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async updateSingleContact(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/contact/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact`, data, {headers: Headers as any});
    }

    //account
    async searchAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/search`, data, {headers: Headers as any});
    }

    async fetchDataAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/list`, data, {headers: Headers as any});
    }

    async deleteSingleAccount(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/account/${id}`);
    }

    async fetchSingleAccount(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/${id}`);
    }

    async updateSingleAccount(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/account/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account`, data, {headers: Headers as any});
    }

    async checkAccountExists(data: object) {
        return await _axios.post(`${API_URL_PRODUCT}/account/check-exists`, data, {headers: Headers as any});
    }


    //lead
    async convertLead(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/convert/${data.id}`, data, {headers: Headers as any});
    }

    async searchLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/search`, data, {headers: Headers as any});
    }

    async fetchDataLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/list`, data, {headers: Headers as any});
    }

    async deleteSingleLead(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async fetchSingleLead(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async updateSingleLead(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/lead/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead`, data, {headers: Headers as any});
    }

    //PurchaseOrder
    async searchPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/search`, data, {headers: Headers as any});
    }


    async fetchDataPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/list`, data, {headers: Headers as any});
    }

    async deleteSinglePurchaseOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async fetchSinglePurchaseOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async updateSinglePurchaseOrder(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/purchase_order/${data.id}`, data, {headers: Headers as any});
    }

    async createSinglePurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order`, data, {headers: Headers as any});
    }

    //Quotes
    async searchQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/search`, data, {headers: Headers as any});
    }

    async convertQuoteToSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/convert/sales_order/${data.id}`, data, {headers: Headers as any});
    }

    async fetchDataQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/list`, data, {headers: Headers as any});
    }

    async deleteSingleQuote(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async fetchSingleQuote(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async updateSingleQuote(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/quote/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote`, data, {headers: Headers as any});
    }

    //deals
    async searchDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/search`, data, {headers: Headers as any});
    }


    async fetchDataDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/list`, data, {headers: Headers as any});
    }

    async deleteSingleDeal(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async fetchSingleDeal(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async updateSingleDeal(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/deal/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal`, data, {headers: Headers as any});
    }

    //availability
    async searchAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/search`, data, {headers: Headers as any});
    }


    async fetchDataAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/list`, data, {headers: Headers as any});
    }

    async deleteSingleAvailability(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async fetchSingleAvailability(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async updateSingleAvailability(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/availability/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability`, data, {headers: Headers as any});
    }

    //excess
    async searchExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/search`, data, {headers: Headers as any});
    }


    async fetchDataExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/list`, data, {headers: Headers as any});
    }

    async deleteSingleExcess(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async fetchSingleExcess(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async updateSingleExcess(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/excess/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess`, data, {headers: Headers as any});
    }

    //sales_order
    async searchSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/search`, data, {headers: Headers as any});
    }

    // async convertSalesOrderToPurchaseOrder(data: any = null) {
    //     return await _axios.post(`${API_URL_PRODUCT}/sales_order/convert/purchase_order/${data.id}`, data, {headers: Headers as any});
    // }
    async convertSalesOrderToInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/convert/invoice/${data.id}`, data, {headers: Headers as any});
    }

    async fetchDataSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/list`, data, {headers: Headers as any});
    }

    async deleteSingleSalesOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async fetchSingleSalesOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async updateSingleSalesOrder(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/sales_order/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order`, data, {headers: Headers as any});
    }

    //task
    async searchTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/search`, data, {headers: Headers as any});
    }


    async fetchDataTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/list`, data, {headers: Headers as any});
    }

    async deleteSingleTask(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/task/${id}`);
    }

    async fetchSingleTask(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/${id}`);
    }

    async updateSingleTask(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/task/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task`, data, {headers: Headers as any});
    }

    //vendor_rfq
    async searchVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/search`, data, {headers: Headers as any});
    }


    async fetchDataVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/list`, data, {headers: Headers as any});
    }

    async deleteSingleVendorRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async fetchSingleVendorRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async updateSingleVendorRfq(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor_rfq/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq`, data, {headers: Headers as any});
    }


    //User
    async searchUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/search`, data, {headers: Headers as any});
    }


    async fetchDataUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/list`, data, {headers: Headers as any});
    }

    async deleteSingleUser(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/user/${id}`);
    }

    async fetchSingleUser(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/${id}`);
    }

    async updateSingleUser(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/user/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleUser(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/user`, data, {headers: Headers as any});
    }

    //role

    async searchRoles(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/roles/all`, data, {headers: Headers as any});
    }

    //layout
    async getFormLayout(data: object) {
        return await _axios.post(`${API_URL_PRODUCT}/form/layout`, data);
    }

    //attachment
    async uploadAttachments(files: any, modelName: string, modelId: string) {
        try {
            const formData = new FormData();

            files.forEach((file: any, index: any) => {
                formData.append(`files[${index}]`, file);
            });
            formData.append('modelName', modelName);
            formData.append('modelId', modelId);

            const response = await _axios.post(`${API_URL_PRODUCT}/attachment/upload`, formData, {
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

    async fetchAttachments(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/attachment/fetch`, data);
    }

    async deleteAttachments(id: any) {
        return await _axios.post(`${API_URL_PRODUCT}/attachment/delete/${id}`);
    }

    async downloadAttachment(id: string, originalName: string) {
        const downloadEndpoint = `${API_URL_PRODUCT}/attachment/download/${id}`;

        // Make a request to initiate the download
        _axios({
            method: 'post',
            url: downloadEndpoint,
            responseType: 'blob', // Important for handling binary data (like files)
        })
            .then(response => {
                if (response.status != 200)
                    throw Error(response.statusText);
                // Create a Blob from the response data
                const blob = new Blob([response.data], {type: response.headers['content-type']});

                // Create a link element and simulate a click to trigger the download
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = originalName ?? 's';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading attachment:', error);
                // Handle error as needed
            });
    }


    //setting
    async searchSetting(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/setting/search`, data, {headers: Headers as any});
    }


    async fetchDataSetting(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/setting/list`, data, {headers: Headers as any});
    }

    async searchCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/search`, data, {headers: Headers as any});
    }

    async fetchDataCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/list`, data, {headers: Headers as any});
    }

    async deleteSingleCall(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/call/${id}`);
    }

    async fetchSingleCall(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/${id}`);
    }

    async updateSingleCall(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/call/${data.id}`, data, {headers: Headers as any});
    }

    async createSingleCall(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/call`, data, {headers: Headers as any});
    }

    async globalSearch(text: string) {
        const data = {
            search: text
        }
        return await _axios.post(`${API_URL_PRODUCT}/global-search`, data, {headers: Headers as any});
    }
    async globalSearchFull(data: any) {
        // data = {
        //     search: text,
        //     page: int
        // }
        return await _axios.post(`${API_URL_PRODUCT}/global-search-full`, data, {headers: Headers as any});
    }

    async dashboardData() {
        return await _axios.get(`${API_URL_PRODUCT}/dashboard-data`, {headers: Headers as any});
    }

    async dashboardOpenQuotes() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/open-quotes`, {headers: Headers as any});
    }

    async dashboardBookingRevenue() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-revenue`, {headers: Headers as any});
    }

    async dashboardBillingYtdSales() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/billing-ytd-sales`, {headers: Headers as any});
    }

    async dashboardBookingGp() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-gp`, {headers: Headers as any});
    }

    async dashboardBookingSalesYtd() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-sales-ytd`, {headers: Headers as any});
    }
}

export default api
