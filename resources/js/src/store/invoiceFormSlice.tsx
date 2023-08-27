// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleInvoice",
    createRoute: "/invoice/add",
    redirectTo: "/invoice/edit/:id",
    action: "create",
    items: [],

};

const invoiceFormSlice = createSlice({
    name: 'invoiceForm',
    initialState: initState,
    reducers: {
        updateFormData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        resetForm: () => {
            const fileInput = document.querySelector('[type="file"]') as HTMLInputElement | null;
            for (let element in fileInput) {
                fileInput.value = ''; // Clear the value
                fileInput.dispatchEvent(new Event('change', {bubbles: true})); // Trigger a change event
            }

            return initState
        }
    },
});

export const {updateFormData, resetForm} = invoiceFormSlice.actions;
export default invoiceFormSlice.reducer;
