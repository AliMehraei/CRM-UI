import React from "react";
import ManufactureInformationSection from "./ManufactureInformationSection";
import LineCardSection from "./LineCardSection";

const ManufactureFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <ManufactureInformationSection/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LineCardSection/>
        </div>
    )


}

export default ManufactureFormFields;
