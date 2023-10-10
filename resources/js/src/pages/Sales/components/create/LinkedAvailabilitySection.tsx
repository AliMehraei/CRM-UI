import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchAvailability
} from "../../../../components/Functions/CommonFunctions";

const LinkedAvailabilitySection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const handleChangeAvailability = async (value: string) => {
        const response = await api_instance.fetchSingleAvailability(value);
        if (response.status != 200)
            return;
        const availability = response.data.data.availability;
        dispatch(updateFormData({['availability']: availability}));
    }

    const fields = {
        'Linked Availability': {


            'Availability Name': (
                <AsyncSelect
                    isMulti={false}
                    id="availability_id"
                    placeholder="Type at least 2 characters to search..."
                    name="availability_id"
                    loadOptions={searchAvailability}
                    onChange={({value}: any) => {
                        handleChangeField('availability_id', value)
                        handleChangeAvailability(value);
                    }}
                    className="flex-1"
                />
            ),

            'Availability No': (
                <input
                    id="availability_no"
                    name="availability_no"
                    className="form-input flex-1 disabled:pointer-events-none bg-[#eee] "
                    disabled
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.availability?.availability_no}
                />
            ),
            'Availability Cost': (
                <input
                    type="number"
                    id="availability_cost"
                    name="availability_cost"
                    className="form-input flex-1  disabled:pointer-events-none bg-[#eee]"
                    disabled
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.availability?.cost}
                />
            ),
        },
        '': {
            'Availability Quantity': (
                <input
                    type="number"
                    disabled
                    id="availability_quantity"
                    name="availability_quantity"
                    className="form-input flex-1 disabled:pointer-events-none bg-[#eee]"
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.availability?.quantity}
                />
            ),

            'Availability LT': (
                <input
                    id="availability_lt"
                    name="availability_lt"
                    disabled
                    className="form-input flex-1 disabled:pointer-events-none bg-[#eee] "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.availability?.lead_time}
                />
            ),
            'Availability DC': (
                <input
                    disabled
                    id="availability_dc"
                    name="availability_dc"
                    className="form-input flex-1 disabled:pointer-events-none bg-[#eee]"
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.availability?.date_code}
                />
            ),


        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default LinkedAvailabilitySection;
