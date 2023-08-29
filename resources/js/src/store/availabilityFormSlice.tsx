// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleAvailability",
    createRoute: "/availability/add",
    redirectTo: "/availability/edit/:id",
    action: "create",
    price_breaks: [{id: 0,},],
};

const availabilityFormSlice = createSlice({
    name: 'availabilityForm',
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

export const {updateFormData, resetForm} = availabilityFormSlice.actions;
export default availabilityFormSlice.reducer;
