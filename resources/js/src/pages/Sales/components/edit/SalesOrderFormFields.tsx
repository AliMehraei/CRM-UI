import React from "react";
import HeaderSection from "./HeaderSection";
import SalesOrderInformationSection from "./SalesOrderInformationSection";
import SalesItemsSection from "./SalesItemsSection";
import SOLineSection from "./SOLineSection";
import LinkedAvailabilitySection from "./LinkedAvailabilitySection";
import AddressInformationSection from "./AddressInformationSection";
import TermsConditionsSection from "./TermsConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import TechnicalInformationSection from "./TechnicalInformationSection";
const SalesOrderFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection key="HeaderSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SalesOrderInformationSection key="SalesOrderInformationSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SalesItemsSection key="SalesItemsSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SOLineSection key="SOLineSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LinkedAvailabilitySection key="LinkedAvailabilitySection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection key="AddressInformationSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsConditionsSection key="TermsConditionsSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="DescriptionInformationSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TechnicalInformationSection key="TechnicalInformationSection"  />
        </div>
    )


}

export default SalesOrderFormFields;
