import React from "react";
import TaskInformationSection from './TaskInformationSection' ;
import ReminderSection from './ReminderSection' ;
import TypeSection from "./TypeSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";

const LeadFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">

            <TaskInformationSection key="leadInfo"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ReminderSection key={'Reminder'}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TypeSection key={'type'}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'task'}/>
        </div>
    )


}

export default LeadFormFields;
