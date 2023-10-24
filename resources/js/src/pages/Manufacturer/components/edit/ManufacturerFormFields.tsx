import React from "react";
import ManufacturerInformationSection from "./ManufacturerInformationSection";
import LineCardSection from "./LineCardSection";
import {useParams} from "react-router-dom";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";

const ManufacturerFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <ManufacturerInformationSection key="manufacturerInfo"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LineCardSection key="lineCard"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'manufacturer'}/>
        </div>
    )


}

export default ManufacturerFormFields;
