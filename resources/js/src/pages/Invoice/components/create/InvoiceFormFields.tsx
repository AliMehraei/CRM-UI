import React from "react";
import InvoiceInformationSection from "./InvoiceInformationSection";
import AddressInformationSection from "./AddressInformationSection";
import InvoiceItemSection from "./InvoiceItemSection";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";

const InvoiceFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <InvoiceInformationSection key="invoiceInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <InvoiceItemSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsAndConditionsSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection/>
        </div>
    )


}

export default InvoiceFormFields;
