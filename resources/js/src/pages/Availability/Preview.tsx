import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { updateFormData } from "../../store/availabilityFormSlice";
import {
    displayImage,
    displayFile,
    formatDate,
} from "../../components/Functions/CommonFunctions";
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from "../../components/Preview/ActionButtonsPreview";
import InformationSectionPreview from "../../components/Preview/InformationSectionPreview";
import MultipleLineSectionPreview from "../../components/Preview/MultipleLineSectionPreview";
import TableSectionPreview from "../../components/Preview/TableSectionPreview";
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";
import { ViewIcon } from "../../components/FormFields/CommonIcons";
import ExtraEmailLogDataSectionPreview from "../../components/Preview/ExtraEmailLogDataSectionPreview";
import GenerateEmailLogList from "../../components/FilterFields/GenerateEmailLogList";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.availabilityForm);

    useEffect(() => {
        dispatch(setPageTitle("Availability Preview"));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleAvailability(modelId);
        if (modelResponse.status != 200) return;
        const model = modelResponse.data.data.availability;
        dispatch(updateFormData(model));
    };
    const headerDataToDisplay = [
        { label: "Vendor Name", value: formState.vendor?.vendor_name ?? "" },
        { label: "Vendor Quote No", value: formState.vendor_quote_no },
        { label: "Vendor Source", value: formState.availability_source },
        {
            label: "Availability Owner",
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

    const priceBreakColumns = [
        {
            key: "cost_3000",
            label: "Cost_3000",
        },
        {
            key: "cost_1000",
            label: "Cost_1000",
        },
        {
            key: "cost_500",
            label: "cost_500",
        },
        {
            key: "cost_250",
            label: "Cost_250",
        },
        {
            key: "cost_25",
            label: "Cost_25",
        },
        {
            key: "cost_10",
            label: "Cost_10",
        },
        {
            key: "cost_1",
            label: "Cost_1",
        },
    ];


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelId]);
    if (loading) return <LoadingSasCrm />;
    return !hasPermission(`read-availability`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <ActionButtonsPreview
                    loading={loading}
                    hasPermission={hasPermission}
                    modelId={modelId}
                    exportTable={exportTable}
                    routeModel="availability"
                    permissionModel="availability"
                />
            </div>
            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">
                        Availability
                    </div>
                    <div className="shrink-0">
                        <img
                            src={displayImage(formState.image_data)}
                            alt="vendor image"
                            className="w-20 ltr:ml-auto rtl:mr-auto"
                        />
                    </div>
                </div>
                <InfoListComponent data={headerDataToDisplay} />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Availability Information"
                    leftObjects={[
                        {
                            label: "Availability Name",
                            value: formState.availability_name,
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Availability File",
                            value: (
                                <AttachmentDownloadButton
                                    formAttribute={"availability_file"}
                                    modelName="availability"
                                    formState={formState}
                                />
                            ),
                        },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Status Information"
                    leftObjects={[
                        {
                            label: "Availability Type",
                            value: formState.availability_type,
                        },
                        { label: "Valid", value: formState.valid },
                    ]}
                    rightObjects={[
                        {
                            label: "Availability Date",
                            value: formState.created_at,
                        },
                        {
                            label: "Availability No",
                            value: formState.availability_no,
                        },
                        { label: "Rating", value: formState.rating },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Quote Line"
                    leftObjects={[
                        {
                            label: "Product name",
                            value: formState.product?.product_name ?? "",
                        },
                        { label: "SKU name", value: formState.quantity },
                        {
                            label: "In Stock Quantity",
                            value: formState.in_stock_quantity,
                        },
                        { label: "Currency", value: formState.currency },
                        { label: "Cost", value: formState.cost },
                        {
                            label: "Exchange Rate",
                            value: formState.exchange_rate,
                        },
                    ]}
                    rightObjects={[
                        { label: "Lead Time", value: formState.vat_no },
                        { label: "Date Code", value: formState.forwarder },
                        { label: "SPQ", value: formState.forwarder_account_no },
                        { label: "MOQ", value: formState.forwarder_account_no },
                        { label: "Comment", value: formState.comment },
                    ]}
                />

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <InformationSectionPreview
                    title="Development Information"
                    leftObjects={[
                        {
                            label: "From Our Inventory",
                            value: formState.from_our_inventory ? "Yes" : "No",
                        },
                    ]}
                    rightObjects={[
                        {
                            label: "Portal Availability Id",
                            value: formState.portal_availability_id,
                        },
                    ]}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <TableSectionPreview
                    title="Price-Breaks Items"
                    items={formState.price_breaks}
                    columns={priceBreakColumns}
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
                    modelId={modelId}
                    modelName={"availability"}
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <GenerateEmailLogList
                        permissionName="read-availability"
                        type="email-log"
                        routeName="fetchAvailabilityEmailLogs"
                        modelId={modelId}
                        title="Email logs"
                />
            </div>
        </div>
    );
};
export default Preview;
