import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    displayImage,
    searchOwners,
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";

const LeadInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.leadForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const LostReason = [
        { value: 'none', label: '-None-' },
        { value: 'account_contact', label: 'Account or Contact exist already' },
        { value: 'wrong_branch', label: 'Wrong Branch' },
        { value: 'wrong_department', label: 'Wrong Department' },
        { value: 'does_not_exist', label: 'Does Not Exist Anymore' },
        { value: 'bankruptcy', label: 'Bankruptcy' },
        { value: 'other', label: 'Other' },

    ];
    const LeadStatus = [
        {value: 'none', label: '-None-'},
        {value: '0.0 Cold lead / unqualified (CLU)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold lead / unqualified (CLU)</>)},
        {value: '1.0 Cold lead qualified (CLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>1.0 Cold lead qualified (CLQ)</>)},
        {value: '2.0 First contact made (FCM)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>2.0 First contact made (FCM)</>)},
        {value: '3.0 warm lead qualified (WLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>3.0 warm lead qualified (WLQ)</>)},
        {value: '4.0 Hot lead (HLQ)', label: (<><span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>4.0 Hot lead (HLQ)</>)},
        {value: 'Close Lead / Lost Lead', label: (<><span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Close Lead / Lost Lead</>)},

    ];
    const CompanyType = [
        { value: 'none', label: '-None-' },
        { value: 'oem', label: 'OEM' },
        { value: 'ems', label: 'EMS' },
        { value: 'odm', label: 'ODM (Development)' },
        { value: 'reseller', label: 'Reseller' },
        { value: 'other', label: 'Other' },

    ];
    const Industry = [
        { value: 'none', label: '-None-' },
        { value: 'industrial', label: 'Industrial' },
        { value: 'automotive', label: 'Automotive' },
        { value: 'consumer', label: 'Consumer' },
        { value: 'it', label: 'IT' },
        { value: 'defence', label: 'Defence' },
        { value: 'transportation', label: 'Transportation' },
    ];
    const LeadSource = [
        { value: 'none', label: '-None-' },
        { value: 'exhibitor_list', label: 'Exhibitor List' },
        { value: 'linkedin', label: 'Linkedin' },
        { value: 'chat', label: 'Chat' },
        { value: 'messe', label: 'Messe' },

    ];


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
                    defaultValue={LeadStatus.find((title) => title.value == formState.status)}
                />
            ),
            'Lost Reason': (
                <Select
                    options={LostReason}
                    name="lost_reason"
                    id="lost_reason"
                    onChange={({ value }: any) => {
                        handleChangeField('lost_reason', value)
                    }}
                    className="flex-1"
                    defaultValue={LostReason.find((title) => title.value == formState.lost_reason)}
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
                            </div>
                        ),
                    }}
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
                    options={CompanyType}
                    name="company_type"
                    id="company_type"
                    onChange={({ value }: any) => {
                        handleChangeField('company_type', value)
                    }}
                    className="flex-1"
                    defaultValue={CompanyType.find((title) => title.value == formState.company_type)}
                />
            ),
            'Industry': (
                <Select
                    options={Industry}
                    name="industry"
                    id="industry"
                    onChange={({ value }: any) => {
                        handleChangeField('industry', value)
                    }}
                    className="flex-1"
                    defaultValue={Industry.find((title) => title.value == formState.industry)}
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
