import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/vendorFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { handleUploadFile, Currencies, PortalAccess,searchOwners } from "../../../../components/Functions/CommonFunctions";

const VendorSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.vendorForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({ query: query });

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
        { value: 'none', label: '-None-' },
        { value: 'draft', label: 'Draft' },
        { value: 'waiting', label: 'Waiting for approval' },
        { value: 'approval', label: 'Approval' },
        { value: 'rejected', label: 'Rejected' },

    ];
    const vendorSource = [
        { value: 'none', label: '-None-' },
        { value: 'web', label: 'Web Download' },
        { value: 'linkedin', label: 'Linkedin' },
        { value: 'chat', label: 'Chat' },
        { value: 'messe', label: 'Messe' },

    ];

    const fields = {
        'Vendor Information': {
            'Vendor Image': (<input
                id="vendor_image"
                key="vendor_image"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({ 'image' : `${response?.data.data.file_url}` }));
                })}
                name="vendorImage"
            />
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
                    isMulti={false}
                    id="contracts"
                    placeholder="Type at least 2 characters to search..."
                    name="contracts"
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
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
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
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
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
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
                    onChange={({ value }: any) => {
                        handleChangeField('approved_status', value)
                    }}
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
                    isMulti={false}
                    id="approved_by"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('approved_by_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
        },
        '': {

            'Vendor Owner': (
                <AsyncSelect
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('owner_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                <img src={formState.owner?.avatar} alt="avatar" className="w-8 h-8 mr-2 rounded-full" />
                                <div>
                                    <div className="text-sm font-bold">{formState.owner?.name}</div>
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
                    onChange={({ value }: any) => {
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
                    onChange={({ value }: any) => {
                        handleChangeField('currency', value)
                    }}
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
                        dispatch(updateFormData({ field: 'iso_upload', value: `${response?.data.data.file_url}` }));
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
                        dispatch(updateFormData({ field: 'doc_upload', value: `${response?.data.data.file_url}` }));
                    })}
                    name="doc_upload"
                />
            ),
            'Parent Vendor': (
                <AsyncSelect
                    isMulti={false}
                    id="parent_vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="parent_vendor_id"
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
                        handleChangeField('parent_vendor_id', value)
                    }} // Use 'owner_id' if it's the field name
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
            'Vendor Number': (
                <input
                    id="vendor_number"
                    name="vendor_number"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.vendor_number}
                />
            ),
            'Portal Access': (
                <Select
                    options={PortalAccess}
                    name="currency"
                    id="currency"
                    onChange={({ value }: any) => {
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
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default VendorSection;
