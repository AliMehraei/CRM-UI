import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";

const ContactInformationSection = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Contact Information': {
            'First Name': (<input
                id="first_name"
                name="first_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.first_name}
            />),

            'Phone': (
                <input
                    id="phone"
                    required
                    name="phone"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.phone}
                />
            ),
            
            'email': (<input
                id="email"
                required
                name="email"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.email}
            />),
            'linkedin': (<input
                id="linkedin"
                name="linkedin"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.linkedin}
            />),

        },
        '': {
            'Last Name': (<input
                id="last_name"
                name="last_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.last_name}
            />),

            
            'Mobile':
                <input
                    id="mobile"
                    name="mobile"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.mobile}
                />,
            'Website':
            <input
                id="website"
                name="website"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.website}
            />,

        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
    
}

export default ContactInformationSection;
