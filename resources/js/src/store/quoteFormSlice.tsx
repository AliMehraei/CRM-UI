// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleQuote",
    createRoute: "/quotes/add",
    redirectTo: "/quotes/edit/:id",
    action: "create",
    items: [{id: 0,},],
};

const quoteFormSlice = createSlice({
    name: 'quoteForm',
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

export const {updateFormData, resetForm} = quoteFormSlice.actions;
export default quoteFormSlice.reducer;
