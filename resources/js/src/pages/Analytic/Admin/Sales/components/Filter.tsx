import React from 'react';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {searchOwners, StatusOption} from "../../../../../components/Functions/CommonFunctions";
import AsyncSelect from "react-select/async";

const Filter = () => {

    const dispatch = useDispatch();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [date3, setDate3] = useState<any>('2023-07-05 to 2023-07-10');
    const [selectedOptionsFirst, setSelectedOptionsFirst] = useState(null);
    const [selectedOptionsSecond, setSelectedOptionsSecond] = useState(null);

    const handleFirstSelectChange = (selectedOptions : any) => {
        setSelectedOptionsFirst(selectedOptions);
    };

    const handleSecondSelectChange = (selectedOptions : any) => {
        setSelectedOptionsSecond(selectedOptions);
    };

    return (
        <>
        <div className="mb-10 mt-3 flex md:items-center md:flex-row flex-col gap-5">
                <div className="flex items-center gap-5">
                    {/* First Multi-Select */}
                    <label htmlFor="firstSelect" className="block text-[16px] font-semibold text-gray-800">
                        Select Status :
                    </label>
                    <div className="md:flex-auto flex-1 ">
                        <Select
                            isMulti
                            options={StatusOption}
                            name="status"
                            id="status"
                            value={selectedOptionsFirst}
                            onChange={handleFirstSelectChange}
                            className="w-48"
                            placeholder="Select Status"

                        />

                    </div>


                    <label className="block text-[16px] font-semibold text-gray-800">
                        Select Sales Person :
                    </label>
                    {/* Second Multi-Select */}
                    <div className="md:flex-auto flex-1">
                        <AsyncSelect
                            defaultOptions={true}
                            isMulti
                            id="owner_id"
                            placeholder="Select Sales Person"
                            loadOptions={searchOwners}
                            onChange={handleSecondSelectChange}
                            className="flex-1 w-60"
                        />
                    {/*<Select*/}
                    {/*    isMulti*/}
                    {/*    options={[*/}
                    {/*        { value: 'optionA', label: 'Option A' },*/}
                    {/*        { value: 'optionB', label: 'Option B' },*/}
                    {/*        // Add more options as needed*/}
                    {/*    ]}*/}
                    {/*    className="form-input" // Add spacing to separate the two selects*/}
                    {/*    placeholder="Select Sales Person"*/}
                    {/*    value={selectedOptionsSecond}*/}
                    {/*    onChange={handleSecondSelectChange}*/}
                    {/*/>*/}
                </div>
                </div>


            <div className="flex ltr:ml-auto rtl:mr-auto">
                <div className="mr-4 mt-2">
                <label className="block text-[16px] font-semibold text-gray-800">
                    Select Range Date :
                </label>
                </div>
                <div className="items-center">
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
            </div>
        </div>
        </>
    );
};

export default Filter;
