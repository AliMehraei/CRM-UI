import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/taskFormSlice";
import {displayImage, displayFile, getStatusLabel} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import AttachmentSection from "../../components/FormFields/AttachmentSection";

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [relatedToLabel, setRelatedToLabel] = useState('');
    const [moduleableType, setModuleableType] = useState({});
    const [UserabelType, setUserabelType] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.taskForm);

    useEffect(() => {
        dispatch(setPageTitle('Task Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleTask(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.task;
        dispatch(updateFormData(model));
    };


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);

    const UserabelList = [
        {value: "App\\Models\\Lead", label: "Lead"},
        {value: "App\\Models\\Contact", label: "Contact"},
    ];
    
    const ModuleableList = [
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
    
   
   

    useEffect(() => {
        const rel = ModuleableList.find((item) => item.value === formState.moduleable_type)
        setModuleableType(rel);
        if(formState.moduleable)  {  
            setRelatedToLabel(formState.moduleable[rel?.labelField]);
        
        }

        setUserabelType(UserabelList.find((item) => item.value === formState.userable_type));

    }, [formState.moduleable_type]);
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

    const TaskStatus = [
        {value: '-None-', label: '-None-'},
        {value: 'Abgeschlossen', label: 'Abgeschlossen'},
        {value: '0.0 Cold task / unqualified (CLU)', label: '0.0 Cold task / unqualified (CLU)'},
        {value: '1.0 Cold task qualified (CLQ)', label: '1.0 Cold task qualified (CLQ)'},
        {value: '2.0 First contact made (FCM)', label: '2.0 First contact made (FCM)'},
        {value: '3.0 warm task qualified (WLQ)', label: '3.0 warm task qualified (WLQ)'},
        {value: '4.0 Hot task (HLQ)', label: '4.0 Hot task (HLQ)'},
        {value: 'Close Task / Lost Task', label: 'Close Task / Lost Task'},
    ];

    const taskInformationSection = {
        'leftObjects': [
            {label: "Task Owner", value: `${formState.owner?.first_name} ${formState.owner?.last_name}`},
            {label: "Subject", value: `${formState.subject}`},
            {label: "Due Date", value: formState.due_date},
            {
                label: "Contact | Contact",
                value: UserabelType?.label+': '+`${formState.userable?.name ?? formState.userable?.first_name + ' ' + formState.userable?.last_name} `
            },
            {
                label: "Related To",
                value: moduleableType?.label+': '+relatedToLabel
            },
            {label: "Status", value: getStatusLabel(formState.status, TaskStatus)},
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
        (!hasPermission(`read-task`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="task"
                        permissionModel="task"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Task</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Task image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InformationSectionPreview
                        title="Task Information"
                        leftObjects={taskInformationSection.leftObjects}
                        rightObjects={taskInformationSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Description Information"
                        data={[
                            {label: 'Description', value: formState.description},
                        ]}/>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <AttachmentSection modelId={modelID} modelName={'task'}/>
                </div>
            </div>
        )
    );
};
export default Preview;
