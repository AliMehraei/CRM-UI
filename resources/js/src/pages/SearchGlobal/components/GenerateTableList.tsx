import { Link, NavLink } from "react-router-dom";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import React, { useEffect, useRef, useState } from "react";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { IRootState } from "../../../store";
import api from "../../../config/api";
import { useUserStatus } from "../../../config/authCheck";
import LoadingSasCrm from "../../../components/LoadingSasCrm";
import { accountColumns, callColumns, contactColumns, dealColumns, 
    leadColumns, manufacturerColumns, salesOrderColumns, taskColumns, vendorColumns 
} from "./ItemInfo/ItemColumns";

const GenerateTableList = ({
    permissionName,
    tableColumns,
    frontRoute,
    filterParam,
    title,
}: any) => {
    const dispatch = useDispatch();
    const filterState = useSelector((state: any) => state.filters);

    const { hasPermission, isLoading, isLoggedIn } = useUserStatus();
    const [loading, setLoading] = useState(true);
    const [resetFilter, setResetFilter] = useState(false);
    const api_instance: any = new api();
    const isDark =
        useSelector((state: IRootState) => state.themeConfig.theme) === "dark";

    const [items, setItems] = useState([]);
    const [optionsFilter, setOptionsFilter] = useState([]);
    const [selectedFields, setSelectedFields] = useState<any>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState<any>([]);
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

    const [initialRecords, setInitialRecords] = useState(sortBy(items, "id"));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedModel, setSelectedModel] = useState(null);
    const [showSettingColumns, setShowSettingColumns] = useState(false);
    const [searchColumns, setSearchColumns] = useState('');

    const [selectedColumns, setSelectedColumns] = useState([]);
    interface ModelColumn {
        label: string;
        value: string;
      }
      
    const [modelColumns, setModelColumns] = useState<ModelColumn[]>([]);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: "id",
        direction: "asc",
    });


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const showMessage = (msg = "", type = "success") => {
        const toast: any = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: "toast" },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: "10px 20px",
        });
    };

    const fetchModelData = async (
        page = 1,
        pageSize = PAGE_SIZES[0],
        filters = [],
        sortStatus = {}
    ) => {
        setLoading(true);
        const {
            columnAccessor: sortField = "",
            direction: sortDirection = "",
        }: any = sortStatus;
        try {
            await api_instance[frontRoute]({
                page: page,
                search: filterParam,
                filters: filters,
            })
                .then((res: any) => {
                    
                    setItems(res.data);
                    setTotalItems(10);
                    setLoading(false);
                })
                .catch((error: any) => {
                    console.error("Error fetching data: ", error);
                    setLoading(false);
                    showMessage(
                        `Error fetching  ${permissionName} data.`,
                        "error"
                    );
                });
        } catch (error) {
            showMessage(`Error fetching ${permissionName} data.`, "error");
            console.error("Error fetching data: ", error);
            setLoading(false);
        }
    };

    const handleSortChange = (sortStatus: any) => {
        const { columnAccessor, direction = "asc" } = sortStatus;
        setSortStatus({ columnAccessor, direction });
        setPage(1);
        fetchModelData(page, pageSize, filters, { columnAccessor, direction });
    };

    const prepareColumns = (modelLabelField: string): any[] => {
        switch (modelLabelField) {
            case 'Lead':
                return leadColumns;  
            
            case 'Account':
                return accountColumns;   
            
            case 'Contact':
                return contactColumns;  
                
            case 'Deal':
                return dealColumns;
                
            case 'Manufacturer':
                return manufacturerColumns;

            case 'Task':
                return taskColumns;
            
            case 'Vendor':
                return vendorColumns;  

            case 'Call':
                return callColumns;   
            
            case 'SalesOrder':
                return salesOrderColumns;      
            default:
            // Fallback columns if modelLabelField doesn't match any case
            return [];
        }
    };

    const toggleSettingColumns = async (modelName) => {
        try {

            const data = {className : modelName};
            const res = await api_instance.getColumnsForModels(data);
            if (res.status !== 200)
                return;
            
                
            setModelColumns(res.data); // Assuming API response has a "columns" property
            setSelectedModel(modelName);
            setShowSettingColumns(!showSettingColumns);
            
          } catch (error) {
            console.error('Error fetching columns:', error);
          }
    };

    useEffect(() => {
        const data = sortBy(items, sortStatus.columnAccessor);
        const reversedData =
            sortStatus.direction !== "asc" ? data.reverse() : data;
        setInitialRecords(reversedData);
    }, [items, sortStatus]);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        setRecords([...initialRecords.slice(0, pageSize)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        fetchModelData(page, pageSize, filters, sortStatus);
    }, [page, pageSize, sortStatus, filterParam]);


    const handleSave = () => {
        // Perform actions to save selectedColumns
        console.log('Saving columns:', selectedColumns);
    
        // Reset state and hide settings
        setSearchColumns('');
        setSelectedColumns([]);
        setShowSettingColumns(false);
      };
    
      const handleCancel = () => {
        // Reset state and hide settings
        setSearchColumns('');
        setSelectedColumns([]);
        setShowSettingColumns(false);
      };

    const handleClickOutside = (event) => {

        const searchInput = document.getElementById('search-column'); // Add an id to your search input element

        if (
            searchInput && searchInput.contains(event.target) ||
            event.target.closest('.setting-list-column') // Check if the click is inside the dropdown
        ) {
            return;
        }
        
        setSearchColumns('');
        setSelectedColumns([]);
        setShowSettingColumns(false);
    };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [toggleSettingColumns]);

    


    return (
        // (!hasPermission(`${(permissionName)}`) || loading) ? (
        //     <LoadingSasCrm />
        // ) : (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className={`${permissionName}-table`}>
                        <div className="grid grid-cols-1 gap-6 mb-6">
                        <div className="panel col-span-12">
                            <div className="datatables pagination-padding">
                                {loading ? (
                                    <div className="flex justify-center">
                                        <span className="animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
                                    </div>
                                ) : (
                                    // Map through items and create a DataTable for each modelName
                                    items.map(
                                        (modelData: any, index: number) => {
                                            const modelName =
                                                Object.keys(modelData)[0];
                                            const modelArray =
                                                modelData[modelName];
                                            
                                            const columns = prepareColumns(modelName);

                                            return (
                                                <div className="relative" key={index}>
                                                    <div className="flex justify-between items-center p-4">

                                                    <h2 className="text-xl font-bold">
                                                        {modelName}
                                                    </h2>
                                                    <div onClick={() => toggleSettingColumns(modelName)} className="bg-gray-200 p-1 mt-3 rounded cursor-pointer">
                                                        <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                                        </svg>
                                                    </div>
                                                    </div>
                                                    {showSettingColumns && selectedModel === modelName && (
                                                        <div className={`setting-list-column min-w-200 ${isDark} whitespace-nowrap table-hover w-1/5 h-auto p-5 bg-white border border-gray-300 shadow-md rounded absolute z-50 top-5 right-1`} >
                                                         <div className="overflow-y-scroll h-80">  

                                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                                            <div className="mb-3 mr-3">
                                                            {/* Input search */}
                                                            <input
                                                                type="text"
                                                                id="search-column"
                                                                placeholder="Search..."
                                                                value={searchColumns}
                                                                onChange={(e) => setSearchColumns(e.target.value)}
                                                                className="w-full p-2 border border-gray-300 rounded"
                                                            />
                                                            </div>
                                                            {modelColumns
                                                            .filter((column) => column.label.toLowerCase().includes(searchColumns.toLowerCase()))
                                                            .map((column) => (
                                                            <li key={column.value} style={{ display: 'flex', alignItems: 'center' }}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={column.value}
                                                                    name={column.value}
                                                                    className="mr-2"
                                                                    // You can handle checkbox changes here if needed
                                                                />
                                                                <label className="mt-1" htmlFor={column.value}>{column.label}</label>
                                                            </li>
                                                            ))}
                                                        </ul>
                                                        </div>  
                                                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                                                        <div className="mt-5 flex justify-end">
                                                        {/* Save button */}
                                                        <button className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSave}>
                                                            Save
                                                        </button>
                                                        
                                                        {/* Cancel button */}
                                                        <button className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={handleCancel}>
                                                            Cancel
                                                        </button>
                                                        </div>
                                                        </div>
                                                    )}
                                                    <DataTable
                                                        className={`${isDark} whitespace-nowrap table-hover mb-5`}
                                                        records={modelArray}
                                                        columns={columns}
                                                        highlightOnHover
                                                        totalRecords={
                                                            modelArray.length
                                                        }
                                                        recordsPerPage={
                                                            pageSize
                                                        }
                                                        page={page}
                                                        onPageChange={setPage}
                                                        recordsPerPageOptions={
                                                            PAGE_SIZES
                                                        }
                                                        onRecordsPerPageChange={
                                                            setPageSize
                                                        }
                                                        sortStatus={sortStatus}
                                                        onSortStatusChange={
                                                            handleSortChange
                                                        }
                                                        selectedRecords={
                                                            selectedRecords
                                                        }
                                                        onSelectedRecordsChange={
                                                            setSelectedRecords
                                                        }
                                                        style={{ zIndex: 1 }}

                                                    />
                                                </div>
                                            );
                                        }
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        // )
    );
};

export default GenerateTableList;
