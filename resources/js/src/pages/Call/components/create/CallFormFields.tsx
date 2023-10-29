import React from "react";
import CallInformationSection from "./CallInformationSection";
import PurposeOfOutGoingCall from "./PurposeOfOutGoingCall";
import OutcomeOfOutGoingCall from "./OutcomeOfOutGoingCall";


const CallFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <CallInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PurposeOfOutGoingCall/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <OutcomeOfOutGoingCall/>
        </div>
    )


}

export default CallFormFields;
