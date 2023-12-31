import AsyncSelect from "react-select/async";
import { useDispatch } from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { updateFormData } from "../../../../store/contactFormSlice";
import Flatpickr from "react-flatpickr";
import {ContactPortalAccess} from "../../../../components/Options/SelectOptions";


const ContactInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Contact Information': {
            'Email': <input
                id="email"
                name="email"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Mobile': <input
                id="mobile"
                name="mobile"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Phone': <input
                id="phone"
                name="phone"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Department': <input
                id="department"
                name="department"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Asst Phone': <input
                id="asst_phone"
                name="asst_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Home Phone': <input
                id="home_phone"
                name="home_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Other Phone': <input
                id="other_phone"
                name="other_phone"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,

            'Fax': <input
                id="fax"
                name="fax"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
                onChange={(_,dateString) => handleChangeField('last_activity_date', dateString)} // Update the field value on change
            />,
            'Reporting To': <input
                id="reporting_to"
                name="reporting_to"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'LinkedIn Contact': <input
                id="linkedin"
                name="linkedin"
                className="form-input flex-1"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Portal Access':
                <Select id="portal_access"
                    name="portal_access"
                    onChange={({ value }: any) => {
                        handleChangeField('portal_access', value)
                    }}
                    className="flex-1 "
                    options={ContactPortalAccess}
                    defaultValue={{ value: "none", label: "-None-" }}
                />,
        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default ContactInformationSection;
