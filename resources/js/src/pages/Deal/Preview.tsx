import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/dealFormSlice";
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
import GenerateEmailLogList from "../../components/FilterFields/GenerateEmailLogList";
import GenerateCallList from "../../components/FilterFields/GenerateCallList";


const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.dealForm);
    

    useEffect(() => {
        dispatch(setPageTitle("Deal Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleDeal(modelId);
        if (modelResponse.status != 200) return;
        const deal = modelResponse.data.data.deal;
        dispatch(updateFormData(deal));
    };

    const headerDataToDisplay = [
        { label: "Deal Number", value: formState.deal_number },
        { label: "Deal Name", value: formState.deal_name },
        {
            label: "Account Owner",
            value: `${formState.account?.first_name ?? ""} ${
                formState.account?.last_name ?? ""
            }`,
        },
        {
            label: "Deal Owner",
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
    return !hasPermission(`read-deal`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelId}
                    exportTable={exportTable}
                    routeModel="deal"
                    permissionModel="deal"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">Deal</div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="Deal image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Deals Information"
                    leftObjects={[
                        { label: "Type", value: formState.deal_type },
                        { label: "Currency", value: formState.lead_reference },
                        {
                            label: "Contact Name",
                            value: `${formState.contact?.first_name ?? ""} ${
                                formState.contact?.last_name ?? ""
                            }`,
                        },
                        {
                            label: "Lead",
                            value: `${formState.lead?.first_name ?? ""} ${
                                formState.lead?.last_name ?? ""
                            }`,
                        },
                        {
                            label: "Invoice",
                            value: `${formState.invoice?.subject ?? ""}`,
                        },
                        {
                            label: "RFQ",
                            value: `${formState.invoice?.rfq_name ?? ""}`,
                        },
                        {
                            label: "Quote",
                            value: `${formState.quote?.subject ?? ""}`,
                        },
                        {
                            label: "Sales Order",
                            value: `${formState.invoice?.sales_order ?? ""}`,
                        },
                    ]}
                    rightObjects={[
                        { label: "Amount", value: formState.amount },
                        {
                            label: "Closing Date",
                            value: formState.closing_date,
                        },
                        { label: "PipLine", value: formState.deal_pipeline },
                        { label: "Stage", value: formState.deal_stage },
                        { label: "Probability", value: formState.probability },
                        { label: "Next Step", value: formState.next_step },
                        {
                            label: "Lead Reference ",
                            value: formState.lead_reference,
                        },
                        {
                            label: "Exchange Rate",
                            value: formState.exchange_rate,
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <MultipleLineSectionPreview
                    sectionTitle="Description Information"
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
                <AttachmentSection modelId={modelId} modelName={"deal"} />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <GenerateCallList
                    permissionName="read-deal"
                    type="call"
                    routeName="fetchDealCall"
                    modelId={modelId}
                    title="Call Logs"
                /> 
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <GenerateEmailLogList
                    permissionName="read-deal"
                    type="email-log"
                    routeName="fetchDealEmailLogs"
                    modelId={modelId}
                    title="Email Logs"
                />
            </div>
        </div>
    );
};
export default Preview;
