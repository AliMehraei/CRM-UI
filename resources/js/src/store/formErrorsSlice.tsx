// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {

};

const formErrorsSlice = createSlice({
    name: 'formErrors',
    initialState: initState,
    reducers: {
        updateErrors: (state, action) => {
            const {field, value} = action.payload;
            return {
                ...state,
                [field]: value,
            };
        },
    },
});

export const {updateErrors} = formErrorsSlice.actions;
export default formErrorsSlice.reducer;
