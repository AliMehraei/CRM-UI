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

const TableListModule = ({ columns, modelArray, handleSaveSelectedColumn,
    modelName, showSettingColumns, modelColumns,
    selectedModel, searchColumns, selectedColumns,
    handleCheckboxChange, toggleSettingColumns, index,
    setSelectedRecords, selectedRecords, handleCancelSelectedColumn,setShowSettingColumns
}: any) => {
    const isDark =
        useSelector((state: IRootState) => state.themeConfig.theme) === "dark";
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [items, setItems] = useState(modelArray);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, "id"));
    const [records, setRecords] = useState(initialRecords);
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: "id",
        direction: "asc",
    });
    const [hoveredRow, setHoveredRow] = useState(null);





    const handleMouseEnter = (index) => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    
    const handleEdit = (id) => {
    };

    const handleDelete = (id) => {
    };

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus]);
    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const data = sortBy(items, sortStatus.columnAccessor);
        const reversedData =
            sortStatus.direction !== "asc" ? data.reverse() : data;
        setInitialRecords(reversedData);
    }, [items]);
    useEffect(() => {
        // setRecords([...initialRecords.slice(0, pageSize)]);
        const from = (page - 1) * pageSize;
        const to = from + pageSize;

        setRecords([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);


    const handleSortChange = (sortStatus: any) => {
        const { columnAccessor, direction = "asc" } = sortStatus;
        setSortStatus({ columnAccessor, direction });
        setPage(1);
    };
    return (
        <>

            <div className="relative" key={index}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">{modelName}</h2>
                    <div
                        onClick={() => toggleSettingColumns(modelName)}
                        className="bg-gray-200 p-1 mt-3 rounded cursor-pointer"
                    >
                        <svg
                            className="w-3 h-3 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 8"
                        >
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
                    <div
                        className={`setting-list-column min-w-200 ${isDark} whitespace-nowrap table-hover w-1/5 h-auto p-5 bg-white border border-gray-300 shadow-md rounded absolute z-50 top-5 right-1`}
                        // onMouseLeave={() => setShowSettingColumns(false)}
                    >
                        <div className="overflow-y-scroll h-80">
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                }}

                            >
                                {/* Checkbox list */}
                                {modelColumns
                                    .filter((column) =>
                                        column.label.includes(
                                            searchColumns.toLowerCase()
                                        )
                                    )
                                    .map((column) => {
                                        let isChecked =
                                            selectedColumns.includes(
                                                column.value
                                            );
                                        return (
                                            <li
                                                key={column.value}
                                                style={{
                                                    display: "flex",
                                                    alignItems:
                                                        "center",
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={column.value}
                                                    name={column.value}
                                                    className="mr-2"
                                                    onChange={(e) =>
                                                        handleCheckboxChange(
                                                            column.value,
                                                            e.target
                                                                .checked
                                                        )
                                                    }
                                                    checked={isChecked}
                                                />
                                                <label
                                                    className="mt-1"
                                                    htmlFor={
                                                        column.value
                                                    }
                                                >
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
                            <button
                                className="ml-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={handleSaveSelectedColumn}
                            >
                                Save
                            </button>
                            {/* Cancel button */}
                            <button
                                className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                onClick={handleCancelSelectedColumn}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                <DataTable
                    className={`${isDark} whitespace-nowrap table-hover mb-5`}
                    records={records}
                    columns={columns}
                    highlightOnHover
                    totalRecords={initialRecords.length}
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
                     {records.map((row, index) => (
                        <tr
                            key={row.id} // Assuming each row has a unique id
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Render your cells here */}
                            {columns.map(column => (
                                <td key={column.id}> {row[column.id]} </td>
                            ))}
                            {/* Conditional rendering of action buttons */}
                            {hoveredRow === index && (
                                <td>
                                    {/* Action buttons go here */}
                                    <button onClick={() => handleEdit(row.id)}>Edit</button>
                                    <button onClick={() => handleDelete(row.id)}>Delete</button>
                                </td>
                            )}
                        </tr>
                    ))}
            </div>


        </>
    );
};

export default TableListModule;
