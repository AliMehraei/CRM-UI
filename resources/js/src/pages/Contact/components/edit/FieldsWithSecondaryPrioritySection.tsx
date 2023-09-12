import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {searchOwners} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/contactFormSlice";

const FieldsWithSecondaryPrioritySection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.contactForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const activities = [
        {value: "none", label: "-None-"},
        {value: "no_activity", label: "No Activity"},
        {value: "more_1_year", label: "> 1 year Activity"},
        {value: "more_1_month", label: "> 1 month Activity"},
        {value: "regular_activity", label: "Regular Activity"},

    ];

    const doubleCheckStatuses = [
        {value: "none", label: "-None-"},
        {value: "back_to_lead", label: "Back to lead"},
        {value: "converted_to_lead", label: "Converted to lead"},
        {value: "must_be_deleted", label: "Must be deleted"},
    ];
    const fields = {
        'Fields with Secondary Priority': {
            'Approved By': <AsyncSelect
                isMulti={false}
                id="approved_by"
                placeholder="Type at least 2 characters to search..."
                name="approved_by_id"
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('approved_by_id', value)
                }}
                className="flex-1"
                defaultValue={{
                    value: formState.approved_by?.id,
                    label: (
                        <div key={formState.approved_by?.id} className="flex items-center">
                            <img src={formState.approved_by?.avatar} alt="avatar"
                                 className="w-8 h-8 mr-2 rounded-full"/>
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.approved_by?.first_name + " " + formState.approved_by?.last_name}</div>
                                <div className="text-xs text-gray-500">{formState.approved_by?.email}</div>
                            </div>
                        </div>
                    ),
                }}
            />,
            'Books Contact': <input
                id="book_contact"
                type="checkbox"
                name="book_contact"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                checked={formState.book_contact}

            />,

            'Contact Activity':
                <Select id="contact_activity"
                        name="contact_activity"
                        onChange={({value}: any) => {
                            handleChangeField('contact_activity', value)
                        }}
                        className="flex-1"
                        options={activities}
                        defaultValue={activities.find((title) => title.value == formState.contact_activity)}

                />,

            'Title': <input
                id="title"
                name="title"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.title}

            />,
            'private_email': <input
                id="private_email"
                name="private_email"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.private_email}

            />,
            'secondary_email': <input
                id="secondary_email"
                name="secondary_email"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.secondary_email}

            />,
            'portal_operation_tag': <input
                id="portal_operation_tag"
                name="portal_operation_tag"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.portal_operation_tag}

            />,
        },
        '':
            {
                'Email Opt Out': <input
                    id="email_opt_out"
                    type="checkbox"
                    name="email_opt_out"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.email_opt_out}
                />,
                'lead_reference': <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.lead_reference}

                />,
                'Double Check Status':
                    <Select id="double_check_status"
                            name="double_check_status"
                            onChange={({value}: any) => {
                                handleChangeField('double_check_status', value)
                            }}
                            className="flex-1"
                            options={doubleCheckStatuses}
                            defaultValue={doubleCheckStatuses.find((title) => title.value == formState.double_check_status)}

                    />,

                'DCheck': <input
                    id="d_check"
                    type="checkbox"
                    name="d_check"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.d_check}

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

export default FieldsWithSecondaryPrioritySection;
