import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/vendorFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.vendorForm);
    useEffect(() => {
        dispatch(setPageTitle('Vendor Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleVendor(modelId);
        if (modelResponse.status != 200)
            return;
        const model = modelResponse.data.data.vendor;
        dispatch(updateFormData(model));
    };
    useEffect(() => {
        if (formState.iso_upload) {
            displayFile('vendor', 'iso_upload', formState.iso_upload).then((data) => {
                dispatch(updateFormData({ [`iso_upload_preview`]: data }));
            })
        }
        if (formState.doc_upload) {
            displayFile('vendor', 'doc_upload', formState.doc_upload).then((data) => {
                dispatch(updateFormData({ [`doc_upload_preview`]: data }));
            })
        }
    }, []);
    const headerDataToDisplay = [
        { label: "Vendor Name", value: formState.vendor_name },
        { label: "Vendor Site", value: `${formState.vendor_name} | ${formState.city}` },
        { label: "Vendor Source", value: formState.vendor_source },
        { label: "Vendor Type", value: `${formState.vendor_type}` },
        { label: "Vendor Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}` },
        { label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}` },
        { label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}` }
    ];
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);

        });
    }, [modelId]);
    if (loading)
        return <LoadingSasCrm />;
    return (
        (!hasPermission(`read-vendor`) || loading) ? (
            <LoadingSasCrm />
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelId}
                        exportTable={exportTable}
                        routeModel="vendor"
                        permissionModel="vendor"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Vendor</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="vendor image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Vendor Information"
                        leftObjects={[
                            // { label: "Broker Type", value: formState.broker_type },
                            { label: "Currency", value: formState.currency },
                            { label: "Contracts", value: formState.contract },
                            { label: "SL Contains all MFRs", value: formState.sl_contains_all_mfrs ? 'Yes' : 'No' },
                            // { label: "Strong Lines", value: formState.currency },//TODO: fix here
                            // { label: "Line Card", value: formState.currency }, //TODO: fix here
                            { label: "Approve status", value: formState.approved_status },
                            { label: "Business Vendor", value: formState.business_vendor ? 'Yes' : 'No' },

                        ]}
                        rightObjects={[
                            {
                                label: "Approved by",
                                value: `${formState.approvedBy?.first_name ?? ''} ${formState.approvedBy?.last_name ?? ''}`
                            },
                            {
                                label: "ISO Upload", value: (
                                    <a
                                        disabled={!formState.iso_upload}
                                        className="btn btn-sm btn-outline-primary cursor-pointer"
                                        href={formState.iso_upload_preview ?? formState.iso_upload}
                                        target="__blank"
                                    >
                                        Download
                                    </a>)
                            },
                            {
                                label: "Doc Upload", value: (
                                    <a
                                        disabled={!formState.doc_upload}
                                        className="btn btn-sm btn-outline-primary cursor-pointer"
                                        href={formState.doc_upload_preview ?? formState.doc_upload}
                                        target="__blank"
                                    >
                                        Download
                                    </a>)
                            },
                            { label: "Vendor Number", value: formState.vendor_number },
                            { label: "Parent Vendor", value: `${formState.parent?.first_name ?? ''} ${formState.parent?.last_name ?? ''}` },
                            { label: "Portal Access", value: formState.portal_access },

                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Contact Information"
                        leftObjects={[
                            { label: "First Name", value: formState.first_name },
                            { label: "Last Name", value: formState.last_name },
                            { label: "Phone", value: formState.phone },
                            { label: "Mobile", value: formState.mobile },
                         
                        ]}
                        rightObjects={[
                            {
                                label: "Website",
                                value: <a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a>
                            },
                            {
                                label: "Email",
                                value: <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>{formState.email}</a>
                            },
                            {
                                label: "LinkedIn",
                                value: <a className='text-primary' target='_blank' href={formState.linkedin}>{formState.linkedin}</a>
                            },
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Terms and Shipping"
                        leftObjects={[
                            { label: "Incoterms", value: formState.incoterms },
                            { label: "Payment Terms", value: formState.payment_terms },
                            { label: "Credit Line", value: formState.credit_line }
                        ]}
                        rightObjects={[
                            { label: "VAT No", value: formState.vat_no },
                            { label: "Forwarder", value: formState.forwarder },
                            { label: "Forwarder Account no", value: formState.forwarder_account_no }
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Address Information"
                        leftObjects={[
                            { label: "Street", value: formState.street },
                            { label: "City", value: formState.city },
                            { label: "Zip Code", value: formState.zip_code },
                        ]}
                        rightObjects={[
                            { label: "State", value: formState.state },
                            { label: "Country", value: formState.country }
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <MultipleLineSectionPreview
                        sectionTitle="Description Information"
                        data={[
                            { label: 'Description', value: formState.description },
                        ]} />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Technical information"
                        leftObjects={[
                            { label: "BOM/Excess Total Uploading Rows", value: formState.bom_excess_total_rows },
                            
                        ]}
                        rightObjects={[
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="API Data"
                        leftObjects={[
                            { label: "Octopart ID", value: formState.octopart_id }
                        ]}
                        rightObjects={[
                            { label: "ZohoBooksID", value: formState.zoho_book_id }
                        ]}
                    />
                </div>
            </div>
        )
    );
};
export default Preview;