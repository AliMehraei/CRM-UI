import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    handleUploadFile,
    Currencies,
    PortalAccess,
    searchOwners,
    searchManufacturer,
    searchRFQ, getImageSource
} from "../../../../components/Functions/CommonFunctions";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";

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
                <div className="">
                    <div className="flex">
                        <input
                            id="image"
                            key="image"
                            type="file"
                            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                            accept="image/*"
                            onChange={(e) => handleUploadFile(e, (response: any) => {
                                dispatch(updateFormData({'image': `${response?.data.data.file_url}`}));
                            })}
                            name="image"
                        />
                        <ClearButtonComponent callBack={() => {
                            const fileInput = document.getElementById('image') as HTMLInputElement | null;
                            if (fileInput) {
                                fileInput.value = '';
                                fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                            }
                            dispatch(updateFormData({'image': null}));
                        }}/>
                    </div>
                    <img
                        id="image_preview"
                        src={getImageSource(formState.image || formState.oldImage)}
                        alt="img" className="mt-4 w-20 h-20 rounded"/>
                </div>
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
