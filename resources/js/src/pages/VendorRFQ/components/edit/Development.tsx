import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorRfqFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const Development = () => {
    const formState = useSelector((state: any) => state.vendorRfqForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };


    const fields = {
        'Development': {
            'Requested Products JSON': (
                <textarea 
                id="requested_products" 
                rows={2} 
                name="requested_products"
                className="form-textarea flex-1"
                placeholder=""
                defaultValue={formState.requested_products}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
                
            ),
        },
        '': {
            'Is full': (
                <input
                    id="is_full"
                    type="checkbox"
                    name="is_full"
                    className="form-checkbox"
                    onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                    defaultChecked={formState.is_full}
                />
            ),
            
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
    
}

export default Development;
