import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchAccounts,searchContacts,searchSalesOrder,Currencies
    ,searchLead,searchQuote,searchInvoice,searchOwners, searchRFQ, searchProducts} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const SOLineSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    
    const LeadSourceOption = [
        {value: 'none', label: '-None-'},
        {value: 'unangemeldeter', label: 'Unangemeldeter Anruf/Besuch'},
        {value: 'mitarbeitervermittlung', label: 'Mitarbeitervermittlung'},
        {value: 'kunden', label: 'Kunden Vermittlung'},
        {value: 'teilnehmer', label: 'Teilnehmer'},
        {value: 'mess', label: 'Mess'},
       
    ];
    const TypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'existierendes', label: 'Existierendes Geschäft'},
        {value: 'neues', label: 'Neues Geschäft'},
   

    ];
    const PipelineOption = [
        {value: 'salesOrder', label: 'SalesOrder'},
        {value: 'excess', label: 'Excess'},
   

    ];
    const StageExcessOption = [
        {value: 'qualification', label: 'Qualifikation'},
   
    ];
    const StageSalesOrderOption = [
        {value: '0_cold_lead', label: '0.0 Cold lead / unqualified (CLU)'},
        {value: '1_cold_lead', label: '1.0 Cold lead qualified (CLQ)'},
        {value: '2_first_contract', label: '2.0 First contact made (FCM)'},
        {value: '3_warm_lead', label: '3.0 warm lead qualified (WLQ)'},
        {value: '4_hot_lead', label: '4.0 Hot lead (HLQ)'},
        {value: 'close_lead', label: 'Close Lead / Lost Lead'},
   
    ];
    let StageOption =StageExcessOption;

    const fields = {
        'SO line': {
            'Requested Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: `${formState.requested_delivery_date ? new Date(formState.requested_delivery_date) : ''}`,
                    }}
                    name="requested_delivery_date"
                    value={formState.requested_delivery_date ? new Date(formState.requested_delivery_date) : ''}
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('requested_delivery_date', dateString)} // Update the field value on change

                />
            ),
            
            'Product Name': (
                <AsyncSelect
                    isMulti={false}
                    id="product_id"
                    placeholder="Type at least 2 characters to search..."
                    name="product_id"
                    loadOptions={searchProducts}
                    onChange={({value}: any) => {
                        handleChangeField('product_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.product?.id,
                        label: (
                            <div key={formState.product?.id} className="flex items-center">
                            
                                <div className="text-sm font-bold">{formState.product?.product_name}</div>
                                
                            </div>
                        ),
                    }}
                />
            ),
            'Customer part Id': (
                <input
                id="customer_part_id"
                name="customer_part_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.customer_part_id}
                />
            ),
            'Quantity': (
                <input
                id="quantity"
                name="quantity"
                className="form-input flex-1 "
                type="number"
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.quantity}
                />
            ),
            'List Price': (
                <input
                type="number"

                id="list_price"
                name="list_price"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.list_price}
                />
            ),
        },
        '': {
            'Estimated Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                        defaultDate: `${formState.estimated_delivery_date ? new Date(formState.estimated_delivery_date) : ''}`,
                    }}
                    name="estimated_delivery_date"
                    value={formState.estimated_delivery_date ? new Date(formState.estimated_delivery_date) : ''}
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('estimated_delivery_date', dateString)} // Update the field value on change

                />
            ),
           
            'Date Code': (
                <input
                id="date_code"
                name="date_code"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.date_code}
                />
            ),
            'SPQ': (
                <input
                id="spq"
                name="spq"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.spq}
                />
            ),


            'comment': (
                <input
                id="comment"
                name="comment"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.comment}
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

export default SOLineSection;
