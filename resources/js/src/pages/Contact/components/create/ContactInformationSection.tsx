import AsyncSelect from "react-select/async";
import {useDispatch} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile, loadAccounts, loadOrders} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import Flatpickr from "react-flatpickr";

const ContactInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const portalAccess = [
        {value: "none", label: "-None-"},
        {value: "waiting", label: "Waiting"},
        {value: "confirmed", label: "Confirmed"},
        {value: "rejected", label: "Rejected"},
    ]
    const fields = {
        'Contact Information': {
            'Email': <input
                id="email"
                name="email"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,
            'Mobile': <input
                id="mobile"
                name="mobile"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,
            'Phone': <input
                id="phone"
                name="phone"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,
            'Department': <input
                id="department"
                name="department"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,

            'Asst Phone': <input
                id="asst_phone"
                name="asst_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,

            'Home Phone': <input
                id="home_phone"
                name="home_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,

            'Other Phone': <input
                id="other_phone"
                name="other_phone"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,

            'Fax': <input
                id="fax"
                name="fax"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />
        },
        '': {
            'Last Activity Date': <Flatpickr
                name="last_activity_date"
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                }}
                value=""
                className="form-input flex-1"
                onChange={(dates) => handleChangeField('last_activity_date', dates[0])} // Update the field value on change
            />,
            'Reporting To': <input
                id="reporting_to"
                name="reporting_to"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,
            'LinkedIn Contact': <input
                id="linkedin"
                name="linkedin"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
            />,
            'Portal Access':
                <Select id="portal_access"
                        name="portal_access"
                        onChange={({value}: any) => {
                            handleChangeField('portal_access', value)
                        }}
                        className="flex-1 "
                        options={portalAccess}
                        defaultValue={{value: "none", label: "-None-"}}
                />,
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

export default ContactInformationSection;
