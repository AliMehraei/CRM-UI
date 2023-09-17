import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import rfqFormSlice from "./rfqFormSlice";
import manufacturerFormSlice from "./manufacturerFormSlice";
import formErrorsSlice from "./formErrorsSlice";
import invoiceFormSlice from "./invoiceFormSlice";
import accountFormSlice from "./accountFormSlice";
import vendorFormSlice from "./vendorFormSlice";
import contactFormSlice from "./contactFormSlice";
import leadFormSlice from "./leadFormSlice";
import excessFormSlice from "./excessFormSlice";
import productFormSlice from "./productFormSlice";
import quoteFormSlice from "./quoteFormSlice";
import dealFormSlice from "./dealFormSlice";
import purchaseOrderFormSlice from "./purchaseOrderFormSlice";
import salesOrderFormSlice from "./salesOrderFormSlice";
import vendorRfqFormSlice from "./vendorRfqFormSlice";
import availabilityFormSlice from "./availabilityFormSlice";
import taskFormSlice from './taskFormSlice'
import authSlice from './authSlice'
import permissionSlice from './permissionSlice'
import userFormSlice from "./userFormSlice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    rfqFormSlice: rfqFormSlice,
    manufacturerForm: manufacturerFormSlice,
    formErrors: formErrorsSlice,
    invoiceForm: invoiceFormSlice,
    accountForm: accountFormSlice,
    vendorForm: vendorFormSlice,
    contactForm: contactFormSlice,
    leadForm: leadFormSlice,
    excessForm: excessFormSlice,
    productForm: productFormSlice,
    quoteForm: quoteFormSlice,
    dealForm: dealFormSlice,
    purchaseOrderForm: purchaseOrderFormSlice,
    salesOrderForm: salesOrderFormSlice,
    vendorRfqForm: vendorRfqFormSlice,
    availabilityForm: availabilityFormSlice,
    taskForm: taskFormSlice,
    auth: authSlice,
    permissions: permissionSlice,
    userForm: userFormSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
