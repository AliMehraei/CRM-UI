import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import AsyncSelect from "react-select/async";
import {searchManufacturer, searchProducts, searchRFQ} from "../../../../components/Functions/CommonFunctions";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";

const RequestedProductsSection = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const [items, setItems] = useState<any>([
        {
            id: 0,
            rfq_id : '',
            alt_product : '',
            comment: '',
            lead_time_demand: '',
            manufacturer_id : '',
            product_id : '',
            quantity : '',
            rfq_owner_name: '',


        },
    ]);
    const dispatch = useDispatch();

    const handleChangeField = (field: string, value: any, id: string) => {
        const updatedItem = {
            ...formState.requested_products[id],
            [field]: value,
        };

        const updatedItems = {
            ...formState.requested_products,
            [id]: updatedItem,
        };

        setItems(Object.values(updatedItems))
        dispatch(updateFormData({requested_products: updatedItems}));
    };


    const addItem = () => {
        let maxId: number;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;
        let remainingItems = [...items, {
            id: maxId + 1,
        }];

        setItems(remainingItems);
        dispatch(updateFormData({requested_products: remainingItems}));

    };

    const LeadTimeDemands = [
        {label: '-None-', value: 'none'},
        {label: 'Stock', value: 'stock'},
        {label: 'Lead Time', value: 'lead_time'},

    ];

    const removeItem = (item: any = null) => {
        const remainingItems = items.filter((d: any) => d.id != item.id);
        setItems(remainingItems);
        dispatch(updateFormData({requested_products: remainingItems}));
    };
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className=" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ">
                <div key="Requested Products Items" className="">
                    <div className="text-lg">
                        Requested Products :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x-auto	w-11/12">
                            <table className="table-auto w-5">
                                <thead>
                                <tr>
                                    <th className="w-1">Source RFQ <RequiredComponent/></th>
                                    <th className="w-1">RFQ Owner Name</th>
                                    <th className="w-1">Product <RequiredComponent/></th>
                                    <th className="w-1">Is Alt For This Product</th>
                                    <th className="w-1">Manufacturer <RequiredComponent/></th>
                                    <th className="w-1">Quantity <RequiredComponent/></th>
                                    <th className="w-1">Lead Time Demand <RequiredComponent/></th>
                                    <th className="w-1">Comments</th>
                                </tr>
                                </thead>
                                <tbody>

                                {items.map((item: any) => {
                                    return (
                                        <tr className="align-top" key={item.id}>
                                            <td>
                                                <AsyncSelect
                    defaultOptions={true} isMulti={false} id="rfq_id" name="rfq_id"
                                                             placeholder="Type at least 2 characters to search..."
                                                             loadOptions={searchRFQ}
                                                             onChange={({value}: any) => {
                                                                 handleChangeField('rfq_id', value, item.id)
                                                             }}
                                                                menuPortalTarget={document.body}
                                                             className="flex-1  min-w-[200px]"
                                                />
                                            </td>
                                            <td>
                                                <input name="rfq_owner_name" type="text"
                                                       className="form-input min-w-[200px]"
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                       defaultValue={item.rfq_owner_name}/>
                                            </td>
                                            <td>
                                                <AsyncSelect
                    defaultOptions={true} isMulti={false} id="product_id" name="product_id"
                                                             placeholder="Type at least 2 characters to search..."
                                                             loadOptions={searchProducts}
                                                             menuPortalTarget={document.body}
                                                             onChange={({value}: any) => {
                                                                 handleChangeField('product_id', value, item.id)
                                                             }}
                                                             className="flex-1  min-w-[200px]"
                                                />
                                            </td>
                                            <td>
                                                <input name="alt_product" type="text"
                                                       className="form-input min-w-[200px]"
                                                       onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                       defaultValue={item.alt_product}/>
                                            </td>
                                            <td>
                                                <AsyncSelect
                    defaultOptions={true} isMulti={false} id="manufacturer_id" name="manufacturer_id"
                                                             placeholder="Type at least 2 characters to search..."
                                                             loadOptions={searchManufacturer}
                                                             onChange={({value}: any) => {
                                                                 handleChangeField('manufacturer_id', value, item.id)
                                                             }}
                    menuPortalTarget={document.body}
                                                             className="flex-1  min-w-[200px]"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                   name="quantity"
                                                   id="quantity"
                                                   type="number"
                                                   className="form-input min-w-[200px]"
                                                   min={0}
                                                   onChange={(e:any) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                   defaultValue={item.quantity}
                                                />
                                            </td>
                                            <td>
                                                <Select options={LeadTimeDemands}
                                                        name="lead_time_demand"
                                                        id="lead_time_demand"
                                                        onChange={({value}: any) => {
                                                            handleChangeField('lead_time_demand', value, item.id)
                                                        }}
                                                        menuPlacement={"top"}
                                                        defaultValue={LeadTimeDemands.find((data) => data.value == formState.lead_time_demand)}
                                                        menuPortalTarget={document.body}
                                                        className="flex-1 min-w-[200px]"/>
                                            </td>
                                            <td>
                                                    <textarea name="comment" className="form-input min-w-[200px]"
                                                              defaultValue={item.date_code}
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

export default RequestedProductsSection;
