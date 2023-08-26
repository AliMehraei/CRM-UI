// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleProduct",
    createRoute:"createSingleProduct",
    redirectTo: "updateSingleProduct",
    action: "create",
    package:'none',
    product_type:'none',
    lifecycle_status:'none',
    usage_unit:'pcs',
    duplicated_status:'none',

};

const productFormSlice = createSlice({
    name: 'productForm',
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

export const {updateFormData, resetForm} = productFormSlice.actions;
export default productFormSlice.reducer;
