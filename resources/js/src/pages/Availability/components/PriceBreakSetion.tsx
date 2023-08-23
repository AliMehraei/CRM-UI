import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import {useState} from "react";

const PriceBreakSection = () => {
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
                        <div className="overflow-x">
                            <table className="table-auto overflow-scroll w-full">
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

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-input w-32"

                                                    min={0}
                                                    defaultValue={item.d_1}
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
