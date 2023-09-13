import AsyncSelect from "react-select/async";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {Currencies, handleUploadFile, searchOwners, searchRFQ, searchVendor} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const VendorRFQInformation = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


     const StatusVendorRfqOptions = [
        { value: 'none', label: '-None-' },
        { value: 'draft', label: 'Draft' },
        { value: 'excel-generate', label: 'Excel Generated' },
        { value: 'email-sent', label: 'Email Sent' },
        { value: 'closed', label: 'Closed' },
    ]


    const fields = {
        'Vendor RFQ Information': {
            'Vendor RFQ Name': (<input
                id="vendor_rfq_name"
                name="vendor_rfq_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),
            'Vendor Name': (
                <AsyncSelect
                    isMulti={false}
                    id="vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="vendor_id"
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('vendor_id', value)
                    }}
                    className="flex-1"
                />
            ),
            'Status': (
                <Select
                options={StatusVendorRfqOptions}
                name="status"
                id="status"
                onChange={({value}: any) => {
                    handleChangeField('status', value)
                }}
                className="flex-1"
                defaultValue={StatusVendorRfqOptions.find((title) => title.value == 'draft')}
                />
            ),
            'Email': (
                <input
                    id="email"
                    name="email"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Currency': (
                <Select
                options={Currencies}
                name="currency"
                id="currency"
                onChange={({value}: any) => {
                    handleChangeField('currency', value)
                }}
                className="flex-1"
                defaultValue={Currencies.find((title) => title.value == 'EUR')}
                />
            ),
            'Related RFQs': (
                <AsyncSelect
                    isMulti={true}
                    id="related_rfqs_id"
                    placeholder="Type at least 2 characters to search..."
                    name="related_rfqs_id"
                    loadOptions={searchRFQ}
                    onChange={(values: any) => {
                        handleChangeField('related_rfqs_id', values.map((v: any) => v.value))
                    }}
                    className="flex-1"
                />
            ),




        },
        '': {

            'Date': (
                <Flatpickr
                name="date"
                options={{
                    dateFormat: 'd-m-Y',
                }}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_,dateString) => handleChangeField('date', dateString)}
                />
            ),
            'Vendor RFQ Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"

                />
            ),
            'Email Opt Out': (
                <input
                    id="email_opt_out"
                    type="checkbox"
                    name="email_opt_out"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'Exchange Rate': (<input
                id="exchange_rate"
                name="exchange_rate"
                className="form-input flex-1 "
                disabled
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={1}
            />),
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default VendorRFQInformation;
