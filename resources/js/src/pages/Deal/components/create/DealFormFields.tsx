import React from "react";
import DealInformationSection from "./DealInformationSection";
import DescriptionInformationSection from "./DescriptionInformationSection";

const DealFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <DealInformationSection key="lealInfo" />
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            {/* <DescriptionInformationSection key="description"  /> */}
          
        </div>
    )


}

export default DealFormFields;
