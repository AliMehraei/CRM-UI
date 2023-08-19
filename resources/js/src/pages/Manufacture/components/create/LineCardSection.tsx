import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {handleOwnerChange, loadOwners} from "../../../RFQ/components/edit/HeaderSection";

const LineCardSection = () => {
    const loadVendorLineCards = () => {

    };
    const handleChangeVendorLine = () => {

    };
    const loadStrongCards = () => {

    };
    const handleChangeStrongCard = () => {

    };
    const fields = {
        'Line Card': {
            'Vendor_Line Card': <AsyncSelect isMulti={false} id="line_card_id" name="line_card_id"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={loadVendorLineCards} onChange={handleChangeVendorLine}
                                             className="flex-1"/>,
        },
        '': {
            'Vendor_Strong Card': <AsyncSelect isMulti={false} id="strong_card_id" name="strong_card_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={loadStrongCards} onChange={handleChangeStrongCard}
                                               className="flex-1"/>,
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

export default LineCardSection;
