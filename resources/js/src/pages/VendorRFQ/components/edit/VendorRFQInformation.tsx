import AsyncSelect from "react-select/async";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies, displayImage,
    handleUploadFile,
    searchOwners,
    searchRFQ,
    searchVendor
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const VendorRFQInformation = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const StatusVendorRfqOptions = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'excel-generate', label: 'Excel Generated'},
        {value: 'email-sent', label: 'Email Sent'},
        {value: 'closed', label: 'Closed'},
    ]


    const fields = {
        'Vendor RFQ Information': {
            'Vendor RFQ Name': (<input
                id="vendor_rfq_name"
                name="vendor_rfq_name"
                required
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.vendor_rfq_name}
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
                    defaultValue={{
                        value: formState.vendor?.id,
                        label: (
                            <div key={formState.vendor?.id} className="flex items-center">
                                <div className="text-sm font-bold">{formState.vendor?.vendor_name}</div>

                            </div>
                        ),
                    }}
                />
            ),
            'Status': (
                <Select
                    options={StatusVendorRfqOptions}
                    name="status"
                    id="status"
                    required
                    onChange={({value}: any) => {
                        handleChangeField('status', value)
                    }}
                    className="flex-1"
                    defaultValue={StatusVendorRfqOptions.find((title) => title.value == formState.status)}
                />
            ),
            'Email': (
                <input
                    id="email"
                    name="email"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.email}

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
                    defaultValue={Currencies.find((title) => title.value == formState.currency)}
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
                    defaultValue={formState.related_rfqs
                        ? formState.related_rfqs.map((rfq: any) => ({
                            value: rfq.id,
                            label: (
                                <div key={rfq.id} className="flex items-center">
                                    <div>
                                        <div className="text-sm font-bold">{rfq.rfq_name}</div>
                                    </div>
                                </div>
                            ),
                        }))
                        : []
                    }
                />
            ),


        },
        '': {

            'Date': (
                <Flatpickr
                    name="date"
                    options={{
                        dateFormat: 'Y-m-d ',
                        defaultDate: formState.date ? new Date(formState.date) : null as any,
                    }}
                    defaultValue={formState.date}
                    className="form-input flex-1"
                    placeholder="YYYY-MM-DD"
                    onChange={(_, dateString) => handleChangeField('date', dateString)}
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
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <img
                                        src={displayImage(formState.owner.avatar_data)}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
                />
            ),
            'Email Opt Out': (
                <input
                    id="email_opt_out"
                    type="checkbox"
                    name="email_opt_out"
                    className="form-checkbox"
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    defaultChecked={formState.email_opt_out}
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
