import React from 'react';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {searchOwners, StatusSalesOrderOption} from "../../../../../components/Functions/CommonFunctions";
import AsyncSelect from "react-select/async";

const Filter = ({setDateStartFilter,setDateEndFilter,setStatusFilter,setPersonFilter,dateStartFilter,dateEndFilter,statusFilter,personFilter}:any) => {

    const dispatch = useDispatch();
    const [date3, setDate3] = useState<any>('2023-07-05 to 2023-07-10');
    const [statusFilterTemp, setStatusFilterTemp] = useState([]);
    const [personFilterTemp, setPersonFilterTemp] = useState([]);

    const handleFirstSelectChange = (selectedOptions : any) => {
        setStatusFilterTemp(selectedOptions);
    };

    const handleSecondSelectChange = (selectedOptions : any) => {
        setPersonFilterTemp(selectedOptions);
    };

    const handleFilterClick = () => {
        setStatusFilter(statusFilterTemp);
        setPersonFilter(personFilterTemp);
    };

    return (
        <>
            <div className="panel  border-white-light dark:border-[#1b2e4b]">
                <div className="grid sm:grid-cols-12 md:grid-cols-4 gap-3 mb-10">

                    <div className="inline-block gap-3">
                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Status :
                        </label>
                        <Select
                            isMulti
                            options={StatusSalesOrderOption}
                            name="status"
                            id="status"
                            value={statusFilter}
                            onChange={handleFirstSelectChange}
                            // className="w-48"
                            className="sm:col-span-8 lg:col-span-2"
                            placeholder="Select Status"

                        />
                    </div>
                    <div className="inline-block gap-3">
                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
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
                                // className="flex-1 w-60"
                                className="sm:col-span-8 lg:col-span-2"
                            />
                    </div>


                    <div className="inline-block gap-3">

                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Date :
                        </label>
                            <Flatpickr
                                options={{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',
                                    position: 'auto left',

                                }}
                                value={date3}
                                // className="form-input w-56 flex-1"
                                className="sm:col-span-8 form-input"
                                onChange={(date3) => setDate3(date3)}
                            />

                    </div>
                        <div className="inline-block lg:justify-end  lg:mt-9">
                        <button
                            type="button"
                            onClick={handleFilterClick}
                            className="sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Filter
                        </button>
                        </div>





                </div>
            </div>

        </>
    );
};

export default Filter;
