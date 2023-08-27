// redux/formSlice.js
import {createSlice} from '@reduxjs/toolkit';


const initState = {
    account_id: '',
    contact_id: '',
    rfq_owner_id: '',
    rfq_name: '',
    project_name: '',
    customer_rfq_no: '',
    deal_stage: '',
    rfq_source: '',
    rfq_type: '',
    status: '',
    date_history: '',
    portal_bom_id: '',
    pm_user_id: '',
    rfq_dead_line: '',
    customer_rfq_file: '',
    currency: '',
    product_name_id: '',
    alternative_product_id: '',
    customer_part_id: '',
    special_instructions: '',
    comment_for_vendors: '',
    quantity: '',
    target_price: '',
    availability_id: '',
    excess_id: '',
    processed_for_vrfq_round_1: false,
    processed_for_vrfq_round_2: false,
    exchange_rate: '',
    open_status_date: '',
    open_status_time: '',
    modified_by: '',
    created_by: ''

};

const formSlice = createSlice({
    name: 'form',
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

export const {updateFormData} = formSlice.actions;
export default formSlice.reducer;
