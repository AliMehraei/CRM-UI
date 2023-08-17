import AsyncSelect from "react-select/async";

import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import 'flatpickr/dist/flatpickr.css';
import Header from "../../../components/Layouts/Header";
import {RFQHeaderSection} from "./HeaderSection";
import {LineSection} from "./LineSection";
import React from "react";


const RFQFormField = () => {
    return (
        <div className="mt-8 px-4">
            <RFQHeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

        </div>
    )


}

export default RFQFormField;
