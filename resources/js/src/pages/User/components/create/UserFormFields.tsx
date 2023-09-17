import React from "react";
import HeaderSection from "./HeaderSection";
import ContactInformationSection from "./ContactInformationSection";
import PreferencesSection from "./PreferencesSection";
import OtherSection from "./OtherSection";
import ShiftInformationSection from "./ShiftInformationSection";

const UserFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ContactInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PreferencesSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ShiftInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <OtherSection/>
        </div>
    )


}

export default UserFormFields;
