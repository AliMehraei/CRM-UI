import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { updateFormData } from "../../store/purchaseOrderFormSlice";
import {
    displayImage,
    formatDate,
    getStatusLabel,
    StatusOption,
} from "../../components/Functions/CommonFunctions";
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from "../../components/Preview/ActionButtonsPreview";
import InformationSectionPreview from "../../components/Preview/InformationSectionPreview";
import MultipleLineSectionPreview from "../../components/Preview/MultipleLineSectionPreview";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import { ViewIcon } from "../../components/FormFields/CommonIcons";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface ExtraEmailLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemEmailLog, setSelectedItemEmailLog] =
        useState<ExtraEmailLogInformation | null>(null);

    useEffect(() => {
        dispatch(setPageTitle("Purchase Order Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSinglePurchaseOrder(modelID);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.purchaseOrder;
        dispatch(updateFormData(model));
    };

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);

    const SOTypeOption = [
        { value: "none", label: "-None-" },
        { value: "single_order", label: "Single Order" },
        { value: "frame_contract", label: "Frame Contract" },
        { value: "call_off", label: "Call Off" },
        { value: "forecast", label: "Forecast" },
    ];

    const purchaseOrderHeaderSection = {
        leftObjects: [
            { label: "Vendor Name", value: `${formState.vendor?.vendor_name}` },
            {
                label: "Contact Name",
                value: `${
                    formState.contact
                        ? formState.contact?.first_name +
                          " " +
                          formState.contact?.last_name
                        : ""
                }`,
            },
            {
                label: "Availability No",
                value: formState.availability?.availability_name,
            },
            { label: "Currency", value: `${formState.currency}` },
            { label: "Exchange Rate ", value: `${formState.exchange_rate}` },
        ],
        rightObjects: [
            { label: "PO Number", value: `${formState.po_number}` },
            { label: "PO Date", value: `${formState.so_date}` },
            {
                label: "Purchase Order Owner",
                value: `${formState.owner?.first_name ?? ""} ${
                    formState.owner?.last_name ?? ""
                }`,
            },
            {
                label: "Approved By",
                value: `${formState.approved_by?.first_name ?? ""} ${
                    formState.approved_by?.last_name ?? ""
                }`,
            },
            {
                label: "Created By",
                value: `${formState.creator?.first_name ?? ""} ${
                    formState.creator?.last_name ?? ""
                }`,
            },
            {
                label: "Modified By",
                value: `${formState.modifier?.first_name ?? ""} ${
                    formState.modifier?.last_name ?? ""
                }`,
            },
        ],
    };
    const CarrierOption = [
        { value: "vendor_forwarder", label: "Vendor Forwarder" },
        { value: "ups", label: "UPS" },
        { value: "usps", label: "USPS" },
        { value: "dhl", label: "DHL" },
        { value: "blue_dart", label: "BlueDart" },
    ];
    const PurchaseOrderInformationSection = {
        leftObjects: [
            { label: "PO Type", value: `${formState.purchase_order}` },
            { label: "Parent PO NO.", value: `${formState.customer_po_date}` },
            { label: "Parent SO Nr", value: formState.parent_so_nr },
            { label: "ZohoBooksId", value: `${formState.zoho_books_id}` },
        ],
        rightObjects: [
            { label: "Subject", value: `${formState.subject}` },
            {
                label: "Status",
                value: `${getStatusLabel(formState.status, StatusOption)}`,
            },
            { label: "Requested DD", value: formState.requested_delivery_date },
            { label: "Confirmed DD", value: formState.confirmed_delivery_date },
            { label: "Confirmed DD", value: formState.confirmed_delivery_date },
            {
                label: "Carrier",
                value: `${getStatusLabel(formState.carrier, CarrierOption)}`,
            },
            { label: "AWB", value: formState.awb },
            {
                label: "Confirmation Vendor",
                value: (
                    <AttachmentDownloadButton
                        formAttribute={"confirmation_vendor"}
                        modelName="purchaseOrder"
                        formState={formState}
                    />
                ),
            },
        ],
    };

    const POLineSection = {
        leftObjects: [
            {
                label: "Requested Delivery Date",
                value: formState.requested_delivery_date,
            },
            { label: "Product Name", value: formState.product?.product_name },
            { label: "Quantity", value: formState.quantity },
            { label: "Cost", value: formState.cost },
        ],
        rightObjects: [
            {
                label: "Confirmed Delivery Date",
                value: formState.confirmed_delivery_date,
            },
            { label: "Date Code", value: formState.date_code },
            { label: "SPQ", value: formState.spq },
            { label: "Comment", value: formState.comment },
        ],
    };

    const LinkedSO = {
        leftObjects: [
            {
                label: "Account",
                value: `${formState.sales_order?.account?.account_name}`,
            },
            { label: "SO No", value: `${formState.sales_order?.so_number}` },
            { label: "Quantity", value: `${formState.sales_order?.quantity}` },
            { label: "Resale", value: `${formState.sales_order?.resale}` },
            {
                label: "SO Status",
                value: `${getStatusLabel(
                    formState.sales_order?.status,
                    StatusOption
                )}`,
            },
        ],
        rightObjects: [
            {
                label: "Requested D.D.",
                value: `${formState.sales_order?.requested_delivery_date}`,
            },
            {
                label: "Confirmed D.D.",
                value: `${formState.sales_order?.confirmed_delivery_date}`,
            },
            { label: "D/C", value: `${formState.sales_order?.date_code}` },
            { label: "SPQ SO", value: `${formState.sales_order?.spq}` },
        ],
    };

    const AddressInformationSection = {
        leftObjects: [
            { label: "Billing Street", value: `${formState.billing_street}` },
            { label: "Billing City", value: `${formState.billing_city}` },
            { label: "Billing State", value: `${formState.billing_state}` },
            { label: "Billing Code", value: `${formState.billing_code}` },
            { label: "Billing Country", value: `${formState.billing_country}` },
        ],
        rightObjects: [
            { label: "Shipping Street", value: `${formState.shipping_street}` },
            { label: "Shipping City", value: `${formState.shipping_city}` },
            { label: "Shipping State", value: `${formState.shipping_state}` },
            { label: "Shipping Code", value: `${formState.shipping_code}` },
            {
                label: "Shipping Country",
                value: `${formState.shipping_country}`,
            },
        ],
    };

    const columns = [
        {
            key: "product_name",
            label: "Product Name",
            model: "product",
        },
        {
            key: "quantity",
            label: "Quantity",
        },

        {
            key: "list_price",
            label: "List Price",
        },

        {
            key: "amount",
            label: "Amount",
        },
    ];
    const headerDataToDisplay = [
        {
            label: "Sales Order Owner",
            value: `${formState.owner?.first_name ?? ""} ${
                formState.owner?.last_name ?? ""
            }`,
        },
        {
            label: "Sales Person",
            value: `${formState.sales_person?.first_name ?? ""} ${
                formState.sales_person?.last_name ?? ""
            }`,
        },
    ];

    let extraEmailLogInformation: ExtraEmailLogInformation = {
        leftObjects: [],
        rightObjects: [],
    };
    const handleShowExtDataEmailLog = (item: any) => {
        extraEmailLogInformation = {
            leftObjects: [
                {
                    label: "Sender Name",
                    value: `${(item.sender_name ?? "").substring(0, 20)}${
                        item.sender_name && item.sender_name.length > 15
                            ? "..."
                            : ""
                    }`,
                },
                { label: "Is Open", value: `${item.is_open ?? ""}` },
                {
                    label: "Creator",
                    value: `${item.creator?.first_name ?? ""} ${
                        item.creator?.last_name ?? ""
                    }`,
                },
                {
                    label: "Modifier",
                    value: `${item.modifier?.first_name ?? ""} ${
                        item.modifier?.last_name ?? ""
                    }`,
                },
                { label: "Mail Status", value: `${item.mail_status ?? ""}` },
            ],
            rightObjects: [
                {
                    label: "Owner",
                    value: `${item.owner?.first_name ?? ""} ${
                        item.owner?.last_name ?? ""
                    }`,
                },
                { label: "Sent At", value: `${item.sent_at ?? ""}` },
                {
                    label: "Tracking Uuid",
                    value: `${item.tracking_uuid ?? ""}`,
                },
                { label: "Type", value: `${item.type ?? ""}` },
                { label: "Opened At", value: `${item.opened_at ?? ""}` },
            ],
        };

        setSelectedItemEmailLog(extraEmailLogInformation);

        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const emailLogColumns = [
        {
            label: "Subject",
            key: "subject",
        },

        {
            label: "Receiver Mail",
            key: "receiver_mail",
        },
        {
            label: "Type - Class",
            key: "type",
        },
        {
            label: "Sender Mail",
            key: "sender_email",
        },

        {
            label: "Sender Type",
            key: "sender_type",
        },

        {
            label: "Status",
            key: "status",
        },

        {
            label: "Created time",
            key: "created_at",
            format: (value) => {
                // Format the date to 'YYYY-MM-DD'
                const formattedDate = new Date(value)
                    .toISOString()
                    .split("T")[0];
                return formattedDate;
            },
        },

        {
            label: "Action",
            key: "action",
            render: (item) => (
                <div
                    onClick={() => handleShowExtDataEmailLog(item)}
                    className="flex hover:text-info"
                >
                    <ViewIcon />
                </div>
            ),
        },
    ];

    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-purchase-order`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelID}
                    exportTable={exportTable}
                    routeModel="purchase"
                    permissionModel="purchase-order"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Purchase Order
                    </div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="Purchase Order image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Header"
                    leftObjects={purchaseOrderHeaderSection.leftObjects}
                    rightObjects={purchaseOrderHeaderSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Purchase Order Information"
                    leftObjects={PurchaseOrderInformationSection.leftObjects}
                    rightObjects={PurchaseOrderInformationSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <TableSectionPreview
                    title="Purchase Items"
                    items={formState.items}
                    columns={columns}
                    total={formState.sales_total}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="PO Line"
                    leftObjects={POLineSection.leftObjects}
                    rightObjects={POLineSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Linked SO"
                    leftObjects={LinkedSO.leftObjects}
                    rightObjects={LinkedSO.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Address Information"
                    leftObjects={AddressInformationSection.leftObjects}
                    rightObjects={AddressInformationSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <MultipleLineSectionPreview
                    sectionTitle="Terms And Conditions"
                    data={[
                        {
                            label: "Terms and Conditions",
                            value: formState.terms_and_conditions,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <MultipleLineSectionPreview
                    sectionTitle="Description "
                    data={[
                        { label: "Description", value: formState.description },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Date information"
                    leftObjects={[
                        {
                            label: "Created Date",
                            value: formatDate(formState.created_at),
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Modified Date",
                            value: formatDate(formState.updated_at),
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <AttachmentSection
                    modelId={modelID}
                    modelName={"purchaseOrder"}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div>
                    <TableSectionPreview
                        title="Email Logs"
                        items={formState.emaillogs ?? []}
                        columns={emailLogColumns}
                    />
                    {isPopupOpen && selectedItemEmailLog && (
                        <div
                            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white shadow-md rounded z-50 border  shadow-gray-300`}
                        >
                            <div
                                className="absolute top-2 right-2 cursor-pointer"
                                onClick={handleClosePopup}
                            >
                                <svg
                                    className="w-6 h-6 text-gray-600 hover:text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </div>
                            <ExtraEmailLogDataSectionPreview
                                title="Email Log"
                                leftObjects={selectedItemEmailLog.leftObjects}
                                rightObjects={selectedItemEmailLog.rightObjects}
                            />

                            <div className="mt-auto px-2 py-3 sm:flex sm:flex-row-reverse sm:px-3 my-5">
                                <button
                                    className="fixed bottom-5 w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    onClick={handleClosePopup}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Preview;
