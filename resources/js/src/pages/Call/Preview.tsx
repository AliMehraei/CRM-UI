import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/callFormSlice";
import {displayImage, displayFile, getStatusLabel} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.callForm);

    useEffect(() => {
        dispatch(setPageTitle('Call Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleCall(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.call;
        dispatch(updateFormData(model));
    };

    const CallableList = [
        {value: "App\\Models\\Lead", label: "Lead"},
        {value: "App\\Models\\Contact", label: "Contact"},
    ];
    const CallableType = CallableList.find((item) => item.value === formState.callable_type);

    const RelatableList = [
        {value: "App\\Models\\Account", label: "Account", labelField: 'account_name'},
        {value: "App\\Models\\Vendor", label: "Vendor", labelField: 'vendor_name'},
        {value: "App\\Models\\Quote", label: "Quote", labelField: 'subject'},
        {value: "App\\Models\\Rfq", label: "Rfq", labelField: 'rfq_name'},
        {value: "App\\Models\\Excess", label: "Excess", labelField: 'excess_name'},
        {
            value: "App\\Models\\Availability",
            label: "Availability",
            labelField: 'availability_name'
        },
        {value: "App\\Models\\Product", label: "Product", labelField: 'product_name'},
        {value: "App\\Models\\Manufacturer", label: "Manufacturer", labelField: 'name'},
        {value: "App\\Models\\Deal", label: "Deals", labelField: 'deal_name'},
        {value: "App\\Models\\SalesOrder", label: "Sales Order", labelField: 'subject'},
        {value: "App\\Models\\PurchaseOrder", label: "Purchase Order", labelField: 'subject'},
        {value: "App\\Models\\Invoice", label: "Invoice", labelField: 'subject'},
        {value: "App\\Models\\VendorRfq", label: "Vendor Rfq", labelField: 'vendor_rfq_name'},
    ];
    const relatableType = RelatableList.find((item) => item.value === formState.relatable_type);

   
    const relatedToLabel =
    relatableType && formState.relatable[relatableType.labelField]
        ? formState.relatable[relatableType.labelField]
        :  'Unknown';
    
    
    
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    const Priority = [
        {value: '-None-', label: '-None-'},
        {value: 'Account or Contact exist already', label: 'Account or Contact exist already'},
        {value: 'Wrong Branch', label: 'Wrong Branch'},
        {value: 'Wrong Department', label: 'Wrong Department'},
        {value: 'Does Not Exist Anymore', label: 'Does Not Exist Anymore'},
        {value: 'Bankruptcy', label: 'Bankruptcy'},
        {value: 'Hoch', label: 'Hoch'},
        {value: 'Other', label: 'Other'},
    ];

    const CallStatus = [
        {value: '-None-', label: '-None-'},
        {value: 'Abgeschlossen', label: 'Abgeschlossen'},
        {value: '0.0 Cold call / unqualified (CLU)', label: '0.0 Cold call / unqualified (CLU)'},
        {value: '1.0 Cold call qualified (CLQ)', label: '1.0 Cold call qualified (CLQ)'},
        {value: '2.0 First contact made (FCM)', label: '2.0 First contact made (FCM)'},
        {value: '3.0 warm call qualified (WLQ)', label: '3.0 warm call qualified (WLQ)'},
        {value: '4.0 Hot call (HLQ)', label: '4.0 Hot call (HLQ)'},
        {value: 'Close Call / Lost Call', label: 'Close Call / Lost Call'},
    ];
    
    const callInformationSection = {
        'leftObjects': [
            {label: "Call Owner", value: `${formState.owner?.first_name} ${formState.owner?.last_name}`},
            {label: "Subject", value: `${formState.subject}`},
            {label: "Due Date", value: formState.due_date},
            {
                label: "Call To",
                value: CallableType?.label+': '+`${formState.callable?.name ?? formState.callable?.first_name + ' ' + formState.callable?.last_name} `
            },
            {
                label: 'Related To',
            value: relatableType?.label+': '+ relatedToLabel,
            },
            {label: "Call Type",value: `${formState.type}`},
        ],
        'rightObjects': [
            {label: "Priority", value: getStatusLabel(formState.priority, Priority)},
            {label: "Repeat", value: formState.repeat},

            {label: "Created By", value: `${formState.creator?.first_name} ${formState.creator?.last_name}`},
            {label: "Modified By", value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}`},
            {label: "Closed Time", value: `${formState.closed_date}`},

        ],
    };

    
    if (loading)
        return <LoadingSasCrm/>;
    return (
        (!hasPermission(`read-call`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="call"
                        permissionModel="call"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Call</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Call image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InformationSectionPreview
                        title="Call Information"
                        leftObjects={callInformationSection.leftObjects}
                        rightObjects={callInformationSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Description Information"
                        data={[
                            {label: 'Description', value: formState.description},
                        ]}/>
                </div>
            </div>
        )
    );
};
export default Preview;
