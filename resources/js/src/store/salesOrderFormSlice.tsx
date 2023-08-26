// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleSalesOrder",
    createRoute:"createSingleSalesOrder",
    redirectTo: "updateSingleSalesOrder",
    action: "create",


};

const salesOrderFormSlice = createSlice({
    name: 'salesOrderForm',
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

export const {updateFormData, resetForm} = salesOrderFormSlice.actions;
export default salesOrderFormSlice.reducer;
