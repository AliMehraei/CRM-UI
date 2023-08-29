import React from "react";
import TaskInformationSection from './TaskInformationSection' ;
import ReminderSection from './ReminderSection' ;
import TypeSection from "./TypeSection";

const LeadFormFields = () => {
    return (
        <div className="mt-8 px-4">

            <TaskInformationSection key="leadInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ReminderSection key={'Reminder'}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TypeSection key={'type'}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default LeadFormFields;
