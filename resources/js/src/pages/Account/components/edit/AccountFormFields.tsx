import React from "react";
import AccountSection from "./AccountSection";
import AccountInformationSection from "./AccountInformationSection";
import TermsAndShippingSection from "./TermsAndShippingSection";
import AccountItemSection from "./AccountItemSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import TechnicalInformationSection from "./TechnicalInformationSection";
import Unused from "./Unused";
import AddressInformationSection from "./AddressInformationSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";


const AccountFormFields = () => {
    const params = useParams();
    const accountId = params.id;
    return (
        <div className="mt-8 px-4">
            <AccountSection key="invoiceInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AccountInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsAndShippingSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AccountItemSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TechnicalInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <Unused/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={accountId} modelName={'account'}/>

        </div>
    )


}

export default AccountFormFields;
