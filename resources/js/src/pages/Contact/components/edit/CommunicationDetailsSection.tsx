import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/contactFormSlice";

const AddressInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.contactForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'Communication Details / History': {
            'Description': <textarea id="description" rows={3} name="description"
                                     className="form-textarea flex-1"
                                     placeholder=""
                                     defaultValue={formState.description}
                                     onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            ></textarea>,
            'LinkedIn Communication': <textarea id="linkedin_communication" rows={3} name="linkedin_communication"
                                                className="form-textarea flex-1"
                                                placeholder=""
                                                defaultValue={formState.linkedin_communication}
                                                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>,
        },
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default AddressInformationSection;
