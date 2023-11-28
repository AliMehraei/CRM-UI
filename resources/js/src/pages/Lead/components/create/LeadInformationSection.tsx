import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {searchOwners} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import {
    LeadStatus, LeadCompanyType,
    LeadLostReason, LeadSource,
    LeadIndustry, LeadRating
} from "../../../../components/Options/SelectOptions";

const LeadInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.leadForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
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
                    onChange={({value}: any) => {
                        handleChangeField('status', value)
                    }}
                    defaultValue={{
                        value: '0.0 Cold lead / unqualified (CLU)',
                        label: (<><span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold
                            lead / unqualified (CLU)</>)
                    }}
                    className="flex-1"
                />
            ),
            'Lost Reason': (
                <Select
                    options={LeadLostReason}
                    name="lost_reason"
                    id="lost_reason"
                    onChange={({value}: any) => {
                        handleChangeField('lost_reason', value)
                    }}
                    className="flex-1"
                />
            ),
            'Lost Reason Comment': (
                <input
                    id="lost_reason_comment"
                    name="lost_reason_comment"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}

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
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
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
                    // defaultValue={formState.name}
                />
            ),

            'Company Type': (
                <Select
                    options={LeadCompanyType}
                    name="company_type"
                    id="company_type"
                    onChange={({value}: any) => {
                        handleChangeField('company_type', value)
                    }}
                    className="flex-1"
                />
            ),
            'Industry': (
                <Select
                    options={LeadIndustry}
                    name="industry"
                    id="industry"
                    onChange={({value}: any) => {
                        handleChangeField('industry', value)
                    }}
                    className="flex-1"
                />
            ),
            'Website': (
                <input
                    id="website"
                    name="website"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Lead Source': (
                <Select
                    options={LeadSource}
                    name="lead_source"
                    id="lead_source"
                    onChange={({value}: any) => {
                        handleChangeField('lead_source', value)
                    }}
                    defaultValue={{value: 'Exhibitor List', label: 'Exhibitor List'}}
                    className="flex-1"
                />
            ),
            'Zusätzlicher Ansprechpartner': (
                <input
                    id="Ansprechpartner"
                    name="Ansprechpartner"
                    disabled
                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                />
            ),

            'Email Opt Out': (
                <input
                    id="email_opt_out"
                    type="checkbox"
                    name="email_opt_out"
                    className="form-checkbox"
                    defaultChecked={true}
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),

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

export default LeadInformationSection;
