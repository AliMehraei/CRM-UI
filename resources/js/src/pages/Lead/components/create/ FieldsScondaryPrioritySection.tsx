import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { Currencies } from "../../../../components/Functions/CommonFunctions";

const FieldsScondaryPrioritySection = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({ query: query });

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Fields with Secondary Priority': {
            'No. of Employees': (
                <input
                    id="no_of_employees"
                    name="no_of_employees"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Lead Reference': (
                <input
                    id="lead_reference"
                    name="lead_reference"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


        },
        '': {
            'Currency': (
                <Select
                    options={Currencies}
                    name="currency"
                    id="currency"
                    onChange={({ value }: any) => {
                        handleChangeField('currency', value)
                    }}
                    className="flex-1"
                />
            ),
            'Exchange Rate': (
                <input id="exchange_rate"
                    name="exchange_rate" type="text"
                    value="1"
                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                    disabled
                />
            ),
        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>
    )

}

export default FieldsScondaryPrioritySection;
