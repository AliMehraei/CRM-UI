// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {};

const filterSlice = createSlice({
    name: 'filters',
    initialState: initState,
    reducers: {
        updateFormData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        resetForm: () => initState
    },
});

export const {updateFormData, resetForm} = filterSlice.actions;
export default filterSlice.reducer;
