import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/excessFormSlice";
import {ExcessTypes} from "../../../../components/Options/SelectOptions";

const StatusSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.excessForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Status': {
            'Excess Type': <Select options={ExcessTypes}
                                   name="excess_type"
                                   id="excess_type"
                                   onChange={({value}: any) => {
                                       handleChangeField('excess_type', value)
                                   }}
                                   defaultValue={ExcessTypes.find((data) => data.value == formState.excess_type)}

                                   className="flex-1"/>,
        },
        '': {
            'Excess Name': <input id="excess_name" type="text" name="excess_name"
                                  className="form-input flex-1 "
                                  defaultValue={formState.excess_name}
                                  onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default StatusSection;
