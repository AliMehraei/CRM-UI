import React, { useState, useCallback } from 'react';

import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { displayImage, upFirstLetter } from "../../components/Functions/CommonFunctions";
import Api from "../../config/api";
import { resetForm, updateFormData } from "../../store/contactFormSlice";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const BomExcessPreProcess = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [configHeaders, setConfigHeaders] = useState({});
    const [columnsData, setColumnsData] = useState({});
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
    const modelName = "contact";
    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
   

    useEffect( () => {
        getDataUrl()
    }, []);


    const getDataUrl = async() => { 
        setLoading(true);
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Process");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List");
        setEmptyMessage("You don't have any" + upFirstLetter(pathParts[1]) + " List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Process"));
        setLoading(false);
    }
   


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
        setLoading(true);
        const modelResponse = await api.fetchSingleContact(contactId);
        setLoading(false);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };

    useEffect(() => {
        fetchData();
    }, [contactId]);

    const fetchDataProcess = async () => {
        setLoading(true);
        const modelResponse = await api.bomItemProcess(contactId,modelName,id);
        setLoading(false);
        if (modelResponse.status != 200)
            return
        const data=modelResponse.data.data;

        setConfigHeaders(data.configHeaders);
        setColumnsData(data.BOMItemDetails);

                console.log(typeof(data.BOMItemDetails));

    };

    const getStatusClass = (item: any) => {
        switch (item.process_status) {
          case 'incorrect_data':
            return 'text-red-600';
          case 'without_product_name':
            return 'text-red-400';
          case 'not_found':
            return 'text-yellow-500';
          case 'found':
            return 'text-green-500';
          default:
            return 'p-1 rounded font-bold';
        }
    };

    useEffect(() => {
        fetchDataProcess();
    }, []);


    return (
        (loading) ? (
            <LoadingSasCrm />
        ) : (
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
                                                    <tr className="header-row">
                                                    <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="#: activate to sort column descending" aria-sort="ascending">
                                                        #
                                                    </th>
                                                    {Object.keys(configHeaders).map((key, index) => (
                                                                        
                                                                        <React.Fragment key={index}>
                                                                        {index === 3 ? (
                                                                            <>
                                                                          <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                            <div className="flex flex-row justify-between items-center space-x-3">
                                                                              <span>Suggestions</span>
                                                                            </div>
                                                                          </th>
                                                                          <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                            Status
                                                                        </th>
                                                                        </>
                                                                        ) : (
                                                                          <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                            {configHeaders[key]}
                                                                          </th>
                                                                        )}
                                                                      </React.Fragment>
                                                                    ))}
                                                                 
                                                    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        

                                                        {Object.values(columnsData).map((item: any, index) => (
                                                            <tr title={item.process_status} data-row-id={item.id} className="detail-row">

                                                            <td className="border p-2 text-sm text-gray-500">
                                                            <span className={getStatusClass(item)}>
                                                                {item.display_order}
                                                            </span>
                                                            </td>
                                                            <td className="border p-2 text-sm text-gray-500">{item.processed_data.Product_Name}</td>
                                                            <td className="border p-2 text-sm text-gray-500">{item.processed_data.Manufacture}</td>
                                                            <td className="border p-2 text-sm text-gray-500">{item.processed_data.Quantity}</td>
                                                            <td className="border p-2 text-sm text-gray-500">
                                                                {/* {item.process_status === 'found' ? (
                                                                    <div className="flex flex-col p-2">
                                                                    <select name="manufacture_name" className="manufacture-name w-full rounded border-gray-300" data-bom-item-detail-id="{{ $BOMItemDetail->id }}" data-bom-item-id="{{ $BOMItem->id }}">
                                                                        <option value="">Select or Ignore</option>
                                                                        @foreach ($BOMItemDetail->matched_data->products as $product)
                                                                            @php
                                                                                $isSelected = $BOMItemDetail->calculateIsSelected($product);
                                                                                if ($isSelected) $anOptionIsSelected = true;
                                                                            @endphp
                                                                            <option value="{{ $product->crm_id ?? $product->source }}" data-product="{{ $product->name }}" data-manufacture="{{ $product->manufacture_name }}" {{ $isSelected ? 'selected' : '' }}>
                                                                                {{ $product->control }} {{ !$isSelected ? '(Alternative)' : '' }}
                                                                            </option>
                                                                        @endforeach
                                                                    </select>
                                                                    @if ($alternativeCount != 0)
                                                                        <span class="text-red-500">@lang('website.X Alternative found', ['X' => $alternativeCount])</span>
                                                                    @endif
                                                                </div>
                                                                ) : ()

                                                                } */}
                                                            </td>
                                                            <td className="border p-2 text-sm text-gray-500">{item.processed_data.Quantity}</td>
                                                            </tr>
                                                        ))}

                                                        

                                                    </tbody>
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
        )
    );
};

                export default BomExcessPreProcess;
