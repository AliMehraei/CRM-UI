// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleManufacturer",
    name: '',
    octo_api_id: '',
    is_active: false,
    alias_names: '',
    owner_id: '',
    line_card_id: '',
    strong_card_id: '',
    image: '',

};

const manufactureFormSlice = createSlice({
    name: 'manufactureForm',
    initialState: initState,
    reducers: {
        updateFormData: (state, action) => {
            const {field, value} = action.payload;
            return {
                ...state,
                [field]: value,
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

export const {updateFormData, resetForm} = manufactureFormSlice.actions;
export default manufactureFormSlice.reducer;
