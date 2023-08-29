import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchAccounts,searchContacts,searchSalesOrder,Currencies
    ,searchLead,searchQuote,searchInvoice,searchOwners, searchRFQ, searchProducts, searchAvailability} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const LinkedAvailabilitySection = () => {
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
        'Linked Availability': {


            'Availability Name': (
                <AsyncSelect
                    isMulti={false}
                    id="availability_id"
                    required
                    placeholder="Type at least 2 characters to search..."
                    name="availability_id"
                    loadOptions={searchAvailability}
                    onChange={({value}: any) => {
                        handleChangeField('availability_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.availability?.id,
                        label: (
                            <div key={formState.availability?.id} className="flex items-center">

                                <div className="text-sm font-bold">{formState.availability?.availability_name}</div>

                            </div>
                        ),
                    }}
                />
            ),

            'Availability No': (
                <input
                id="availability_no"
                name="availability_no"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.availability_no}
                />
            ),
            'Availability Cost': (
                <input
                type="number"

                id="availability_cost"
                name="availability_cost"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.availability_cost}
                />
            ),
        },
        '': {
            'Availability Quantity': (
                <input
                type="number"

                id="availability_quantity"
                name="availability_quantity"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.availability_quantity}
                />
            ),

            'Availability LT': (
                <input
                id="availability_lt"
                name="availability_lt"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.availability_lt}
                />
            ),
            'Availability DC': (
                <input
                id="availability_dc"
                name="availability_dc"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.availability_dc}
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

export default LinkedAvailabilitySection;
