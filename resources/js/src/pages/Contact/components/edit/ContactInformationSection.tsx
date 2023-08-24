import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {updateFormData} from "../../../../store/accountFormSlice";
import Flatpickr from "react-flatpickr";

const ContactInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.contactForm);

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
                defaultValue={formState.email}

            />,
            'Mobile': <input
                id="mobile"
                name="mobile"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.mobile}

            />,
            'Phone': <input
                id="phone"
                name="phone"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.phone}

            />,
            'Department': <input
                id="department"
                name="department"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.department}

            />,

            'Asst Phone': <input
                id="asst_phone"
                name="asst_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.asst_phone}

            />,

            'Home Phone': <input
                id="home_phone"
                name="home_phone"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.home_phone}

            />,

            'Other Phone': <input
                id="other_phone"
                name="other_phone"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.other_phone}

            />,

            'Fax': <input
                id="fax"
                name="fax"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.fax}

            />
        },
        '': {
            'Last Activity Date': <Flatpickr
                name="last_activity_date"
                options={{
                    dateFormat: 'Y-m-d',
                    position: 'auto left',
                    defaultDate: `${formState.last_activity_date ? new Date(formState.last_activity_date) : ''}`,
                }}
                className="form-input flex-1"
                value={formState.last_activity_date ? new Date(formState.last_activity_date) : ''}
                onChange={(_,dateString) => handleChangeField('last_activity_date', dateString)} // Update the field value on change
                defaultValue={formState.last_activity_date}

            />,
            'Reporting To': <input
                id="reporting_to"
                name="reporting_to"
                className="form-input flex-1 disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed" disabled
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.reporting_to}

            />,
            'LinkedIn Contact': <input
                id="linkedin"
                name="linkedin"
                className="form-input flex-1"
                onChange={e => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.linkedin}

            />,
            'Portal Access':
                <Select id="portal_access"
                        name="portal_access"
                        onChange={({value}: any) => {
                            handleChangeField('double_check_status', value)
                        }}
                        className="flex-1 "
                        options={portalAccess}
                        defaultValue={portalAccess.find((title) => title.value == formState.portal_access)}
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
