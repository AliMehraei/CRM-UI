import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/excessFormSlice";
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
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";
import GenerateEmailLogList from "../../components/FilterFields/GenerateEmailLogList";
import GenerateCallList from "../../components/FilterFields/GenerateCallList";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.excessForm);

    useEffect(() => {
        dispatch(setPageTitle("Excess Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleExcess(modelId);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.excess;
        dispatch(updateFormData(model));
    };
    const headerDataToDisplay = [
        {
            label: "Account Name",
            value: `${formState.account?.account_name ?? ""}`,
        },
        { label: "Excess Name", value: formState.excess_name },
        {
            label: "Contact",
            value: `${formState.contact?.first_name ?? ""} ${
                formState.contact?.last_name ?? ""
            }`,
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
        {
            label: "Excess Owner",
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

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelId]);
    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-excess`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelId}
                    exportTable={exportTable}
                    routeModel="excess"
                    permissionModel="excess"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Excess
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
                            label: "Portal Excess Id",
                            value: formState.portal_excess_id,
                        },
                        {
                            label: "Excess Source",
                            value: formState.excess_source,
                        },
                        {
                            label: "Secondary Email",
                            value: (
                                <a
                                    className="text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={"mailto:" + formState.secondary_email}
                                >
                                    {formState.secondary_email}
                                </a>
                            ),
                        },
                        { label: "Currency", value: formState.currency },
                    ]}
                    rightObjects={[
                        {
                            label: "Excess File",
                            value: (
                                <AttachmentDownloadButton
                                    formAttribute={"excess_file"}
                                    modelName="excess"
                                    formState={formState}
                                />
                            ),
                        },
                        {
                            label: "Exchange Rate",
                            value: formState.exchange_rate,
                        },
                        {
                            label: "Email Opt Out",
                            value: formState.email_opt_out ? "Yes" : "No",
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Status"
                    leftObjects={[
                        { label: "Excess Type", value: formState.excess_type },
                    ]}
                    rightObjects={[
                        { label: "Excess No", value: formState.excess_no },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Excess Line"
                    leftObjects={[
                        {
                            label: "Product name",
                            value: formState.product?.product_name ?? "",
                        },
                        {
                            label: "Customer Internal No.",
                            value: formState.customer_internal_no ?? "",
                        },
                        { label: "Quantity", value: formState.quantity },
                    ]}
                    rightObjects={[
                        { label: "Cost", value: formState.cost },
                        { label: "Date Code", value: formState.date_code },
                        { label: "SPQ", value: formState.spq },
                        { label: "MOQ", value: formState.moq },
                        { label: "Comment", value: formState.comment },
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
                <AttachmentSection modelId={modelId} modelName={"excess"} />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <GenerateCallList
                    permissionName="read-excess"
                    type="call"
                    routeName="fetchExcessCall"
                    modelId={modelId}
                    title="Call Logs"
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div>
                    <GenerateEmailLogList
                        permissionName="read-excess"
                        type="email-log"
                        routeName="fetchExcessEmailLogs"
                        modelId={modelId}
                        title="Email Logs"
                    />
                </div>
            </div>
        </div>
    );
};
export default Preview;
