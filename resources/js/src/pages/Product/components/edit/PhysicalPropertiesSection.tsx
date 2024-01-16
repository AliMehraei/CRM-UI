import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {ProductPackageOptions} from "../../../../components/Options/SelectOptions";

const PhysicalPropertiesSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Physical Properties': {
            'Package': (
                <Select
                    options={ProductPackageOptions}
                    name="package"
                    id="package"
                    onChange={({value}: any) => {
                        handleChangeField('package', value)
                    }}
                    className="flex-1"
                    defaultValue={ProductPackageOptions.find((title) => title.value == formState.package)}
                />
            ),

            'Case/Package': (
                <input
                    id="case_package"
                    name="case_package"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.case_package}
                />
            ),
            'Packaging': (
                <input
                    id="packaging"
                    name="packaging"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.packaging}
                />
            ),
            'Number of Pins': (
                <input
                    id="number_of_pins"
                    name="number_of_pins"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.number_of_pins}
                />
            ),


        },
        '': {

            'Weight': (
                <input
                    id="weight"
                    name="weight"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.weight}
                />
            ),
            'Case Code (Imperial)': (
                <input
                    id="case_code_imperial"
                    name="case_code_imperial"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.case_code_imperial}
                />
            ),
            'Case Code (Metric)': (
                <input
                    id="case_code_metric"
                    name="case_code_metric"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.case_code_metric}
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
