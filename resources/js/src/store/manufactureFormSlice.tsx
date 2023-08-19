// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    image: '',
    manufacture_id: '',

};

const manufactureFormSlice = createSlice({
    name: 'manufactureForm',
    initialState: initState,
    reducers: {
        updateFormData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const {updateFormData} = manufactureFormSlice.actions;
export default manufactureFormSlice.reducer;
