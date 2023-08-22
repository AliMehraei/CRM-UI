import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {Currencies, handleUploadFile, loadAccounts, loadOwners} from "../../../../components/Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/accountFormSlice";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const QuoteChances = [
        {value: 'none', label: '-None-'},
        {value: 'high', label: 'High'},
        {value: 'unknown', label: 'Unknown'},
        {value: 'low', label: 'Low'},

    ];

    const ExcessSources = [
        {value: 'none', label: '-None-'},
        {value: 'email', label: 'Email'},
        {value: 'portal', label: 'Portal'},

    ];
    const handleQuoteStageChange = () => {

    };
    const fields = {
        'Header': {
            'Excess Image': <input
                id="excess_image"
                key="excess_image"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                accept="image/*"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({field: 'image', value: `${response?.data.data.file_url}`}));
                })}
                name="excess_image"
            />,
            'Account Name': <AsyncSelect isMulti={false} id="account_id" name="account_id"
                                         required
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadAccounts}
                                         onChange={({value}: any) => {
                                             handleChangeField('parent_account_id', value)
                                         }}
                                         className="flex-1"/>,
            'Contact': <AsyncSelect isMulti={false} id="contact_id" name="contact_id"
                                    placeholder="Type at least 2 characters to search..."
                                    loadOptions={loadOwners}
                                    onChange={({value}: any) => {
                                        handleChangeField('parent_account_id', value)
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
            'Excess Owner': <AsyncSelect isMulti={false} id="excess_owner" name="excess_owner"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={loadOwners}
                                         onChange={({value}: any) => {
                                             handleChangeField('excess_owner', value)
                                         }}
                                         className="flex-1"/>,
            'Excess File': <input
                id="excess_file"
                key="excess_file"
                type="file"
                className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                onChange={(e) => handleUploadFile(e, (response: any) => {
                    dispatch(updateFormData({field: 'excess_file', value: `${response?.data.data.file_url}`}));
                })}
                name="excess_file"
            />,

            'Excess Source': <Select options={ExcessSources}
                                     onChange={({value}: any) => {
                                         handleChangeField('currency', value)
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
