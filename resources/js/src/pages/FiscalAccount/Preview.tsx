import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/accountFormSlice";
import {
    displayImage,
    displayFile,
    formatDate,
} from "../../components/Functions/CommonFunctions";
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from "../../components/Preview/ActionButtonsPreview";
import InformationSectionPreview from "../../components/Preview/InformationSectionPreview";
import MultipleLineSectionPreview from "../../components/Preview/MultipleLineSectionPreview";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";
import { ViewIcon } from "../../components/FormFields/CommonIcons";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.accountForm);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface ExtraEmailLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemEmailLog, setSelectedItemEmailLog] =
        useState<ExtraEmailLogInformation | null>(null);

    useEffect(() => {
        dispatch(setPageTitle("Account Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const accountResponse = await api.fetchSingleAccount(modelId);
        if (accountResponse.status != 200) return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData(account));
    };

    const headerDataToDisplay = [
        { label: "Account Name", value: formState.account_name },
        { label: "Phone", value: formState.phone },
        {
            label: "Website",
            value: (
                <a
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
                    href={formState.website}
                >
                    {formState.website}
                </a>
            ),
        },
        {
            label: "Account Site",
            value: `${formState.shipping_city ?? ""} | ${
                formState.account_name ?? ""
            }`,
        },
        {
            label: "Account Owner",
            value: `${formState.owner?.first_name ?? ""} ${
                formState.owner?.last_name ?? ""
            }`,
        },
        {
            label: "PM User",
            value: `${formState.pmUser?.first_name ?? ""} ${
                formState.pmUser?.last_name ?? ""
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

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelId]);
    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-account`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelId}
                    exportTable={exportTable}
                    routeModel="account"
                    permissionModel="account"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Account
                    </div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="account image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="General Information"
                    leftObjects={[
                        {
                            label: "Contract Attachment",
                            value: (
                                <AttachmentDownloadButton
                                    formAttribute={"contract_attachment"}
                                    modelName="account"
                                    formState={formState}
                                />
                            ),
                        },
                        {
                            label: "Account Type",
                            value: formState.account_type,
                        },
                        {
                            label: "Contracts",
                            value: formState.account_contracts,
                        },
                        {
                            label: "Business Account",
                            value: formState.business_account ? "Yes" : "No",
                        },
                        { label: "Currency", value: formState.currency },
                    ]}
                    rightObjects={[
                        {
                            label: "Approved by",
                            value: `${formState.approvedBy?.first_name ?? ""} ${
                                formState.approvedBy?.last_name ?? ""
                            }`,
                        },
                        { label: "TAM", value: formState.tam },
                        {
                            label: "Exchange Rate",
                            value: formState.exchange_rate,
                        },
                        {
                            label: "Lead Reference",
                            value: formState.lead_reference,
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Account Information"
                    leftObjects={[
                        {
                            label: "Primary First Name",
                            value: formState.primary_first_name,
                        },
                        {
                            label: "Account Number",
                            value: formState.account_number,
                        },
                        { label: "Phone", value: formState.phone },
                        { label: "Fax", value: formState.fax },
                        {
                            label: "Email",
                            value: (
                                <a
                                    className="text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"mailto:" + formState.email}
                                >
                                    {formState.email}
                                </a>
                            ),
                        },
                        {
                            label: "Website",
                            value: (
                                <a
                                    className="text-primary"
                                    target="_blank"
                                    href={formState.website}
                                >
                                    {formState.website}
                                </a>
                            ),
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Primary Last Name",
                            value: formState.primary_last_name,
                        },
                        {
                            label: "Parent Account",
                            value: `${formState.parent?.first_name ?? ""} ${
                                formState.parent?.last_name ?? ""
                            }`,
                        },
                        {
                            label: "Child Account",
                            value: `${formState.child?.first_name ?? ""} ${
                                formState.child?.last_name ?? ""
                            }`,
                        },
                        {
                            label: "Double Check Status",
                            value: formState.double_check_status,
                        },
                        {
                            label: "DCheck",
                            value: formState.business_account ? "Yes" : "No",
                        },
                        {
                            label: "Has No Contacts",
                            value: formState.business_account ? "Yes" : "No",
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Terms and Shipping"
                    leftObjects={[
                        { label: "Incoterms", value: formState.incoterm },
                        {
                            label: "Payment Terms",
                            value: formState.payment_term,
                        },
                        { label: "Credit Line", value: formState.credit_line },
                    ]}
                    rightObjects={[
                        { label: "VAT No", value: formState.vat_no },
                        {
                            label: "Forwarder",
                            value: formState.parent?.forwarder ?? "",
                        },
                        {
                            label: "Child Account",
                            value: `${formState.child?.first_name ?? ""} ${
                                formState.child?.last_name ?? ""
                            }`,
                        },
                        {
                            label: "Forwarder Account no",
                            value: formState.forwarder_account_no,
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Address Information"
                    leftObjects={[
                        {
                            label: "Billing Street",
                            value: formState.billing_street,
                        },
                        {
                            label: "Billing City",
                            value: formState.billing_city,
                        },
                        {
                            label: "Billing Code",
                            value: formState.billing_code,
                        },
                        {
                            label: "Billing State",
                            value: formState.billing_state,
                        },
                        {
                            label: "Billing Country",
                            value: formState.billing_country,
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Shipping Street",
                            value: formState.shipping_street,
                        },
                        {
                            label: "Shipping City",
                            value: formState.shipping_city,
                        },
                        {
                            label: "Shipping Code",
                            value: formState.shipping_code,
                        },
                        {
                            label: "Shipping State",
                            value: formState.shipping_state,
                        },
                        {
                            label: "Shipping Country",
                            value: formState.shipping_country,
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <MultipleLineSectionPreview
                    sectionTitle="Description Information"
                    data={[
                        { label: "Description", value: formState.description },
                        {
                            label: "Last Activity Date",
                            value: formState.last_activity_date,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Technical information"
                    leftObjects={[
                        {
                            label: "ZohoBooksID",
                            value: formState.zoho_books_id,
                        },
                        { label: "BooksID EUR", value: formState.books_id_eur },
                        { label: "BooksID USD", value: formState.books_id_usd },
                    ]}
                    rightObjects={[
                        {
                            label: "BOM/Excess Total Uploading Rows",
                            value: formState.bom_total_row,
                        },
                        {
                            label: "Account Margin",
                            value: formState.account_margin,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Unused information"
                    leftObjects={[
                        {
                            label: "Purchasing Volume Current",
                            value: formState.purchasing_volume_current,
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Annual Revenue",
                            value: formState.annual_revenue,
                        },
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
                <AttachmentSection modelId={modelId} modelName={"account"} />
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
