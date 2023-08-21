import React from "react";
import ContactInformationSection from "./ContactInformationSection";
import VendorSection from "./VendorSection";

const VendorFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <VendorSection key="vendorInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection key="vendor"  />
        </div>
    )


}

export default VendorFormFields;
