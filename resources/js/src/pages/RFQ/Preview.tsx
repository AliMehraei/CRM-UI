import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { updateFormData } from "../../store/rfqFormSlice";
import {
    displayImage,
    displayFile,
    getStatusLabel,
    StatusOption,
    formatDate,
} from "../../components/Functions/CommonFunctions";
import ActionButtonsPreview from "../../components/Preview/ActionButtonsPreview";
import InformationSectionPreview from "../../components/Preview/InformationSectionPreview";
import MultipleLineSectionPreview from "../../components/Preview/MultipleLineSectionPreview";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import { ViewIcon } from "../../components/FormFields/CommonIcons";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.rfqFormSlice);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface ExtraEmailLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemEmailLog, setSelectedItemEmailLog] =
        useState<ExtraEmailLogInformation | null>(null);

    useEffect(() => {
        dispatch(setPageTitle("RFQ Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleRfq(modelID);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.rfq;
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

    const RfqHeaderSection = {
        leftObjects: [
            {
                label: "Account Name",
                value: `${formState.account?.account_name}`,
            },
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
                label: "Customer RFQ No",
                value: formState.qoute?.customer_rfq_no,
            },
            {
                label: "Project Name / Application",
                value: `${formState.project_name}`,
            },
            { label: " RFQ Source", value: `${formState.rfq_source}` },
            { label: "RFQ Type", value: `${formState.rfq_type}` },
            { label: "RFQ Date", value: `${formState.rfq_}` },
            { label: "Status", value: `${formState.status}` },
            { label: "RFQ Date", value: `${formState.created_at}` },
            { label: "Date History", value: `${formState.date_history}` },
            { label: "Exchange Rate", value: `${formState.exchange_rate}` },
            { label: "Portal BOM id", value: `${formState.portal_bom_id}` },
        ],
        rightObjects: [
            { label: "RFQ Name", value: `${formState.rfq_name}` },
            {
                label: "Owner Name",
                value: `${formState.owner?.first_name} ${formState.owner?.last_name}`,
            },
            { label: "Deal Stage", value: `${formState.deal_stage}` },
            { label: "Lost Reason", value: `${formState.lead?.lost_reason}` }, //Todo : from where ?
            {
                label: "Lost Reason Comment",
                value: `${formState.lead?.lost_reason}`,
            }, //Todo : from where ?
            {
                label: "PM User",
                value: `${formState.pmUser?.first_name} ${formState.pmUser?.last_name}`,
            },
            {
                label: "Customer RFQ File",
                value: (
                    <AttachmentDownloadButton
                        formAttribute={"customer_rfq_file"}
                        modelName="rfq"
                        formState={formState}
                    />
                ),
            },
            {
                label: "Created By",
                value: `${formState.creator?.first_name} ${formState.creator?.last_name}`,
            },
            {
                label: "Modified By",
                value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}`,
            },
            { label: "RFQ Dead Line", value: `${formState.rfq_dead_line}` },
            { label: "Currency ", value: `${formState.currency}` },
            {
                label: "Vendor_RFQs_Line",
                value: `${formState.vendor_rfqs_line?.map(
                    (vrl: any) => vrl.vendor_name
                )}`,
            },
        ],
    };

    const RfqLineSection = {
        leftObjects: [
            { label: "Product Name", value: `${formState.product?.name}` },
            { label: "Customer Part Id", value: formState.customer_part_id },
            { label: "Quantity", value: formState.quantity },
            { label: "Target Price", value: formState.target_price },
            {
                label: "Total",
                value:
                    parseFloat(formState.quantity) *
                    parseFloat(formState.target_price),
            },
        ],
        rightObjects: [
            {
                label: "Alternative Products",
                value: `${formState.rfq_product_alternatives?.map(
                    (data: any) => data.product_name
                )}`,
            },
        ],
    };

    const ConvertToQuote = {
        leftObjects: [
            {
                label: "Availability",
                value: `${formState.availability?.availability_name}`,
            },
        ],
        rightObjects: [
            { label: "Excess", value: `${formState.excess?.excess_name}` },
        ],
    };

    const Development = {
        leftObjects: [
            {
                label: "Processed for VRFQ round 1",
                value: `${formState.processed_for_vrfq_round_1}`,
            },
            {
                label: "Processed for VRFQ round 2",
                value: `${formState.processed_for_vrfq_round_2}`,
            },
            {
                label: "Open Status Time",
                value: `${formState.open_status_date} ${formState.open_status_time}`,
            },
        ],
    };

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
    return !hasPermission(`read-rfq`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelID}
                    exportTable={exportTable}
                    routeModel="rfq"
                    permissionModel="rfq"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">RFQ</div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="RFQ image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InformationSectionPreview
                    title="Header"
                    leftObjects={RfqHeaderSection.leftObjects}
                    rightObjects={RfqHeaderSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="RFQ Line"
                    leftObjects={RfqLineSection.leftObjects}
                    rightObjects={RfqLineSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <MultipleLineSectionPreview
                    sectionTitle="Special Instructions"
                    data={[
                        {
                            label: "Special Instructions",
                            value: formState.special_instructions,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <MultipleLineSectionPreview
                    sectionTitle="Comment For Vendors "
                    data={[
                        {
                            label: "Comment For Vendors",
                            value: formState.comment,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Convert TO Quote"
                    leftObjects={ConvertToQuote.leftObjects}
                    rightObjects={ConvertToQuote.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Development"
                    leftObjects={Development.leftObjects}
                    rightObjects={null}
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
                <AttachmentSection modelId={modelID} modelName={"rfq"} />
                <div>
                    <TableSectionPreview
                        title="Email Logs"
                        items={formState.emaillogs}
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
