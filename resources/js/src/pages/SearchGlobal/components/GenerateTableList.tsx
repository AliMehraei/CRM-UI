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
import { leadColumns } from "./ItemInfo/ItemColumns";

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

    const prepareColumns = (modelLabelField: string): any[] => {
        switch (modelLabelField) {
          case 'Lead':
            return leadColumns;  // Use your ItemColumns for 'excess'
          // Add more cases for other modelLabelField values
          default:
            // Fallback columns if modelLabelField doesn't match any case
            return [];
        }
      };


    return (
        // (!hasPermission(`${(permissionName)}`) || loading) ? (
        //     <LoadingSasCrm />
        // ) : (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className={`${permissionName}-table`}>
                    <div className="text-base mb-5">
                        {title ? `${title}` : <div className=""></div>}
                    </div>
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
                                                <div key={index}>
                                                    <h2 className="text-xl font-bold">
                                                        {modelName}
                                                    </h2>
                                                    <DataTable
                                                        className={`${isDark} whitespace-nowrap table-hover mt-5 mb-5`}
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
