import Select from "react-select";
import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {Currencies, handleCopySelect, searchProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";
import React, {useEffect} from "react";

const QuoteLineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Quote Line': {
            'Product name': <AsyncSelect
                    defaultOptions={false} required isMulti={false} id="product_id" name="product_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchProducts}
                                         onChange={({value}: any) => {
                                             handleChangeField('product_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.product?.id,
                                             label: (
                                                 <div key={formState.product?.id} className="flex items-center">
                                                     <div className="text-sm font-bold">{formState.product?.product_name}</div>
                                                     <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.product?.product_name}`)}>
                                                         Copy & Select
                                                     </button>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,

            'SKU name': <input id="sku_name" name="sku_name" className="form-input flex-1 "
                               defaultValue={formState.sku_name}
                               onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity': <input required id="quantity" name="quantity" className="form-input flex-1 "
                               defaultValue={formState.quantity}
                               onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'In Stock Quantity': <input id="in_stock_quantity" name="in_stock_quantity"
                                        defaultValue={formState.in_stock_quantity}
                                        className="form-input flex-1 "
                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'Currency': <Select id="currency" name="currency" options={Currencies}
                                className="flex-1"
                                defaultValue={Currencies.find((data) => data.value == formState.currency)}
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}/>,
            'Cost': <input id="cost" name="cost" className="form-input flex-1 "
                           defaultValue={formState.cost}
                           onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,


            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
        },
        '': {
            'Lead Time': <input id="lead_time" name="lead_time" className="form-input flex-1 "
                                defaultValue={formState.lead_time}
                                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'Date Code': <input id="date_code" name="date_code" className="form-input flex-1 "
                                defaultValue={formState.date_code}
                                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'SPQ': <input id="spq" name="spq" className="form-input flex-1 "
                          defaultValue={formState.spq}
                          onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'MOQ': <input id="moq" name="moq" className="form-input flex-1 "
                          defaultValue={formState.moq}
                          onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'comment': <input id="comment" name="comment" className="form-input flex-1 "
                              defaultValue={formState.comment}
                              onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,


        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default QuoteLineSection;
