import { Link, NavLink } from "react-router-dom";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import React, { useCallback, useEffect, useRef, useState } from "react";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { IRootState } from "../../../store";
import api from "../../../config/api";
import { useUserStatus } from "../../../config/authCheck";
import LoadingSasCrm from "../../../components/LoadingSasCrm";
import {
    accountColumns,
    callColumns,
    contactColumns,
    dealColumns,
    leadColumns,
    manufacturerColumns,
    salesOrderColumns,
    taskColumns,
    vendorColumns,
} from "./ItemInfo/ItemColumns";
import { getToken, setToken } from "../../../config/config";
import LoadingSpinner from "../../../components/LoadingSpinner";

const GenerateTableList = ({
    permissionName,
    frontRoute,
    query,
    filters,
}: any) => {

    const { hasPermission, isLoading, isLoggedIn } = useUserStatus();
    const [loading, setLoading] = useState(true);
    const [loadingTable, setLoadingTable] = useState(true);
    const [checkLoading, setCheckLoading] = useState(true);
    const [emptyDataLoading, setEmptyDataLoading] = useState(false);
    const api_instance: any = new api();
    const isDark =
        useSelector((state: IRootState) => state.themeConfig.theme) === "dark";

    const [items, setItems] = useState([]);
   
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10,50,100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

    const [initialRecords, setInitialRecords] = useState(sortBy(items, "id"));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [selectedModel, setSelectedModel] = useState(null);
    const [showSettingColumns, setShowSettingColumns] = useState(false);
    const [searchColumns, setSearchColumns] = useState("");
    const settingColumnsRef = useRef<HTMLDivElement>(null);


    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
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
        filters,
        sortStatus = {}
    ) => {
        setLoading(true);
        setLoadingTable(true);
        const {
            columnAccessor: sortField = "",
            direction: sortDirection = "",
        }: any = sortStatus;
        try {
            await api_instance[frontRoute]({
                page: page,
                search: query,
                filters: filters,
            })
                .then((res: any) => {
                    setItems(res.data);
                    // setTotalItems(10);
                    setLoading(false);
                    if(res.data?.data?.length==0){
                        setEmptyDataLoading(true);
                    }
                    else{
                        setEmptyDataLoading(false);
                    }
                })
                .catch((error: any) => {
                    console.error("Error fetching data: ", error);
                    setLoading(false);
                    setCheckLoading(!checkLoading);
                    showMessage(
                        `Error fetching  ${permissionName} data.`,
                        "error"
                    );
                });
        } catch (error) {
            showMessage(`Error fetching ${permissionName} data.`, "error");
            console.error("Error fetching data: ", error);
            setLoading(false);
            setCheckLoading(!checkLoading);
        }
    };

    const handleSortChange = (sortStatus: any) => {
        const { columnAccessor, direction = "asc" } = sortStatus;
        setSortStatus({ columnAccessor, direction });
        setPage(1);
        fetchModelData(page, pageSize, filters, { columnAccessor, direction });
    };

    const prepareColumns = (modelLabelField: string): any[] => {
        let dynamicColumns: any[] = []; // Explicitly specify the type of dynamicColumns
    

        switch (modelLabelField) {
            case "Lead":
                dynamicColumns = leadColumns;

            case "Account":
                dynamicColumns = accountColumns;

            case "Contact":
                dynamicColumns = contactColumns;

            case "Deal":
                dynamicColumns = dealColumns;

            case "Manufacturer":
                dynamicColumns = manufacturerColumns;

            case "Task":
                dynamicColumns = taskColumns;

            case "Vendor":
                dynamicColumns = vendorColumns;

            case "Call":
                dynamicColumns = callColumns;

            case "SalesOrder":
                dynamicColumns = salesOrderColumns;
            default:
                // Fallback columns if modelLabelField doesn't match any case
                dynamicColumns = [];
        }
        // Get additional columns from userFieldColumns
        let userFieldColumns = JSON.parse(getToken("userFieldColumns") ?? "[]");

        userFieldColumns = userFieldColumns
            .filter((entry) => entry.model_type === "App\\Models\\" + modelLabelField)
            .filter((entry) => entry.type === "search");
        // Extract additional columns for the current model
        const additionalColumns = userFieldColumns
        .flatMap(entry => JSON.parse(entry.field_columns))
        .map(field => ({
            accessor: field.value,
            title: field.label,
            sortable: true, 
            render: ({ [field.value]: fieldValue, [field.relation_model ? field.relation_model.model : '']: relatedValue }) => {
                let displayValue = fieldValue;
            
                const dateFields = ['created_at', 'updated_at'];
            
                if (dateFields.includes(field.value)) {
                    const date = new Date(fieldValue); // Parse fieldValue into a Date object
                    if (!isNaN(date.getTime())) { // Check if the parsed date is valid
                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const hours = date.getHours();
                        const minutes = String(date.getMinutes()).padStart(2, '0');
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        displayValue = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${hours % 12 || 12}:${minutes} ${ampm}`;
                    }
                }
            
                return (
                    <div className="font-semibold">
                        {field.relation_model ? relatedValue?.[field.relation_model?.label_field] : displayValue}
                    </div>
                );
            },
            
            }));
        
        
        // Use additional columns if available, otherwise use default columns
        return additionalColumns.length > 0 ? additionalColumns : dynamicColumns;
    };

    const toggleSettingColumns = async (modelName) => {
        try {
            const moduleAllColumns = getToken(`allColumns${modelName}`);

            // console.log("showSettingColumns",showSettingColumns);
            // console.log("selectedModel",selectedModel);
            // console.log("modelName",modelName);
            
            if(!moduleAllColumns){
                const data = { className: modelName };
                const res = await api_instance.getColumnsForModels(data);
                if (res.status !== 200) return;

                setToken(res.data,`allColumns${modelName}`);
                setModelColumns(res.data); // Assuming API response has a "columns" property
                setSelectedModel(modelName);
                setShowSettingColumns(!showSettingColumns);
            }else {
                
                setModelColumns(moduleAllColumns); 
                setSelectedModel(modelName);
                setShowSettingColumns(!showSettingColumns);

            }
            
            
        } catch (error) {
            console.error("Error fetching columns:", error);
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
    }, [page, pageSize, sortStatus, query]);
    useEffect(()=>{
        setLoadingTable(true);
        if(records.length > 0) {
            // setTimeout(() => {
            setLoadingTable(false);
            //   }, 2000);
        }
        if(initialRecords.length > 0) {
            // setTimeout(() => {
            setLoadingTable(false);
            //   }, 2000);
        }
        if(emptyDataLoading){
            setLoadingTable(false);
        }        
    },[records,initialRecords,checkLoading,emptyDataLoading]);
    const handleSaveSelectedColumn = async () => {
        try {
            if (!selectedColumns || selectedColumns.length === 0) {
                showMessage("No columns selected.", "error");
                return;
            }

            // let filteredUserFieldColumns = JSON.parse(
            //     getToken("userFieldColumns") ?? "[]"
            // );

            // filteredUserFieldColumns = filteredUserFieldColumns
            //     .filter(
            //         (entry) =>
            //             entry.model_type === "App\\Models\\" + selectedModel
            //     )
            //     .filter((entry) => entry.type === "search");

            // const allSelectedColumns = [
            //     ...selectedColumns,
            //     ...filteredUserFieldColumns
            //         .map((entry) => JSON.parse(entry.field_columns))
            //         .flatMap((field) => field.map((f) => f.value)),
            // ];

            const data = {
                modelName: selectedModel,
                selectedColumns: selectedColumns,
                type: "search",
            };
            const res = await api_instance.createFieldColumnsSearch(data);

            if (res.status !== 200) {
                showMessage(res.data.message, "error");
            }
            else{
                setToken(JSON.stringify(res.data.data) , "userFieldColumns" );
            }

            showMessage(res.data.message, "success");

            // Reset state and hide settings
            setSearchColumns("");
            setSelectedColumns([]);
            setShowSettingColumns(false);
        } catch (error) {
            showMessage(`Error create setting field columns.`, "error");
        }
    };

    const handleCancelSelectedColumn = () => {
        // Reset state and hide settings
        setSearchColumns("");
        // setSelectedColumns([]);
        setShowSettingColumns(false);
    };

    const handleClickOutside = (event) => {
        
            setShowSettingColumns(false);
        
    };

    useEffect(()=>{

        // setPage(0);
        // setItems([]);
        fetchModelData(page, pageSize, filters, sortStatus);

    },[filters])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleSettingColumns]);

    
    const handleCheckboxChange = useCallback((columnValue, checked) => {
        if (checked) {
            setSelectedColumns(prevSelectedColumns => [...prevSelectedColumns, columnValue]);
        } else {
            setSelectedColumns(prevSelectedColumns => prevSelectedColumns.filter(selectedColumn => selectedColumn !== columnValue));
        }
    }, []);
    useEffect(() => {
        const filteredUserFieldColumns = JSON.parse(getToken("userFieldColumns") ?? "[]")
            .filter(entry => entry.model_type === "App\\Models\\" + selectedModel && entry.type === "search");

        const selectedColumnValues = filteredUserFieldColumns.reduce((acc, entry) => {
            const fieldColumns = JSON.parse(entry.field_columns);
            const values = fieldColumns.map(field => field.value);
            return [...acc, ...values];
        }, []);

        setSelectedColumns(selectedColumnValues);
    }, [selectedModel]); // Add dependencies as needed

    
    return (
        ( loading) ? (
            <LoadingSpinner />
        ) : (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className={`${permissionName}-table`}>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <div className="panel col-span-12">
                            <div className="datatables pagination-padding">
                                {loadingTable ? (
                                     <LoadingSpinner />
                                ) : (

                                    items.length === 0 ? (
                                        <div className="text-center text-lg">No matching record(s) found</div>
                                    ) : (
                                    // Map through items and create a DataTable for each modelName
                                    items.map((modelData: any, index: number) => {
                                            const modelName = Object.keys(modelData)[0];
                                            const modelArray = modelData[modelName];

                                            const columns = prepareColumns(modelName);

                                            return (
                                                <div className="relative" key={index}>
                                                    <div className="flex justify-between items-center p-4">
                                                        <h2 className="text-xl font-bold">
                                                            {modelName}
                                                        </h2>
                                                        <div ref={settingColumnsRef} onClick={() => toggleSettingColumns(modelName)}
                                                            className="bg-gray-200 p-1 mt-3 rounded cursor-pointer">
                                                            <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {showSettingColumns && selectedModel === modelName && (
                                                        <div className={`setting-list-column min-w-200 ${isDark} whitespace-nowrap table-hover w-1/5 h-auto p-5 bg-white border border-gray-300 shadow-md rounded absolute z-50 top-5 right-1`}>
                                                            <div className="overflow-y-scroll h-80">
                                                                <ul style={{ listStyle: "none", padding: 0 }}>
                                                                    {/* Checkbox list */}
                                                                    {modelColumns
                                                                        .filter((column) => column.label.includes(searchColumns.toLowerCase()))
                                                                        .map((column) => {
                                                                            let isChecked = selectedColumns.includes(column.value);
                                                                            return (
                                                                                <li key={column.value} style={{ display: "flex", alignItems: "center" }}>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id={column.value}
                                                                                        name={column.value}
                                                                                        className="mr-2"
                                                                                        onChange={(e) => handleCheckboxChange(column.value, e.target.checked)}
                                                                                        checked={isChecked}
                                                                                    />
                                                                                    <label className="mt-1" htmlFor={column.value}>
                                                                                        {column.label}
                                                                                    </label>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                </ul>
                                                            </div>
                                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                                            <div className="mt-5 flex justify-end">
                                                                {/* Save button */}
                                                                <button className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSaveSelectedColumn}>
                                                                    Save
                                                                </button>
                                                                {/* Cancel button */}
                                                                <button className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={handleCancelSelectedColumn}>
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
                                                        totalRecords={modelArray.length}
                                                        recordsPerPage={pageSize}
                                                        page={page}
                                                        onPageChange={setPage}
                                                        recordsPerPageOptions={PAGE_SIZES}
                                                        onRecordsPerPageChange={setPageSize}
                                                        sortStatus={sortStatus}
                                                        onSortStatusChange={handleSortChange}
                                                        selectedRecords={selectedRecords}
                                                        onSelectedRecordsChange={setSelectedRecords}
                                                        style={{ zIndex: 1 }}
                                                    />
                                                </div>
                                            );
                                        }
                                    )
                                    )
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        )
    );
};

export default GenerateTableList;
