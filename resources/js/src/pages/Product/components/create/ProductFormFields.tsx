import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Select from "react-select";
import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";

const ProductFormFields = () => {
    const formState = useSelector((state: any) => state.productForm);

    useEffect(() => {
    }, []);

    const generateHtmlElement = (data: any) => {
        console.log(data)
        const elements: any = {
            'select': <Select className="form-control"/>,
            'boolean': <input type="checkbox"/>,
            'string': <input className="form-input flex-1"/>
        };

        return (
            <div className="mt-4 items-center">
                <div className="flex">
                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2">
                        test
                        <RequiredComponent/>
                    </label>
                    <div className="">
                        <input className="form-input "/>
                    </div>
                </div>
            </div>
        );
    }

    interface ColumnData {
        col: string;
        order: number;
    }

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
                        <div key={`${section.title}_${index}`} className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div key={section.title} className="w-full">
                                <div className="text-lg">{section.title}</div>
                                {/*<div className="flex bg-gray-200 ">
                                    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                                        Short
                                    </div>
                                    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                                        Medium length
                                    </div>
                                </div>*/}
                                <div className="flex justify-between lg:flex-row flex-col ">
                                    {cols.map((col: any) => (
                                        <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                            {col.map((data: any, innerIndex: any) => (
                                                <div className="" key={data.id + "_" + innerIndex}>
                                                    <div className="flex mt-4 items-center">

                                                        <label className=" ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2">
                                                            Account Owner
                                                            <RequiredComponent/>
                                                        </label>
                                                        <div className="w-full">
                                                            <input className="flex-1 form-input "/>
                                                        </div>

                                                    </div>
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
