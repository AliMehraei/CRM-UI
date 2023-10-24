import React from "react";
import CallInformationSection from "./CallInformationSection";
import PureposeOfOutGoingCall from "./PureposeOfOutGoingCall";
import OutcomeOfOutGoingCall from "./OutcomeOfOutGoingCall";


const CallFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <CallInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PureposeOfOutGoingCall/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <OutcomeOfOutGoingCall/>
        </div>
    )


}

export default CallFormFields;
