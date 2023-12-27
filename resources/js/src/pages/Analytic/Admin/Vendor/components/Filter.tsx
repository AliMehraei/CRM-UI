import React from 'react';
import { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
    searchManufacturer,
    searchOwners,
    searchVendor,
    StatusSalesOrderOption
} from "../../../../../components/Functions/CommonFunctions";
import AsyncSelect from "react-select/async";
import {Link} from "react-router-dom";

const Filter = ({
                    setDateRfqStartFilter,setDateRfqEndFilter,
                    setDateVendorRfqStartFilter,setDateVendorRfqEndFilter,
                    setDateAvailabilityStartFilter,setDateAvailabilityEndFilter,
                    setVendorNameFilter,setManufacturerNameFilter}:any) => {

    const dispatch = useDispatch();
    const [vendorNameFilterTemp, setVendorNameFilterTemp] = useState([]);
    const [vendorNameOption, setVendorNameOption] = useState([]);
    const [manufacturerNameFilterTemp, setManufacturerNameFilterTemp] = useState([]);
    const [manufacturerName, setManufacturerNameOption] = useState([]);

    const [dateRfq, setDateRfq] = useState<any>('');
    const [dateRfqStartFilterTemp, setDateRfqStartFilterTemp] = useState<string>('');
    const [dateRfqEndFilterTemp, setDateRfqEndFilterTemp] = useState<string>('');

    const [dateVendorRfq, setDateVendorRfq] = useState<any>('');
    const [dateVendorRfqStartFilterTemp, setDateVendorRfqStartFilterTemp] = useState<string>('');
    const [dateVendorRfqEndFilterTemp, setDateVendorRfqEndFilterTemp] = useState<string>('');

    const [dateAvailability, setDateAvailability] = useState<any>('');
    const [dateAvailabilityStartFilterTemp, setDateAvailabilityStartFilterTemp] = useState<string>('');
    const [dateAvailabilityEndFilterTemp, setDateAvailabilityEndFilterTemp] = useState<string>('');

    const handleChangeVendorName = (selectedOptions : any) => {

        setVendorNameOption(selectedOptions);
        const selectedValues = selectedOptions.map((option:any) => option.value);
        setVendorNameFilterTemp(selectedValues);

    };

    const handleChangeManufacturerName = (selectedOptions : any) => {

        setManufacturerNameOption(selectedOptions);
        const selectedValues = selectedOptions.map((option:any) => option.value);
        setManufacturerNameFilterTemp(selectedValues);
    };

    const handleChangeDateRfq = (selectedDates: any) => {

        if (Array.isArray(selectedDates) && selectedDates.length === 2) {
            const formattedStartDate = new Date(selectedDates[0].getTime() - selectedDates[0].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const formattedEndDate = new Date(selectedDates[1].getTime() - selectedDates[1].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const dateRangeString = `${formattedStartDate} to ${formattedEndDate}`;
            setDateRfq(dateRangeString);
        }
    };

    const handleChangeDateVendorRfq = (selectedDates: any) => {

        if (Array.isArray(selectedDates) && selectedDates.length === 2) {
            const formattedStartDate = new Date(selectedDates[0].getTime() - selectedDates[0].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const formattedEndDate = new Date(selectedDates[1].getTime() - selectedDates[1].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const dateRangeString = `${formattedStartDate} to ${formattedEndDate}`;
            setDateVendorRfq(dateRangeString);
        }
    };

    const handleChangeDateAvailability = (selectedDates: any) => {
        

        if (Array.isArray(selectedDates) && selectedDates.length === 2) {
            const formattedStartDate = new Date(selectedDates[0].getTime() - selectedDates[0].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const formattedEndDate = new Date(selectedDates[1].getTime() - selectedDates[1].getTimezoneOffset() * 60000)
                .toISOString()
                .split("T")[0];

            const dateRangeString = `${formattedStartDate} to ${formattedEndDate}`;
            setDateAvailability(dateRangeString);
        }
    };

    const handleFilterClick = () => {
        
        setVendorNameFilter(vendorNameFilterTemp);
        setManufacturerNameFilter(manufacturerNameFilterTemp);
        setDateRfqStartFilter(dateRfqStartFilterTemp);
        setDateRfqEndFilter(dateRfqEndFilterTemp);
        setDateVendorRfqStartFilter(dateVendorRfqStartFilterTemp);
        setDateVendorRfqEndFilter(dateVendorRfqEndFilterTemp);
        setDateAvailabilityStartFilter(dateAvailabilityStartFilterTemp);
        setDateAvailabilityEndFilter(dateAvailabilityEndFilterTemp);
    };
    // const handleResetClick = () => {
    //     setStatusFilterTemp([]);
    //     setStatusOption([]);
    //
    //
    //     setVendorOption([]);
    //     setVendorFilterTemp([]);
    //
    //
    //     setDate('');
    //     setDateStartFilterTemp('');
    //     setDateEndFilterTemp('');
    //
    //     setVendorFilter([]);
    //     setStatusFilter([]);
    //     setDateStartFilter('');
    //     setDateEndFilter('');
    // };



    useEffect(() => {
        // Split the date3 string and set start and end dates
        const [startRfqDate, endRfqDate] = dateRfq.split(' to ');
        const [startVendorDate, endVendorDate] = dateVendorRfq.split(' to ');
        const [startAvailabilityDate, endAvailabilityDate] = dateAvailability.split(' to ');

        setDateRfqStartFilterTemp(startRfqDate);
        setDateRfqEndFilterTemp(endRfqDate);

        setDateVendorRfqStartFilterTemp(startVendorDate);
        setDateVendorRfqEndFilterTemp(endVendorDate);

        setDateAvailabilityStartFilterTemp(startAvailabilityDate);
        setDateAvailabilityEndFilterTemp(endAvailabilityDate);


    }, [dateRfq,dateVendorRfq,dateAvailability]);

    return (
        <>
            <div className="panel  border-white-light dark:border-[#1b2e4b]">
                <div className="grid sm:grid-cols-12 md:grid-cols-6 gap-3 mb-10">

                    <div className="inline-block gap-3">
                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Vendor Name :
                        </label>
                        <AsyncSelect
                            defaultOptions={true}
                            isMulti
                            loadOptions={searchVendor}
                            name="vendor_name"
                            id="vendor_name"
                            onChange={handleChangeVendorName}
                            // className="w-48"
                            className="sm:col-span-8 lg:col-span-2"
                            placeholder="Select Vendor Name"

                        />
                    </div>
                    <div className="inline-block gap-3">
                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Manufacturer Name :
                        </label>
                        {/* Second Multi-Select */}
                            <AsyncSelect
                                defaultOptions={true}
                                isMulti
                                id="manufacturer_name"
                                placeholder="Select Manufacturer Name"
                                loadOptions={searchManufacturer}
                                onChange={handleChangeManufacturerName}
                                // className="flex-1 w-60"
                                className="sm:col-span-8 lg:col-span-2"
                            />
                    </div>


                    <div className="inline-block gap-3">

                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Date Rfq:
                        </label>
                            <div className="inline-flex">
                            <Flatpickr
                                options={{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',
                                    position: 'auto left',

                                }}
                                value={dateRfq}
                                // className="form-input w-56 flex-1"
                                className="sm:col-span-8 form-input w-56"
                                onChange={(selectedDates) => handleChangeDateRfq(selectedDates)}
                            />

                        <a className="input-button ml-2 cursor-pointer" title="Clear" onClick={()=> {
                            setDateRfq('');
                            setDateRfqStartFilterTemp('');
                            setDateRfqEndFilterTemp('');

                        }}>
                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>


                        </a>
                        </div>

                    </div>
                    <div className="inline-block gap-3">

                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Date VendorRfq:
                        </label>
                        <div className="inline-flex">
                            <Flatpickr
                                options={{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',
                                    position: 'auto left',

                                }}
                                value={dateVendorRfq}
                                // className="form-input w-56 flex-1"
                                className="sm:col-span-8 form-input w-56"
                                onChange={(selectedDates) => handleChangeDateVendorRfq(selectedDates)}
                            />

                            <a className="input-button ml-2 cursor-pointer" title="Clear" onClick={()=> {
                                setDateVendorRfq('');
                                setDateVendorRfqStartFilterTemp('');
                                setDateVendorRfqEndFilterTemp('');
                                

                            }}>
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>


                            </a>
                        </div>

                    </div>
                    <div className="inline-block gap-3">

                        <label className="sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800">
                            Select Date Availability:
                        </label>
                        <div className="inline-flex">
                            <Flatpickr
                                options={{
                                    mode: 'range',
                                    dateFormat: 'Y-m-d',
                                    position: 'auto left',

                                }}
                                value={dateAvailability}
                                // className="form-input w-56 flex-1"
                                className="sm:col-span-8 form-input w-56"
                                onChange={(selectedDates) => handleChangeDateAvailability(selectedDates)}
                            />

                            <a className="input-button ml-2 cursor-pointer" title="Clear" onClick={()=> {
                                setDateAvailability('');
                                setDateAvailabilityStartFilterTemp('');
                                setDateAvailabilityEndFilterTemp('');
                                setDateAvailabilityStartFilter('');
                                setDateAvailabilityEndFilter('');

                            }}>
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>


                            </a>
                        </div>

                    </div>
                        <div className="inline-block lg:justify-end  lg:mt-9">
                            <button
                                type="button"
                                onClick={handleFilterClick}
                                className="sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            > Filter
                            </button>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    onClick={handleResetClick}*/}
                            {/*    className="sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"*/}
                            {/*> Reset*/}
                            {/*</button>*/}
                            <Link type='button' className="sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" to={`/admin-analytics/vendor`} reloadDocument={true}>Reset</Link>
                        </div>





                </div>
            </div>

        </>
    );
};

export default Filter;
