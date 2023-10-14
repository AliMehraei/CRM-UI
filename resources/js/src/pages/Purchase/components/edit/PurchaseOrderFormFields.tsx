import React from "react";
import HeaderSection from "./HeaderSection";
import PurchaseOrderInformationSection from "./PurchaseOrderInformationSection";
import PurchaseItemsSection from "./PurchaseItemsSection";
import POLineSection from "./POLineSection";
import LinkedSOSection from "./LinkedSOSection";
import AddressInformationSection from "./AddressInformationSection";
import TermsConditionsSection from "./TermsConditionsSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import {useParams} from "react-router-dom";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";

const PurchaseOrderFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <HeaderSection key="HeaderSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PurchaseOrderInformationSection key="PurchaseOrderInformationSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PurchaseItemsSection key="PurchaseItemsSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <POLineSection key="POLineSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <LinkedSOSection key="LinkedSOSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AddressInformationSection key="AddressInformationSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TermsConditionsSection key="TermsConditionsSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="DescriptionInformationSection"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'purchaseOrder'}/>
        </div>
    )


}

export default PurchaseOrderFormFields;
