import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchAccounts,
    searchOwners,
    FirstNameTitles, displayImage, handleCopySelect
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/contactFormSlice";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import {ContactSources, ContactJobDescriptions, ContactStatus} from "../../../../components/Options/SelectOptions";
import React from "react";

const ContactDetailsSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.contactForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Contact Details': {
            'Contact Image':
                <ImageUploadComponent formState={formState}
                                      modelName={'contact'}
                                      id={'image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
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
                            defaultValue={FirstNameTitles.find((title) => title.value == formState.prefix_first_name)}

                    />
                    <input
                        id="first_name"
                        required
                        name="first_name"
                        className="form-input flex-1 "
                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                        defaultValue={formState.first_name}
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
                    defaultValue={formState.last_name}

                />
            ),
            'Job Description':
                <Select id="job_description"
                        name="job_description"
                        onChange={({value}: any) => {
                            handleChangeField('job_description', value)
                        }}
                        className="flex-1"
                        options={ContactJobDescriptions}
                        defaultValue={ContactJobDescriptions.find((title) => title.value == formState.job_description)}

                />,

            'Contact Type': <Select id="contact_type"
                                    name="contact_type"
                                    onChange={({value}: any) => {
                                        handleChangeField('contact_type', value)
                                    }}
                                    className="flex-1 disabled" isDisabled={true}
                                    defaultValue={{value: "none", label: "-None-"}}

            />,
        },
        '': {
            'Account Name': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="account_id"
                required
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                }}
                className="flex-1"
                defaultValue={{
                    value: formState.account?.id,
                    label: (
                        <div key={formState.account?.id} className="flex items-center">
                            {formState.account ? (
                                <img
                                    src={displayImage(formState.account.image)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                            ) : null}
                            <div>
                                <div className="text-sm font-bold">{formState.account?.account_name}</div>
                                <div className="text-xs text-gray-500">{formState.account?.email}</div>
                            </div>
                            <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.account?.account_name}`)}>
                                Copy & Select
                            </button>
                        </div>
                    ),
                }}
            />,
            'Contact Source': <Select id="contact_source"
                                      name="contact_source"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_source', value)
                                      }}
                                      className="flex-1 "
                                      options={ContactSources}
                                      defaultValue={ContactSources.find((title) => title.value == formState.contact_source)}

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
                className=""
                defaultValue={{
                    value: formState.owner?.id,
                    label: (
                        <div key={formState.owner?.id} className="flex items-center">
                            {formState.owner ? (
                                <>
                                <img
                                    src={displayImage(formState.owner.avatar_data)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                            <div>
                                <div
                                    className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                        Copy & Select
                                    </button>
                                </>
                                ) : null}

                        </div>
                    ),
                }}
            />,
            'Contact Status': <Select id="contact_status"
                                      name="contact_status"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_status', value)
                                      }}
                                      className="flex-1 "
                                      options={ContactStatus}
                                      defaultValue={ContactStatus.find((title) => title.value == formState.contact_status)}

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
