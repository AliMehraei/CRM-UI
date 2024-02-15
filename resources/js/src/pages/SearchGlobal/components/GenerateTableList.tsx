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
import TableListModule from "./TableListModule";

const GenerateTableList = ({
    permissionName,
    frontRoute,
    query,
    filters,
}: any) => {

    const [loading, setLoading] = useState(true);
    const [loadingTable, setLoadingTable] = useState(true);
    const [checkLoading, setCheckLoading] = useState(true);
    const [emptyDataLoading, setEmptyDataLoading] = useState(false);
    const api_instance: any = new api();


    const [items, setItems] = useState([]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, "id"));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [showSettingColumns, setShowSettingColumns] = useState(false);
    const [searchColumns, setSearchColumns] = useState("");
    const [reload, setReload] = useState(false);


    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
    interface ModelColumn {
        label: string;
        value: string;
    }

    const [modelColumns, setModelColumns] = useState<ModelColumn[]>([]);


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
        filters
    ) => {
        if (query == "")
            return null;
        setLoading(true);
        setLoadingTable(true);

        try {
            await api_instance[frontRoute]({
                page: 1,
                search: query,
                filters: filters,
            })
                .then((res: any) => {
                    setItems(res.data);
                    // setTotalItems(10);
                    setLoading(false);
                    if (res.data?.data?.length == 0) {
                        setEmptyDataLoading(true);
                        setLoadingTable(false);
                    }
                    if (res.data?.length == 0) {
                        setEmptyDataLoading(true);
                        setLoadingTable(false);
                    }
                    else {
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

    // const handleSortChange = (sortStatus: any) => {
    //     const { columnAccessor, direction = "asc" } = sortStatus;
    //     setSortStatus({ columnAccessor, direction });
    //     setPage(1);
    //     fetchModelData(page, pageSize, filters, { columnAccessor, direction });
    // };

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
                render: ({ [field.value]: fieldValue,
                     [field.relation_model ? field.relation_model.model : '']: relatedValue, 
                     [field.relation_model ? 'owner' : '']: owner,
                      id,
                      [field.value=='userable_id' ? 'userable_type' : '']: userableType,
                      [field.value=='moduleable_id' ? 'moduleable_type' : '']: moduleableType,
                      [field.value=='callable_id' ? 'callable_type' : '']: callableType,
                      [field.value=='relatable_id' ? 'relatable_type' : '']: relatableType,

                      [field.value=='userable_id' ? 'userable' : '']: userable,
                      [field.value=='moduleable_id' ? 'moduleable' : '']: moduleable,
                      [field.value=='callable_id' ? 'callable' : '']: callable,
                      [field.value=='relatable_id' ? 'relatable' : '']: relatable,
                    }) => {
                    let displayValue = fieldValue;
                    let content;

                    const dateFields = ['created_at', 'updated_at'];
                    //covert date formatter
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
                    //show relation 
                    if (field.relation_model) {
                        const labelField = relatedValue?.[field.relation_model?.label_field];
                        const truncatedSubject = labelField ? labelField.slice(0, 20) : '';
                        const modelUser = ['owner', 'pmUser', 'approvedBy', 'modifier', 'creator', 'convertedBy', 'modifiedBy', 'createdBy', 'sales_person'];

                        if (modelUser.includes(field.relation_model?.model)) {
                            content = (
                                <div className="font-semibold">{`${owner?.[field.relation_model?.label_field]}`}</div>
                            );
                        }
                        else {
                            content = (
                                <NavLink target="_blank" to={`/${field.relation_model?.model}/preview/${fieldValue}`}>
                                    <div className="text-primary underline hover:no-underline font-semibold">{`${truncatedSubject}`}</div>
                                </NavLink>
                            );
                        }

                    } else {
                        const columnLink = ['full_name', 'name', 'subject', 'availability_name', 'excess_name', 'account_name', 'vendor_name', 'rfq_name'
                            , 'product_name', 'deal_name', 'vendor_rfq_name'
                        ];
                        //show base filed for each module and link to module
                        if (columnLink.includes(field.value)) {
                            // const truncatedSubject = displayValue.slice(0, 20); // Assuming you want to truncate the subject to 20 characters
                            const truncatedSubject = displayValue ? displayValue.slice(0, 20) : '';
                            content = (
                                <NavLink target="_blank" to={`/${modelLabelField}/edit/${id}`}>
                                    <div className="text-primary underline hover:no-underline font-semibold">{`${truncatedSubject}`}</div>
                                </NavLink>
                            );
                        }
                        else {
                            const columnLink = [
                                'userable_id', 'moduleable_id', 'callable_id', 'relatable_id'
                            ];
                            //relation for call and task
                            if (columnLink.includes(field.value)) {

                                const moduleableList = [
                                    { value: "App\\Models\\Account", label: "Account", model: 'account', labelFelid: 'account_name' },
                                    { value: "App\\Models\\Vendor", label: "Vendor", model: 'vendor', labelFelid: 'vendor_name' },
                                    { value: "App\\Models\\Quote", label: "Quote", model: 'quote', labelFelid: 'subject' },
                                    { value: "App\\Models\\Rfq", label: "Rfq", model: 'rfq', labelFelid: 'rfq_name' },
                                    { value: "App\\Models\\Excess", label: "Excess", model: 'excess', labelFelid: 'excess_name' },
                                    { value: "App\\Models\\Availability", label: "Availability", model: 'availability', labelFelid: 'availability_name' },
                                    { value: "App\\Models\\Product", label: "Product", model: 'product', labelFelid: 'product_name' },
                                    { value: "App\\Models\\Manufacturer", label: "Manufacturer", model: 'manufacturer', labelFelid: 'name' },
                                    { value: "App\\Models\\Deal", label: "Deals", model: 'deals', labelFelid: 'deal_name' },
                                    { value: "App\\Models\\SalesOrder", label: "Sales Order", model: 'salesOrder', labelFelid: 'subject' },
                                    { value: "App\\Models\\PurchaseOrder", label: "Purchase Order", model: 'purchaseOrder', labelFelid: 'subject' },
                                    { value: "App\\Models\\Invoice", label: "Invoice", model: 'invoice', labelFelid: 'subject' },
                                    { value: "App\\Models\\VendorRfq", label: "Vendor Rfq", model: 'vendorRfq', labelFelid: 'vendor_rfq_name' },
                                    { value: "App\\Models\\Lead", label: "Lead", model: 'vendorRfq', labelFelid: 'full_name' },
                                    { value: "App\\Models\\Contact", label: "Contact", model: 'vendorRfq', labelFelid: 'full_name' },
                                ];
                                let modelType = '';
                                let modelTypeSelected;
                                let relationFiled;
                                switch (field.value) {
                                    case 'userable_id':
                                        modelType = 'userable_type';
                                        modelTypeSelected=moduleableList
                                        .filter((entry) => entry.value === userableType)[0];
                                        relationFiled=userable;
                                        break;
                                    case 'moduleable_id':
                                        modelType = 'moduleable_type';
                                        modelTypeSelected=moduleableList
                                            .filter((entry) => entry.value === moduleableType)[0];
                                        relationFiled=moduleable;
                                        break;
                                    case 'callable_id':
                                        modelType = 'callable_type';
                                        modelTypeSelected=moduleableList
                                            .filter((entry) => entry.value === callableType)[0];
                                        relationFiled=callable;
                                        break;
                                    case 'relatable_id':
                                        modelType = 'relatable_type';
                                        modelTypeSelected=moduleableList
                                            .filter((entry) => entry.value === relatableType)[0];
                                        relationFiled=relatable;
                                        break;

                                }
                                
                                modelType=modelTypeSelected.model;
                                
                                content = (
                                    <NavLink target="_blank" to={`/${modelType}/edit/${displayValue}`}>
                                        <div className="text-primary underline hover:no-underline font-semibold">{relationFiled?.[modelTypeSelected.labelFelid]}</div>
                                    </NavLink>
                                );
                            } else {
                                content = (
                                    <div className="font-semibold">
                                        {displayValue}
                                    </div>
                                );
                            }

                        }

                    }

                    return content;
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

            if (!moduleAllColumns) {
                const data = { className: modelName };
                const res = await api_instance.getColumnsForModels(data);
                if (res.status !== 200) return;

                setToken(res.data, `allColumns${modelName}`);
                setModelColumns(res.data); // Assuming API response has a "columns" property
                setSelectedModel(modelName);
                setShowSettingColumns(!showSettingColumns);
            } else {

                setModelColumns(moduleAllColumns);
                setSelectedModel(modelName);
                setShowSettingColumns(!showSettingColumns);

            }


        } catch (error) {
            console.error("Error fetching columns:", error);
        }
    };

    useEffect(() => {
        // const data = sortBy(items, sortStatus.columnAccessor);
        // const reversedData =
        //     sortStatus.direction !== "asc" ? data.reverse() : data;
        setInitialRecords(items);
    }, [items]);




    useEffect(() => {

        fetchModelData(filters);

    }, [query]);
    useEffect(() => {
        setLoadingTable(true);
        if (records.length > 0) {
            // setTimeout(() => {
            setLoadingTable(false);
            //   }, 2000);
        }
        if (initialRecords.length > 0) {
            // setTimeout(() => {
            setLoadingTable(false);
            //   }, 2000);
        }
        if (emptyDataLoading) {
            setLoadingTable(false);
        }
    }, [records, initialRecords, checkLoading, emptyDataLoading, items]);
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
            else {
                setToken(JSON.stringify(res.data.data), "userFieldColumns");
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

    useEffect(() => {

        // setPage(0);
        // setItems([]);

        fetchModelData(filters);

    }, [filters])


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
        (loading && loadingTable) ? (
            <LoadingSpinner />
        ) : (
            <>
                <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                    <div className={`${permissionName}-table`}>
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div className="panel col-span-12">
                                <div className="datatables pagination-padding">


                                    {(items.length === 0 ? (
                                        <div className="text-center text-lg">No matching record(s) found</div>
                                    ) : (
                                        // Map through items and create a DataTable for each modelName
                                        items.map((modelData: any, index: number) => {
                                            const modelName = Object.keys(modelData)[0];
                                            const modelArray = modelData[modelName];

                                            const columns = prepareColumns(modelName);

                                            return <TableListModule key={`${modelName}-${index}`}
                                                columns={columns} modelArray={modelArray}
                                                modelName={modelName} showSettingColumns={showSettingColumns}
                                                selectedModel={selectedModel} searchColumns={searchColumns}
                                                handleCheckboxChange={handleCheckboxChange}
                                                toggleSettingColumns={toggleSettingColumns} index={index}
                                                setSelectedRecords={setSelectedRecords}
                                                selectedRecords={selectedRecords} modelColumns={modelColumns}
                                                selectedColumns={selectedColumns} handleSaveSelectedColumn={handleSaveSelectedColumn}
                                                handleCancelSelectedColumn={handleCancelSelectedColumn}
                                                setLoadingTable={setLoadingTable}

                                            />

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
