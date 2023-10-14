import React from "react";
import DealInformationSection from "./DealInformationSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";

const DealFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <DealInformationSection key="lealInfo"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="description"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'deal'}/>
        </div>
    )


}

export default DealFormFields;
