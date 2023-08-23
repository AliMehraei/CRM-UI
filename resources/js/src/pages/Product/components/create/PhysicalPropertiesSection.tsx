import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";

const PhysicalPropertiesSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

  
    const packageOptions = [
        { label: '-None-', value: 'none' },
        { label: 'SMD', value: 'smd' },
        { label: 'THT', value: 'tht' },
        { label: 'Peripheral', value: 'peripheral' },
        { label: 'Other', value: 'other' },
    ];
   
    


    const fields = {
        'Product Information': {
            'Package': (
                <Select 
                options={packageOptions} 
                name="package" 
                id="package"       
                onChange={({value}: any) => {
                    handleChangeField('package', value)
                }} 
                className="flex-1"
                />
            ),
           
            'Case/Package': (
                <input
                id="case_package"
                name="case_package"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'Packaging': (
                <input
                id="packaging"
                name="packaging"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
            'Number of Pins': (
                <input
                id="number_of_pins"
                name="number_of_pins"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
               
                />
            ),
          
            
        },
        '': {
            
            'Weight': (
                <input
                    id="Weight"
                    name="Weight"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'Case Code (Imperial)': (
                <input
                    id="case_code_imperial"
                    name="case_code_imperial"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
            'Case Code (Metric)': (
                <input
                    id="case_code_metric"
                    name="case_code_metric"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    // defaultValue={formState.name}
                />
            ),
           
            
            
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

export default PhysicalPropertiesSection;
