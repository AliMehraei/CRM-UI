import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/callFormSlice";
import Select from "react-select";

const CallInformationSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const CallableList: any = [];

    const RelatableList: any = [];

    const fields = {
        'Call Information': {
            'Call To': <div className="flex">
                <Select id="callable"
                        name="callable"
                        onChange={({value}: any) => {
                            handleChangeField('callable', value)
                        }}
                        className="flex-none w-32 mr-2"
                        options={CallableList}
                />
                <input
                    id="callable_to"
                    required
                    name="callable_to"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            </div>,
            'Related To': <div className="flex">
                <Select id="relatable"
                        name="relatable"
                        onChange={({value}: any) => {
                            handleChangeField('relatable', value)
                        }}
                        className="flex-none w-32 mr-2"
                        options={RelatableList}
                />
                <input
                    id="relatable_to"
                    required
                    name="relatable_to"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            </div>,

        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}
export default CallInformationSection;
