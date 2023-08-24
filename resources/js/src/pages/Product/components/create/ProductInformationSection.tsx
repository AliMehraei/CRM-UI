import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { handleUploadFile, Currencies, PortalAccess , searchOwners} from "../../../../components/Functions/CommonFunctions";

const ProductInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const searchManufacture = async (query: string) => {
        const valField = 'id';
        const nameField = 'name';

        const result = await api_instance.searchManufacturer({ query: query });

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
    const searchRFQ = async (query: string) => {
        const valField = 'id';
        const nameField = 'rfq_name';

        const result = await api_instance.searchRfq({ query: query });

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

    
    const productTypeOptions = [
        { label: '-None-', value: 'none' },
        { label: 'Goods', value: 'goods' },
        { label: 'Service', value: 'service' },
    ];



    const fields = {
        'Product Information': {
            'Product Image': (<input
                id="image"
                key="image"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({ field: 'image', value: `${response?.data.data.file_url}` }));
                })}
                name="image"
            />
            ),

            'Product Name': (
                <input
                    id="product_name"
                    required
                    name="product_name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Part Description': (
                <input
                    id="part_description"
                    name="part_description"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Manufacture': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="manufacture_id"
                    placeholder="Type at least 2 characters to search..."
                    name="manufacture_id"
                    loadOptions={searchManufacture}
                    onChange={({ value }: any) => {
                        handleChangeField('manufacture_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'RFQ (Alternative)': (
                <AsyncSelect
                    isMulti={false}
                    id="rfq_id"
                    placeholder="Type at least 2 characters to search..."
                    name="rfq_id"
                    loadOptions={searchRFQ}
                    onChange={({ value }: any) => {
                        handleChangeField('rfq_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),
            'Business Product': (
                <input
                    id="business_product"
                    type="checkbox"
                    name="business_product"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'Approved By': (
                <AsyncSelect
                    isMulti={false}
                    id="approved_by_id"
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
            'Product Active': (
                <input
                    id="product_active"
                    type="checkbox"
                    name="product_active"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
            'Product Owner': (
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
                />
            ),
            'Datasheet URL': (
                <input
                    id="datasheet_url"
                    name="datasheet_url"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                // defaultValue={formState.name}
                />
            ),

            'Product Type': (
                <Select
                    options={productTypeOptions}
                    name="product_type"
                    id="product_type"
                    onChange={({ value }: any) => {
                        handleChangeField('product_type', value)
                    }}
                    className="flex-1"
                    defaultValue={{ label: '-None-', value: 'none' }}
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

export default ProductInformationSection;
