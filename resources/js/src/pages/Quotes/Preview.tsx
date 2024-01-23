import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/quoteFormSlice";
import {
    displayImage,
    displayFile,
    getStatusLabel,
    StatusOption,
    notifyErrorMessage,
    notifySuccess,
    formatDate,
} from "../../components/Functions/CommonFunctions";
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from "../../components/Preview/ActionButtonsPreview";
import InformationSectionPreview from "../../components/Preview/InformationSectionPreview";
import MultipleLineSectionPreview from "../../components/Preview/MultipleLineSectionPreview";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";
import {
    EmailIcon,
    EmailIconOutLine,
} from "../../components/FormFields/CommonIcons";
import Swal from "sweetalert2";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.quoteForm);

    useEffect(() => {
        dispatch(setPageTitle("Quote Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleQuote(modelID);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.quote;
        dispatch(updateFormData(model));
    };

    const quotationEmail = async () => {
        Swal.fire({
            icon: "info",
            title: "Are you sure?",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Send",
            denyButtonText: "Send With Attachment",
            denyButtonColor: "#000000",
            padding: "2em",
            customClass: {
                container: "sweet-alerts",
                denyButton: "btn btn-info ", // Add your custom class here
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                notifySuccess("Processing Sending Email");
                const emailResponse = await api.quotationEmail(modelID);
                if (emailResponse.status != 200)
                    notifyErrorMessage("Problem on sending email");
                notifySuccess("Email sent successfully");
            }
            if (result.isDenied) {
                notifySuccess("Processing Sending Email");
                const emailResponse = await api.quotationEmail(modelID, true);
                if (emailResponse.status != 200)
                    notifyErrorMessage("Problem on sending email");
                notifySuccess("Email sent successfully");
            }
        });
    };

    const quotationEmailProactive = async () => {
        Swal.fire({
            icon: "info",
            title: "Are you sure?",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Send",
            denyButtonText: "Send With Attachment",
            denyButtonColor: "#000000",
            padding: "2em",
            customClass: {
                container: "sweet-alerts",
                denyButton: "btn btn-info ", // Add your custom class here
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                notifySuccess("Processing Sending Email");
                const emailResponse = await api.quotationEmailProactive(
                    modelID
                );
                if (emailResponse.status != 200)
                    notifyErrorMessage("Problem on sending email");
                notifySuccess("Email sent successfully");
            }
            if (result.isDenied) {
                notifySuccess("Processing Sending Email");
                const emailResponse = await api.quotationEmailProactive(
                    modelID,
                    true
                );
                if (emailResponse.status != 200)
                    notifyErrorMessage("Problem on sending email");
                notifySuccess("Email sent successfully");
            }
        });
    };

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    useEffect(() => {
        if (formState.quote_file) {
            displayFile("quote", "quote_file", formState.quote_file).then(
                (data) => {
                    dispatch(updateFormData({ [`quote_file_preview`]: data })); //TODO Fix
                }
            );
        }
    }, []);
    const SOTypeOption = [
        { value: "none", label: "-None-" },
        { value: "single_order", label: "Single Order" },
        { value: "frame_contract", label: "Frame Contract" },
        { value: "call_off", label: "Call Off" },
        { value: "forecast", label: "Forecast" },
    ];

    const quoteHeaderSection = {
        leftObjects: [
            {
                label: "Converted By",
                value: `${
                    formState.converted_by
                        ? formState.converted_by?.first_name +
                          " " +
                          formState.converted_by?.last_name
                        : ""
                }`,
            },
            { label: "Customer RFQ No", value: formState.customer_rfq_no },
            { label: "Quote Chance", value: `${formState.quote_chance}` },
            { label: "Currency", value: `${formState.currency}` },
        ],
        rightObjects: [
            {
                label: "PM User",
                value: `${formState.pm_user?.first_name ?? ""} ${
                    formState.pm_user?.last_name ?? ""
                }`,
            },
            { label: "Deals Name", value: `${formState.deal?.deal_name}` },
            { label: "Quote Stage", value: `${formState.quote_stage}` },
            {
                label: "Quote File(Excel)",
                value: (
                    <AttachmentDownloadButton
                        formAttribute={"quote_file"}
                        modelName="quote"
                        formState={formState}
                    />
                ),
            },

            { label: "Exchange Rate ", value: `${formState.exchange_rate}` },
        ],
    };

    const QuoteInformationSection = {
        leftObjects: [
            { label: "Quote valid", value: `${formState.quote_valid}` },
            { label: "Proactive Offer", value: `${formState.proactive_offer}` },
        ],
        rightObjects: [{ label: "Rating", value: `${formState.rating}` }],
    };

    const QuoteLineSection = {
        leftObjects: [
            {
                label: "Product Name",
                value: `${formState.product?.product_name}`,
            }, //TODO : where is it ?
            {
                label: "Customer part ID",
                value: `${formState.customer_part_id}`,
            },
        ],
        rightObjects: [
            { label: "Quantity", value: `${formState.quantity}` },
            { label: "List Price", value: `${formState.list_price}` },
            { label: "Lead Time", value: `${formState.lead_time}` },
        ],
    };

    const SourceSection = {
        leftObjects: [
            { label: "Vendor", value: `${formState.vendor?.vendor_name}` },
            { label: "Availability No", value: `${formState.availability_no}` },
            {
                label: "Availability Date",
                value: `${formState.availability_date}`,
            },
            {
                label: "Availability",
                value: `${formState.availability?.availability_name}`,
            },
        ],
        rightObjects: [
            { label: "Cost", value: `${formState.cost}` },
            { label: "LT vendor", value: `${formState.lt_vendor}` },
            { label: "SPQ", value: `${formState.spq}` },
            {
                label: "Quantity in Stock",
                value: `${formState.quantity_in_stock}`,
            },
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
            key: "customer_part_id",
            label: "Customer Part ID",
        },
        {
            key: "quantity",
            label: "Quantity",
        },
        {
            key: "spq",
            label: "SPQ",
        },
        {
            key: "list_price",
            label: "List Price",
        },
        {
            key: "lead_time",
            label: "Lead Time",
        },
        {
            key: "date_code",
            label: "Date Code",
        },
        {
            key: "amount",
            label: "Amount",
        },
        {
            key: "comment",
            label: "Comment",
        },
    ];
    const headerDataToDisplay = [
        {
            label: "Account Name",
            value: `${formState.account?.account_name ?? ""} `,
        },
        {
            label: "Contact Name",
            value: `${formState.contact?.first_name ?? ""} ${
                formState.contact?.last_name ?? ""
            } `,
        },
        { label: "RFQ Name", value: `${formState.rfq?.rfq_name ?? ""} ` },
        { label: "Subject", value: `${formState.subject ?? ""} ` },
        {
            label: "Quote Owner",
            value: `${formState.owner?.first_name ?? ""} ${
                formState.owner?.last_name ?? ""
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
    ];

    const emailLogColumns = [
        {
            label: "Subject",
            key: "subject",
        },

        {
            label: "Reciver Mail",
            key: "receiver_mail",
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
    ];
    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-quote`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelID}
                    exportTable={exportTable}
                    routeModel="quotes"
                    permissionModel="quote"
                    hasDownloadPdf={true}
                />
                <button
                    type="button"
                    className="btn btn-info gap-2"
                    onClick={quotationEmail}
                >
                    <EmailIcon />
                    Quotation Email
                </button>
                <button
                    type="button"
                    className="btn btn-info gap-2"
                    onClick={quotationEmailProactive}
                >
                    <EmailIconOutLine />
                    Quotation Proactive Email
                </button>
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Quote
                    </div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="Quote image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Header"
                    leftObjects={quoteHeaderSection.leftObjects}
                    rightObjects={quoteHeaderSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Status"
                    leftObjects={QuoteInformationSection.leftObjects}
                    rightObjects={QuoteInformationSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <TableSectionPreview
                    title="Quote Items"
                    items={formState.items}
                    columns={columns}
                    total={formState.quote_total}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Quote Line"
                    leftObjects={QuoteLineSection.leftObjects}
                    rightObjects={QuoteLineSection.rightObjects}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                <InformationSectionPreview
                    title="Source"
                    leftObjects={SourceSection.leftObjects}
                    rightObjects={SourceSection.rightObjects}
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
                <AttachmentSection modelId={modelID} modelName={"quote"} />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <TableSectionPreview
                    title="Email Logs"
                    items={formState.emaillogs}
                    columns={emailLogColumns}
                />
            </div>
        </div>
    );
};
export default Preview;
