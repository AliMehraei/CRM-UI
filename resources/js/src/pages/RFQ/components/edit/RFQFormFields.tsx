
import 'flatpickr/dist/flatpickr.css';
import {RFQHeaderSection} from "./HeaderSection";
import {LineSection} from "./LineSection";
import React from "react";
import {DevelopmentSection} from "./DevelopmentSection";


const RFQFormField = () => {
    return (
        <div className="mt-8 px-4">
            <RFQHeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DevelopmentSection/>
        </div>
    )


}

export default RFQFormField;
