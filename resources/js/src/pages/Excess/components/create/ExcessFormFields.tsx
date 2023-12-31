import React from "react";
import HeaderSection from "./HeaderSection";
import StatusSection from "./StatusSection";
import ExcessLineSection from "./ExcessLineSection";

const ExcessFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <StatusSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ExcessLineSection/>
        </div>
    )
}

export default ExcessFormFields;
