import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchAccounts,searchContacts,searchSalesOrder,Currencies
    ,searchLead,searchQuote,searchInvoice,searchOwners, searchRFQ, searchProducts} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const POLineSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
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
        {value: 'purchaseOrder', label: 'PurchaseOrder'},
        {value: 'excess', label: 'Excess'},


    ];
    const StageExcessOption = [
        {value: 'qualification', label: 'Qualifikation'},

    ];
    const StagePurchaseOrderOption = [
        {value: '0_cold_lead', label: '0.0 Cold lead / unqualified (CLU)'},
        {value: '1_cold_lead', label: '1.0 Cold lead qualified (CLQ)'},
        {value: '2_first_contract', label: '2.0 First contact made (FCM)'},
        {value: '3_warm_lead', label: '3.0 warm lead qualified (WLQ)'},
        {value: '4_hot_lead', label: '4.0 Hot lead (HLQ)'},
        {value: 'close_lead', label: 'Close Lead / Lost Lead'},

    ];
    let StageOption =StageExcessOption;

    const fields = {
        'PO line': {
            'Requested Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="requested_delivery_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('requested_delivery_date', dateString)} // Update the field value on change

                />
            ),

            'Product Name': (
                <AsyncSelect
                    defaultOptions={false}
                    isMulti={false}
                    id="product_id"
                    placeholder="Type at least 2 characters to search..."
                    name="product_id"
                    loadOptions={searchProducts}
                    onChange={({value}: any) => {
                        handleChangeField('product_id', value)
                    }}
                    className="flex-1"

                />
            ),
            'Quantity': (
                <input
                id="quantity"
                name="quantity"
                className="form-input flex-1 "
                type="number"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Cost': (
                <input
                type="number"

                id="cost"
                name="cost"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
        },
        '': {
            'Confirmed Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="confirmed_delivery_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_,dateString) => handleChangeField('confirmed_delivery_date', dateString)} // Update the field value on change

                />
            ),

            'Date Code': (
                <input
                id="date_code"
                name="date_code"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'SPQ': (
                <input
                id="spq"
                name="spq"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


            'comment': (
                <input
                id="comment"
                name="comment"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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

export default POLineSection;
