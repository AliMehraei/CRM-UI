import React from 'react';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {searchOwners, StatusSalesOrderOption} from "../../../../../components/Functions/CommonFunctions";
import AsyncSelect from "react-select/async";

const Filter = () => {

    const dispatch = useDispatch();
    const [date3, setDate3] = useState<any>('2023-07-05 to 2023-07-10');
    const [selectedOptionsFirst, setSelectedOptionsFirst] = useState(null);
    const [selectedOptionsSecond, setSelectedOptionsSecond] = useState(null);

    const handleFirstSelectChange = (selectedOptions : any) => {
        setSelectedOptionsFirst(selectedOptions);
    };

    const handleSecondSelectChange = (selectedOptions : any) => {
        setSelectedOptionsSecond(selectedOptions);
    };

    const handleFilterClick = () => {
        console.log("kkkk");
    };

    return (
        <>
        {/*<div className="mb-10 mt-3 flex md:items-center md:flex-row flex-col gap-5">*/}
        {/*        <div className="flex items-center gap-5">*/}
        {/*            /!* First Multi-Select *!/*/}
        {/*            <label htmlFor="firstSelect" className="block text-[16px] font-semibold text-gray-800">*/}
        {/*                Select Status :*/}
        {/*            </label>*/}
        {/*            <div className="md:flex-auto flex-1 ">*/}
        {/*                <Select*/}
        {/*                    isMulti*/}
        {/*                    options={StatusSalesOrderOption}*/}
        {/*                    name="status"*/}
        {/*                    id="status"*/}
        {/*                    value={selectedOptionsFirst}*/}
        {/*                    onChange={handleFirstSelectChange}*/}
        {/*                    className="w-48"*/}
        {/*                    placeholder="Select Status"*/}

        {/*                />*/}

        {/*            </div>*/}


        {/*            <label className="block text-[16px] font-semibold text-gray-800">*/}
        {/*                Select Sales Person :*/}
        {/*            </label>*/}
        {/*            /!* Second Multi-Select *!/*/}
        {/*            <div className="md:flex-auto flex-1">*/}
        {/*                <AsyncSelect*/}
        {/*                    defaultOptions={true}*/}
        {/*                    isMulti*/}
        {/*                    id="owner_id"*/}
        {/*                    placeholder="Select Sales Person"*/}
        {/*                    loadOptions={searchOwners}*/}
        {/*                    onChange={handleSecondSelectChange}*/}
        {/*                    className="flex-1 w-60"*/}
        {/*                />*/}

        {/*        </div>*/}
        {/*        </div>*/}


        {/*    <div className="flex ltr:ml-auto rtl:mr-auto">*/}
        {/*        <div className="mr-4 mt-2">*/}
        {/*        <label className="block text-[16px] font-semibold text-gray-800">*/}
        {/*            Select Range Date :*/}
        {/*        </label>*/}
        {/*        </div>*/}
        {/*        <div className="items-center">*/}
        {/*            <Flatpickr*/}
        {/*                options={{*/}
        {/*                    mode: 'range',*/}
        {/*                    dateFormat: 'Y-m-d',*/}
        {/*                    position: 'auto left',*/}

        {/*                }}*/}
        {/*                value={date3}*/}
        {/*                className="form-input w-56 flex-1"*/}
        {/*                onChange={(date3) => setDate3(date3)}*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <button*/}
        {/*        type="button"*/}
        {/*        onClick={handleFilterClick}*/}
        {/*        className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"*/}
        {/*    >*/}
        {/*        Filter*/}
        {/*    </button>*/}
        {/*</div>*/}

            <div className="panel  border-white-light dark:border-[#1b2e4b]">
                <div className="grid sm:grid-cols-12 md:grid-cols-4 gap-6 mb-10">

                    <div className="inline-flex">
                        <label className="block text-[16px] font-semibold text-gray-800">
                            Select Status :
                        </label>
                        <Select
                            isMulti
                            options={StatusSalesOrderOption}
                            name="status"
                            id="status"
                            value={selectedOptionsFirst}
                            onChange={handleFirstSelectChange}
                            className="w-48"
                            placeholder="Select Status"

                        />
                    </div>
                    <div className="inline-flex">
                        <label className="block text-[16px] font-semibold text-gray-800">
                            Select Sales Person :
                        </label>
                        {/* Second Multi-Select */}
                            <AsyncSelect
                                defaultOptions={true}
                                isMulti
                                id="owner_id"
                                placeholder="Select Sales Person"
                                loadOptions={searchOwners}
                                onChange={handleSecondSelectChange}
                                className="flex-1 w-60"
                            />
                    </div>

                    <div className="inline-flex">
                        <label className="block text-[16px] font-semibold text-gray-800">
                            Select Range Date :
                        </label>
                            <Flatpickr
                                options={{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',
                                    position: 'auto left',

                                }}
                                value={date3}
                                className="form-input w-56 flex-1"
                                onChange={(date3) => setDate3(date3)}
                            />
                    </div>


                            <button
                                type="button"
                                onClick={handleFilterClick}
                                className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Filter
                            </button>


                </div>
            </div>

        </>
    );
};

export default Filter;
