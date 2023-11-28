import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchAccounts,
    searchOwners,
    FirstNameTitles
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/contactFormSlice";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import {ContactSources, ContactJobDescriptions, ContactStatus} from "../../../../components/Options/SelectOptions";

const ContactDetailsSection = () => {
    const formState = useSelector((state: any) => state.contactForm);
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Contact Details': {
            'Contact Image': <ImageUploadComponent formState={formState}
                                                   modelName={'contact'}
                                                   id={'image'}
                                                   formAttribute={'image'}
                                                   updateFormData={updateFormData}/>
            ,
            'First Name': (
                <div className="flex">
                    <Select id="prefix_first_name"
                            name="prefix_first_name"
                            onChange={({value}: any) => {
                                handleChangeField('prefix_first_name', value)
                            }}
                            className="flex-none w-32 mr-2"
                            options={FirstNameTitles}
                    />
                    <input
                        id="first_name"
                        required
                        name="first_name"
                        className="form-input flex-1 "
                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    />
                </div>

            ),

            'Last Name': (
                <input
                    id="last_name"
                    required
                    name="last_name"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Job Description':
                <Select id="job_description"
                        name="job_description"
                        onChange={({value}: any) => {
                            handleChangeField('job_description', value)
                        }}
                        className="flex-1"
                        options={ContactJobDescriptions}/>,

            'Contact Type': <Select id="contact_type"
                                    name="contact_type"
                                    onChange={({value}: any) => {
                                        handleChangeField('double_check_status', value)
                                    }}
                                    className="flex-1 disabled" isDisabled={true}
                                    defaultValue={{value: "none", label: "-None-"}}
            />,
        },
        '': {
            'Account Name': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                required
                id="account_id"
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                }}
                className="flex-1"
            />,
            'Contact Source': <Select id="contact_source"
                                      name="cocontact_source"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_source', value)
                                      }}
                                      className="flex-1 "
                                      options={ContactSources}
                                      defaultValue={{value: "none", label: "-None-"}}
            />,
            'Contact Owner': <AsyncSelect
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
            />,
            'Contact Status': <Select id="contact_status"
                                      name="contact_status"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_status', value)
                                      }}
                                      className="flex-1 "
                                      options={ContactStatus}
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

export default ContactDetailsSection;
