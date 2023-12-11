import React, { useState, useCallback } from 'react';

import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { displayImage, upFirstLetter } from "../../components/Functions/CommonFunctions";
import Api from "../../config/api";
import { resetForm, updateFormData } from "../../store/contactFormSlice";

const BomExcessPreProcess = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const formState = useSelector((state: any) => state.contactForm);
    const api = new Api();
    const params = useParams();
    const contactId = params.contactId;
    const id = params.id;

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
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Process");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List");
        setEmptyMessage("You don't have any" + upFirstLetter(pathParts[1]) + " List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Process"));
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
        window.location.href = `/${addBtnRoute}/complete/${contactId}/${id}`;
    };

    const handleReloadSampleData = () => {
        // Logic to reload sample data
    };

    const fetchData = async () => {
        const modelResponse = await api.fetchSingleContact(contactId);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [contactId]);




    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
            <div className="flex justify-end flex-wrap gap-4 px-4" >
                    <div className="flex">
                        <div>
                            <div className="text-sm font-semibold mt-5">{formState.first_name} {formState.last_name}</div>
                            <div className="text-s font-semibold ">{formState.email}</div>
                            <div className="text-s font-semibold ">{formState.phone}</div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div className="shrink-0">
                        <img src={displayImage(formState.image_data)} alt="Contact image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        <a className="text-sm font-semibold mt-5  text-primary " target="_blank" 
                            href={`/contact/preview/${contactId}`}>View Contact</a>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#849bbc] my-6" />
                <div className="px-4 sm:px-6 lg:px-8">
                    <section className="border-b border-gray-200 pb-4">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="title-1"><b>{pageTitleCustom}</b></h3>

                        </div>
                    </section>

                </div>
                <div className="my-4">
                    <section className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                        <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4">
                            <h3 className="title-1"> </h3>
                            <div className="mt-3 sm:mt-0 sm:ml-4 flex space-x-2">
                                <a href="https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom" className="flex btn btn-primary-outline pulse-primary">
                                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                                    </svg>
                                    Back                </a>
                                <button   onClick={handleNextStep} className="flex btn btn-primary pulse-primary">
                                    Submit                    <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </button>
                                <form className="hidden" id="process-form"  method="post"> <input type="hidden" name="_token" value="GV9WLKTU9cEFE02rzpmifMJBxdjWYQPMdMCWYhps" /> </form>
                            </div>
                        </div>
                    </section>

                    <section className="dashboard-item-view-page  mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-6">
                        <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                            <div className="">
                                <div className="flex flex-row justify-between h-full">
                                    <div className="flex items-center space-x-4">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Please select the unmatched items                        </h3>
                                        <div className="flex flex-wrap space-x-3 header-status-statistics">
                                            <span className="px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-green-300">Selected: <strong>0</strong></span>
                                            <span className="px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-yellow-200">Nothing Selected: <strong>0</strong></span>
                                            <span className="px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-red-200">Nothing Matched: <strong>11</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-scroll mt-4">
                                    <div className="flex flex-col">
                                        <div className="flex-grow">
                                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                                <div className="grid grid-cols-12 gap-6">
                                                <div className="dt-buttons btn-group flex col-span-10">          
                                                    {/* <button 
                                                        className="btn btn-secondary buttons-excel buttons-html5 btn-primary !py-1 !px-2 !text-xs !rounded" 
                                                        tabindex="0" aria-controls="DataTables_Table_0" type="button">
                                                        <span>Excel</span>
                                                    </button> 
                                                    <button className="btn btn-secondary buttons-csv buttons-html5 btn-primary !py-1 !px-2 !text-xs !rounded" 
                                                        tabindex="0" aria-controls="DataTables_Table_0" type="button">
                                                        <span>CSV</span>
                                                    </button> 
                                                    <button className="btn btn-secondary buttons-print btn-primary !py-1 !px-2 !text-xs !rounded" 
                                                    tabindex="0" aria-controls="DataTables_Table_0" type="button">
                                                        <span>Print</span>
                                                    </button> 
                                                    <div className="btn-group">
                                                    <button className="btn btn-secondary buttons-print btn-primary !py-1 !px-2 !text-xs !rounded" 
                                                        tabindex="0" aria-controls="DataTables_Table_0" type="button" aria-haspopup="true">
                                                        <span>Column visibility</span><span className="dt-down-arrow"></span>
                                                    </button>
                                                    </div> 
                                                    <button className="btn btn-secondary btn-primary-outline !py-1 !px-2 !text-xs !rounded search-pan-button-text" 
                                                    tabindex="0" aria-controls="DataTables_Table_0" type="button"><span>Filters</span>
                                                    </button>  */}
                                                </div>
                                                <div id="DataTables_Table_0_filter" className="flex col-span-2">
                                                    <label className="text-sm font-medium text-gray-700 flex items-baseline space-x-2">
                                                        <span>Search:</span>
                                                        <input type="search" 
                                                        className="form-control form-control-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" aria-controls="DataTables_Table_0" />
                                                    </label>
                                                </div>
                                                </div>
                                                
                                                    <table className="datatable relative min-w-full border-collapse dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                            <thead className="bg-gray-200 sticky z-30 top-0">
                                                    <tr className="header-row"><th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="#: activate to sort column descending" aria-sort="ascending">
                                                        #
                                                    </th><th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 no-search sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                                                    Part-Number (MPN)
                                                : activate to sort column ascending" >
                                                            Part-Number (MPN)
                                                        </th><th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 no-search sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                                                    Manufacturer
                                                : activate to sort column ascending" >
                                                            Manufacturer
                                                        </th><th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 no-sort no-export no-search sorting_disabled" rowspan="1" colspan="1" aria-label="
                                                    
                                                        
                                                            Suggestions                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                
                                                                Auto Select                                                                
                                                                    
                                                                
                                                            
                                                            
                                                                
                                                                    
                                                                        Auto Select for all items                                                                    
                                                                
                                                                
                                                                    
                                                                        Auto Select only items with one match                                                                    
                                                                
                                                            
                                                        
                                                    
                                                " >
                                                            <div className="flex flex-row justify-between items-center space-x-3">
                                                                <span>
                                                                    Suggestions                                                        </span>
                                                                <div id="auto-select-btn" className="relative inline-block text-left">
                                                                    <button id="auto-select-btn-t" type="button" className="dropdown-toggle inline-flex justify-center w-full hover:underline text-white bg-primary px-2 py-1 rounded">
                                                                        <svg className="mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                                                                        </svg>
                                                                        Auto Select                                                                <svg className="dropdown-arrow transform default-transition -mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                                                        </svg>
                                                                    </button>
                                                                    <div id="pre-proces-auto-select" className="hidden dropdown origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" 
                                                                    >
                                                                        <div className="py-1">
                                                                            <button onclick="autoSelect('all_items', 240)" className="text-gray-700 group flex w-full items-center px-4 py-2 text-sm whitespace-normal hover:bg-gray-100 default-transition">
                                                                                Auto Select for all items                                                                    </button>
                                                                        </div>
                                                                        <div className="py-1">
                                                                            <button onclick="autoSelect('only_one_matched_items', 240)" className="text-gray-700 group flex w-full items-center px-4 py-2 text-sm whitespace-normal hover:bg-gray-100 default-transition">
                                                                                Auto Select only items with one match                                                                    </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th></tr>
                                                </thead>
                                                <tbody>











                                                    <tr title="Not found" data-row-id="66075" className="detail-row odd">
                                                        <td className="border p-2 text-sm text-gray-500 sorting_1">
                                                            <span className="!text-yellow-500 p-1 rounded font-bold">
                                                                1
                                                            </span>
                                                        </td>

                                                        <td className="border p-2 text-sm text-gray-500">
                                                            <button className="flex space-x-2 group items-center" onclick="openEditProductModal('66075', 'ME D-SWITCH 200V 200mA 250mW SOD-323/G8')">
                                                                <span className="group-hover:underline text-left">
                                                                    ME D-SWITCH 200V 200mA 250mW SOD-323/G8
                                                                </span>
                                                                <span className="opacity-0 group-hover:opacity-100">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </td>

                                                        <td className="border p-2 text-sm text-gray-500">
                                                            <span>
                                                                10001
                                                            </span>
                                                        </td>

                                                        <td className="border text-sm text-gray-500">
                                                            <strong className="nothing-matched-text p-2">Nothing matched</strong>
                                                        </td>


















                                                    </tr></tbody>
                                            </table><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 11 of 11 entries</div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center sm:justify-end border-b border-gray-200 pb-4">
                            <div className="mt-3 sm:mt-0 sm:ml-4 flex space-x-2">
                                <a href="https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom" className="flex btn btn-primary-outline pulse-primary">
                                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                                    </svg>
                                    Back                </a>

                                <button onClick={handleNextStep} className="flex btn btn-primary pulse-primary">
                                    Submit                    <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </button>
                                <form className="hidden" id="process-form" action="https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom/process/BOMItem?240" method="post"> <input type="hidden" name="_token" value="GV9WLKTU9cEFE02rzpmifMJBxdjWYQPMdMCWYhps" /> </form>
                            </div>
                        </div>
                    </section>
                    <div className="page-loader justify-center items-center h-screen w-screen fixed top-0 left-0 cursor-wait bg-white bg-opacity-80 hidden" 
                    >

                        <img src="https://alpynelectronics.com/front-assets/alpyn/images/loader.gif" alt="loader" />
                    </div>

                    <div id="modal-edit-product" className="hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true" 
                    >
                        <div onclick="closeEditProductModal()" className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
                        <div className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <input type="hidden" id="modal-edit-product-search-bom-item-detail-id" />
                                <div className="p-4 text-gray-400 text-center">
                                    Please type the product name and select the founded item            </div>
                                <div className="relative">
                                    <svg className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="twitter-typeahead" >
                                        <input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" dir="ltr" 
                                         />
                                        <input id="modal-edit-product-search" type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input" placeholder="Search..." autocomplete="off" spellcheck="false" dir="auto" />
                                            <pre aria-hidden="true" >
                                        </pre>
                                        </span>
                                    </div>

                                        <ul className="max-h-80 divide-y divide-gray-100 overflow-y-auto">
                                            <li className="">
                                                <ul className="text-sm text-gray-700" id="modal-edit-product-search-result"><div className="tt-dataset tt-dataset-product_search"></div></ul>
                                            </li>
                                        </ul>
                                </div>
                        </div>
                        <div id="modal-edit-alternative-product" className="hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true" 
                        >
                            <div onclick="closeEditAlternativeProductModal()" className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
                            <div className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                                <input type="hidden" id="modal-edit-alternative-product-search-bom-item-detail-id" />
                                    <div className="p-4 text-gray-400 text-center">
                                        Please type the product name and select the founded item                </div>
                                    <div className="relative">
                                        <svg className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="twitter-typeahead" ><input type="text" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" dir="ltr" 
                                         />
                                        <input id="modal-edit-alternative-product-search" type="text" 
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input" placeholder="Search..." autocomplete="off" spellcheck="false" dir="auto" 
                                         />
                                        <pre aria-hidden="true" ></pre></span>
                                        </div>

                                            <ul className="max-h-80 divide-y divide-gray-100 overflow-y-auto">
                                                <li className="">
                                                    <ul className="text-sm text-gray-700" id="modal-edit-alternative-product-search-result"><div className="tt-dataset tt-dataset-product_search"></div></ul>
                                                </li>
                                            </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                </>

                );
};

                export default BomExcessPreProcess;
