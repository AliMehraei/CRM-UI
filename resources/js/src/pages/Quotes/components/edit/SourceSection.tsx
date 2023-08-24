import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {loadAvailability, loadVendor} from "../../../../components/Functions/CommonFunctions";

const SourceSection = () => {
    const formState = useSelector((state: any) => state.quoteform);
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Source': {
            'Vendor': <AsyncSelect isMulti={false} id="vendor_id" name="vendor_id"
                                   placeholder="Type at least 2 characters to search..."
                                   loadOptions={loadVendor}
                                   onChange={({value}: any) => {
                                       handleChangeField('product_id', value)
                                   }}
                                   defaultValue={{
                                       value: formState.vendor?.id,
                                       label: (
                                           <div key={formState.vendor?.id} className="flex items-center">
                                               <div
                                                   className="text-sm font-bold">{formState.vendor?.vendor_name}</div>
                                           </div>
                                       ),
                                   }}
                                   className="flex-1"/>,

            'Availability No': <input id="availability_no" name="availability_no" className="form-input flex-1 "
                                      defaultValue={formState.availability_no}
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Availability Date': <Flatpickr name='availability_date'
                                            options={{
                                                dateFormat: 'd-m-Y',
                                                defaultDate: `${formState.availability_date ? new Date(formState.availability_date) : ''}`,
                                            }}
                                            defaultValue={formState.availability_date}
                                            className="form-input flex-1"
                                            placeholder="MM DD YYYY"
                                            onChange={(dates) => handleChangeField('availability_date', dates[0])}/>,

            'Availability': <AsyncSelect isMulti={false} id="availability_id" name="availability_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAvailability}
                                         onChange={({value}: any) => {
                                             handleChangeField('availability_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.availability?.id,
                                             label: (
                                                 <div key={formState.availability?.id} className="flex items-center">
                                                     <div
                                                         className="text-sm font-bold">{formState.availability?.availability_name}</div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,

        },
        '': {

            'Cost': <input id="cost" name="cost" className="form-input flex-1 "
                           defaultValue={formState.cost}
                           onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'LT vendor': <input id="lt_vendor" name="lt_vendor" className="form-input flex-1 "
                                defaultValue={formState.lt_vendor}
                                onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'SPQ': <input id="spq" name="spq" className="form-input flex-1 "
                          defaultValue={formState.spq}
                          onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

            'Quantity in Stock': <input id="quantity_in_stock" name="quantity_in_stock"
                                        defaultValue={formState.quantity_in_stock}
                                        className="form-input flex-1 "
                                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

        }
    }
    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}
export default SourceSection
