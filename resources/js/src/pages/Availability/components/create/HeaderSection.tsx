import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile, searchOwners, searchVendor} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";


const HeaderSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const AvailabilitySources = [
        {value: '-None-', label: '-None-'},
        {value: 'Email', label: 'Email'},
        {value: 'Skype/Wechat', label: 'Skype/Wechat'},
        {value: 'Phone', label: 'Phone'},
        {value: 'Online', label: 'Online'},
        {value: 'Other', label: 'Other'},
        {value: 'Web Api (Mouser)', label: 'Web Api (Mouser)'},
        {value: 'Web Api (Octopart)', label: 'Web Api (Octopart)'},
        {value: 'Web', label: 'Web'},
        {value: 'Portal', label: 'Portal'},

    ];

    const fields = {
        'Header': {
            'Vendor': <AsyncSelect
                    defaultOptions={true} required isMulti={false} id="vendor_id" name="vendor_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={searchVendor}
                                   onChange={({value}: any) => {
                                       handleChangeField('vendor_id', value)
                                   }}
                                   className="flex-1"/>,
            'Vendor Quote No': <input id="vendor_quote_no" type="text" name="vendor_quote_no"
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
        },
        '': {
            'Availability Owner': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="owner_id" name="owner_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={searchOwners}
                                               onChange={({value}: any) => {
                                                   handleChangeField('owner_id', value)
                                               }}
                                               className="flex-1"/>,
            'Availability File': <input type="file" name="availability_file" id="availability_file"
                                        className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                                        accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
                                        onChange={(e) => handleUploadFile(e, (response: any) => {
                                            dispatch(updateFormData({'availability_file': `${response?.data.data.file_url}`}));
                                        })}/>,
            'Availability Source': <Select id="availability_source" name="availability_source" required
                                           options={AvailabilitySources}
                                           onChange={({value}: any) => {
                                               handleChangeField('availability_source', value)
                                           }} className="flex-1"
                                           defaultValue={AvailabilitySources.find((data) => data.value == 'Other' )}
                                           />,

        }

    }


    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default HeaderSection;
