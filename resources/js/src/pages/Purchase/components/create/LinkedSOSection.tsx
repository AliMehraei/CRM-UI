import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchAccounts,searchContacts,searchSalesOrder,Currencies
    ,searchLead,searchQuote,searchInvoice,searchOwners, searchRFQ} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const LinkedSOSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    
    const SOStatusOption = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'request_for_approval', label: 'Request For Approval'},
        {value: 'approved', label: 'Approved'},
        {value: 'confirmed', label: 'Confirmed'},
        {value: 'packed', label: 'Packed'},
        {value: 'shipped', label: 'Shipped'},
       
    ];
    
    const fields = {
        'Linked SO': {
            
           
            'Account Name': (
                <AsyncSelect
                    isMulti={false}
                    id="account_id"
                    placeholder="Type at least 2 characters to search..."
                    name="account_id"
                    loadOptions={searchAccounts}
                    onChange={({value}: any) => {
                        handleChangeField('account_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                   
                />
            ),
            
           
            
            'SO Number': (
                <AsyncSelect
                    isMulti={false}
                    id="sales_order_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_order_id"
                    loadOptions={searchSalesOrder}
                    onChange={({value}: any) => {
                        handleChangeField('sales_order_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                   
                    
                />
            ),
           
            'Quantity SO': (
                <input
                    id="quantity_so"
                    type="number"
                    name="quantity_so"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Resale': (
                <input
                    id="resale"
                    type="number"
                    name="resale"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'SO Status': (
                <Select 
                options={SOStatusOption} 
                name="so_status" 
                id="so_status"       
                onChange={({value}: any) => {
                    handleChangeField('so_status', value)
                }} 
                className="flex-1"
                />
            ),
           
            
        },
        '': {
            'Requested D.D.': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="so_requested_d_d"
                    value=''
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('so_requested_d_d', dateString)} // Update the field value on change

                />
            ),
            'Confirmed D.D.': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="so_confirmed_d_d"
                    value=''
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('so_confirmed_d_d', dateString)} // Update the field value on change

                />
            ),
            'D/C': (
                <input
                    id="dc"
                    name="dc"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            
           
            
            'SPQ SO':(
                <input
                id="spq_so"
                name="spq_so"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />
            ),
            
            
        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default LinkedSOSection;
