import React, { useState, useCallback } from 'react';

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { upFirstLetter } from "../../components/Functions/CommonFunctions";


const BomExcessConfirmation = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
    const systemFields = [
        'Ignore',
        'Part-Number (MPN)',
        'Manufacturer',
        // ... add more fields as required
    ];

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
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Confirmation");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List");
        setEmptyMessage("You don't have any" + upFirstLetter(pathParts[1]) + " List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Confirmation"));
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
                            <h3 className="title-1">Confirm your list data</h3>
                            <div className="flex mt-3 sm:ml-4 sm:mt-0 space-x-1">
                                <button className="create-template-modal-trigger bg-white cursor-pointer flex items-center p-2 space-x-2 text-sm rounded border-primary-500  text-primary border border-primary-500 hover:bg-gray-50">
                                    <span>Save settings as a template for later</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                    </svg>
                                </button>
                                <button id="confirmlist-next-tour" type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex items-center p-2 space-x-2 text-sm rounded border-primary-500">
                                    <span>Next step</span>
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="table-section-list1-tour" className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8 ">
                        <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                            <div className="">
                                <div className="flex flex-col h-full">
                                    <div className="flex flex-row items-center justify-between h-full space-x-3">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Step 1: Match your column names
                                        </h3>
                                        <div className="flex justify-start">
                                            <button id="btn-reload-data-tour" className="bg-primary-500 cursor-pointer flex hover:bg-primary-600 items-center px-2 py-1 rounded space-x-1 text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                                                </svg>
                                                <span>Reload the sample data</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-500 mt-4">
                                        Please define each column stands for which definition                </p>
                                </div>
                                <form id="save-headers-form" method="POST">
                                    <div className="overflow-x-scroll mt-6">
                                        <div >
                                            {columnsData.map((column, index) => (
                                               
                                                <React.Fragment key={column.id}>
                                                    <div className="grid grid-cols-12 gap-6">
                                                    <div className="col-span-2 flex flex-col divide-y">
                                                        <div className="bg-gray-100 rounded mb-2 p-2 text-left text-sm text-gray-900 font-bold">
                                                            Columns in your table
                                                        </div>
                                                        <div className="px-2 h-14 flex items-center text-left truncate text-sm text-gray-900 font-semibold">
                                                            {column.columnName}
                                                        </div>
                                                    </div>
                                                    <div className="col-span-4 flex flex-col divide-y">
                                                        <div className="bg-gray-100 rounded mb-2 p-2 text-left text-sm text-gray-900 font-bold">
                                                            Fields in our system
                                                        </div>
                                                        <div className="p-2 text-left truncate text-sm text-gray-500">
                                                            <select name={`headers[${index}]`} className="header-select w-full border-0 bg-gray-100 rounded-md focus:ring-transparent text-black">
                                                                {/* Here you would dynamically generate options based on available system fields */}
                                                                <option value="">Ignore</option>
                                                                <option value={column.systemField}>{column.systemField}</option>
                                                                {/* Add more options as necessary */}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 flex flex-col divide-y">
                                                        <div className="bg-gray-100 rounded mb-2 p-2 text-left text-sm text-gray-900 font-bold">
                                                            Sample data
                                                        </div>
                                                        <div className="px-2 h-14 flex items-center text-left truncate text-sm text-gray-500">
                                                            {column.sampleData}
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </form>
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

export default BomExcessConfirmation;
