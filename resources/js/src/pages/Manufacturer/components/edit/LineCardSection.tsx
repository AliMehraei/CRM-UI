import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/manufacturerFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import React from "react";
import {handleCopySelect} from "../../../../components/Functions/CommonFunctions";

const LineCardSection = () => {
    const formState = useSelector((state: any) => state.manufacturerForm);

    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'Line Card': {
            'Vendor_Line Card': <AsyncSelect
                defaultOptions={true} isMulti={true} id="vendor_line_card_id" name="vendor_line_card_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchVendor}
                className="flex-1"
                onChange={(values: any) => {
                    handleChangeField('vendor_line_card_ids', values.map((v: any) => v.value))
                }}

                defaultValue={formState.vendor_line_cards
                    ? formState.vendor_line_cards.map((data: any) => ({
                        value: data.id,
                        label: (
                            <div key={data.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{data.vendor_name}</div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data.vendor_name}`)}>
                                        Copy & Select
                                    </button>
                                </div>
                            </div>
                        ),
                    }))
                    : []
                }
            />,
        },
        '': {
            'Vendor_Strong Lines': <AsyncSelect
                defaultOptions={true} isMulti={true} id="vendor_strong_lines_id"
                name="vendor_strong_lines_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchVendor}
                className="flex-1"
                onChange={(values: any) => {
                    handleChangeField('vendor_strong_lines_ids', values.map((v: any) => v.value))
                }}
                defaultValue={formState.vendor_strong_lines
                    ? formState.vendor_strong_lines.map((data: any) => ({
                        value: data.id,
                        label: (
                            <div key={data.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{data.vendor_name}</div>
                                    <button className="btn text-xs btn-sm ml-auto" onClick={() => handleCopySelect(`${data.vendor_name}`)}>
                                        Copy & Select
                                    </button>
                                </div>
                            </div>
                        ),
                    }))
                    : []
                }

            />,
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}

export default LineCardSection;
