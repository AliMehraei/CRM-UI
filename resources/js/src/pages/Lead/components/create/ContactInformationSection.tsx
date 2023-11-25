import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {FirstNameTitles} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";

const ContactInformationSection = () => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const JobDescription = [
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
                            onChange={({value}: any) => {
                                handleChangeField('prefix_first_name', value)
                            }}
                            className="flex-none w-32 mr-2"
                            options={FirstNameTitles}
                    />
                    <input
                        id="first_name"
                        required
                        name="first_name"
                        className="form-input flex-1 "
                        onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
                    className="flex-1"
                    defaultValue={{value: 'not_yet_clear', label: 'Not Yet Clear'}}
                />
            ),
            'Phone': (
                <input
                    id="phone"
                    name="phone"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),

            'Mobile':
                <input
                    id="mobile"
                    name="mobile"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />,
            'fax': (<input
                id="fax"
                name="fax"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />),

        },
        '': {
            'Last Name': (<input
                id="last_name"
                required
                name="last_name"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />),
            'Email': (<input
                id="email"
                name="email"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />),


            'Contact LinkedIn':
                <input
                    id="linkedin_contact"
                    name="linkedin_contact"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />,
            'Company LinkedIn':
                <input
                    id="linkedin_contact"
                    name="linkedin_company"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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
