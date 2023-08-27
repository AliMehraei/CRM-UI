import {createSlice} from '@reduxjs/toolkit';


const initState = {
    hasError: false
};

const formErrorsSlice = createSlice({
    name: 'formErrors',
    initialState: initState,
    reducers: {
        updateErrors: (state, action) => {

            return {
                ...state,
                ...action.payload,
            };
        },
        resetErrors: () => initState, // Reset the errors to initial state
    },
});

export const {updateErrors , resetErrors} = formErrorsSlice.actions;
export default formErrorsSlice.reducer;
