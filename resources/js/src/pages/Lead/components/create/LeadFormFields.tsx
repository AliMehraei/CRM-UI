import React from "react";
import ContactInformationSection from "./ContactInformationSection";
import LeadInformationSection from "./LeadInformationSection";
import DevelopmentSection from "./DevelopmentSection";
import AddressInformationSection from "./AddressInformationSection";
import CommunicationDetailsSection from "./CommunicationDetailsSection";
import FieldsScondaryPrioritySection from "./FieldsScondaryPrioritySection";
const LeadFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <LeadInformationSection key="leadInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection key="contact"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection key="Address"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <CommunicationDetailsSection key="Description"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <FieldsScondaryPrioritySection key="FieldsScondaryPriority"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DevelopmentSection key="Development"  />
        </div>
    )


}

export default LeadFormFields;
