import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {

    searchOwners,
    searchRFQ,
    displayImage, handleCopySelect, searchManufacturer
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import {ProductTypeOptions} from "../../../../components/Options/SelectOptions";
import React from "react";
const ProductInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


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
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.product_name}
                />
            ),
            'Part Description': (
                <input
                    id="part_description"
                    name="part_description"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.part_description}
                />
            ),
            'Manufacturer': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="manufacturer_id"
                    placeholder="Type at least 2 characters to search..."
                    name="manufacturer_id"
                    loadOptions={searchManufacturer}
                    onChange={({ value }: any) => {
                        handleChangeField('manufacturer_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.manufacturer_id,
                        label: (
                            <div key={formState.manufacturer_id}
                                className="flex items-center">
                                {formState.manufacturer ?
                                    (
                                        <>
                                            <div className="text-sm font-bold">{formState.manufacturer?.name}</div>
                                            <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.manufacturer?.name}`)}>
                                                Copy & Select
                                            </button>
                                        </>


                                    ) : null

                                }

                            </div>
                        )
                    }}
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
                    defaultValue={formState.rfqs
                        ? formState.rfqs.map((rfq: any) => ({
                            value: rfq.id,
                            label: (
                                <div key={rfq.id} className="flex items-center">
                                    <>
                                        <div className="text-sm font-bold">{rfq.rfq_name}</div>
                                    </>
                                </div>
                            ),
                        }))
                        : []
                    }
                />
            ),
            // 'Business Product': (
            //     <input
            //         id="business_product"
            //         type="checkbox"
            //         name="business_product"
            //         className="form-checkbox"
            //         onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
            //         defaultChecked={formState.business_product}
            //     />
            // ),
            'Approved By': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="approved_by_id"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({ value }: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.approved_by?.id,
                        label: (
                            <div key={formState.approved_by?.id} className="flex items-center">
                                {formState.approved_by ? (
                                    <>
                                <img
                                    src={formState.approved_by.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.approved_by?.first_name + " " + formState.approved_by?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.approved_by?.email}</div>
                                </div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.approved_by?.first_name + " " + formState.approved_by?.last_name}`)}>
                                            Copy & Select
                                        </button>
                                    </>
                                    ) : null}
                            </div>
                        ),
                    }}
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
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    defaultChecked={formState.product_active}
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
                    onChange={({ value }: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.owner?.id,
                        label: (
                            <div key={formState.owner?.id} className="flex items-center">
                                {formState.owner ? (
                                    <>
                                <img
                                    src={displayImage(formState.owner.avatar_data)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                            Copy & Select
                                        </button>
                                    </>
                                    ) : null}
                            </div>
                        ),
                    }}
                />
            ),
            'Datasheet URL': (
                <input
                    id="datasheet_url"
                    name="datasheet_url"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.datasheet_url}
                />
            ),

            'Product Type': (
                <Select
                    options={ProductTypeOptions}
                    name="product_type"
                    id="product_type"
                    onChange={({ value }: any) => {
                        handleChangeField('product_type', value)
                    }}
                    className="flex-1"
                    defaultValue={ProductTypeOptions.find((title) => title.value == formState.product_type)}
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
