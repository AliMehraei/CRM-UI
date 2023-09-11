import React from "react";
import {useDispatch} from "react-redux";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import {RequiredComponent} from "./RequiredComponent";
import * as CommonFunctions from "../Functions/CommonFunctions";

const FormLayoutGenerate = ({formState, updateFormData}: any) => {
    const dispatch = useDispatch();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    type AdditionalAttribute = {
        additional_attributes: string;
        api: string;
        created_by_id: null | number;
        default_value: null | string;
        description: string;
        id: number;
        is_active: 0 | 1;
        is_nullable: 0 | 1;
        label: string;
        model: string;
        model_reference: string;
        modified_by_id: null | number;
        name: string;
        options: string; // Consider parsing this as an object if needed
        type: "select" | "enum" | "boolean" | "string" | "selectApi" | "multiSelectApi" | "double";
    };

    interface CommonFunctionsInterface {
        [key: string]: Function;
    }

    const generateHtmlElement = (data: any) => {
        const attribute: AdditionalAttribute = data.model_attribute;
        const options = JSON.parse(attribute.options);
        const loadOptions = (CommonFunctions as Record<string, any>)[attribute.api];
        const elements: any = {
            'boolean': <input type="checkbox" className="form-checkbox"
                              name={attribute.name}
                              onChange={(e) => handleChangeField(e.target.name, e.target.checked)}/>,
            'string': <input className="form-input flex-1"
                             name={attribute.name}
                             onChange={(e) => handleChangeField(e.target.name, e.target.value)}/>,
            'double': <input type="number" className="form-input flex-1"
                             name={attribute.name}
                             onChange={(e) => handleChangeField(e.target.name, e.target.checked)}/>,
            'select': <Select className="flex-1"
                              name={attribute.name}
                              options={options}
                              onChange={({value}: any) => handleChangeField(attribute.name, value)}/>,
            'enum': <Select className="flex-1"
                            name={attribute.name}
                            options={options}
                            onChange={({value}: any) => handleChangeField(attribute.name, value)}/>,
            'selectApi':
                <AsyncSelect isMulti={false} className="flex-1" placeholder="Type at least 2 characters to search..."
                             name={attribute.name}
                             loadOptions={loadOptions}
                             onChange={({value}: any) => {
                                 handleChangeField(attribute.name, value)
                             }}/>,
            'multiSelectApi':
                <AsyncSelect isMulti={true} className="flex-1" placeholder="Type at least 2 characters to search..."
                             name={attribute.name}
                             loadOptions={loadOptions}
                             onChange={(values: any) => {
                                 handleChangeField(attribute.name, values.map((v: any) => v.value))
                             }}/>,
        };

        return (
            <div className="flex mt-4 items-center">

                <label className=" ltr:mr-2 rtl:ml-2 w-1/3 mb-0 ">
                    {attribute.label}
                    {attribute.is_nullable === 0 && <RequiredComponent/>}
                </label>
                <div className="w-full">
                    {elements[attribute.type] ?? ''}
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
            const {section_col} = item;
            result[section_col] = [...(result[section_col] || []), item];
            return result;
        }, {});

        return Object.values(groupedData).map((group) =>
            group.sort((a, b) => a.order - b.order)
        );
    };

    return (<>
        <div className="mt-8 px-4">

            {formState.layout.layout_sections.map((section: any, index: number) => {
                const cols = groupColumns(section.layout_data);
                return (
                    <div key={`${section.title}_${index}`}>
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div key={section.title} className="w-full">
                                <div className="text-lg">{section.title}</div>
                                <div className="flex justify-between lg:flex-row flex-col ">
                                    {cols.map((col: any, upperIndex) => (
                                        <div key={upperIndex + "-" + col.id}
                                             className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                            {col.map((data: any, innerIndex: any) => (
                                                <div className="" key={data.id + "_" + innerIndex}>
                                                    {generateHtmlElement(data)}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    </div>
                )
            })
            }
        </div>
    </>)

}

export default FormLayoutGenerate
