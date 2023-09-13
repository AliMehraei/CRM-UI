import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import AsyncSelect from "react-select/async";
import {searchProducts} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import Api from "../../../../config/api";

const SalesItemsSection = () => {
    const formState = useSelector((state: any) => state.salesOrderForm);
    const [items, setItems] = useState<any>([]);
    const dispatch = useDispatch();
    const api = new Api();
    const handleChangeField = (field: string, value: any, id: string) => {
        const updatingItem = items.find((item: any) => item.id === id);
        const itemIndex = items.findIndex((item: any) => item.id === id);

        const updatedItem = {
            ...updatingItem,
            [field]: value,
        };
        const updatedAmount = {
            ...updatedItem,
            amount: parseInt(updatedItem.quantity ?? 0) * parseFloat(updatedItem.list_price ?? 0),
        };
        const updatedItems = {
            ...items,
            [itemIndex]: updatedAmount,
        };
        setItems(Object.values(updatedItems))
        dispatch(updateFormData({items: updatedItems}));
    };
    const handleChangeProduct = async (value: any, id: string) => {
        const res = await api.fetchSingleProduct(value);
        if (res.status !== 200)
            return;
        const product = res.data.data.product;
        const updatingItem = items.find((item: any) => item.id === id);
        const itemIndex = items.findIndex((item: any) => item.id === id);

        const updatedItem = {
            ...updatingItem,
            product_id: value,
            list_price: product.unit_price
        };
        const updatedAmount = {
            ...updatedItem,
            amount: parseInt(updatedItem.quantity ?? 0) * parseFloat(updatedItem.list_price ?? 0),
        };
        const updatedItems = {
            ...items,
            [itemIndex]: updatedAmount,
        };
        setItems(Object.values(updatedItems))
        dispatch(updateFormData({items: updatedItems}));
    }


    const addItem = () => {
        let maxId: number;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;
        let remainingItems = [...items, {
            id: maxId + 1, amount: 0
        }];

        setItems(remainingItems);
        dispatch(updateFormData({items: remainingItems}));

    };

    const removeItem = (item: any = null) => {
        const remainingItems = items.filter((d: any) => d.id != item.id);
        setItems(remainingItems);
        dispatch(updateFormData({items: remainingItems}));
    };

    useEffect(() => {
        setItems(Object.values(formState.items));
    }, []);


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className=" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ">
                <div key="Quote Items" className="">
                    <div className="text-lg">
                        Ordered Items
                        <RequiredComponent/> :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x-auto	w-11/12">
                            <table className="table-auto w-5">
                                <thead>
                                <tr>
                                    <th className="w-1">Product Name</th>
                                    <th className="w-1">Quantity</th>
                                    <th className="w-1">Customer Part ID</th>
                                    <th className="w-1">List Price</th>
                                    <th className="w-1">Date Code</th>
                                    <th className="w-1">Amount</th>
                                    <th className="w-1">Requested Delivery Date</th>
                                    <th className="w-1">Estimated Delivery Date</th>

                                </tr>
                                </thead>
                                <tbody>

                                {items.map((item: any) => (
                                    <tr className="align-top" key={item.id}>
                                        <td>
                                            <AsyncSelect isMulti={false} id="product_id" name="product_id"
                                                         placeholder="Type at least 2 characters to search..."
                                                         loadOptions={searchProducts}
                                                         onChange={({value}: any) => {
                                                             // handleChangeField('product_id', value, item.id)
                                                             handleChangeProduct(value, item.id);
                                                         }}
                                                         defaultValue={item.product ? {
                                                             value: item.product?.id,
                                                             label: (
                                                                 <div key={item.product?.id}
                                                                      className="flex items-center">
                                                                     <div>
                                                                         <div
                                                                             className="text-sm font-bold">{item.product?.product_name}</div>
                                                                     </div>
                                                                 </div>
                                                             ),
                                                         } : null}
                                                         className="flex-1  min-w-[200px]"/>
                                            <textarea
                                                name="description"
                                                className="form-textarea mt-4" placeholder="Enter Description"
                                                onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                defaultValue={item.description}
                                            ></textarea>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-input w-32"
                                                placeholder="Quantity"
                                                name="quantity"
                                                min={0}
                                                onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                defaultValue={item.quantity}
                                            />
                                        </td>
                                        <td>
                                            <input name="customer_part_id" type="text"
                                                   className="form-input min-w-[200px]"
                                                   onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                   defaultValue={item.customer_part_id}
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
                                            <input name="date_code" type="text" className="form-input min-w-[200px]"
                                                   defaultValue={item.date_code}
                                                   onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                            />
                                        </td>

                                        <td>
                                            <input name="amount" type="text"
                                                   value={item.amount}
                                                   className="flex-1 form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                                   disabled
                                                   onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                            />
                                        </td>
                                        <td>
                                            <Flatpickr
                                                name="requested_delivery_date"
                                                options={{
                                                    dateFormat: 'Y-m-d',
                                                    position: 'auto left',
                                                    defaultDate: `${item.requested_delivery_date ? new Date(item.requested_delivery_date) : ''}`,
                                                }}
                                                placeholder='Y-m-d'
                                                className="form-input flex-1 min-w-[200px]"
                                                // value={formState.requested_delivery_date ? new Date(formState.requested_delivery_date) : ''}
                                                onChange={(_, dateString) => handleChangeField('requested_delivery_date', dateString, item.id)} // Update the field value on change
                                                defaultValue={item.requested_delivery_date}
                                            />
                                        </td>
                                        <td>
                                            <Flatpickr
                                                name="estimated_delivery_date"
                                                options={{
                                                    dateFormat: 'Y-m-d',
                                                    position: 'auto left',
                                                    defaultDate: `${item.estimated_delivery_date ? new Date(item.estimated_delivery_date) : ''}`,
                                                }}
                                                placeholder='Y-m-d'
                                                className="form-input flex-1 min-w-[200px]"
                                                // value={formState.estimated_delivery_date ? new Date(formState.estimated_delivery_date) : ''}
                                                onChange={(_, dateString) => handleChangeField('estimated_delivery_date', dateString, item.id)} // Update the field value on change
                                                defaultValue={item.estimated_delivery_date}
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
                                ))}
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

export default SalesItemsSection;
