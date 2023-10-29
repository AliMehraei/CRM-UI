import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchOwners, searchVendor} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";


const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

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
            'Availability File':
                <FileUploadComponent
                    id={'availability_file'}
                    modelName="availability"
                    formState={formState}
                    formAttribute={'availability_file'}
                    updateFormData={updateFormData}
                />
            ,
            'Availability Source': <Select id="availability_source" name="availability_source" required
                                           options={AvailabilitySources}
                                           onChange={({value}: any) => {
                                               handleChangeField('availability_source', value)
                                           }} className="flex-1"
                                           defaultValue={AvailabilitySources.find((data) => data.value == 'Other')}
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
