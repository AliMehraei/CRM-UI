import React from "react";
import VendorRFQInformation from "./VendorRFQInformation";
import RequestedProducts from "./RequestedProducts";
import OfferedProducts from "./OfferedProducts";
import Development from "./Development";
const VendorRfqFormFields = () => {
    return (
        <div className="mt-8 px-4">
            <VendorRFQInformation key='VendorRFQInformation'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <RequestedProducts key='RequestedProducts'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <OfferedProducts key='OfferedProducts'/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <Development key='Development'/>

        </div>
    )


}

export default VendorRfqFormFields;
