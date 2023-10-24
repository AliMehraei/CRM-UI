// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {};

const filterSlice = createSlice({
    name: 'filters',
    initialState: initState,
    reducers: {
        updateFilterSlice: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        resetFilterSlice: () => initState
    },
});

export const {updateFilterSlice, resetFilterSlice} = filterSlice.actions;
export default filterSlice.reducer;
