import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,searchOwners} from "../../../../components/Functions/CommonFunctions";

const LeadInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.leadForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };




    const LostReason = [
        {value: 'none', label: '-None-'},
        {value: 'account_contact', label: 'Account or Contact exist already'},
        {value: 'wrong_branch', label: 'Wrong Branch'},
        {value: 'wrong_department', label: 'Wrong Department'},
        {value: 'does_not_exist', label: 'Does Not Exist Anymore'},
        {value: 'bankruptcy', label: 'Bankruptcy'},
        {value: 'other', label: 'Other'},

    ];
    const LeadStatus = [
        {value: 'none', label: '-None-'},
        {value: '0_cold_lead', label: '0.0 Cold lead / unqualified (CLU)'},
        {value: '1_cold_lead', label: '1.0 Cold lead qualified (CLQ)'},
        {value: '2_first_contract', label: '2.0 First contact made (FCM)'},
        {value: '3_warm_lead', label: '3.0 warm lead qualified (WLQ)'},
        {value: '4_hot_lead', label: '4.0 Hot lead (HLQ)'},
        {value: 'close_lead', label: 'Close Lead / Lost Lead'},

    ];
    const CompanyType = [
        {value: 'none', label: '-None-'},
        {value: 'oem', label: 'OEM'},
        {value: 'ems', label: 'EMS'},
        {value: 'odm', label: 'ODM (Development)'},
        {value: 'reseller', label: 'Reseller'},
        {value: 'other', label: 'Other'},

    ];
    const Industry = [
        {value: 'none', label: '-None-'},
        {value: 'industrial', label: 'Industrial'},
        {value: 'automotive', label: 'Automotive'},
        {value: 'consumer', label: 'Consumer'},
        {value: 'it', label: 'IT'},
        {value: 'defence', label: 'Defence'},
        {value: 'transportation', label: 'Transportation'},
    ];
    const LeadSource = [
        {value: 'none', label: '-None-'},
        {value: 'exhibitor_list', label: 'Exhibitor List'},
        {value: 'linkedin', label: 'Linkedin'},
        {value: 'chat', label: 'Chat'},
        {value: 'messe', label: 'Messe'},

    ];


    const fields = {
        'Lead Information': {
            'Lead Image': (<input
                    id="lead_image"
                    key="lead_image"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({field: 'image', value: `${response?.data.data.file_url}`}));
                    })}
                    name="leadImage"
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
                className="flex-1"
                />
            ),
            'Lost Reason': (
                <Select
                options={LostReason}
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
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Lead Owner': (
                <AsyncSelect
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


        },
        '': {
            'Company': (
                <input
                    id="company"
                    required
                    name="company"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),

            'Company Type': (
                <Select
                options={CompanyType}
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
                options={Industry}
                name="industry"
                id="industry"
                onChange={({value}: any) => {
                    handleChangeField('industry', value)
                }}
                className="flex-1"
                />
            ),
            'Website':(
                <input
                id="website"
                name="website"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}

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
                className="flex-1"
                />
            ),
            'Zusätzlicher Ansprechpartner':(
                <input
                id="Ansprechpartner"
                name="Ansprechpartner"
                disabled
                className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                />
            ),

            'Email Opt Out':(
                <input
                id="email_opt_out"
                type="checkbox"
                name="email_opt_out"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
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