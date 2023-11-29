import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/vendorFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    Currencies, displayImage, handleCopySelect,
    searchManufacturer,
    searchOwners, searchVendor
} from "../../../../components/Functions/CommonFunctions";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";
import {
    VendorApproveStatus,
    VendorContract,
    VendorPortalAccess,
    VendorSource
} from "../../../../components/Options/SelectOptions";
import React from "react";

const VendorSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.vendorForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
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
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data[nameField]}`)}>
                            Copy & Select
                        </button>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Vendor Information': {
            'Vendor Image': (<ImageUploadComponent formState={formState}
                                                   modelName={'vendor'}
                                                   id={'vendor_image'}
                                                   formAttribute={'image'}
                                                   updateFormData={updateFormData}
                />
            ),
            'Vendor Name': (
                <input
                    id="vendor_name"
                    required
                    name="vendor_name"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.vendor_name}
                />
            ),
            'Contracts': <Select
                isMulti={true}
                name="contract"
                id="contract"
                placeholder="Select Contract Type..."
                options={VendorContract}
                onChange={(values: any) => {
                    handleChangeField('contract', values.map((v: any) => v.value))
                }}
                defaultValue={formState.contract
                    ? formState.contract.map((contract: any) => ({
                        value: contract,
                        label: contract
                    }))
                    : []
                }
            />,
            'SL Contains all MFRs': (
                <input
                    id="is_active"
                    type="checkbox"
                    name="is_active"
                    className="form-checkbox"
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.is_active}
                />
            ),
            'Strong Lines': (
                <AsyncSelect
                    defaultOptions={true} id="strong_line_ids"
                    name="strong_line_ids"
                    placeholder="Type at least 2 characters to search..."
                    loadOptions={searchManufacturer}
                    onChange={(values: any) => {
                        handleChangeField('strong_line_ids', values.map((v: any) => v.value))
                    }}
                    defaultValue={formState.strong_lines
                        ? formState.strong_lines.map((data: any) => ({
                            value: data.id,
                            label: (
                                <div key={data.id} className="flex items-center">
                                    <div>
                                        <div className="text-sm font-bold">{data.name}</div>

                                    </div>
                                    {/*{formState.strong_lines ?*/}
                                    {/*        (<button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data.name}`)}>*/}
                                    {/*            Copy & Select*/}
                                    {/*        </button>)*/}
                                    {/*        : null*/}
                                    {/*}*/}
                                </div>
                            ),
                        }))
                        : []
                    }
                    isMulti={true}
                    className="flex-1"/>
            ),
            'Line Card': (
                <AsyncSelect
                    defaultOptions={true} id="line_card_ids"
                    name="line_card_ids"
                    placeholder="Type at least 2 characters to search..."
                    loadOptions={searchManufacturer}
                    onChange={(values: any) => {
                        handleChangeField('line_card_ids', values.map((v: any) => v.value))
                    }}
                    defaultValue={formState.line_cards
                        ? formState.line_cards.map((data: any) => ({
                            value: data.id,
                            label: (
                                <div key={data.id} className="flex items-center">
                                    <div>
                                        <div className="text-sm font-bold">{data.name}</div>

                                    </div>
                                    {/*{formState.line_cards ?*/}
                                    {/*        (<button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data.name}`)}>*/}
                                    {/*            Copy & Select*/}
                                    {/*        </button>)*/}
                                    {/*        : null*/}
                                    {/*}*/}
                                </div>
                            ),
                        }))
                        : []
                    }
                    isMulti={true}
                    className="flex-1"/>
            ),
            'Approve status': (
                <Select
                    options={VendorApproveStatus}
                    name="approved_status"
                    id="approved_status"
                    onChange={({value}: any) => {
                        handleChangeField('approved_status', value)
                    }}
                    className="flex-1"
                    defaultValue={VendorApproveStatus.find((data) => data.value == formState.approved_status)}

                />
            ),
            'Business Vendor': (
                <input
                    id="business_vendor"
                    type="checkbox"
                    name="business_vendor"
                    className="form-checkbox"
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                    checked={formState.business_vendor}
                />
            ),
            'Approved By': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="approved_by"
                    placeholder="Type at least 2 characters to search..."
                    name="approved_by_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('approved_by_id', value)
                    }}
                    className="flex-1"
                />
            ),
        },
        '': {

            'Vendor Owner': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="owner_id"
                    placeholder="Type at least 2 characters to search..."
                    name="owner_id"
                    loadOptions={searchOwners}
                    onChange={({value}: any) => {
                        handleChangeField('owner_id', value)
                    }}
                    className="flex-1"
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
                                    <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                                </div>
                                <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.owner?.first_name + " " + formState.owner?.last_name}`)}>
                                    Copy & Select
                                </button>
                            </div>
                        ),
                    }}
                />
            ),
            'Vendor Source': (
                <Select
                    options={VendorSource}
                    name="vendor_source"
                    id="vendor_source"
                    onChange={({value}: any) => {
                        handleChangeField('vendor_source', value)
                    }}
                    defaultValue={VendorSource.find((data) => data.value == formState.vendor_source)}

                    className="flex-1"
                />
            ),
            'Currency': (
                <Select
                    options={Currencies}
                    name="currency"
                    id="currency"
                    onChange={({value}: any) => {
                        handleChangeField('currency', value)
                    }}
                    defaultValue={Currencies.find((data) => data.value == formState.currency)}
                    required
                    className="flex-1"
                />
            ),
            'ISO Upload': (
                <FileUploadComponent
                    id="iso_upload"
                    updateFormData={updateFormData}
                    formState={formState}
                    modelName='vendor'
                    formAttribute='iso_upload'

                />
            ),
            'Doc Upload': (
                <FileUploadComponent
                    id="doc_upload"
                    updateFormData={updateFormData}
                    formState={formState}
                    modelName='vendor'
                    formAttribute='doc_upload'

                />
            ),
            'Parent Vendor': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    id="parent_vendor_id"
                    placeholder="Type at least 2 characters to search..."
                    name="parent_vendor_id"
                    loadOptions={searchVendor}
                    onChange={({value}: any) => {
                        handleChangeField('parent_vendor_id', value)
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.parent_vendor_id,
                        label: (
                            <div key={formState.parent_vendor_id}
                                 className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{formState.parent?.vendor_name}</div>

                                </div>
                                {formState.parent ?
                                        (<button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${formState.parent?.vendor_name}`)}>
                                            Copy & Select
                                        </button>)
                                        : null
                                }
                            </div>
                        )
                    }}
                />
            ),
            'Portal Access': (
                <Select
                    options={VendorPortalAccess}
                    name="portal_access"
                    id="portal_access"
                    onChange={({value}: any) => {
                        handleChangeField('portal_access', value)
                    }}
                    defaultValue={VendorPortalAccess.find((data) => data.value == formState.portal_access)}

                    className="flex-1"
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

export default VendorSection;
