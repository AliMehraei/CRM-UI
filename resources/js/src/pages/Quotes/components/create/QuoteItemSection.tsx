import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import AsyncSelect from "react-select/async";
import {searchProducts} from "../../../../components/Functions/CommonFunctions";

const QuoteItemSection = () => {
    const formState = useSelector((state: any) => state.quoteForm);
    const [summary, setSummary] = useState({
        total: 0,
    });
    const [items, setItems] = useState<any>([
        {
            id: 0,
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

    const handleChangeField = (field: string, value: any, id: string) => {
        const updatedItem = {
            ...formState.items[id],
            [field]: value,
        };
        const amount = (parseFloat(updatedItem.quantity) || 0) * (parseFloat(updatedItem.list_price) || 0)
        updatedItem['amount'] = amount;

        const updatedItems = {
            ...formState.items,
            [id]: updatedItem,
        };

        setItems(Object.values(updatedItems))
        dispatch(updateFormData({items: updatedItems}));
    };


    const addItem = () => {
        let maxId: number;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;
        let remainingItems = [...items, {
            id: maxId + 1, name: '',
            part_id: '',
            quantity: 1,
            SPQ: '',
            list_price: '',
            lead_time: '',
            date_code: '',
            comment: '',
            amount: 0,
        }];

        setItems(remainingItems);
        dispatch(updateFormData({items: remainingItems}));

    };

    useEffect(() => {

        dispatch(updateFormData({summary: summary}));

    }, [summary]);

    const removeItem = (item: any = null) => {
        const remainingItems = items.filter((d: any) => d.id != item.id);
        setItems(remainingItems);
        dispatch(updateFormData({items: remainingItems}));
    };

    const updateSummary = () => {
        const total = items.reduce((amount: number, item: any) =>
            amount + (parseFloat(item.amount) || 0), 0);


        setSummary({
            total,
        });
    };

    useEffect(() => {
        updateSummary();
    }, [items]);

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className=" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ">
                <div key="Quote Items" className="">
                    <div className="text-lg">
                        Quote Items <RequiredComponent/> :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x-auto	w-11/12">
                            <table className="table-auto w-5">
                                <thead>
                                <tr>
                                    <th className="w-1">Product Name</th>
                                    <th className="w-1">Customer Part ID</th>
                                    <th className="w-1">Quantity</th>
                                    <th className="w-1">SPQ</th>
                                    <th className="w-1">List Price</th>
                                    <th className="w-1">Lead Time</th>
                                    <th className="w-1">Date Code</th>
                                    <th className="w-1">Comment</th>
                                    <th className="w-1">Amount</th>
                                </tr>
                                </thead>
                                <tbody>

                                {items.map((item: any) => {
                                    return (
                                        <tr className="align-top" key={item.id}>
                                            <td>
                                                <AsyncSelect
                    defaultOptions={false} isMulti={false} id="product_id" name="product_id"
                                                             placeholder="Type at least 2 characters to search..."
                                                             loadOptions={searchProducts}
                                                             onChange={({value}: any) => {
                                                                 handleChangeField('product_id', value, item.id)
                                                             }}
                                                             className="flex-1  min-w-[200px]"

                                                />,

                                                <textarea
                                                    name="description"
                                                    className="form-textarea mt-4" placeholder="Enter Description"
                                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                    defaultValue={item.description}></textarea>
                                            </td>
                                            <td>
                                                <input name="customer_part_id" type="text"
                                                       className="form-input min-w-[200px]"
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                       defaultValue={item.part_id}/>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    placeholder="Quantity"
                                                    name="quantity"
                                                    min={0}
                                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                    defaultValue={item.quantity}
                                                />
                                            </td>
                                            <td>
                                                <input name="spq" type="text" className="form-input min-w-[200px]"
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                       defaultValue={item.spq}/>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    placeholder="Price"
                                                    name="list_price"
                                                    min={0}
                                                    defaultValue={item.list_price}
                                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input name="lead_time" type="text" className="form-input min-w-[200px]"
                                                       defaultValue={item.lead_time}
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input name="date_code" type="text" className="form-input min-w-[200px]"
                                                       defaultValue={item.date_code}
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input name="comment" type="text" className="form-input min-w-[200px]"
                                                       defaultValue={item.comment}
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input disabled name="amount" type="text"
                                                       className="form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                                       value={item.amount}
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
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
                                    <div>Total(€)</div>
                                    <input id="total" name="total" type="text" value={summary.total}
                                           className="w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed"
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

export default QuoteItemSection;
