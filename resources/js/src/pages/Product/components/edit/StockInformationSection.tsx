import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { handleUploadFile, Currencies, PortalAccess } from "../../../../components/Functions/CommonFunctions";

const StockInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };




    const fields = {
        'Stock Information': {


            'Quantity in Stock': (
                <input
                    id="quantity_in_stock"
                    name="quantity_in_stock"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.quantity_in_stock}
                />
            ),


        },
        '': {
            'Quantity Ordered': (
                <input
                    id="quantity_ordered"
                    name="quantity_ordered"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.quantity_ordered}
                />
            ),
            'Quantity in Demand': (
                <input
                    id="quantity_in_demand"
                    name="quantity_in_demand"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.quantity_in_demand}
                />
            ),
        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default StockInformationSection;
