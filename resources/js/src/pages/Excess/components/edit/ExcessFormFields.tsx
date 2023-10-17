import React from "react";
import HeaderSection from "./HeaderSection";
import StatusSection from "./StatusSection";
import ExcessLineSection from "./ExcessLineSection";
import {useParams} from "react-router-dom";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";

const ExcessFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <HeaderSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <StatusSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ExcessLineSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'excess'}/>
        </div>
    )
}

export default ExcessFormFields;
