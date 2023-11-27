import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";

const AddressInformationSection = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };





    const fields = {
        'Address Information': {
            'Zip Code': (<input
                id="zip_code"
                name="zip_code"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.zip_code}
            />),

            'City': (
                <input
                    id="city"
                    name="city"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.city}
                />
            ),




        },
        '': {
            'State': (<input
                id="state"
                name="state"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.state}
            />),
            'Country': (<input
                id="country"
                name="country"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.country}
            />),

        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default AddressInformationSection;
