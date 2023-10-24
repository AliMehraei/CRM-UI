// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleAccount",
    createRoute: "/account/add",
    redirectTo: "/account/edit/:id",
    action: "create",
    forecasts: [{id: 0,},],
};

const accountFormSlice = createSlice({
    name: 'accountForm',
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

export const {updateFormData, resetForm} = accountFormSlice.actions;
export default accountFormSlice.reducer;
