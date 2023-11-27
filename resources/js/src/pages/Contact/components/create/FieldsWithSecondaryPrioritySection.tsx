import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchOwners } from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import { updateFormData } from "../../../../store/contactFormSlice";

const FieldsWithSecondaryPrioritySection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const activities = [
        { value: "none", label: "-None-" },
        { value: "no_activity", label: "No Activity" },
        { value: "more_1_year", label: "> 1 year Activity" },
        { value: "more_1_month", label: "> 1 month Activity" },
        { value: "regular_activity", label: "Regular Activity" },

    ];

    const doubleCheckStatuses = [
        { value: "none", label: "-None-" },
        { value: "back_to_lead", label: "Back to lead" },
        { value: "converted_to_lead", label: "Converted to lead" },
        { value: "must_be_deleted", label: "Must be deleted" },
    ];
    const fields = {
        'Fields with Secondary Priority': {
            'Approved By': <AsyncSelect
                    defaultOptions={true}
                isMulti={false}
                id="approved_by"
                placeholder="Type at least 2 characters to search..."
                name="approved_by_id"
                loadOptions={searchOwners}
                onChange={({ value }: any) => {
                    handleChangeField('approved_by_id', value)
                }}

                className="flex-1"
            />,
            'Books Contact': <input
                id="book_contact"
                type="checkbox"
                name="book_contact"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}

            />,

            'Contact Activity':
                <Select id="contact_activity"
                    name="contact_activity"
                    onChange={({ value }: any) => {
                        handleChangeField('contact_activity', value)
                    }}
                    className="flex-1"
                    options={activities}
                />,


            'Title': <input
                id="title"
                name="title"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Private Email': <input
                id="private_email"
                name="private_email"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Secondary Email': <input
                id="secondary_email"
                name="secondary_email"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Portal Operation Tag': <input
                id="portal_operation_tag"
                name="portal_operation_tag"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
        },
        '':
        {
            'Email Opt Out': <input
                id="email_opt_out"
                type="checkbox"
                name="email_opt_out"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
            />,
            'Lead Reference': <input
                id="lead_reference"
                name="lead_reference"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />,
            'Double Check Status':
                <Select id="double_check_status"
                    name="double_check_status"
                    onChange={({ value }: any) => {
                        handleChangeField('double_check_status', value)
                    }}
                    className="flex-1"
                    options={doubleCheckStatuses} />,

            'DCheck': <input
                id="d_check"
                type="checkbox"
                name="d_check"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
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

export default FieldsWithSecondaryPrioritySection;
