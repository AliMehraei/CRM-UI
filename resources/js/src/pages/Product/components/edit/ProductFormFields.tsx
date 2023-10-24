import React from "react";
import SupplyChainSection from "./SupplyChainSection";
import ProductInformationSection from "./ProductInformationSection";
import StockInformationSection from "./StockInformationSection";
import PhysicalPropertiesSection from "./PhysicalPropertiesSection";
import TechDataSection from "./TechDataSection";
import DimensionsSection from "./DimensionsSection";
import AlternativesSection from "./AlternativesSection";
import ExportImportDataSection from "./ExportImportDataSection";
import APIDataSection from "./APIDataSection";
import DescriptionInformationSection from "./DescriptionInformationSection";
import AttachmentSection from "../../../../components/FormFields/AttachmentSection";
import {useParams} from "react-router-dom";

const ProductFormFields = () => {
    const params = useParams();
    const modelId = params.id;
    return (
        <div className="mt-8 px-4">
            <ProductInformationSection key="productInfo"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <SupplyChainSection key="SupplyChain"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <PhysicalPropertiesSection key="PhysicalProperties"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <TechDataSection key="TechData"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DimensionsSection key="Dimensions"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <StockInformationSection key="StockInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AlternativesSection key="Alternatives"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <ExportImportDataSection key="ExportImportData"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <APIDataSection key="APIData"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <DescriptionInformationSection key="DescriptionInformation"/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
            <AttachmentSection modelId={modelId} modelName={'product'}/>
        </div>
    )


}

export default ProductFormFields;
