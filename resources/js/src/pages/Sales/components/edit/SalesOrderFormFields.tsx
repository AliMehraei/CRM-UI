import React from "react";
import HeaderSection from "./HeaderSection";
import SalesOrderInformationSection from "./SalesOrderInformationSection";
import SalesItemsSection from "./SalesItemsSection";
import POLineSection from "./POLineSection";
import LinkedSOSection from "./LinkedSOSection";
import AddressInformationSection from "./AddressInformationSection";
import TermsConditionsSection from "./TermsConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";

const SalesOrderFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection key="HeaderSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SalesOrderInformationSection key="SalesOrderInformationSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SalesItemsSection key="SalesItemsSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <POLineSection key="POLineSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LinkedSOSection key="LinkedSOSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection key="AddressInformationSection"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsConditionsSection key="TermsConditionsSection" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="DescriptionInformationSection"  />
        </div>
    )


}

export default SalesOrderFormFields;
