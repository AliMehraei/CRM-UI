import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";

const PurchaseItemsSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Purchase Items': {
            
        },
        '': {
            
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

export default PurchaseItemsSection;
