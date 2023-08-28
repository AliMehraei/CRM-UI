import {useEffect, useState} from "react";
import AsyncSelect from "react-select/async";
import {searchProducts} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/invoiceFormSlice";
import PopoverComponent from "./PopoverComponent";

const InvoiceItemSection = () => {
    const formState = useSelector((state: any) => state.invoiceForm);
    const [summary, setSummary] = useState({
        subtotal: 0,
        discount: 0,
        tax: 0,
        adjustment: 0,
        grandTotal: 0,
    });

    const [items, setItems] = useState<any>([
        {
            id: 1,
            product_id: null,
            description: null,
            quantity: null,
            list_price: null,
            amount: null,
            discount: null,
            tax: null,
            total: null,
        },
    ]);
    const dispatch = useDispatch();
    const handleChangeField = (field: string, value: any, id: string) => {
        const updatedItem = {...items.find((item: any) => item.id === id)};
        updatedItem[field] = value;
        const amount = (parseFloat(updatedItem.quantity) || 0) * (parseFloat(updatedItem.list_price) || 0)
        const total = amount - ((parseFloat(updatedItem.discount) || 0) + (parseFloat(updatedItem.tax) || 0))
        updatedItem['amount'] = amount;
        updatedItem['total'] = total;

        updateItems(updatedItem);
    };
    const updateItems = (updatedItem: any) => {
        const updatedItems = items.map((item: any) =>
            item.id === updatedItem.id ? {...item, ...updatedItem} : item
        );
        setItems(updatedItems);
        dispatch(updateFormData({items: updatedItems}));
        updateSummary();
    };


    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, {
            id: maxId + 1,
            product_id: null,
            description: null,
            quantity: null,
            list_price: null,
            amount: null,
            discount: null,
            tax: null,
            total: null,
        }]);

    };

    const handleChangeSummary = (field: string, value: any) => {
        setSummary((prevSummary) => ({
            ...prevSummary,
            [field]: value,
        }));
        updateSummary()
    }

    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };

    const updateSummary = () => {
        const subtotal = items.reduce((total: number, item: any) =>
            total + (parseFloat(item.total) || 0), 0);

        const discount = summary.discount;

        const tax = summary.tax;

        const adjustment = items.reduce((total: number, item: any) =>
            total + (parseFloat(item.adjustment) || 0), 0);

        const grandTotal = subtotal - discount + tax + adjustment;

        setSummary({
            subtotal,
            discount,
            tax,
            adjustment,
            grandTotal,
        });
    };

    useEffect(() => {
        updateSummary();
    }, [items]);

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
                                                    loadOptions={searchProducts}
                                                    onChange={({value}: any) => {
                                                        handleChangeField('product_id', value, item.id)
                                                    }}
                                                    className="flex-1"
                                                />
                                                <textarea name="description" className="form-textarea mt-4 flex-1"
                                                          placeholder="Enter Description"
                                                          defaultValue={item.description}
                                                          onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}></textarea>
                                            </td>
                                            <td>
                                                <input name="quantity" type="text" className="form-input min-w-[200px]"
                                                       defaultValue={item.quantity}
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />

                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    placeholder="Price"
                                                    name="list_price"
                                                    min={0}
                                                    defaultValue={item.list_price}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input name="amount" type="number"
                                                       className="form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"
                                                       value={item.amount} disabled
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <div className="flex">
                                                    <input name="discount" type="number"
                                                           className="form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"
                                                           value={item.discount} disabled
                                                           onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                    />
                                                    <PopoverComponent item={item}
                                                                      handleChangeField={handleChangeField}
                                                                      field={"discount"}/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex">

                                                    <input name="tax" type="number"
                                                           className="form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"
                                                           value={item.tax} disabled
                                                           onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                    />
                                                    <PopoverComponent item={item}
                                                                      handleChangeField={handleChangeField}
                                                                      field={"tax"}/>
                                                </div>
                                            </td>
                                            <td>
                                                <input name="total" type="number"
                                                       className="form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"
                                                       defaultValue={item.total} disabled
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />

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
                            <div className="sm:w-2/5">
                                <div className="flex items-center justify-between">
                                    <div>Subtotal(€)</div>
                                    <input id="subtotal" name="subtotal" type="text" value={summary.subtotal}
                                           className="w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed"
                                           disabled/>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div>Discount(€)</div>
                                    <div className="flex">
                                        <input id="discount" name="discount" type="text" value={summary.discount}
                                               disabled
                                               className="w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b] cursor-text"
                                        />
                                        <PopoverComponent item={summary}
                                                          handleChangeField={handleChangeSummary}
                                                          field={"discount"}/>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div>Tax(€)</div>
                                    <div className="flex">
                                        <input id="tax" name="tax" type="text" value={summary.tax} disabled
                                               className="w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"
                                        />
                                        <PopoverComponent item={summary}
                                                          handleChangeField={handleChangeSummary}
                                                          field={"tax"}/>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div>Adjustment(€)</div>
                                    <input id="adjustment" name="adjustment" type="text" value={summary.adjustment}
                                           className="w-64 form-input "
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-4 font-semibold">
                                    <div className="flex-1">Grand Total(€)</div>
                                    <input id="approved_by" name="approved_by_id" type="text" value={summary.grandTotal}
                                           className="w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                           disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default InvoiceItemSection;
