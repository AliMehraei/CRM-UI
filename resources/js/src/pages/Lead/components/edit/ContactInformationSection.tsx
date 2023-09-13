import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile,FirstNameTitles} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";

const ContactInformationSection = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'lead_name';

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
    const JobDescription=[
        {value: 'none', label: '-None-'},
        {value: 'buyer', label: 'Buyer'},
        {value: 'operative_buyer', label: 'Operative Buyer'},
        {value: 'chat', label: 'Chat'},
        {value: 'messe', label: 'Messe'},
        {value: 'not_yet_clear', label: 'Not Yet Clear'},
    ];

    const fields = {
        'Contact Information': {
            'First Name': (
                <div className="flex">
                    <Select id="prefix_first_name"
                        name="prefix_first_name"
                        onChange={({ value }: any) => {
                            handleChangeField('prefix_first_name', value)
                        }}
                        className="flex-none w-32 mr-2"
                        options={FirstNameTitles}
                        defaultValue={FirstNameTitles.find((title) => title.value == formState.prefix_first_name)}

                    />
                    <input
                        id="first_name"
                        required
                        name="first_name"
                        className="form-input flex-1 "
                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                        defaultValue={formState.first_name}
                    />
                </div>
            
            ),
            'Job Description': (
                <Select 
                options={JobDescription} 
                name="job_description" 
                id="job_description"       
                onChange={({value}: any) => {
                    handleChangeField('job_description', value)
                }} 
                defaultValue={JobDescription.find((title) => title.value == formState.job_description)}
                className="flex-1"
                />
            ),
            'Phone': (
                <input
                    id="phone"
                    name="phone"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.phone}
                />
            ),
            
            'Mobile':
            <input
                id="mobile"
                name="mobile"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.mobile}
            />,
            'fax': (<input
                id="fax"
                name="fax"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.fax}
            />),

        },
        '': {
            'Last Name': (<input
                id="last_name"
                required
                name="last_name"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.last_name}
            />),
            'Email': (<input
                id="email"
                name="email"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.email}
            />),
            
           
            'Contact LinkedIn':
            <input
                id="linkedin_contact"
                name="linkedin_contact"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.linkedin_contact}
            />,
            'Company LinkedIn':
            <input
                id="linkedin_contact"
                name="linkedin_company"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.linkedin_company}
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
