import React from "react";
import ContactInformationSection from "./ContactInformationSection";
import VendorSection from "./VendorSection";
import TermsSection from "./TermsSection";
import AddressInformationSection from "./AddressInformationSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
const VendorFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <VendorSection key="vendorInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection key="contact"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsSection key="Terms"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection key="Address"  />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="Description"  />

        </div>
    )


}

export default VendorFormFields;
