import AsyncSelect from "react-select/async";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    Currencies, displayImage, handleCopySelect,
    searchAccounts,
    searchContacts,
    searchVendor
} from "../../../../components/Functions/CommonFunctions";
import {searchOwners} from "../../../../components/Functions/CommonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/rfqFormSlice";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";
import {
    RFQSources,RFQTypes,
    RFQStatuses, RFQDealStages} from "../../../../components/Options/SelectOptions";
import React from "react";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.rfqFormSlice);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {

        'Header': {
            'Account Name': <AsyncSelect
                defaultOptions={true} isMulti={false} id="account_id" name="account_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                }}
                defaultValue={{
                    value: formState.account?.id,
                    label: (
                        <div key={formState.account?.id} className="flex items-center">
                            {formState.account ? (
                                <>
                                <img
                                    src={displayImage(formState.account.image)}
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

            'Contact': <AsyncSelect
                defaultOptions={true} isMulti={false} id="contact" name="contact_id"
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
                                    src={formState.contact.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                            <div>
                                <div className="text-sm font-bold">{formState.contact?.name}</div>
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
            'Customer RFQ No': <input id="customer_rfq_no" name="customer_rfq_no"
                                      className="form-input flex-1 "
                                      defaultValue={formState.customer_rfq_no}
                                      onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'Project Name / Application': <input id="project_name" name="project_name"
                                                 className="form-input flex-1 "
                                                 defaultValue={formState.project_name}

                                                 onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}/>,

            'RFQ Source': <Select name="rfq_source" required options={RFQSources}
                                  onChange={({value}: any) => {
                                      handleChangeField('rfq_source', value)
                                  }}
                                  defaultValue={
                                      formState.rfq_source ?
                                          RFQSources.find((data) => data.value == formState.rfq_source) : {
                                              value: 'none',
                                              label: '-None-'
                                          }}

                                  className="flex-1"/>,

            'RFQ Type': <Select name="rfq_type" required options={RFQTypes}
                                onChange={({value}: any) => {
                                    handleChangeField('rfq_type', value)
                                }}
                                defaultValue={
                                    formState.rfq_type ?
                                        RFQTypes.find((data) => data.value == formState.rfq_type) : {
                                            value: 'none',
                                            label: '-None-'
                                        }}
                                className="flex-1"/>,

            'Status': <Select name='status' required options={RFQStatuses}
                              onChange={({value}: any) => {
                                  handleChangeField('status', value)
                              }}
                              defaultValue={
                                  formState.status ?
                                      RFQStatuses.find((data) => data.value == formState.status) :
                                      {value: 'Open', label: 'Open'}
                              }
                              className="flex-1"/>,

            'Date History': <Flatpickr name='date_history'
                                       options={{
                                           dateFormat: 'Y-m-d ',
                                           defaultDate: formState.date_history ? new Date(formState.date_history) : null as any,
                                       }}
                                       defaultValue={formState.date_history}
                                       className="form-input flex-1"
                                       placeholder="YYYY-MM-DD"
                                       onChange={(_, dateString) => handleChangeField('date_history', dateString)}
            />,
            'Exchange Rate': <input id="exchangeRate" type="text" value="1" placeholder="Readonly input here…"
                                    className="flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                                    disabled/>,

            'Portal BOM id': <input id="portal_bom_id" name="portal_bom_id"
                                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                                    defaultValue={formState.portal_bom_id}
                                    className="form-input flex-1 "/>,
        },
        '': {
            'RFQ Owner': <AsyncSelect
                defaultOptions={true} isMulti={false} id="owner_id"
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
                                <>
                                <img
                                    src={displayImage(formState.owner.avatar_data)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />

                            <div>
                                <div
                                    className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div
                                    className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                        Copy & Select
                                    </button>
                                </>
                                ) : null}
                        </div>
                    ),
                }}
                className="flex-1"/>,
            'Deal Stage': <Select name="deal_stage" options={RFQDealStages}
                                  onChange={({value}: any) => {
                                      handleChangeField('deal_stage', value)
                                  }}
                                  defaultValue={RFQDealStages.find((data) => data.value == formState.deal_stage)}
                                  className="flex-1"/>,

            'Customer RFQ File':
                <FileUploadComponent
                    id={'customer_rfq_file'}
                    modelName="rfq"
                    formState={formState}
                    formAttribute={'customer_rfq_file'}
                    updateFormData={updateFormData}
                />
            ,
            'RFQ Dead Line': <Flatpickr name="rfq_dead_line"
                                        options={{
                                            dateFormat: 'Y-m-d ',
                                            defaultDate: formState.rfq_dead_line ? new Date(formState.rfq_dead_line) : null as any,
                                        }}
                                        defaultValue={formState.rfq_dead_line}
                                        className="form-input flex-1"
                                        placeholder="YYYY-MM-DD"
                                        onChange={(_, dateString) => handleChangeField('rfq_dead_line', dateString)}
            />,

            'Currency': <Select name="currency" id="currency" options={Currencies}
                                className="flex-1"
                                onChange={({value}: any) => {
                                    handleChangeField('currency', value)
                                }}
                                defaultValue={Currencies.find((data) => data.value == formState.currency)}

            />,

            'Vendor RFQs Line': <AsyncSelect
                defaultOptions={true} id="vendor_rfqs_line"
                name="vendor_rfqs_line"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchVendor}
                onChange={(values: any) => {
                    handleChangeField('vendor_rfqs_lines', values.map((v: any) => v.value))
                }}
                defaultValue={formState.vendor_rfqs_line
                    ? formState.vendor_rfqs_line.map((data: any) => ({
                        value: data.id,
                        label: (
                            <div key={data.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{data.vendor_name}</div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data.vendor_name}`)}>
                                        Copy & Select
                                    </button>
                                </div>
                            </div>
                        ),
                    }))
                    : []
                }
                isMulti={true}
                className="flex-1"/>,
        }

    }

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields}/>

        </div>
    </>)
}

export default HeaderSection;
