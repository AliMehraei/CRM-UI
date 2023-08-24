import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { handleUploadFile, Currencies, PortalAccess } from "../../../../components/Functions/CommonFunctions";

const AlternativesSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const searchProduct = async (query: string) => {
        const valField = 'id';
        const nameField = 'product_name';

        const result = await api_instance.searchProduct({ query: query });

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

                    id="alternative_mpn_1_id"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_1_id"
                    loadOptions={searchProduct}
                    onChange={({ value }: any) => {
                        handleChangeField('alternative_mpn_1_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.alternative_mpn_1_id,
                        label: (
                            <div key={formState.alternative_mpn_1_id}
                                className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.alternative_mpn1?.product_name}</div>
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'Alternative MPN 2': (
                <AsyncSelect
                    isMulti={false}

                    id="alternative_mpn_2_id"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_2_id"
                    loadOptions={searchProduct}
                    onChange={({ value }: any) => {
                        handleChangeField('alternative_mpn_2_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.alternative_mpn_2_id,
                        label: (
                            <div key={formState.alternative_mpn_2_id}
                                className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.alternative_mpn2?.product_name}</div>
                                </div>
                            </div>
                        )
                    }}
                />
            ),


        },
        '': {
            'Alternative MPN 3': (
                <AsyncSelect
                    isMulti={false}

                    id="alternative_mpn_3_id"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_3_id"
                    loadOptions={searchProduct}
                    onChange={({ value }: any) => {
                        handleChangeField('alternative_mpn_3_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.alternative_mpn_3_id,
                        label: (
                            <div key={formState.alternative_mpn_3_id}
                                className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.alternative_mpn3?.product_name}</div>
                                </div>
                            </div>
                        )
                    }}
                />
            ),
            'Alternative MPN 4': (
                <AsyncSelect
                    isMulti={false}

                    id="alternative_mpn_4_id"
                    placeholder="Type at least 2 characters to search..."
                    name="alternative_mpn_4_id"
                    loadOptions={searchProduct}
                    onChange={({ value }: any) => {
                        handleChangeField('alternative_mpn_4_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                    defaultValue={{
                        value: formState.alternative_mpn_4_id,
                        label: (
                            <div key={formState.alternative_mpn_4_id}
                                className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.alternative_mpn4?.product_name}</div>
                                </div>
                            </div>
                        )
                    }}
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

export default AlternativesSection;
