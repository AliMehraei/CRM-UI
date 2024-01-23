import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {updateFormData} from "../../store/vendorRfqFormSlice";
import {displayImage, displayFile, formatDate} from '../../components/Functions/CommonFunctions';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import GenerateTableList from '../../components/FilterFields/GenerateTableList';

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.vendorRfqForm);
    useEffect(() => {
        dispatch(setPageTitle('Vendor RFQ Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleVendorRfq(modelId);
        if (modelResponse.status != 200)
            return;
        const model = modelResponse.data.data.vendorRfq;
        dispatch(updateFormData(model));
    };
    useEffect(() => {
        if (formState.iso_upload) {
            displayFile('vendorRfq', 'iso_upload', formState.iso_upload).then((data) => {
                dispatch(updateFormData({[`iso_upload_preview`]: data}));
            })
        }
        if (formState.doc_upload) {
            displayFile('vendorRfq', 'doc_upload', formState.doc_upload).then((data) => {
                dispatch(updateFormData({[`doc_upload_preview`]: data}));
            })
        }
    }, []);
    /*const headerDataToDisplay = [
        {label: "Vendor Name", value: formState.vendor_rfq_name},
        {label: "Vendor Site", value: `${formState.vendorRfq_name ?? ''} | ${formState.city ?? ''}`},
        {label: "Vendor Source", value: formState.vendorRfq_source},
        {label: "Vendor Type", value: formState.vendorRfq_type},
        {label: "Vendor Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}`},
        {label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}`},
        {label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}`}
    ];*/

    const vendorRfqInformation = {
        'leftObject': [
            {label: "Vendor RFQ Name", value: formState.vendor_rfq_name},
            {label: "Vendor Name", value: formState.vendor?.vendor_name},
            {label: "Status", value: formState.status},
            {label: "Email", value: formState.email},
            {label: "Currency", value: formState.currency},
            {label: "Related RFQs", value: formState.related_rfqs?.map((data: any) => data.rfq_name)},
        ],
        'rightObject': [
            {label: "Date", value: formState.date},
            {label: "Vendor RFQ Number", value: formState.vendor_rfq_number},
            {
                label: "Vendor RFQ Owner",
                value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}`
            },
            {
                label: "Created By",
                value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}`
            },
            {
                label: "Modified By",
                value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}`
            },
            {label: "Email Opt Out", value: formState.email_opt_out == 1 ? 'True' : 'False'},
            {label: "Exchange Rate", value: formState.exchange_rate},
        ],
    };

    const development = {
        'leftObject': [
            {
                label: 'Requested Products',
                value: formState.requested_products.map((data: any) => data?.product?.product_name)
            },
        ],
        'rightObject': [
            {label: 'Is full', value: formState.is_full == 1 ? 'True' : 'False'},

        ],
    }

    const columnsRequested = [
        {
            key: 'rfq_name',
            label: 'Source RFQ',
            model: 'rfq',
        },
        {
            key: 'rfq_owner_name',
            label: 'RFQ Owner Name',
        },
        {
            key: 'product_name',
            label: 'Product',
            model: 'product',
        },
        {
            label: 'is Alt for this Product',
            key: 'alt_product',
        },
    ];

    const columnsOffered = [
        {
            key: 'product_name',
            label: 'Offered MPN',
            model: 'product',
        },
        {
            key: 'name',
            label: 'Offered Manufacturer',
            model: 'manufacturer',
        },
        {
            label: 'Offered Quantity',
            key: 'quantity',
        },
        {
            label: 'Offered Price USD',
            key: 'price',
        },

        {
            label: 'D/C',
            key: 'dc',
        },


    ];

    const emailLogColumns = [

        {
            label: 'Subject',
            key: 'subject',
        },
        
        {
            label: 'Reciver Mail',
            key: 'receiver_mail',
        },

        {
            label: 'Sender Mail',
            key: 'sender_email',
        },

        {
            label: 'Sender Type',
            key: 'sender_type',
        },

        {
            label: 'Status',
            key: 'status',
        },

        {
            label: 'Created time',
            key: 'created_at',
            format: (value) => {
                // Format the date to 'YYYY-MM-DD'
                const formattedDate = new Date(value).toISOString().split('T')[0];
                return formattedDate;
              
            },
        },

    ];

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelId]);

    return (
        (!hasPermission(`read-vendor-rfq`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelId}
                        exportTable={exportTable}
                        routeModel="vendor_rfq"
                        permissionModel="vendor-rfq"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Vendor RFQ</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="vendorRfq image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Vendor RFQ Information"
                        leftObjects={vendorRfqInformation.leftObject}
                        rightObjects={vendorRfqInformation.rightObject}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <TableSectionPreview
                        title="Requested Products"
                        items={formState.requested_products}
                        columns={columnsRequested}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <TableSectionPreview
                        title="Offered Products"
                        items={formState.offered_products}
                        columns={columnsOffered}
                    />

                    <InformationSectionPreview
                        title="Development "
                        leftObjects={development.leftObject}
                        rightObjects={development.rightObject}
                    />


                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Date information"
                        leftObjects={[
                            {label: "Created Date", value: formatDate(formState.created_at)}
                        ]}
                        rightObjects={[
                            {label: "Modified Date", value: formatDate(formState.updated_at)}
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <AttachmentSection modelId={modelId} modelName={'vendorRfq'}/>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    
                    <TableSectionPreview
                        title="Email Logs"
                        items={formState.emaillogs}
                        columns={emailLogColumns}
                    />
                </div>
            </div>
        )
    );
};
export default Preview;
