import {createSlice} from '@reduxjs/toolkit';


const initState = {
    api: "createSingleCall",
    createRoute: "/call/add",
    redirectTo: "/call/edit/:id",
    action: "create",
    callable: "App\\Models\\Contact",
    relatable: "App\\Models\\Account",
    type: "ausgehend",
    subject: "Outgoing call to Unknown",
    call_purpose: "none",
    call_result: "none",
};

const callFormSlice = createSlice({
    name: 'callForm',
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

export const {updateFormData, resetForm} = callFormSlice.actions;
export default callFormSlice.reducer;
