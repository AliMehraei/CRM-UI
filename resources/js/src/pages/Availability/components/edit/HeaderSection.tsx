import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { handleUploadFile, searchOwners, searchVendor } from "../../../../components/Functions/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/availabilityFormSlice";


const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const AvailabilitySources = [
        { value: 'none', label: '-None-' },
        { value: 'email', label: 'Email' },
        { value: 'skype_wechat', label: 'Skype/Wechat' },
        { value: 'phone', label: 'Phone' },
        { value: 'online', label: 'Online' },
        { value: 'other', label: 'Other' },
        { value: 'mouser', label: 'Web Api (Mouser)' },
        { value: 'octopart', label: 'Web Api (Octopart)' },
        { value: 'web', label: 'Web' },
        { value: 'portal', label: 'Portal' },


    ];

    const fields = {
        'Header': {
            'Vendor': <AsyncSelect required isMulti={false} id="vendor_id" name="vendor_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchVendor}
                onChange={({ value }: any) => {
                    handleChangeField('vendor_id', value)
                }}
                className="flex-1"
                defaultValue={{
                    value: formState.vendor?.id,
                    label: (
                        <div key={formState.vendor?.id}
                            className="flex items-center">
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.vendor?.vendor_name}</div>
                            </div>
                        </div>
                    ),
                }}

            />,
            'Vendor Quote No': <input id="vendor_quote_no" type="text" name="vendor_quote_no"
                className="form-input flex-1 "
                defaultValue={formState.vendor_quote_no}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)} />,
        },
        '': {
            'Availability Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({ value }: any) => {
                    handleChangeField('owner_id', value)
                }}
                defaultValue={{
                    value: formState.owner?.id,
                    label: (
                        <div key={formState.owner?.id} className="flex items-center">
                            <img src={formState.owner?.avatar ?? '/assets/images/user-profile.jpeg'} alt="avatar"
                                className="w-8 h-8 mr-2 rounded-full" />
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                        </div>
                    ),
                }}
                className="flex-1" />,
            'Availability File': <div className="flex">
                <input type="file" name="availability_file" id="availability_file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({ 'availability_file': `${response?.data.data.file_url}` }));
                    })} />
                <a className="ml-1 btn btn-outline-primary" href={formState.availability_file} target="_blank">Download</a>
            </div>,

            'Availability Source': <Select id="availability_source" name="availability_source" required
                options={AvailabilitySources}
                onChange={({ value }: any) => {
                    handleChangeField('availability_source', value)
                }} className="flex-1"
                defaultValue={AvailabilitySources.find((data) => data.value == formState.availability_source)}
            />,

        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>
    )

}

export default HeaderSection;
