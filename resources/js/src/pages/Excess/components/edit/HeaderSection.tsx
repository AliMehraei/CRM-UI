import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies, getImageSource,
    handleUploadFile,
    searchAccounts,
    searchOwners
} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/excessFormSlice";
import ClearButtonComponent from "../../../../components/FormFields/ClearButtonComponent";

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
                <div className="">
                    <div className="flex">
                        <input
                            id="excess_image"
                            key="excess_image"
                            type="file"
                            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                            accept="image/*"
                            onChange={(e) => handleUploadFile(e, (response: any) => {
                                dispatch(updateFormData({'excess_image': `${response?.data.data.file_url}`}));
                            })}
                            name="excess_image"
                        />
                        <ClearButtonComponent callBack={() => {
                            const fileInput = document.getElementById('excess_image') as HTMLInputElement | null;
                            if (fileInput) {
                                fileInput.value = '';
                                fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                            }
                            dispatch(updateFormData({'excess_image': null}));
                        }}/>
                    </div>
                    <img
                        id="excess_image_preview"
                        src={getImageSource(formState.excess_image || formState.oldImage)}
                        alt="img" className="mt-4 w-20 h-20 rounded"/>
                </div>
            ,
            'Account Name': <AsyncSelect isMulti={false} id="account_id" name="account_id"
                                         required
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchAccounts}
                                         onChange={({value}: any) => {
                                             handleChangeField('account_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.account?.id,
                                             label: (
                                                 <div key={formState.account?.id} className="flex items-center">
                                                     <img src={formState.account?.image} alt="avatar"
                                                          className="w-8 h-8 mr-2 rounded-full"/>
                                                     <div>
                                                         <div
                                                             className="text-sm font-bold">{formState.account?.name}</div>
                                                         <div
                                                             className="text-xs text-gray-500">{formState.account?.email}</div>
                                                     </div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,
            'Contact': <AsyncSelect isMulti={false} id="contact_id" name="contact_id"
                                    placeholder="Type at least 2 characters to search..."
                                    loadOptions={searchOwners}
                                    onChange={({value}: any) => {
                                        handleChangeField('contact_id', value)
                                    }}
                                    defaultValue={{
                                        value: formState.contact?.id,
                                        label: (
                                            <div key={formState.contact?.id} className="flex items-center">
                                                <img src={formState.contact?.image} alt="avatar"
                                                     className="w-8 h-8 mr-2 rounded-full"/>
                                                <div>
                                                    <div
                                                        className="text-sm font-bold">{formState.contact?.name}</div>
                                                    <div
                                                        className="text-xs text-gray-500">{formState.contact?.email}</div>
                                                </div>
                                            </div>
                                        ),
                                    }}
                                    className="flex-1"/>,
            'Email': <input id="email" type="text" name="email"
                            className="form-input flex-1 "
                            defaultValue={formState.email}
                            onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Currency': <Select options={Currencies}
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                defaultValue={Currencies.find((data) => data.value == formState.currency)}
                                className="flex-1"/>,
            'Portal Excess Id': <input id="portal_excess_id" type="text" name="portal_excess_id"
                                       className="form-input flex-1 "
                                       defaultValue={formState.portal_excess_id}
                                       onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,

        },
        '': {
            'Excess Owner': <AsyncSelect isMulti={false} id="owner_id" name="owner_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchOwners}
                                         onChange={({value}: any) => {
                                             handleChangeField('owner_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.owner?.id,
                                             label: (
                                                 <div key={formState.owner?.id} className="flex items-center">
                                                     <img src={formState.owner?.image} alt="avatar"
                                                          className="w-8 h-8 mr-2 rounded-full"/>
                                                     <div>
                                                         <div
                                                             className="text-sm font-bold">{formState.owner?.name}</div>
                                                         <div
                                                             className="text-xs text-gray-500">{formState.owner?.email}</div>
                                                     </div>
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,
            'Excess File': <div>
                <input
                    id="excess_file"
                    key="excess_file"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    onChange={(e) => handleUploadFile(e, (response: any) => {
                        dispatch(updateFormData({field: 'excess_file', value: `${response?.data.data.file_url}`}));
                    })}
                    name="excess_file"
                />
                <a className="btn btn-outline-primary" href={formState.excess_file}>Download</a>
            </div>,

            'Excess Source': <Select name="excess_source" id="excess_source" options={ExcessSources}
                                     onChange={({value}: any) => {
                                         handleChangeField('excess_source', value)
                                     }}

                                     className="flex-1"/>,
            'Secondary Email': <input id="secondary_email" type="text" name="secondary_email"
                                      defaultValue={formState.secondary_email}
                                      className="form-input flex-1 "
                                      onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'Email Opt Out': <input
                id="email_opt_out"
                type="checkbox"
                name="email_opt_out"
                className="form-checkbox"
                checked={formState.email_opt_out}
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
