import React from "react";
import ContactDetailsSection from "./ContactDetailsSection";
import ContactInformationSection from "./ContactInformationSection";


const ContactFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <ContactDetailsSection key="ContactDetailsSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default ContactFormFields;
