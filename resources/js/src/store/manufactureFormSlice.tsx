// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    image: '',
    manufacture_name: '',

};

const manufactureFormSlice = createSlice({
    name: 'manufactureForm',
    initialState: initState,
    reducers: {
        updateFormData: (state, action) => {
            const {field, value} = action.payload;
            return {
                ...state,
                [field]: value,
            };
        },
    },
});

export const {updateFormData} = manufactureFormSlice.actions;
export default manufactureFormSlice.reducer;
