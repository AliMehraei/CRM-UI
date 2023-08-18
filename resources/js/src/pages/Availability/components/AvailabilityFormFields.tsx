import React from "react";
import HeaderSection from "./HeaderSection";
import StatusSection from "./StatusSection";
import QuoteLineSection from "./QuoteLineSection";
import SourceSection from "./SourceSection";
import AddressInformationSection from "./AddressInformationSection";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import QuoteItemSection from "./QuoteItemSection";


const AvailabilityFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <StatusSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <QuoteItemSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <QuoteLineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SourceSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsAndConditionsSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default AvailabilityFormFields;
