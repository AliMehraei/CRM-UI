import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const DescriptionInformationSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };





    const fields = {
        'Description Information': {


            'Description': (
                <textarea
                id="description"
                rows={2}
                name="description"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Octopart Short Description': (
                <textarea
                id="octopart_short_description"
                rows={2}
                name="octopart_short_description"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),


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

export default DescriptionInformationSection;
