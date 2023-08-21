import React from "react";
import AccountSection from "./AccountSection";
import AccountInformationSection from "./AccountInformationSection";


const AccountFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <AccountSection key="invoiceInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AccountInformationSection/>
        </div>
    )


}

export default AccountFormFields;
