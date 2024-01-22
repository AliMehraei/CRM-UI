import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/invoiceFormSlice";
import {displayImage, displayFile, getStatusLabel, StatusOption, formatDate} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import TableSectionPreview from '../../components/Preview/TableSectionPreview';
import AttachmentSection from "../../components/FormFields/AttachmentSection";

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.invoiceForm);

    useEffect(() => {
        dispatch(setPageTitle('Invoice Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleInvoice(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.invoice;
        dispatch(updateFormData(model));
    };


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    useEffect(() => {
        if (formState.invoice_file) {
            displayFile('invoice', 'invoice_file', formState.invoice_file).then((data) => {
                dispatch(updateFormData({ [`invoice_file_preview`]: data })); //TODO Fix
            })
        }
    }, []);
    const SOTypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'single_order', label: 'Single Order'},
        {value: 'frame_contract', label: 'Frame Contract'},
        {value: 'call_off', label: 'Call Off'},
        {value: 'forecast', label: 'Forecast'},

    ];

    const invoiceHeaderSection = {
        'leftObjects': [
            {
                label: "Due Date",
                value: `${formState.due_date ?? ''}`
            },
            {label: "Sales Commission", value: formState.sales_commission},
            {label: "Exchange Rate", value: `${formState.exchange_rate}`},
            {label: "ZohoBooksID", value: `${formState.zoho_books_id}`},

        ],
        'rightObjects': [
            {label: "Deal Stage", value: `${formState.deal_stage ?? ''} `},
            {label: "Excise Duty", value: `${formState.excise_duty}`},
            {label: "Invoice Stage", value: `${formState.invoice_stage}`},
            {label: "Status", value:`${formState.status}`},


            {label: "Currency", value: `${formState.currency}`},
        ],
    };

    const InvoiceInformationSection =
        {
            'leftObjects': [
                {label: "Invoice valid", value: `${formState.invoice_valid}`},
                {label: "Proactive Offer", value: `${formState.proactive_offer}`},

            ],
            'rightObjects': [
                {label: "Rating", value: `${formState.rating}`},


            ],
        }


    const InvoiceLineSection = {
        'leftObjects': [
            {label: "Product Name", value: `${formState.product?.product_name}`}, //TODO : where is it ?
            {
                label: "Customer part ID",
                value: `${formState.customer_part_id}`
            },

        ],
        'rightObjects': [
            {label: "Quantity", value: `${formState.quantity}`},
            {label: "List Price", value: `${formState.list_price}`},
            {label: "Lead Time", value: `${formState.lead_time}`},
        ],
    }

    const SourceSection = {
        'leftObjects': [
            {label: "Vendor", value: `${formState.vendor?.vendor_name}`},
            {label: "Availability No", value: `${formState.availability_no}`},
            {label: "Availability Date", value: `${formState.availability_date}`},
            {label: "Availability", value: `${formState.availability?.availability_name}`},
        ],
        'rightObjects': [
            {label: "Cost", value: `${formState.cost}`},
            {label: "LT vendor", value: `${formState.lt_vendor}`},
            {label: "SPQ", value: `${formState.spq}`},
            {label: "Quantity in Stock", value: `${formState.quantity_in_stock}`},
        ],
    }

    const AddressInformationSection = {
        'leftObjects': [
            {label: "Billing Street", value: `${formState.billing_street}`},
            {label: "Billing City", value: `${formState.billing_city}`},
            {label: "Billing State", value: `${formState.billing_state}`},
            {label: "Billing Code", value: `${formState.billing_code}`},
            {label: "Billing Country", value: `${formState.billing_country}`},
        ],
        'rightObjects': [
            {label: "Shipping Street", value: `${formState.shipping_street}`},
            {label: "Shipping City", value: `${formState.shipping_city}`},
            {label: "Shipping State", value: `${formState.shipping_state}`},
            {label: "Shipping Code", value: `${formState.shipping_code}`},
            {label: "Shipping Country", value: `${formState.shipping_country}`},
        ],
    }


    const columns = [
        {
            key: 'id',
            label: 'S.NO',
        },
        {
            key: 'product_name',
            label: 'Product Name',
            model:'product',
        },

         {
            key: 'quantity',
            label: 'Quantity',
        },

        {
            key: 'list_price',
            label: 'List Price',
        },

        {
            key: 'amount',
            label: 'Amount',
        },
        {
            key: 'discount',
            label: 'Discount',
        },
         {
            key: 'tax',
            label: 'Tax',
        },
         {
            key: 'total',
            label: 'Total',
        },


    ];
    const headerDataToDisplay = [
        { label: "Account Name", value: `${formState.account?.account_name ?? ''} ` },
        { label: "Contact Name", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}` },
        { label: "Sales Order", value: `${formState.sales_order?.subject ?? ''} ${formState.contact?.last_name ?? ''} ` },
        { label: "Purchase Order", value: `${formState.purchase_order ?? ''} ` },
        { label: "Subject", value: `${formState.subject ?? ''} ` },
        { label: "Invoice Date", value: `${formState.invoice_date ?? ''} ` },
        { label: "Invoice Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}` },
        {label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}` },
        {label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}` }
    ];
    if (loading)
        return <LoadingSasCrm/>;
    return (
        (!hasPermission(`read-invoice`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="invoice"
                        permissionModel="invoice"
                        hasDownloadPdf={true}
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Invoice</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Invoice image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Header"
                        leftObjects={invoiceHeaderSection.leftObjects}
                        rightObjects={invoiceHeaderSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <InformationSectionPreview
                        title="Address Information"
                        leftObjects={AddressInformationSection.leftObjects}
                        rightObjects={AddressInformationSection.rightObjects}
                    />
                     <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <TableSectionPreview
                        title="Invoice Items"
                        items={formState.items}
                        columns={columns}
                        total={formState.total}
                        subtotal={formState.subtotal}
                        discount={formState.discount}
                        tax={formState.tax}
                        adjustment={formState.adjustment}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Terms And Conditions"
                        data={[
                            {label: 'Terms and Conditions', value: formState.terms_and_conditions},
                        ]}/>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Description "
                        data={[
                            {label: 'Description', value: formState.description},
                        ]}/>

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
                    <AttachmentSection modelId={modelID} modelName={'contact'}/>

                </div>
            </div>
        )
    );
};
export default Preview;
