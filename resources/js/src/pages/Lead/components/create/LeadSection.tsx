import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const LeadSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.leadForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const searchLead = async (query: string) => {
        const valField = 'id';
        const nameField = 'lead_name';

        const result = await api_instance.searchLead({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };
    const loadOwners = async (e: any) => {
        const result = await api_instance.loadAdminUsers(e);
        const valField = 'id';
        const nameField = 'name';
        const avatarField = 'avatar';
        const emailField = 'email';
        if (result.status) {
            return result.data.map((user: any) => ({
                value: user[valField],
                label: (
                    <div key={user[valField]} className="flex items-center">
                        <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                        <div>
                            <div className="text-sm font-bold">{user[nameField]}</div>
                            <div className="text-xs text-gray-500">{user[emailField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const ApproveStatus = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'waiting', label: 'Waiting for approval'},
        {value: 'approval', label: 'Approval'},
        {value: 'rejected', label: 'Rejected'},

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
    const leadSource = [
        {value: 'none', label: '-None-'},
        {value: 'web', label: 'Web Download'},
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
            'Contracts': (
                <AsyncSelect
                isMulti={false}
                id="contracts"
                placeholder="Type at least 2 characters to search..."
                name="contracts"
                loadOptions={searchLead}
                onChange={({value}: any) => {
                    handleChangeField('contracts', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
                />
            ),
            'SL Contains all MFRs': (
                <input
                    id="is_active"
                    type="checkbox"
                    name="is_active"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.is_active}
                />
            ),
            'Strong Lines': (
                <AsyncSelect
                isMulti={false}
                id="strong_lines"
                placeholder="Type at least 2 characters to search..."
                name="strong_lines"
                loadOptions={searchLead}
                onChange={({value}: any) => {
                    handleChangeField('strong_lines', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
                />
            ),
            'Line Card': (
                <AsyncSelect
                isMulti={false}
                id="line_card"
                placeholder="Type at least 2 characters to search..."
                name="line_card"
                loadOptions={searchLead}
                onChange={({value}: any) => {
                    handleChangeField('line_card', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
                />
            ),
            'Approve status': (
                <Select 
                options={ApproveStatus} 
                name="approved_status" 
                id="approved_status"       
                onChange={({value}: any) => {
                    handleChangeField('approved_status', value)
                }} 
                className="flex-1"
                />
            ),
            'Business Lead': (
                <input
                    id="business_lead"
                    type="checkbox"
                    name="business_lead"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.business_lead}
                />
            ),
            'Approved By': (
                <AsyncSelect
                    isMulti={false}
                    id="approved_by"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by"
                    loadOptions={loadOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by', value)
                    }} // Use 'owner_id' if it's the field name
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
            'Lead Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={loadOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'Lead Source': (
                <Select 
                options={leadSource} 
                name="lead_source" 
                id="lead_source"       
                onChange={({value}: any) => {
                    handleChangeField('lead_source', value)
                }} 
                className="flex-1"
                />
            ),
            'Currency': (
                <Select 
                options={Currencies} 
                name="currency" 
                id="currency"       
                onChange={({value}: any) => {
                    handleChangeField('currency', value)
                }} 
                className="flex-1"
                />
            ),
            'ISO Upload':(
                <input
                    id="iso_upload"
                    key="iso_upload"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({field: 'iso_upload', value: `${response?.data.data.file_url}`}));
                    })}
                    name="iso_upload"
                />
            ),
            'Doc Upload':(
                <input
                    id="doc_upload"
                    key="doc_upload"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="*"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({field: 'doc_upload', value: `${response?.data.data.file_url}`}));
                    })}
                    name="doc_upload"
                />
            ),
            'Parent Lead':(
                <AsyncSelect
                isMulti={false}
                id="parent_lead_id"
                placeholder="Type at least 2 characters to search..."
                name="parent_lead_id"
                loadOptions={searchLead}
                onChange={({value}: any) => {
                    handleChangeField('parent_lead_id', value)
                }} // Use 'owner_id' if it's the field name
                className="flex-1"
                />
            ),
            'Lead Number':(
                <input
                id="lead_number"
                name="lead_number"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                value={formState.lead_number}
            />
            ),
            'Portal Access':(
                <Select 
                options={PortalAccess} 
                name="currency" 
                id="currency"       
                onChange={({value}: any) => {
                    handleChangeField('currency', value)
                }} 
                className="flex-1"
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

export default LeadSection;
