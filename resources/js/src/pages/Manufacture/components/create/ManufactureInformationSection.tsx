import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {handleOwnerChange, loadOwners} from "../../../RFQ/components/edit/HeaderSection";

const ManufactureInformationSection = () => {

    const fields = {
        'Manufacture Information': {
            'Manufacture Image': <input
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*"
            />,
            'Manufacture Name': <input id="manufacture_name" required name="manufacture_name"
                                       className="form-input flex-1 "/>,
            'octo_api_id': <input id="octo_api_id" name="octo_api_id"
                                  className="form-input flex-1 "/>,
            'Alias Names': <textarea id="alias_names" name="alias_names" rows={3}
                                     className="form-textarea flex-1"></textarea>,
        },
        '': {
            'Active': <input id="active" type="checkbox" name="active"
                             className="form-checkbox"/>,
            'Manufacture Owner' : <AsyncSelect isMulti={false} id="owner_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={loadOwners} onChange={handleOwnerChange} className="flex-1"/>,
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

export default ManufactureInformationSection;
