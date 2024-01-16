import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";

const Unused = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.accountForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Unused': {
            'Purchasing Volume Current':
                <input
                    id="purchasing_volume_current"
                    name="purchasing_volume_current"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.purchasing_volume_current}

                />,
        },
        '': {
            'Annual Revenue':
                <input
                    id="annual_revenue"
                    name="annual_revenue"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.annual_revenue}

                />,

        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>
        </div>
    </>)
}

export default Unused;
