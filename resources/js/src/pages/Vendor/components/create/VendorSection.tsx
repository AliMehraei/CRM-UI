import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/vendorFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {Contract, Currencies, PortalAccess} from "../../../../components/Functions/CommonFunctions";
import {searchOwners} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

const VendorSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.vendorForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({query: query});

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


    const ApproveStatus = [
        {value: 'none', label: '-None-'},
        {value: 'draft', label: 'Draft'},
        {value: 'waiting', label: 'Waiting for approval'},
        {value: 'approval', label: 'Approval'},
        {value: 'rejected', label: 'Rejected'},

    ];
    const vendorSource = [
        {value: 'none', label: '-None-'},
        {value: 'web', label: 'Web Download'},
        {value: 'linkedin', label: 'Linkedin'},
        {value: 'chat', label: 'Chat'},
        {value: 'messe', label: 'Messe'},

    ];

    const fields = {
        'Vendor Information': {
            'Vendor Image': (
                <ImageUploadComponent formState={formState}
                                      modelName={'vendor'}
                                      id={'vendor_image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
            ),
            'Vendor Name': (
                <input
                    id="vendor_name"
                    required
                    name="vendor_name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'Contracts': <Select
                isMulti={true}
                name="contract"
                id="contract"
                placeholder="Select Contract Type..."
                options={Contract}
                onChange={(values: any) => {
                    handleChangeField('contract', values.map((v: any) => v.value))
                }}
            />,

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
                    defaultOptions={true}
                    isMulti={false}
                    id="strong_lines"
                    placeholder="Type at least 2 characters to search..."
                    name="strong_lines"
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('strong_lines', value)
                    }}
                    className="flex-1"
                />
            ),
            'Line Card': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="line_card"
                    placeholder="Type at least 2 characters to search..."
                    name="line_card"
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('line_card', value)
                    }}
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
                    defaultValue={{value: 'draft', label: 'Draft'}}
                    className="flex-1"
                />
            ),
            'Business Vendor': (
                <input
                    id="business_vendor"
                    type="checkbox"
                    name="business_vendor"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.business_vendor}
                />
            ),
            'Approved By': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="approved_by"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"
                />
            ),
        },
        '': {

            'Vendor Owner': (
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
            'Vendor Source': (
                <Select
                    options={vendorSource}
                    name="vendor_source"
                    id="vendor_source"
                    onChange={({value}: any) => {
                        handleChangeField('vendor_source', value)
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
            'ISO Upload': (
                <FileUploadComponent
                    id="iso_upload"
                    modelName={'vendor'}
                    updateFormDate={updateFormData}
                    formState={formState}
                    formAttribute='iso_upload'
                />
            ),
            'Doc Upload': (
                <FileUploadComponent
                    id="doc_upload"
                    modelName={'vendor'}
                    updateFormDate={updateFormData}
                    formState={formState}
                    formAttribute='doc_upload'
                />
            ),
            'Parent Vendor': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="parent_vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="parent_vendor_id"
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('parent_vendor_id', value)
                    }}
                    className="flex-1"
                />
            ),
            'Portal Access': (
                <Select
                    options={PortalAccess}
                    name="portal_access"
                    id="portal_access"
                    onChange={({value}: any) => {
                        handleChangeField('portal_access', value)
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

export default VendorSection;
