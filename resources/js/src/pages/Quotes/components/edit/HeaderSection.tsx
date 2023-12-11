import AsyncSelect from "react-select/async";
import Select from "react-select";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/quoteFormSlice";
import {
    Currencies, displayImage, handleCopySelect,
    searchAccounts, searchContacts, searchDeals,
    searchOwners,
    searchRFQ
} from "../../../../components/Functions/CommonFunctions";
import Api from "../../../../config/api";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";
import {QuoteStages, QuoteChances} from "../../../../components/Options/SelectOptions";
import React from "react";
const HeaderSection = () => {
    const formState = useSelector((state: any) => state.quoteForm);
    const dispatch = useDispatch();
    const api_instance = new Api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const handleChangeAccount = async (value: string) => {
        const accountResponse = await api_instance.fetchSingleAccount(value);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData({['account']: account}));


        const addressFields = [
            'billing_street',
            'billing_city',
            'billing_state',
            'billing_code',
            'billing_country',
            'shipping_street',
            'shipping_city',
            'shipping_state',
            'shipping_code',
            'shipping_country',
        ];

        const formDataUpdate: any = {};
        addressFields.forEach(field => {
            formDataUpdate[field] = account[field] ?? null;
        });
        dispatch(updateFormData(formDataUpdate));
    }

    const fields = {
        'Header': {
            'Account Name': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="account_id" name="account_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchAccounts}
                                         onChange={({value}: any) => {
                                             handleChangeField('account_id', value)
                                             handleChangeAccount(value)
                                         }}
                                         defaultValue={{
                                             value: formState.account?.id,
                                             label: (
                                                 <div key={formState.account?.id} className="flex items-center">
                                                     {formState.account ? (
                                                         <>
                                                         <img
                                                             src={displayImage(formState.account.image_data)}
                                                             alt="avatar"
                                                             className="w-8 h-8 mr-2 rounded-full"
                                                         />

                                                     <div>
                                                         <div
                                                             className="text-sm font-bold">{formState.account?.account_name}</div>
                                                         <div
                                                             className="text-xs text-gray-500">{formState.account?.email}</div>
                                                     </div>
                                                             <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.account?.account_name}`)}>
                                                                 Copy & Select
                                                             </button>
                                                         </>
                                                         ) : null}
                                                 </div>
                                             ),
                                         }}
                                         className="flex-1"/>,
            'Contact Name': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="contact_id" name="contact_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchContacts}
                                         onChange={({value}: any) => {
                                             handleChangeField('contact_id', value)
                                         }}
                                         defaultValue={{
                                             value: formState.contact?.id,
                                             label: (
                                                 <div key={formState.contact?.id} className="flex items-center">
                                                     {formState.contact ? (
                                                         <>
                                                         <img
                                                             src={displayImage(formState.contact.image_data)}
                                                             alt="avatar"
                                                             className="w-8 h-8 mr-2 rounded-full"
                                                         />

                                                     <div>
                                                         <div
                                                             className="text-sm font-bold">{formState.contact?.name}</div>
                                                         <div
                                                             className="text-xs text-gray-500">{formState.contact?.email}</div>
                                                     </div>
                                                             <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.contact?.name}`)}>
                                                                 Copy & Select
                                                             </button>
                                                         </>
                                                         ) : null}
                                                 </div>
                                             ),
                                         }}

                                         className="flex-1"/>,
            'RFQ': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="rfq_id" name="rfq_id"
                                placeholder="Type at least 2 characters to search..."
                                loadOptions={searchRFQ}
                                onChange={({value}: any) => {
                                    handleChangeField('rfq_id', value)
                                }}
                                defaultValue={{
                                    value: formState.rfq?.id,
                                    label: (
                                        <div key={formState.rfq?.id} className="flex items-center">
                                            {
                                                formState.rfq ?

                                                    (
                                                        <>
                                                            <div className="text-sm font-bold">{formState.rfq?.rfq_name}</div>
                                                            <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.rfq?.rfq_name}`)}>
                                                                Copy & Select
                                                            </button>
                                                        </>

                                                    ) : null

                                            }

                                        </div>
                                    ),
                                }}
                                className="flex-1"/>,

            'Customer RFQ No': <input id="customer_rfq_no" type="text" name="customer_rfq_no"
                                      className="form-input flex-1 "
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                      defaultValue={formState.customer_rfq_no}
            />,

            'Subject': <input required id="subject" name="subject" type="text"
                              className="form-input flex-1 "
                              onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                              defaultValue={formState.subject}
            />,
            'Converted by': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="converted_by_id" name="converted_by_id"
                                         placeholder="Type at least 2 characters to search..."
                                         loadOptions={searchOwners}
                                         className="flex-1"
                                         onChange={({value}: any) => {
                                             handleChangeField('converted_by_id', value)
                                         }}
                                         defaultValue={
                                             formState.converted_by ?
                                            {
                                             value: formState.converted_by?.id,
                                             label: (
                                                 <div key={formState.converted_by?.id} className="flex items-center">
                                                     <div className="text-sm font-bold">{formState.converted_by?.first_name} {formState.converted_by?.last_name}</div>
                                                     <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.converted_by?.first_name + formState.converted_by?.last_name}`)}>
                                                         Copy & Select
                                                     </button>
                                                 </div>
                                             ),
                                         } : {
                                                 value: null,
                                                 lable: null
                                                 }}
            />,
            'Quote Chance': <Select name='quote_chance' required options={QuoteChances}
                                    className="flex-1"
                                    onChange={({value}: any) => {
                                        handleChangeField('quote_chance', value)
                                    }}
                                    defaultValue={QuoteChances.find((title) => title.value == formState.quote_chance)} //TODO : what should do ?
            />,
            'Currency': <Select name="currency" options={Currencies}
                                className="flex-1"
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                defaultValue={Currencies.find((title) => title.value == formState.currency)}
            />,
        },
        '': {
            'Quote Owner': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="owner_id" name="owner_id"
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={searchOwners}
                                        onChange={({value}: any) => {
                                            handleChangeField('owner_id', value)
                                        }}
                                        defaultValue={{
                                            value: formState.owner?.id,
                                            label: (
                                                <div key={formState.owner?.id} className="flex items-center">
                                                    {formState.owner ? (
                                                        <img
                                                            src={displayImage(formState.owner.avatar_data)}
                                                            alt="avatar"
                                                            className="w-8 h-8 mr-2 rounded-full"
                                                        />
                                                    ) : null}
                                                    <div>
                                                        <div
                                                            className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                                        <div
                                                            className="text-xs text-gray-500">{formState.owner?.email}</div>
                                                    </div>
                                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                                        Copy & Select
                                                    </button>
                                                </div>
                                            ),
                                        }}
                                        className="flex-1"/>,

            'PM User': <AsyncSelect
                    defaultOptions={true}  isMulti={false} id="pm_user_id" name="pm_user_id"
                                    placeholder="Type at least 2 characters to search..."
                                    loadOptions={searchOwners}
                                    onChange={({value}: any) => {
                                        handleChangeField('pm_user_id', value)
                                    }}
                                    defaultValue={{
                                        value: formState.pm_user?.id,
                                        label: (
                                            <div key={formState.pm_user?.id} className="flex items-center">
                                                {formState.pm_user ? (
                                                    <>
                                                    <img
                                                        src={displayImage(formState.pm_user.avatar_data)}
                                                        alt="avatar"
                                                        className="w-8 h-8 mr-2 rounded-full"
                                                    />

                                                <div>
                                                    <div
                                                        className="text-sm font-bold">{formState.pm_user?.name}</div>
                                                    <div
                                                        className="text-xs text-gray-500">{formState.pm_user?.email}</div>
                                                </div>
                                                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.pm_user?.name}`)}>
                                                            Copy & Select
                                                        </button>
                                                    </>
                                                ) : null}
                                            </div>
                                        ),
                                    }}
                                    className="flex-1"/>,

            'Deals Name': <AsyncSelect
                    defaultOptions={true} isMulti={false} id="deal_id" name="deal_id"
                                       placeholder="Type at least 2 characters to search..."
                                       loadOptions={searchDeals}
                                       onChange={({value}: any) => {
                                           handleChangeField('deal_id', value)
                                       }}
                                       defaultValue={{
                                           value: formState.deal?.id,
                                           label: (
                                               <div key={formState.deal?.id} className="flex items-center">
                                                   {formState.deal ?
                                                       (
                                                           <>
                                                               <div className="text-sm font-bold">{formState.deal?.deal_name}</div>
                                                               <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.deal?.deal_name}`)}>
                                                                   Copy & Select
                                                               </button>
                                                           </>
                                                       ): null

                                                   }


                                               </div>
                                           ),
                                       }}
                                       className="flex-1"/>,

            'Quote Stage': <Select name="quote_stage" required options={QuoteStages}
                                   className="flex-1"
                                   onChange={({value}: any) => {
                                       handleChangeField('quote_stage', value)
                                   }}
                                   defaultValue={QuoteStages.find((title) => title.value == formState.quote_stage)}

            />,

            'Quote File(Excel)':
                <FileUploadComponent
                    id={'quote_file'}
                    modelName="quote"
                    formState={formState}
                    formAttribute={'quote_file'}
                    updateFormData={updateFormData}
                />
            ,
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
