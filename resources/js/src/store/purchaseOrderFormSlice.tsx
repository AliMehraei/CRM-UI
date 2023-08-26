// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSinglePurchaseOrder",
    createRoute:"/purchase/add",
    redirectTo: "/purchase/edit/:id",
    action: "create",
   

};

const purchaseOrderFormSlice = createSlice({
    name: 'purchaseOrderForm',
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

export const {updateFormData, resetForm} = purchaseOrderFormSlice.actions;
export default purchaseOrderFormSlice.reducer;
