// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleVendorRfq",
    createRoute: "/vendor_rfq/add",
    redirectTo: "/vendor_rfq/edit/:id",
    action: "create",
    offered_products: [{id: 0,},],
    requested_products: [{id: 0,},],

};

const vendorRfqFormSlice = createSlice({
    name: 'vendorRfqForm',
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

export const {updateFormData, resetForm} = vendorRfqFormSlice.actions;
export default vendorRfqFormSlice.reducer;
