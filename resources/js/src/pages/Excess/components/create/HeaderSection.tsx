import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies,
    searchAccounts, searchContacts,
    searchOwners
} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/excessFormSlice";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.excessForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const ExcessSources = [
        {value: 'none', label: '-None-'},
        {value: 'email', label: 'Email'},
        {value: 'portal', label: 'Portal'},

    ];

    const fields = {
        'Header': {
            'Excess Image':
                <ImageUploadComponent
                    id={'image'}
                    modelName="excess"
                    formState={formState}
                    formAttribute={'image'}
                    updateFormdata={updateFormData}
                />
            ,
            'Account Name': <AsyncSelect
                defaultOptions={true} isMulti={false} id="account_id" name="account_id"
                required
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                }}
                className="flex-1"/>,
            'Contact': <AsyncSelect
                defaultOptions={true} isMulti={false} id="contact_id" name="contact_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchContacts}
                onChange={({value}: any) => {
                    handleChangeField('contact_id', value)
                }}
                className="flex-1"/>,
            'Email': <input id="email" type="text" name="email"
                            className="form-input flex-1 "
                            onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Currency': <Select options={Currencies}
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                className="flex-1"/>,
            'Portal Excess Id': <input id="portal_excess_id" type="text" name="portal_excess_id"
                                       className="form-input flex-1 "
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

        },
        '': {
            'Excess Owner': <AsyncSelect
                defaultOptions={true} isMulti={false} id="owner_id" name="owner_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('owner_id', value)
                }}
                className="flex-1"/>,
            'Excess File':
                <FileUploadComponent
                    id={'excess_file'}
                    modelName="excess"
                    formState={formState}
                    formAttribute={'excess_file'}
                    updateFormdata={updateFormData}
                />
            ,

            'Excess Source': <Select name="excess_source" id="excess_source" options={ExcessSources}
                                     onChange={({value}: any) => {
                                         handleChangeField('excess_source', value)
                                     }}
                                     className="flex-1"/>,
            'Secondary Email': <input id="secondary_email" type="text" name="secondary_email"
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Email Opt Out': <input
                id="email_opt_out"
                type="checkbox"
                name="email_opt_out"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,
        }

    }


    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)

}

export default HeaderSection;
