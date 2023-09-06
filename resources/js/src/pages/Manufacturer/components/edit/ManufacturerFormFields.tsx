import React from "react";
import ManufacturerInformationSection from "./ManufacturerInformationSection";
import LineCardSection from "./LineCardSection";

const ManufacturerFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <ManufacturerInformationSection key="manufacturerInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
            <LineCardSection key="lineCard" />
        </div>
    )


}

export default ManufacturerFormFields;
