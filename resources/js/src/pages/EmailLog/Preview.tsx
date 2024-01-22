import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/emailLogFormSlice";
import { displayImage, displayFile, formatDate } from '../../components/Functions/CommonFunctions';
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import AttachmentSection from "../../components/FormFields/AttachmentSection";
import AttachmentDownloadButton from "../../components/FormFields/AttachmentDownloadButton";

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.emailLogForm);
    useEffect(() => {
        dispatch(setPageTitle('Email Log Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const emailLogResponse = await api.fetchSingleEmailLog(modelId);
        if (emailLogResponse.status != 200)
            return;
        const emailLog = emailLogResponse.data.data;
        dispatch(updateFormData(emailLog));
    };

    const headerDataToDisplay = [
        { label: "Subject", value: formState.subject },
        { label: "Receiver Mail", value: formState.receiver_mail },
        { label: "Sender Email", value: formState.sender_email },
        { label: "Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}` },
        { label: "Sender Name", value: formState.sender_name },
        { label: "Sender Type", value: formState.sender_type },
        { label: "Status", value: formState.status },
        { label: "Mail Status", value: formState.mail_status },
        { label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}` },
        { label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}` }
    ];
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);

        });
    }, [modelId]);
    if (loading)
        return <LoadingSasCrm />;
    return (
        (!hasPermission(`read-email-log`) || loading) ? (
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
                        <div className="text-2xl font-semibold uppercase">Email Log</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="account image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

                    

                </div>
            </div>
        )
    );
};
export default Preview;
