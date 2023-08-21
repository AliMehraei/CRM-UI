import React from "react";
import AccountSection from "./AccountSection";
import AccountInformationSection from "./AccountInformationSection";
import TermsAndShippingSection from "./TermsAndShippingSection";


const AccountFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <AccountSection key="invoiceInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AccountInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsAndShippingSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default AccountFormFields;
