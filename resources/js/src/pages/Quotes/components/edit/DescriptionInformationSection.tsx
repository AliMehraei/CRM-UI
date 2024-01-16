import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";

const DescriptionInformationSection = () => {
    const formState = useSelector((state: any) => state.quoteForm);
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                <div key="Terms and Conditions" className="">
                    <div className="text-lg">Description Information :</div>
                    <div key="description" className="mt-4 flex items-center">
                        <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                            Description
                        </label>
                        <textarea id="description" rows={3} name="description"
                                  className="form-textarea flex-1"
                                  placeholder=""
                                  onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                  defaultValue={formState.description}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default DescriptionInformationSection
