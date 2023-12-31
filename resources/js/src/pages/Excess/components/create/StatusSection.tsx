import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { Currencies, handleUploadFile, searchAccounts, searchOwners } from "../../../../components/Functions/CommonFunctions";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../../store/excessFormSlice";
import {ExcessTypes} from "../../../../components/Options/SelectOptions";

const StatusSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const fields = {
        'Status': {
            'Excess Type': <Select options={ExcessTypes}
                name="excess_type"
                id="excess_type"
                onChange={({ value }: any) => {
                    handleChangeField('excess_type', value)
                }}
                className="flex-1" />,
        },
        '': {
            'Excess Name': <input id="excess_name" type="text" name="excess_name"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)} />,

        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />

        </div>
    </>)

}

export default StatusSection;
