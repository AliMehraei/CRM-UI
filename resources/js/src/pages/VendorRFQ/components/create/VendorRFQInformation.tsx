import AsyncSelect from "react-select/async";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {Currencies, handleUploadFile, searchOwners, searchRFQ, searchVendor} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import {
    VendorRfqStatusOptions,
} from "../../../../components/Options/SelectOptions";

const VendorRFQInformation = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    


    const fields = {
        'Vendor RFQ Information': {
            'Vendor RFQ Name': (<input
                id="vendor_rfq_name"
                name="vendor_rfq_name"
                className="form-input flex-1 "
                required
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />),
            'Vendor Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="vendor_id"
                    required
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('vendor_id', value)
                    }}
                    className="flex-1"
                />
            ),
            'Status': (
                <Select
                options={VendorRfqStatusOptions}
                name="status"
                id="status"
                required
                onChange={({value}: any) => {
                    handleChangeField('status', value)
                }}
                className="flex-1"
                defaultValue={VendorRfqStatusOptions.find((title) => title.value == 'Draft')}
                />
            ),
            'Email': (
                <input
                    id="email"
                    name="email"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}

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
                    defaultOptions={true}
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
                    dateFormat: 'Y-m-d ',
                }}
                className="form-input flex-1"
                placeholder="YYYY-MM-DD"
                onChange={(_,dateString) => handleChangeField('date', dateString)}
                />
            ),
            'Vendor RFQ Owner': (
                <AsyncSelect
                    defaultOptions={true}
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
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'Exchange Rate': (<input
                id="exchange_rate"
                name="exchange_rate"
                className="form-input flex-1 "
                disabled
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
