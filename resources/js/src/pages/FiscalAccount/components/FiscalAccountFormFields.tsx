import React from "react";
import AccountSection from "./AccountSection";
import AccountInformationSection from "./AccountInformationSection";
import TermsAndShippingSection from "./TermsAndShippingSection";
import AccountItemSection from "./AccountItemSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import TechnicalInformationSection from "./TechnicalInformationSection";
import Unused from "./Unused";
import AddressInformationSection from "./AddressInformationSection";
import {useParams} from "react-router-dom";


const AccountFormFields = ({ action = 'create' }: any) => {
    const params = useParams();
    const accountId = params.id;
    return (
        <div className="mt-8 px-4">
            <AccountSection key="invoiceInformation" action={action}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
          
        </div>
    )


}

export default AccountFormFields;
