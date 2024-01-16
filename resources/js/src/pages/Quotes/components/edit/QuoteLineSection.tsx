import Select from "react-select";
import { RequiredComponent } from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { updateFormData } from "../../../../store/quoteFormSlice";
import {handleCopySelect, searchProducts} from "../../../../components/Functions/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const QuoteLineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.quoteForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };
    const fields = {
        'Quote Line': {
            'Product Name': <AsyncSelect
                    defaultOptions={false} isMulti={false} id="product_id" name="product_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchProducts}
                onChange={({ value }: any) => {
                    handleChangeField('product_id', value)
                }}
                defaultValue={{
                    value: formState.product?.id,
                    label: (
                        <div key={formState.product?.id} className="flex items-center">
                            {formState.product ?
                                (
                                    <>
                                        <div className="text-sm font-bold">{formState.product?.product_name}</div>
                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.product?.product_name}`)}>
                                            Copy & Select
                                        </button>
                                    </>

                                ) : null

                            }

                        </div>
                    ),
                }}
                className="flex-1" />,

            'Customer part ID': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.customer_part_id}
            />
        },
        '': {
            'Quantity': <input id="quantity" name="quantity" className="form-input flex-1 "
                defaultValue={formState.quantity}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)} />,
            'List Price': <input id="list_price" name="list_price" className="form-input flex-1 "
                defaultValue={formState.list_price}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)} />,
            'Lead Time': <input id="lead_time" name="lead_time" className="form-input flex-1 "
                defaultValue={formState.lead_time}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)} />,

        }

    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)
}

export default QuoteLineSection
