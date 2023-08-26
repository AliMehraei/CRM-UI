import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/availabilityFormSlice";

const PriceBreakSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.availabilityForm);

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

    const handleChangeField = (field: string, value: any, id: string) => {
        const updatedItem = {
            ...formState.items[id],
            [field]: value,
        };

        const updatedItems = {
            ...formState.items,
            [id]: updatedItem,
        };

        dispatch(updateFormData({items: updatedItems}));
    };

    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, {
            id: maxId + 1, name: '',
            "d_3000": '',
            "d_1000": '',
            "d_500": '',
            "d_250": '',
            "d_100": '',
            "d_25": '',
            "d_10": '',
            "d_1": '',
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
                        Price Break <RequiredComponent/> :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x-auto	w-11/12">
                            <table className="table-auto">
                                <thead>
                                <tr>
                                    <th className="w-1">3000 (€)</th>
                                    <th className="w-1">1000 (€)</th>
                                    <th className="w-1">500 (€)</th>
                                    <th className="w-1">250 (€)</th>
                                    <th className="w-1">100 (€)</th>
                                    <th className="w-1">25 (€)</th>
                                    <th className="w-1">10 (€)</th>
                                    <th className="w-1">1 (€)</th>
                                </tr>
                                </thead>
                                <tbody>

                                {items.map((item: any) => {
                                    return (
                                        <tr className="align-top" key={item.id}>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    name="d_1"
                                                    min={0}
                                                    defaultValue={item.d_1}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    name="d_10"
                                                    min={0}
                                                    defaultValue={item.d_10}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_25"
                                                    defaultValue={item.d_25}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_100"
                                                    defaultValue={item.d_100}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_250"
                                                    defaultValue={item.d_250}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_500"
                                                    defaultValue={item.d_500}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_1000"
                                                    defaultValue={item.d_1000}
                                                    onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"
                                                    min={0}
                                                    name="d_3000"
                                                    defaultValue={item.d_3000}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default PriceBreakSection;
