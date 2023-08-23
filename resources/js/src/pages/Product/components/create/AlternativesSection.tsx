import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {handleUploadFile,Currencies,PortalAccess} from "../../../../components/Functions/CommonFunctions";

const AlternativesSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const searchProduct = async (query: string) => {
        const valField = 'id';
        const nameField = 'product_name';

        const result = await api_instance.searchProduct({query: query});

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
        'Alternatives': {
           
           
         
            'Alternative MPN 1': (
                <AsyncSelect
                    isMulti={false}
                    
                    id="alternative_mpn_1"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_1"
                    loadOptions={searchProduct}
                    onChange={({value}: any) => {
                        handleChangeField('alternative_mpn_1', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'Alternative MPN 2': (
                <AsyncSelect
                    isMulti={false}
                    
                    id="alternative_mpn_2"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_2"
                    loadOptions={searchProduct}
                    onChange={({value}: any) => {
                        handleChangeField('alternative_mpn_2', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
           
            
        },
        '': {
            'Alternative MPN 3': (
                <AsyncSelect
                    isMulti={false}
                    
                    id="alternative_mpn_3"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_3"
                    loadOptions={searchProduct}
                    onChange={({value}: any) => {
                        handleChangeField('alternative_mpn_3', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'Alternative MPN 4': (
                <AsyncSelect
                    isMulti={false}
                    
                    id="alternative_mpn_4"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_4"
                    loadOptions={searchProduct}
                    onChange={({value}: any) => {
                        handleChangeField('alternative_mpn_4', value)
                    }} // Use 'owner_id' if it's the field name
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

export default AlternativesSection;
