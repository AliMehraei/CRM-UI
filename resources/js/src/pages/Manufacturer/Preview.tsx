import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/leadFormSlice";
import {displayImage, displayFile} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import AttachmentSection from "../../components/FormFields/AttachmentSection";

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.leadForm);

    useEffect(() => {
        dispatch(setPageTitle('Manufacturer Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleManufacturer(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.manufacturer;
        dispatch(updateFormData(model));
    };


    const headerDataToDisplay = [
        {label: "Manufacturer Name", value: formState.name},
        {label: "Account Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}`},
        {label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}`},
        {label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}`}
    ];
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    if (loading)
        return <LoadingSasCrm/>;
    return (
        (!hasPermission(`read-manufacturer`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="manufacturer"
                        permissionModel="manufacturer"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Manufacturer</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Lead image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay}/>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Manufacture Information"
                        leftObjects={[
                            {label: "Alias Names", value: formState.alias_names},
                            {label: "Octo API Id", value: formState.octo_api_id},
                        ]}
                        rightObjects={[
                            {label: "Active", value: formState.is_active ? 'Yes' : 'No'},
                            {label: "Currency", value: formState.currency},
                        ]}
                    />

                    {/* TODO: add Vendor_Line Card & Vendor_Strong Lines */}

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <AttachmentSection modelId={modelID} modelName={'manufacturer'}/>
                </div>
            </div>
        )
    );
};
export default Preview;
