import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Select from "react-select";

const ProductFormFields = () => {
    const formState = useSelector((state: any) => state.productForm);

    useEffect(() => {
    }, []);

    const getHtmlElement = (type: string) => {
        const elements: any = {
            'select': <Select/>,
            'boolean': <input type="checkbox"/>,
        };

        return elements[type] || null;
    }

    interface ColumnData {
        col: string;
        order: number;
    }

    type GroupedData = Record<string, ColumnData[]>;

    const groupColumns = (data: ColumnData[]) => {
        const groupedData = data.reduce<{ [key: string]: ColumnData[] }>((result, item: any) => {
            const {section_col, order} = item;
            result[section_col] = [...(result[section_col] || []), item];
            return result;
        }, {});

        return Object.values(groupedData).map((group) =>
            group.sort((a, b) => a.order - b.order)
        );
    };

    return (
        <div className="mt-8 px-4">
            {formState.layout.layout_sections.map((section: any, index: number) => {
                const cols = groupColumns(section.layout_data);
                return (
                    <>
                        <div key={`${section.title}_${index}`} className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div key={section.title} className="">
                                <div className="text-lg">{section.title}</div>
                                <div className="flex justify-between  flex-row">
                                    {cols.map((col: any) => (
                                        <div className="flex flex-col">
                                            {col.map((data: any, innerIndex: any) => (
                                                <div className="flex" key={innerIndex}>
                                                    {innerIndex}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    </>
                )
            })
            }
            {/* <ProductInformationSection key="productInfo"/>
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
            <DescriptionInformationSection key="DescriptionInformation"/>*/
            }
        </div>
    )


}

export default ProductFormFields;
