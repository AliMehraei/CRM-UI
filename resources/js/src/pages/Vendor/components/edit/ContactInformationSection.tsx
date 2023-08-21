import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useEffect} from "react";

const ContactInformationSection = () => {
    const formState = useSelector((state: any) => state.vendorForm);

    const dispatch = useDispatch();
    const api_instance = new api();

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

    const fields = {
        'Line Card': {
            'Vendor_Line Card': <AsyncSelect isMulti={false} id="vendor_line_card_id" name="vendor_line_card_id"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={searchVendor}
                                             className="flex-1"
                                             onChange={({value}: any) => {
                                                 handleChangeField('vendor_line_card_id', value)
                                             }}
                // value={defaultLineCard}
                                             defaultValue={{
                                                 value: formState.vendor_line_card_id,
                                                 label: (
                                                     <div key={formState.vendor_line_card_id}
                                                          className="flex items-center">
                                                         <div>
                                                             <div
                                                                 className="text-sm font-bold">{formState.vendor_line_card?.vendor_name}</div>
                                                         </div>
                                                     </div>
                                                 )
                                             }}
            />,
        },
        '': {
            'Vendor_Strong Lines': <AsyncSelect isMulti={false} id="vendor_strong_lines_id" name="vendor_strong_lines_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={searchVendor}
                                               className="flex-1"
                                               onChange={({value}: any) => {
                                                   handleChangeField('vendor_strong_lines_id', value)
                                               }}
                                               defaultValue={{
                                                   value: formState.vendor_line_card_id,
                                                   label: (
                                                       <div key={formState.vendor_line_card_id}
                                                            className="flex items-center">
                                                           <div>
                                                               <div
                                                                   className="text-sm font-bold">{formState.vendor_line_card?.vendor_name}</div>
                                                           </div>
                                                       </div>
                                                   )
                                               }}

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

export default ContactInformationSection;
