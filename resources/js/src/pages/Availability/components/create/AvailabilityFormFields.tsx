import React from "react";
import HeaderSection from "./HeaderSection";
import StatusSection from "./StatusSection";
import QuoteLineSection from "./QuoteLineSection";
import PriceBreakSection from "./PriceBreakSetion";
import DevelopmentSection from "./DevelopmentSection";


const AvailabilityFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <StatusSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <QuoteLineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PriceBreakSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DevelopmentSection/>
        </div>
    )


}

export default AvailabilityFormFields;
