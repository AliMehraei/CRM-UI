import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import ProductInformationSection from "./ProductInformationSection";
import SupplyChainSection from "./SupplyChainSection";
import TechDataSection from "./TechDataSection";
import PhysicalPropertiesSection from "./PhysicalPropertiesSection";
import DimensionsSection from "./DimensionsSection";
import StockInformationSection from "./StockInformationSection";
import AlternativesSection from "./AlternativesSection";
import ExportImportDataSection from "./ExportImportDataSection";
import APIDataSection from "./APIDataSection";
import DescriptionInformationSection from "./DescriptionInformationSection";

const ProductFormFields = () => {

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
            
        </div>
    )


}

export default ProductFormFields;
