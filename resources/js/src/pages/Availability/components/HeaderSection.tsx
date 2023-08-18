import AsyncSelect from "react-select/async";
import Select from "react-select";
import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";

const HeaderSection = () => {

    const loadVendors = () => {

    };
    const handleChangeVendor = () => {

    };
    const loadUsers = () => {

    };

    function handleChangeOwner() {

    }

    const AvailabilitySources = [
        {value: 'none', label: '-None-'},
        {value: 'email', label: 'Email'},
        {value: 'skype_wechat', label: 'Skype/Wechat'},
        {value: 'phone', label: 'Phone'},
        {value: 'online', label: 'Online'},
        {value: 'other', label: 'Other'},
        {value: 'mouser', label: 'Web Api (Mouser)'},
        {value: 'octopart', label: 'Web Api (Octopart)'},
        {value: 'web', label: 'Web'},
        {value: 'portal', label: 'Portal'},


    ];
    const handleChangeAvailabilitySources = () => {

    };
    const fields = {
        'Header': {
            'Vendor': <AsyncSelect required isMulti={false} id="vendor_id" name="vendor_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={loadVendors} onChange={handleChangeVendor} className="flex-1"/>,
            'Vendor Quote No': <input id="vendor_quote_no" type="text" name="vendor_quote_no"
                                      className="form-input flex-1 "/>,
        },
        '': {
            'Availability Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={loadUsers} onChange={handleChangeOwner}
                                               className="flex-1"/>,
            'Availability File': <input type="file" name="availability_file" id="availability_file"
                                        className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                                        accept="image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx"
            />,
            'Availability Source': <Select id="availability_source" name="availability_source" required
                                            options={AvailabilitySources}
                                            onChange={handleChangeAvailabilitySources} className="flex-1"/>,
        }

    }


    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                {Object.entries(fields).map(([sectionTitle, sectionContent], index) => (
                    <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                        <div key={sectionTitle} className="">
                            <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                                <div className="mt-10"></div>}</div>
                            {Object.entries(sectionContent).map(([label, inputComponent], index) => (
                                <div key={label} className="mt-4 flex items-center">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        {label}
                                        {inputComponent.props.required && <RequiredComponent/>}
                                    </label>
                                    {inputComponent}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default HeaderSection;
