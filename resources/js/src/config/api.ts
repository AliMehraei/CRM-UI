import _axios from './axios'
import Details from "../pages/Analytic/Admin/Sales/components/Details";

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
        return await _axios.post(`${API_URL_PRODUCT}/filter_option`, data);
    }


    async searchCategoryProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search_category`, data);
    }

    async getUserPermissions(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user-permissions`, data);
    }

    async getUserSettingFieldColumns(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/field-columns/get-settings`, data);
    }

    async searchProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/search`, data);
    }


    async fetchDataProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/list`, data);
    }

    async fetchProductEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/email-logs`, data);
    }

    async deleteSingleProduct(data: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/product/${data}`);
    }

    async fetchSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/${data}`);
    }

    async updateSingleProduct(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/product/${data.id}`, data);
    }

    async createSingleProduct(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product`, data);
    }

    async loadAdminUsers(data: any, url: any = null) {
        if (!url) {
            url = `${API_URL_USER}/user/admin-users/search`;
        }
        return await _axios.post(`${url}`, data);
    }

    async loadUserById(id: any) {
        return await _axios.post(`${API_URL_USER}/user/admin-users/find-one`, id);
    }

    async loadCategory() {
        return await _axios.get(`${API_URL_PRODUCT}/product/category/list`);
    }

    async loadApiModelsPost(data: any, url: any, apiMethod: any) {
        if (apiMethod == 'GET')
            return await _axios.get(`${API_URL_PRODUCT}${url}`, data);
        else
            return await _axios.post(`${API_URL_PRODUCT}${url}`, {query: data});
    }

    async login(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/login`, data);
    }

    async register(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/register`, data);
    }

    async logout(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/logout`, data);
    }

    async getSystemSettingData(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/setting`, data);
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
        return await _axios.post(`${API_URL_PRODUCT}/vendor/search`, data);
    }


    async fetchDataVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/list`, data);
    }

    async fetchVendorEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/email-logs`, data);
    }

    async deleteSingleVendor(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async fetchSingleVendor(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/${id}`);
    }

    async updateSingleVendor(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor/${data.id}`, data);
    }

    async createSingleVendor(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor`, data);
    }


    async searchManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/search`, data);
    }

    async fetchDataManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/list`, data);
    }

    async fetchManufacturerEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/email-logs`, data);
    }

    async deleteSingleManufacturer(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/manufacturer/${id}`);
    }

    async fetchSingleManufacturer(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/${id}`);
    }

    async updateSingleManufacturer(data: any = null) {

        return await _axios.put(`${API_URL_PRODUCT}/manufacturer/${data.id}`, data);
    }

    async createSingleManufacturer(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer`, data);
    }

    //RFQ
    async searchRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/search`, data);
    }

    async convertRfqToQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/convert/quote/${data.id}`, data);
    }

    async fetchDataRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/list`, data);
    }

    async fetchRfqEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/email-logs`, data);
    }

    async deleteSingleRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async fetchSingleRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/${id}`);
    }

    async updateSingleRfq(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/rfq/${data.id}`, data);
    }

    async createSingleRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq`, data);
    }

    //invoice
    async searchInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/search`, data);
    }

    async fetchDataInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/list`, data);
    }

    async fetchInvoiceEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/email-logs`, data);
    }

    async deleteSingleInvoice(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async fetchSingleInvoice(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/${id}`);
    }

    async updateSingleInvoice(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/invoice/${data.id}`, data);
    }

    async createSingleInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice`, data);
    }

    //contact
    async searchContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/search`, data);
    }


    async fetchDataContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/list`, data);
    }

    async fetchContactEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/email-logs`, data);
    }

    async deleteSingleContact(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async fetchSingleContact(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/${id}`);
    }

    async updateSingleContact(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/contact/${data.id}`, data);
    }

    async createSingleContact(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact`, data);
    }

    //account
    async searchAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/search`, data);
    }

    async fetchDataAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/list`, data);
    }

    async fetchAccountEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/email-logs`, data);
    }

    async deleteSingleAccount(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/account/${id}`);
    }

    async fetchSingleAccount(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/${id}`);
    }

    async updateSingleAccount(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/account/${data.id}`, data);
    }

    async createSingleAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account`, data);
    }

    async checkAccountExists(data: object) {
        return await _axios.post(`${API_URL_PRODUCT}/account/check-exists`, data);
    }


    //lead
    async convertLead(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/convert/${data.id}`, data);
    }

    async convertLeadValidation(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/convert/validation/${data.id}`, data);
    }


    async searchLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/search`, data);
    }

    async fetchDataLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/list`, data);
    }

    async fetchLeadEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/email-logs`, data);
    }

    async deleteSingleLead(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async fetchSingleLead(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/${id}`);
    }

    async updateSingleLead(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/lead/${data.id}`, data);
    }

    async createSingleLead(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead`, data);
    }

    //PurchaseOrder
    async searchPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/search`, data);
    }


    async fetchDataPurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/list`, data);
    }

    async fetchPurchaseOrderEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/email-logs`, data);
    }

    async deleteSinglePurchaseOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async fetchSinglePurchaseOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/${id}`);
    }

    async updateSinglePurchaseOrder(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/purchase_order/${data.id}`, data);
    }

    async createSinglePurchaseOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order`, data);
    }

    //Quotes
    async searchQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/search`, data);
    }

    async convertQuoteToSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/convert/sales_order/${data.id}`, data);
    }

    async fetchDataQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/list`, data);
    }
    async fetchQuoteCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/calls`, data);
    }
    async fetchAccountCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/account/calls`, data);
    }
    async fetchLeadCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/lead/calls`, data);
    }

    async fetchContactCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/contact/calls`, data);
    }

    async fetchVendorCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor/calls`, data);
    }

    async fetchManufacturerCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/manufacturer/calls`, data);
    }

    async fetchRfqCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/rfq/calls`, data);
    }

    async fetchExcessCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/calls`, data);
    }

    async fetchAvailabilityCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/calls`, data);
    }

    async fetchProductCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/product/calls`, data);
    }

    async fetchDealCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/calls`, data);
    }

    async fetchSalesOrderCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/calls`, data);
    }

    async fetchPurchaseOrderCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/purchase_order/calls`, data);
    }

    async fetchInvoiceCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/calls`, data);
    }

    async fetchVendorRfqCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/calls`, data);
    }

    async fetchQuoteEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/email-logs`, data);
    }

    async deleteSingleQuote(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async fetchSingleQuote(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}`);
    }

    async updateSingleQuote(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/quote/${data.id}`, data);
    }

    async createSingleQuote(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/quote`, data);
    }

    async quotationEmail(id: any, attachment = false) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}/email`, {"proactive": false, "attachment": attachment});
    }


    async quotationEmailProactive(id: any, attachment = false) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}/email`, {"proactive": true, "attachment": attachment});
    }

    async sendQuotationRelatedEmail(id: any , trackingUuid:any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/quote/${id}/email-related/${trackingUuid}`, data);
    }
    async sendInvoiceEmail(id: any, attachment = false) {
        return await _axios.post(`${API_URL_PRODUCT}/invoice/${id}/email`, {"attachment": attachment});
    }
    
    async getPDF(modelName:string, id: any, name: any) {       
        _axios({
            method: 'post',
            url: `${API_URL_PRODUCT}/${modelName.replace('-', '_')}/${id}/get-pdf`,
            responseType: 'blob', // Important for handling binary data (like files)
        })
            .then(response => {
                if (response.status != 200) throw Error(response.statusText);

                const blob = new Blob([response.data], {type: response.headers['content-type']});
                
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = name + '.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading attachment:', error);
            });
    }

    //deals
    async searchDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/search`, data);
    }


    async fetchDataDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/list`, data);
    }

    async fetchDealEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/email-logs`, data);
    }

    async deleteSingleDeal(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async fetchSingleDeal(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal/${id}`);
    }

    async updateSingleDeal(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/deal/${data.id}`, data);
    }

    async createSingleDeal(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/deal`, data);
    }

    //availability
    async searchAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/search`, data);
    }


    async fetchDataAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/list`, data);
    }

    async fetchAvailabilityEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/email-logs`, data);
    }

    async deleteSingleAvailability(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async fetchSingleAvailability(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/${id}`);
    }

    async updateSingleAvailability(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/availability/${data.id}`, data);
    }

    async createSingleAvailability(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability`, data);
    }

    //excess
    async searchExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/search`, data);
    }


    async fetchDataExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/list`, data);
    }

    async fetchExcessEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/email-logs`, data);
    }

    async deleteSingleExcess(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async fetchSingleExcess(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/${id}`);
    }

    async updateSingleExcess(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/excess/${data.id}`, data);
    }

    async createSingleExcess(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess`, data);
    }

    //sales_order
    async searchSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/search`, data);
    }

    // async convertSalesOrderToPurchaseOrder(data: any = null) {
    //     return await _axios.post(`${API_URL_PRODUCT}/sales_order/convert/purchase_order/${data.id}`, data);
    // }
    async convertSalesOrderToInvoice(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/convert/invoice/${data.id}`, data);
    }

    async fetchDataSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/list`, data);
    }

    async fetchSalesOrderEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/email-logs`, data);
    }

    async deleteSingleSalesOrder(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async fetchSingleSalesOrder(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order/${id}`);
    }

    async updateSingleSalesOrder(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/sales_order/${data.id}`, data);
    }

    async createSingleSalesOrder(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/sales_order`, data);
    }

    //task
    async searchTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/search`, data);
    }


    async fetchDataTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/list`, data);
    }

    async fetchTaskEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/email-logs`, data);
    }

    async deleteSingleTask(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/task/${id}`);
    }

    async fetchSingleTask(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task/${id}`);
    }

    async updateSingleTask(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/task/${data.id}`, data);
    }

    async createSingleTask(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/task`, data);
    }

    //vendor_rfq
    async searchVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/search`, data);
    }


    async fetchDataVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/list`, data);
    }

    async fetchVendorRfqEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/email-logs`, data);
    }

    async deleteSingleVendorRfq(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async fetchSingleVendorRfq(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq/${id}`);
    }

    async updateSingleVendorRfq(data: any = null) {
        return await _axios.put(`${API_URL_PRODUCT}/vendor_rfq/${data.id}`, data);
    }

    async createSingleVendorRfq(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/vendor_rfq`, data);
    }


    //User
    async searchUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/search`, data);
    }


    async fetchDataUser(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/list`, data);
    }

    async deleteSingleUser(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/user/${id}`);
    }

    async fetchSingleUser(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/user/${id}`);
    }

    async updateSingleUser(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/user/${data.id}`, data);
    }

    async createSingleUser(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/user`, data);
    }

    //role

    async searchRoles(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/roles/all`, data);
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
        return await _axios.post(`${API_URL_PRODUCT}/setting/search`, data);
    }


    async fetchDataSetting(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/setting/list`, data);
    }

    async searchCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/search`, data);
    }

    async fetchDataCall(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/list`, data);
    }

    async fetchCallEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/email-logs`, data);
    }

    async deleteSingleCall(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/call/${id}`);
    }

    async fetchSingleCall(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/call/${id}`);
    }

    async updateSingleCall(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/call/${data.id}`, data);
    }

    async createSingleCall(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/call`, data);
    }

    //fiscal account
    async fetchDataFiscalAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/fiscal-account/list`, data);
    }

    async fetchFiscalAccountEmailLogs(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/fiscal-account/email-logs`, data);
    }

    async deleteSingleFiscalAccount(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/fiscal-account/${id}`);
    }

    async fetchSingleFiscalAccount(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/fiscal-account/${id}`);
    }

    async updateSingleFiscalAccount(data: any) {
        return await _axios.put(`${API_URL_PRODUCT}/fiscal-account/${data.id}`, data);
    }

    async createSingleFiscalAccount(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/fiscal-account`, data);
    }

    async searchFiscalAccount(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/fiscal-account/search`, data);
    }

    //email log
    async fetchDataEmailLog(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/email-log/list`, data);
    }

    async searchEmailLog(data: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/email-log/search`, data);
    }

    async fetchSingleEmailLog(id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/email-log/${id}`);
    }

    async globalSearch(text: string) {
        const data = {
            search: text
        }
        return await _axios.post(`${API_URL_PRODUCT}/global-search`, data);
    }

    async globalSearchFull(data: any) {
        // data = {
        //     search: text,
        //     page: int,
        //     filters: array
        // }
        return await _axios.post(`${API_URL_PRODUCT}/global-search-full`, data);
    }

    async getRelationModel(groupName: any, id: any) {
        return await _axios.get(`${API_URL_PRODUCT}/relation-model/${groupName}/${id}`);

    }

    async fetchSuggestedAvailability(product_id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/availability/suggestionAvailability`, {product_id: product_id});
    }

    async fetchSuggestedExcess(product_id: any = null) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/suggestionExcess`, {product_id: product_id});
    }

    //start dashboard
    async dashboardData() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/dashboard-data`);
    }

    async salePersonDashboardData() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/sale-person-dashboard-data`);
    }


    async dashboardOpenQuotes() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/open-quotes`);
    }

    async dashboardBookingRevenue() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-revenue`);
    }

    async dashboardBillingYtdSales() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/billing-ytd-sales`);
    }

    async dashboardBookingGp() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-gp`);
    }

    async dashboardMtdBilling() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/mtd-billing`);
    }

    async dashboardBookingSalesYtd() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/booking-sales-ytd`);
    }

    async dashboardYtdBilling() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/ytd-billing`);
    }

    async dashboardRfq() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/rfq`);
    }

    async dashboardDealsByStage() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/deals-by-stage`);
    }

    async dashboardCallAmount() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/call-amount`);
    }

    //start Report
    async reportSalesChartYTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/sales/chart-ytd`, data);
    }

    async reportSalesChartMTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/sales/chart-mtd`, data);
    }

    async reportSalesDetails(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/sales/details`, data);
    }


    async reportQuoteChartYTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/quote/chart-ytd`, data);
    }

    async reportQuoteChartMTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/quote/chart-mtd`, data);
    }

    async reportQuoteDetails(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/quote/details`, data);
    }


    async reportInvoiceChartYTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/invoice/chart-ytd`, data);
    }

    async reportInvoiceChartMTD(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/invoice/chart-mtd`, data);
    }

    async reportInvoiceDetails(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/invoice/details`, data);
    }

    async reportVendorList(data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/report/vendor/list`, data);
    }

    async importBomExcess(id: any, modelName: string, formData: any) {

        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/import`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }


    async deleteSingleBomItem(id: any = null) {
        return await _axios.delete(`${API_URL_PRODUCT}/bom/${id}`);
    }

    async bomItemList(id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/bom/list/${id}`, data);
    }

    async excessItemList(id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess/list/${id}`, data);
    }

    async availabilityVendorItemList(id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/availability-vendor/list/${id}`, data);
    }

    async bomItemConfirmation(id: any, modelName: string, item_id: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/confirmation/${item_id}`);
    }

    async bomItemProcess(id: any, modelName: string, item_id: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/pre-process/${item_id}`);
    }

    async bomItemSaveHeader(id: any, modelName: string, item_id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/save-header/${item_id}`, data);
    }

    async selectedHeaderValidation(id: any, modelName: string, item_id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/import/validation/${item_id}`, data);
    }

    async bomItemSaveProcess(id: any, modelName: string, item_id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/process/${item_id}`, data);
    }

    async bomItemUpdateProduct(id: any, modelName: string, item_id: any, data: any) {
        return await _axios.post(`${API_URL_PRODUCT}/excess-bom/${id}/${modelName}/update-product/${item_id}`, data);
    }

    async dashboardCountMotivation() {
        return await _axios.post(`${API_URL_PRODUCT}/dashboard/motivation-count`);
    }

}

export default api
