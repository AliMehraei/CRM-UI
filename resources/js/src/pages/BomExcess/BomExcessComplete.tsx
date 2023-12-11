import React, { useState, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { upFirstLetter } from "../../components/Functions/CommonFunctions";


const BomExcessComplete = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    const params = useParams();
    const contactId = params.id;

    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
    const systemFields = [
        'Ignore',
        'Part-Number (MPN)',
        'Manufacturer',
        // ... add more fields as required
    ];
    const pieChart: any = {
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                height: 300,
                type: 'pie',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            stroke: {
                show: false,
            },
            legend: {
                position: 'bottom',
            },
        },
    };
    // Example initial data structure
    const initialData = [
        {
            header: 'Material',
            sampleData: '476577',
            rows: ['468423', '468405', '468398'] // Array of row data for this column
        },
        // Add other columns as needed
    ];
    const columnsData = [
        {
            id: 1,
            columnName: 'Material',
            systemField: 'Part-Number (MPN)',
            sampleData: '476577',
        },
        {
            id: 2,
            columnName: 'Material Description',
            systemField: 'Description',
            sampleData: 'Some description',
        },
        // ... more columns as necessary
    ];
    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Overview");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List");
        setEmptyMessage("You don't have any" + upFirstLetter(pathParts[1]) + " List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Overview"));
    }, []);


    const [columnMappings, setColumnMappings] = useState({});

    // Assuming initialData is an array of objects with a header property
    const [uploadedData, setUploadedData] = useState(initialData);
    const handleFieldChange = (columnIndex, selectedField) => {
        // Update the mapping for the given column index
        setColumnMappings(prev => ({ ...prev, [columnIndex]: selectedField }));
    };



    const handleSaveTemplate = () => {
        // Logic to save the template
    };

    const handleNextStep = () => {
        // Logic for going to the next step
        window.location.href = `/${addBtnRoute}/list/${contactId}`;

    };

    const handleReloadSampleData = () => {
        // Logic to reload sample data
    };




    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="px-4 sm:px-6 lg:px-8">
                    <section className="border-b border-gray-200 pb-4">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="title-1"><b>{pageTitleCustom}</b></h3>

                        </div>
                    </section>

                </div>
                <div className="my-4">
                    <section className=" px-4 sm:px-6 lg:px-8 ">
                        <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4">
                            <h3 className="title-1"> </h3>
                            <div className="flex mt-3 sm:ml-4 sm:mt-0 space-x-1">
                               
                                <button id="confirmlist-next-tour" type="button" onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex items-center p-2 space-x-2 text-sm rounded border-primary-500">
                                    <span>view BOM List</span>
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8 ">
                        <div className="rounded-lg bg-white overflow-hidden shadow p-6 text-center">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Your BOM list overview
                            </h3>
                            <p className="text-sm font-medium text-gray-500 mt-4">
                                Here you can see an overview about your uploaded BOM list
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4 divide-x divide-y md:divide-y-0 divide-gray-200">
                                <div className="col-span-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <div className="flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center">
                                        Data Source                
                                        </div>
                                        <ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black" type="pie" height={300} />

                                </div>
                                <div className="col-span-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                    <div className="flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center">
                                        Founded MPNs               
                                         </div>
                                        <ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black" type="pie" height={300} />

                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="table-section-list2-tour" className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8 mt-6">
                        <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                            <div className="">
                                <div className="flex flex-row items-center justify-between h-full space-x-3">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Your uploaded file data                </h3>
                                    <div className="flex justify-start">
                                        <div className="bg-yellow-300 rounded px-2 py-1 flex items-center space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"></path>
                                            </svg>
                                            <span className="text-black text-sm">Double click on the row to change file header</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-x-scroll mt-6">
                                    <div className="flex flex-col">
                                        <div className="flex-grow">

                                            <table>
                                                <thead>
                                                    <tr>
                                                        {uploadedData.map((column, index) => (
                                                            <>
                                                                <th className="">
                                                                    <button data-bom-item-id="240" className="remove-header-btn flex space-x-3 items-center justify-center w-full p-3 rounded hover:bg-gray-100 default-transition">
                                                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th key={index}>{columnMappings[index] || column.header}</th></>

                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {uploadedData[0].rows.map((_, rowIndex) => (
                                                        <tr key={rowIndex}>
                                                            {uploadedData.map((column, colIndex) => (
                                                                <>
                                                                    <td className="border p-2">
                                                                        <button type="button" data-row-id="66085" className="bg-gray-200 ignored-switch toggle toggle-red bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200" role="switch" aria-checked="false">
                                                                            <span className="translate-x-0 translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                                                                                <span className="opacity-100 toggle-icon-1 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                                                                                    <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 12 12">
                                                                                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                <span className="opacity-0 toggle-icon-2 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
                                                                                    <svg className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 12 12">
                                                                                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </span>

                                                                        </button>
                                                                    </td>
                                                                    <td key={colIndex}>{column.rows[rowIndex]}</td>
                                                                </>

                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>

                                </div>
                                <div className="mt-6">

                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>

        </>

    );
};

export default BomExcessComplete;
