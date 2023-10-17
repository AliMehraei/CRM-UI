import React from "react";
import VendorRFQInformation from "./VendorRFQInformation";
import RequestedProducts from "./RequestedProducts";
import OfferedProducts from "./OfferedProducts";
import Development from "./Development";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";

const VendorRfqFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <VendorRFQInformation key='VendorRFQInformation'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <RequestedProducts key='RequestedProducts'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <OfferedProducts key='OfferedProducts'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <Development key='Development'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'vendorRfq'}/>
        </div>
    )


}

export default VendorRfqFormFields;
