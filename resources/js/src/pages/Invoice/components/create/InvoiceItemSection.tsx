import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import {useEffect, useState} from "react";
import AsyncSelect from "react-select/async";
import {loadProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/invoiceFormSlice";

const InvoiceItemSection = () => {
    const [items, setItems] = useState<any>([
        {
            id: 1,
            name: '',
            part_id: '',
            quantity: 1,
            SPQ: '',
            list_price: '',
            lead_time: '',
            date_code: '',
            comment: '',
            amount: 0,
        },
    ]);
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, {
            id: maxId + 1,
            name: '',
            part_id: '',
            quantity: 1,
            SPQ: '',
            list_price: '',
            lead_time: '',
            date_code: '',
            comment: '',
            amount: 0,
            discount: 0,
            tax: 0,
            total: 0,
        }]);
    };


    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className=" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12">
                <div key="Quote Items" className="">
                    <div className="text-lg">
                        Invoice Items :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x">
                            <table className="table-auto overflow-scroll w-full">
                                <thead>
                                <tr>
                                    <th className="w-1">S.NO</th>
                                    <th className="w-full">Product Name</th>
                                    <th className="w-1">Quantity</th>
                                    <th className="w-1">List Price</th>
                                    <th className="w-1">Amount</th>
                                    <th className="w-1">Discount</th>
                                    <th className="w-1">Tax</th>
                                    <th className="w-1">Total</th>
                                </tr>
                                </thead>
                                <tbody>

                                {items.map((item: any) => {
                                    return (
                                        <tr className="align-top" key={item.id}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                <AsyncSelect
                                                    isMulti={false}
                                                    placeholder="Type at least 2 characters to search..."
                                                    name="product_id"
                                                    loadOptions={loadProducts}
                                                    onChange={({value}: any) => {
                                                        handleChangeField('product_id', value)
                                                    }}
                                                    className="flex-1"
                                                />
                                                <textarea name="description" className="form-textarea mt-4 flex-1"
                                                          placeholder="Enter Description"
                                                          defaultValue={item.description}
                                                          onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
                                            </td>
                                            <td>
                                                <input name="quantity" type="text" className="form-input min-w-[200px]"
                                                       defaultValue={item.quantity}/>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    placeholder="Price"
                                                    name="list_price"
                                                    min={0}
                                                    defaultValue={item.list_price}

                                                />
                                            </td>
                                            <td>
                                                <input name="list_price" type="text"
                                                       className="form-input min-w-[200px]"
                                                       defaultValue={item.list_price}/>
                                            </td>
                                            <td>
                                                <input name="amount" type="text" className="form-input min-w-[200px]"
                                                       value={item.amount}/>
                                            </td>
                                            <td>
                                                <input name="Discount" type="text" className="form-input min-w-[200px]"
                                                       value={item.discount}/>
                                            </td>
                                            <td>
                                                <input name="Tax" type="text" className="form-input min-w-[200px]"
                                                       value={item.tax}/>
                                            </td>
                                            <td>
                                                <button type="button" onClick={() => removeItem(item)}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between sm:flex-row flex-col mt-6 px-4">
                            <div className="sm:mb-0 mb-6">
                                <button type="button" className="btn btn-primary" onClick={() => addItem()}>
                                    Add Item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default InvoiceItemSection;
