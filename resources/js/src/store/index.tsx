import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import rfqFormSlice from "./rfqFormSlice";
import manufactureFormSlice from "./manufactureFormSlice";
import formErrorsSlice from "./formErrorsSlice";
import invoiceFormSlice from "./invoiceFormSlice";
import accountFormSlice from "./accountFormSlice";
import vendorFormSlice from "./vendorFormSlice";
import contactFormSlice from "./contactFormSlice";
import leadFormSlice from "./leadFormSlice";
import excessFormSlice from "./excessFormSlice";
import productFormSlice from "./productFormSlice";
import quoteFormSlice from "./quoteFormSlice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    rfqFormSlice: rfqFormSlice,
    manufactureForm: manufactureFormSlice,
    formErrors: formErrorsSlice,
    invoiceForm: invoiceFormSlice,
    accountForm: accountFormSlice,
    vendorForm: vendorFormSlice,
    contactForm: contactFormSlice,
    leadForm: leadFormSlice,
    excessForm: excessFormSlice,
    productForm: productFormSlice,
    quoteform: quoteFormSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
