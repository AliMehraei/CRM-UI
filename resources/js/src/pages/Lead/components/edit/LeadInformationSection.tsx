import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    displayImage, handleCopySelect,
    searchOwners,
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import {
    LeadStatus, LeadCompanyType,
    LeadLostReason, LeadSource,
    LeadIndustry, LeadRating
} from "../../../../components/Options/SelectOptions";
import React from "react";
const LeadInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.leadForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const fields = {
        'Lead Information': {
            'Lead Image': (
                <ImageUploadComponent formState={formState}
                                      modelName={'lead'}
                                      id={'image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
            ),
            'Status': (
                <Select
                    options={LeadStatus}
                    name="status"
                    id="status"
                    onChange={({ value }: any) => {
                        handleChangeField('status', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadStatus.find((title:any) => title.value == formState.status)}
                />
            ),
            'Lost Reason': (
                <Select
                    options={LeadLostReason}
                    name="lost_reason"
                    id="lost_reason"
                    onChange={({ value }: any) => {
                        handleChangeField('lost_reason', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadLostReason.find((title) => title.value == formState.lost_reason)}
                />
            ),
            'Lost Reason Comment': (
                <input
                    id="lost_reason_comment"
                    name="lost_reason_comment"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.lost_reason_comment}
                />
            ),
            'Lead Owner': (
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
                                    <div className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                    Copy & Select
                                </button>
                            </div>
                        ),
                    }}
                />
            ),

            'Rating': (
                <Select
                    options={LeadRating}
                    name="lead_source"
                    id="lead_source"
                    onChange={({value}: any) => {
                        handleChangeField('rating', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadRating.find((title) => title.value == formState.rating)}

                />
            ),


        },
        '': {
            'Company': (
                <input
                    id="company"
                    required
                    name="company"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.company}
                />
            ),

            'Company Type': (
                <Select
                    options={LeadCompanyType}
                    name="company_type"
                    id="company_type"
                    onChange={({ value }: any) => {
                        handleChangeField('company_type', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadCompanyType.find((title) => title.value == formState.company_type)}
                />
            ),
            'Industry': (
                <Select
                    options={LeadIndustry}
                    name="industry"
                    id="industry"
                    onChange={({ value }: any) => {
                        handleChangeField('industry', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadIndustry.find((title) => title.value == formState.industry)}
                />
            ),
            'Website': (
                <input
                    id="website"
                    name="website"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.website}
                />
            ),
            'Lead Source': (
                <Select
                    options={LeadSource}
                    name="lead_source"
                    id="lead_source"
                    onChange={({ value }: any) => {
                        handleChangeField('lead_source', value)
                    }}
                    className="flex-1"
                    defaultValue={LeadSource.find((title) => title.value == formState.lead_source)}
                />
            ),
            'Zusätzlicher Ansprechpartner': (
                <input
                    id="Ansprechpartner"
                    name="Ansprechpartner"
                    disabled
                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                    defaultValue={formState.Ansprechpartner}
                />
            ),

            'Email Opt Out': (
                <input
                    id="email_opt_out"
                    type="checkbox"
                    name="email_opt_out"
                    className="form-checkbox"
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.email_opt_out}
                />
            ),
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

export default LeadInformationSection;
