import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleRfq",
    createRoute: "/rfq/add",
    redirectTo: "/rfq/edit/:id",
    action: "create",
};

const formSlice = createSlice({
    name: 'rfqForm',
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

export const {updateFormData, resetForm} = formSlice.actions;
export default formSlice.reducer;
