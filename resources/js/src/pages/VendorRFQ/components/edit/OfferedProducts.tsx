import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/vendorRfqFormSlice";
import AsyncSelect from "react-select/async";
import { searchManufacturer, searchProducts } from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";

const OfferedProductsSection = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const [items, setItems] = useState<any>([]);

    const handleChangeField = (field: string, value: any, id: string) => {
        const updatingItem = items.find((item: any) => item.id === id);
        const itemIndex = items.findIndex((item: any) => item.id === id);
        const updatedItem = {
            ...updatingItem,
            [field]: value,
        };
        const updatedItems = {
            ...items,
            [itemIndex]: updatedItem,
        };
        setItems(Object.values(updatedItems))
        dispatch(updateFormData({ offered_products: updatedItems }));
    };

    const addItem = () => {
        let maxId: number;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;
        let remainingItems = [...items, {
            id: maxId + 1
        }];

        setItems(remainingItems);
        dispatch(updateFormData({ offered_products: remainingItems }));

    };

    useEffect(() => {
        setItems(Object.values(formState.offered_products));
    }, []);

    const LeadTimeDemands = [
        { label: '-None-', value: 'none' },
        { label: 'Stock', value: 'stock' },
        { label: 'Lead Time', value: 'lead_time' },

    ];

    const removeItem = (item: any = null) => {
        const remainingItems = items.filter((d: any) => d.id != item.id);
        setItems(remainingItems);
        dispatch(updateFormData({ offered_products: remainingItems }));
    };

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className=" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ">
                <div key="Quote Items" className="">
                    <div className="text-lg">
                        Offered Products :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x-auto	w-11/12">
                            <table className="table-auto w-5">
                                <thead>
                                    <tr>
                                        <th className="w-1">Offered MPN</th>
                                        <th className="w-1">Offered Manufacturer</th>
                                        <th className="w-1">Offered Quantity</th>
                                        <th className="w-1">Offered Price (USD)</th>
                                        <th className="w-1">D/C</th>
                                        <th className="w-1">Offered Lead Time</th>
                                        <th className="w-1">Comments</th>
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
                                                        onChange={({ value }: any) => {
                                                            handleChangeField('product_id', value, item.id)
                                                        }}
                                                        menuPortalTarget={document.body}
                                                        defaultValue={{
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
                                                        }}
                                                        className="flex-1  min-w-[200px]"
                                                    />
                                                </td>
                                                <td>
                                                    <AsyncSelect
                    defaultOptions={true} isMulti={false} id="manufacturer_id" name="manufacturer_id"
                                                        placeholder="Type at least 2 characters to search..."
                                                        loadOptions={searchManufacturer}
                                                        onChange={({ value }: any) => {
                                                            handleChangeField('manufacturer_id', value, item.id)
                                                        }}
                                                        menuPortalTarget={document.body}
                                                        defaultValue={{
                                                            value: item.manufacturer?.id,
                                                            label: (
                                                                <div key={item.manufacturer?.id}
                                                                    className="flex items-center">
                                                                    <div>
                                                                        <div
                                                                            className="text-sm font-bold">{item.manufacturer?.name}</div>
                                                                    </div>
                                                                </div>
                                                            ),
                                                        }}
                                                        className="flex-1  min-w-[200px]"
                                                    />
                                                </td>


                                                <td>
                                                    <input name="quantity" type="text"
                                                        className="form-input min-w-[200px]"
                                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                        defaultValue={item.quantity} />
                                                </td>
                                                <td>
                                                    <input name="price" type="text"
                                                        className="form-input min-w-[200px]"
                                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                        defaultValue={item.price} />
                                                </td>
                                                <td>
                                                    <input name="dc" type="text"
                                                        className="form-input min-w-[200px]"
                                                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                        defaultValue={item.dc} />
                                                </td>
                                                <td>
                                                    <Select options={LeadTimeDemands}
                                                        name="offer_lead_time"
                                                        id="offer_lead_time"
                                                        onChange={({ value }: any) => {
                                                            handleChangeField('offer_lead_time', value, item.id)
                                                        }}
                                                        menuPlacement={"top"}
                                                        menuPortalTarget={document.body}
                                                        defaultValue={LeadTimeDemands.find((data) => data.value == item.offer_lead_time)}

                                                        className="flex-1 min-w-[200px]" />
                                                </td>
                                                <td>
                                                    <textarea name="comment" className="form-input min-w-[200px]"
                                                        defaultValue={item.comment}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default OfferedProductsSection;
