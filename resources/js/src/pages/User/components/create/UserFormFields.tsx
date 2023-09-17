import React from "react";
import HeaderSection from "./HeaderSection";
import ContactInformationSection from "./ContactInformationSection";

const UserFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default UserFormFields;
