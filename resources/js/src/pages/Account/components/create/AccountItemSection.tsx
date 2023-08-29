import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/accountFormSlice";

const AccountItemSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.accountForm);

    const handleChangeField = (field: string, value: any, id: string) => {
        const updatedItem = {
            ...formState.items[id],
            [field]: value,
        };

        const updatedItems = {
            ...formState.items,
            [id]: updatedItem,
        };

        setItems(Object.values(updatedItems))
        dispatch(updateFormData({items: updatedItems}));
    };

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
            id: maxId + 1,
            f_q_1: '',
            f_q_2: '',
            f_q_3: '',
            f_q_4: '',

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
                        Forecast {new Date().getFullYear()} :
                    </div>

                    <div className="mt-8">
                        <div className="overflow-x">
                            <table className="table-auto overflow-scroll ">
                                <thead>
                                <tr>
                                    <th className="w-1">S.NO</th>
                                    <th className="w-1">Forecast Q1 (€)</th>
                                    <th className="w-1">Forecast Q2 (€)</th>
                                    <th className="w-1">Forecast Q3 (€)</th>
                                    <th className="w-1">Forecast Q4 (€)</th>
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
                                                <input name="f_q_1" type="text" className="form-input w-32"
                                                       defaultValue={item.part_id}
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />
                                            </td>
                                            <td>
                                                <input name="f_q_2" type="text" className="form-input w-32"
                                                       defaultValue={item.part_id}
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input name="f_q_3" type="text" className="form-input w-32"
                                                       defaultValue={item.part_id}
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}

                                                />
                                            </td>
                                            <td>
                                                <input name="f_q_4" type="text" className="form-input w-32"
                                                       defaultValue={item.part_id}
                                                       onChange={(e) => handleChangeField(e.target.name, e.target.value, item.id)}
                                                />

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

export default AccountItemSection;
