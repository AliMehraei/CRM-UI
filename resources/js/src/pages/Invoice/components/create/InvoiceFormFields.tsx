import React from "react";
import InvoiceInformationSection from "./InvoiceInformationSection";

const InvoiceFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <InvoiceInformationSection key="invoiceInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
        </div>
    )


}

export default InvoiceFormFields;
