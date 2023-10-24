import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchOwners,
    searchManufacturer,
    searchRFQ
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";

const ProductInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const productTypeOptions = [
        {label: '-None-', value: 'none'},
        {label: 'Goods', value: 'goods'},
        {label: 'Service', value: 'service'},
    ];


    const fields = {
        'Product Information': {
            'Product Image': (
                <ImageUploadComponent formState={formState}
                                      modelName={'product'}
                                      id={'image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
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
            'Manufacturer': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    required
                    id="manufacturer_id"
                    placeholder="Type at least 2 characters to search..."
                    name="manufacturer_id"
                    loadOptions={searchManufacturer}
                    onChange={({value}: any) => {
                        handleChangeField('manufacturer_id', value)
                    }}
                    className="flex-1"
                />
            ),
            'RFQ (Alternative)': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={true}
                    id="rfqs_id"
                    placeholder="Type at least 2 characters to search..."
                    name="rfqs_id"
                    loadOptions={searchRFQ}
                    onChange={(values: any) => {
                        handleChangeField('rfqs_id', values.map((v: any) => v.value))
                    }}
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
                    defaultOptions={true}
                    isMulti={false}
                    id="approved_by_id"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
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
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
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
                    onChange={({value}: any) => {
                        handleChangeField('product_type', value)
                    }}
                    className="flex-1"
                    defaultValue={{label: 'Goods', value: 'goods'}}
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

export default ProductInformationSection;
