// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleVendorr",
    createRoute:"/vendor/add",
    redirectTo: "/vendor/edit/:id",
    action: "create",
    name: '',
    octo_api_id: '',
    is_active: false,
    alias_names: '',
    owner_id: '',
    vendor_line_card_id: '',
    vendor_strong_lines_id: '',
    image: '',

};

const vendorFormSlice = createSlice({
    name: 'vendorForm',
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

export const {updateFormData, resetForm} = vendorFormSlice.actions;
export default vendorFormSlice.reducer;
