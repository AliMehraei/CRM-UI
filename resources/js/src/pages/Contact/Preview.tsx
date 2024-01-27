import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, NavLink } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/contactFormSlice";
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
import { ViewIcon } from "../../components/FormFields/CommonIcons";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.contactForm);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface ExtraEmailLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemEmailLog, setSelectedItemEmailLog] =
        useState<ExtraEmailLogInformation | null>(null);

    useEffect(() => {
        dispatch(setPageTitle("Contact Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleContact(modelID);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };

    const headerDataToDisplay = [
        {
            label: "First Name",
            value: `${formState.prefix_first_name} ${formState.first_name}`,
        },
        { label: "Last Name", value: `${formState.last_name}` },

        { label: "Job Description", value: formState.job_description },
        { label: "Contact Type", value: formState.contact_type },
        {
            label: "Account Name",
            value: (
                <NavLink
                    to={`/account/preview/${formState.account_id}`}
                    className=" hover:text-info"
                >
                    {formState.account?.account_name}
                </NavLink>
            ),
        },
        { label: "Contact Source", value: formState.contact_source },
        {
            label: "Contact Owner",
            value: `${formState.owner?.first_name} ${formState.owner?.last_name}`,
        },

        { label: "Contact Status", value: formState.contact_status },
        // { label: "Lead Ursprung", value:  formState.contact_type },

        {
            label: "Created By",
            value: `${formState.creator?.first_name} ${formState.creator?.last_name}`,
        },
        {
            label: "Modified By",
            value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}`,
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
    }, [modelID]);
    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-contact`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelID}
                    exportTable={exportTable}
                    routeModel="contact"
                    permissionModel="contact"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Contact
                    </div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="Contact image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Contact Information"
                    leftObjects={[
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
                        { label: "Mobile", value: formState.mobile },
                        { label: "Phone", value: formState.phone },
                        { label: "Department", value: formState.department },
                        { label: "Asst Phone", value: formState.asst_phone },
                        { label: "Home Phone", value: formState.home_phone },
                        { label: "Other Phone", value: formState.other_phone },
                        { label: "Fax", value: formState.fax },
                    ]}
                    rightObjects={[
                        {
                            label: "Last Activity Date",
                            value: formState.last_activity_date,
                        },
                        {
                            label: "Reporting To",
                            value: formState.reporting_to,
                        },
                        {
                            label: "LinkedIn Contact",
                            value: formState.linkedin,
                        },
                        {
                            label: "Portal Access",
                            value: formState.portal_access,
                        },
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
                    ]}
                    rightObjects={[
                        {
                            label: "Job Description",
                            value: formState.job_description,
                        },
                        {
                            label: "Contact LinkedIn",
                            value: formState.linkedin_contact,
                        },
                        {
                            label: "Company LinkedIn",
                            value: formState.linkedin_company,
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Address Information"
                    leftObjects={[
                        {
                            label: "Mailing Country",
                            value: formState.mailing_country,
                        },
                        {
                            label: "Mailing City",
                            value: formState.mailing_city,
                        },
                        { label: "Mailing Zip", value: formState.mailing_code },
                    ]}
                    rightObjects={[
                        {
                            label: "Mailing State",
                            value: formState.mailing_state,
                        },
                        {
                            label: "Mailing Street",
                            value: formState.mailing_street,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <MultipleLineSectionPreview
                    sectionTitle="Communication Details / History"
                    data={[
                        { label: "Description", value: formState.description },
                        {
                            label: "LinkedIn Communication",
                            value: formState.linkedin_communication,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                {/* <InformationSectionPreview
                        title="Field Visit Summary"
                        leftObjects={[
                            { label: "No.of Employees", value: formState.company_employee_count },
                            { label: "Title", value: formState.books_id_eur },
                            { label: "Currency", value: formState.currency }
                        ]}
                        rightObjects={[
                            { label: "Contact Reference", value: formState.exchange_rate },
                            { label: "Job Position", value: formState.job_position }
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                <InformationSectionPreview
                    title="Fields with Secondary Priority"
                    leftObjects={[
                        {
                            label: "Approved By",
                            value: `${
                                formState.approved_by?.first_name ?? "-"
                            } ${formState.approved_by?.last_name ?? "-"}`,
                        },
                        {
                            label: "Books Contact",
                            value: formState.book_contact ? "Yes" : "No",
                        },
                        {
                            label: "Contact Activity",
                            value: formState.contact_activity,
                        },
                        { label: "Title", value: formState.title },
                        {
                            label: "Private Email",
                            value: formState.private_email,
                        },
                        {
                            label: "Secondary Email",
                            value: formState.secondary_email,
                        },
                        {
                            label: "Portal Operation Tag",
                            value: formState.portal_operation_tag,
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Email Opt Out",
                            value: formState.email_opt_out ? "Yes" : "No",
                        },
                        {
                            label: "Lead Reference",
                            value: formState.lead_reference,
                        },
                        {
                            label: "Double Check Status",
                            value: formState.double_check_status,
                        },
                        {
                            label: "D Check",
                            value: formState.d_check ? "Yes" : "No",
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
                <AttachmentSection modelId={modelID} modelName={"contact"} />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
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
