import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/invoiceFormSlice";

const TermsAndConditionsSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.invoiceForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                <div key="Terms and Conditions" className="">
                    <div className="text-lg">Terms and Conditions :</div>
                    <div key="terms_and_conditions" className="mt-4 flex items-center">
                        <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                            Terms and Conditions
                        </label>
                        <textarea id="terms_and_conditions" rows={3} name="terms_conditions"
                                  className="form-textarea flex-1"
                                  onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                                  value={formState.terms_conditions}
                                  placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default TermsAndConditionsSection