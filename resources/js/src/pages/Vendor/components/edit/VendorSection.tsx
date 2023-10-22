import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/vendorFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    handleUploadFile,
    Currencies,
    PortalAccess,
    searchOwners, getImageSource
} from "../../../../components/Functions/CommonFunctions";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";

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
            'Vendor Image': (<div className="">
                    <div className="flex">
                        <input
                            id="vendor_image"
                            key="vendor_image"
                            type="file"
                            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                            accept="image/*"
                            onChange={(e) => handleUploadFile(e, (response: any) => {
                                dispatch(updateFormData({'image': `${response?.data.data.file_url}`}));
                            })}
                            name="vendor_image"
                        />
                        <ClearButtonComponent callBack={() => {
                            const fileInput = document.getElementById('vendor_image') as HTMLInputElement | null;
                            if (fileInput) {
                                fileInput.value = '';
                                fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                            }
                            dispatch(updateFormData({'image': null}));
                        }}/>
                    </div>
                    <img
                        id="vendor_image_preview"
                        src={getImageSource(formState.image || formState.oldImage)}
                        alt="img" className="mt-4 w-20 h-20 rounded"/>
                </div>
            ),
            'Vendor Name': (
                <input
                    id="vendor_name"
                    required
                    name="vendor_name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.vendor_name}
                />
            ),
            'Contracts': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={true}
                    id="contracts_id"
                    placeholder="Type at least 2 characters to search..."
                    name="contracts_id"
                    loadOptions={searchVendor}  //TODO : fix here
                    onChange={(values: any) => {
                        handleChangeField('contracts_id', values.map((v: any) => v.value))
                    }}
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
                    className="flex-1"
                    defaultValue={ApproveStatus.find((data) => data.value == formState.approved_status)}

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
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <img
                                        src={formState.owner.avatar ?? '/assets/images/user-profile.jpeg'}
                                        alt="avatar"
                                        className="w-8 h-8 mr-2 rounded-full"
                                    />
                                ) : null}
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                            </div>
                        ),
                    }}
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
                    defaultValue={vendorSource.find((data) => data.value == formState.vendor_source)}

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
                    defaultValue={Currencies.find((data) => data.value == formState.currency)}

                    className="flex-1"
                />
            ),
            'ISO Upload': (
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
            'Doc Upload': (
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
                    defaultValue={{
                        value: formState.parent_vendor_id,
                        label: (
                            <div key={formState.parent_vendor_id}
                                 className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.parent_vendor_id}</div>
                                </div>
                            </div>
                        )
                    }}
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
                    defaultValue={PortalAccess.find((data) => data.value == formState.portal_access)}

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
