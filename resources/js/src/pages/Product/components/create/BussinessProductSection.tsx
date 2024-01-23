import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    searchFiscalAccount,
    searchVendor,
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import { ProductTax, ProductTypeOptions } from "../../../../components/Options/SelectOptions";
import { useState } from "react";

const BussinessProductSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const [isBusinessProductChecked, setIsBusinessProductChecked] = useState(false);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
        if (field === "business_product") {
            setIsBusinessProductChecked(value);

        }
    };

    const fields = {
        "Bussiness Product": {
            'Business Product': (
                <input
                    id="business_product"
                    type="checkbox"
                    name="business_product"
                    className="form-checkbox"
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                />
            ),
        }
    };

    const customFields = {
       
        "Sales Information": {
            "Selling Price": (
                <input
                    type="number"
                    required
                    className="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]"
                    name="sales_selling_price"
                    min={0}
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),
            "Account": (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="sales_fiscal_account_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_fiscal_account_id"
                    loadOptions={searchFiscalAccount}
                    onChange={({ value }: any) => {
                        handleChangeField("sales_fiscal_account_id", value);
                    }}
                    className="flex-1"
                />
            ),
            "Description": (
                <textarea
                    id="sales_description"
                    rows={2}
                    name="sales_description"
                    className="form-textarea flex-1"
                    placeholder=""
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                ></textarea>
            ),
            "Tax": (
                <Select
                    name="sales_tax"
                    options={ProductTax}
                    onChange={({ value }: any) => {
                        handleChangeField("sales_tax", value);
                    }}
                    className="flex-1"
                />
            ),
        },
        "Purchase Information": {
            "Cost Price": (
                <input
                    type="number"
                    required
                    className="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]"
                    name="purchase_cost_price"
                    min={0}
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),
            "Account": (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="purchase_fiscal_account_id"
                    placeholder="Type at least 2 characters to search..."
                    name="purchase_fiscal_account_id"
                    loadOptions={searchFiscalAccount}
                    onChange={({ value }: any) => {
                        handleChangeField("purchase_fiscal_account_id", value);
                    }}
                    className="flex-1"
                />
            ),
            "Description": (
                <textarea
                    id="purchase_description"
                    rows={2}
                    name="purchase_description"
                    className="form-textarea flex-1"
                    placeholder=""
                    onChange={(e: any) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                ></textarea>
            ),
            "Tax": (
                <Select
                    name="purchase_tax"
                    options={ProductTax}
                    onChange={({ value }: any) => {
                        handleChangeField("purchase_tax", value);
                    }}
                    className="flex-1"
                />
            ),
            "Preferred Vendor": (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="purchase_vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="purchase_vendor_id"
                    loadOptions={searchVendor}
                    onChange={({ value }: any) => {
                        handleChangeField("purchase_vendor_id", value);
                    }}
                    className="flex-1"
                />
            ),
        },
       
    };
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />
            </div>
            <div className="flex flex-row">
            {isBusinessProductChecked && <GenerateFields fields={customFields} />}
            </div>
            

        </>
    );
};

export default BussinessProductSection;
