import AsyncSelect from "react-select/async";

import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import 'flatpickr/dist/flatpickr.css';
import Header from "../../../../components/Layouts/Header";
import {LineSection} from "./LineSection";
import React from "react";
import {DevelopmentSection} from "./DevelopmentSection";
import HeaderSection from "./HeaderSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";


const RFQFormField = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DevelopmentSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'rfq'}/>
        </div>
    )


}

export default RFQFormField;
