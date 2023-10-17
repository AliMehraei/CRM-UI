import React from "react";
import InvoiceInformationSection from "./InvoiceInformationSection";
import AddressInformationSection from "./AddressInformationSection";
import InvoiceItemSection from "./InvoiceItemSection";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";

const InvoiceFormFields = () => {
    const params = useParams();
    const modelId = params.id;
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
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'invoice'}/>
        </div>
    )


}

export default InvoiceFormFields;
