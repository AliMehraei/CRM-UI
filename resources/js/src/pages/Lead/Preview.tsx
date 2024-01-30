import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/leadFormSlice";
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
    const formState = useSelector((state: any) => state.leadForm);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface ExtraEmailLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemEmailLog, setSelectedItemEmailLog] =
        useState<ExtraEmailLogInformation | null>(null);

    useEffect(() => {
        dispatch(setPageTitle("Lead Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleLead(modelID);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.lead;
        dispatch(updateFormData(model));
    };
    const LeadStatus = [
        { value: "none", label: "-None-" },
        {
            value: "0.0 Cold lead / unqualified (CLU)",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>
                    0.0 Cold lead / unqualified (CLU)
                </>
            ),
        },
        {
            value: "1.0 Cold lead qualified (CLQ)",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>
                    1.0 Cold lead qualified (CLQ)
                </>
            ),
        },
        {
            value: "2.0 First contact made (FCM)",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>
                    2.0 First contact made (FCM)
                </>
            ),
        },
        {
            value: "3.0 warm lead qualified (WLQ)",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>
                    3.0 warm lead qualified (WLQ)
                </>
            ),
        },
        {
            value: "4.0 Hot lead (HLQ)",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>
                    4.0 Hot lead (HLQ)
                </>
            ),
        },
        {
            value: "Close Lead / Lost Lead",
            label: (
                <>
                    {" "}
                    <span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>
                    Close Lead / Lost Lead
                </>
            ),
        },
    ];
    const getStatusLabel = (status: any) => {
        const statusObj = LeadStatus.find((item) => item.value === status);
        return statusObj ? statusObj.label : status;
    };
    const headerDataToDisplay = [
        { label: "Lead Status", value: getStatusLabel(formState.status) },
        {
            label: "Full Name",
            value: `${formState.prefix_first_name ?? ""} ${
                formState.first_name ?? ""
            } ${formState.last_name ?? ""}`,
        },
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
        { label: "Company", value: formState.company },
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
        {
            label: "Account Owner",
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
    return !hasPermission(`read-lead`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelID}
                    exportTable={exportTable}
                    routeModel="lead"
                    permissionModel="lead"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">Lead</div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="Lead image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Lead Information"
                    leftObjects={[
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
                        { label: "Lost Reason", value: formState.lost_reason },
                        {
                            label: "Lost Reason Comment",
                            value: formState.lost_reason_comment,
                        },
                        { label: "Lead Source", value: formState.lead_source },
                    ]}
                    rightObjects={[
                        { label: "Industry", value: formState.industry },
                        {
                            label: "Email Opt Out",
                            value: formState.email_opt_out ? "Yes" : "No",
                        },
                        { label: "Company", value: formState.company },
                        {
                            label: "Company Type",
                            value: formState.company_type,
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
                        { label: "City", value: formState.city },
                        { label: "Zip Code", value: formState.zip_code },
                    ]}
                    rightObjects={[
                        { label: "Country", value: formState.country },
                        { label: "State", value: formState.state },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <MultipleLineSectionPreview
                    sectionTitle="Communication Details / History"
                    data={[
                        { label: "Description", value: formState.description },
                        {
                            label: "Details and notes",
                            value: formState.detail_note,
                        },
                        {
                            label: "LinkedIn Communication",
                            value: formState.linkedin_communication,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Fields with Secondary Priority"
                    leftObjects={[
                        {
                            label: "No.of Employees",
                            value: formState.no_of_employees,
                        },
                        { label: "Currency", value: formState.currency },
                    ]}
                    rightObjects={[
                        {
                            label: "Lead Reference",
                            value: formState.exchange_rate,
                        },
                        {
                            label: "Job Position",
                            value: formState.job_position,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Development information"
                    leftObjects={[
                        {
                            label: "Imported Qualification Status",
                            value: formState.imported_qualification_status,
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Last Modified",
                            value: formState.last_modified,
                        },
                        {
                            label: "Created Date",
                            value: formState.created_date,
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
                <AttachmentSection modelId={modelID} modelName={"lead"} />
                {/* Aflaki Call log component */}
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
