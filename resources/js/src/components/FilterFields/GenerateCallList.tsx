import { Link, NavLink } from "react-router-dom";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import React, { useEffect, useRef, useState } from "react";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import Swal from "sweetalert2";
import api from "../../config/api";
import { useUserStatus } from "../../config/authCheck";
import LoadingSasCrm from "../LoadingSasCrm";
import {
    findApiToCall,
    upFirstLetter,
    formattedModelName,
} from "../Functions/CommonFunctions";
import { DeleteIcon, EditIcon, ViewIcon } from "../FormFields/CommonIcons";
import { resetFilterSlice } from "../../store/filterSlice";
import CheckboxComponent from "./CheckboxComponent";
import SearchOptionComponent from "./SeachOptionComponent";

const GenerateCallList = ({
    permissionName,
    type,
    routeName,
    modelId,
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
    const showCallLog = (id: any = null) => {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
              You can use <b>bold text</b>,
              <a href="#">links</a>,
              and other HTML tags
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
          });
    };

    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const tableColumns: any = [
        // {
        //     accessor: "id",
        //     sortable: true,
        //     render: ({ id }: any) => <div className="font-semibold">{id}</div>,
        // },
        {
            accessor: "Subject",
            sortable: true,
            render: ({ subject, id }: any) => (
                <div className="font-semibold">{`#${subject}`}</div>
            ),
        },
        {
            accessor: "type",

            sortable: true,
            render: ({ type }: any) => (
                <div className="flex items-center font-semibold">{type}</div>
            ),
        },


        {
            accessor: "owner",
            title: "Call Owner",
            sortable: false,
            render: ({ owner }: any) => (
                <div className="flex items-center font-semibold">
                    {owner
                        ? owner.first_name + " " + owner.last_name
                        : "No Owner"}
                </div>
            ),
        },

        {
            accessor: "call_start_time",
            title : "Call data",
            sortable: true,
            render: ({ call_start_time }: any) => (
                <div className="flex items-center font-semibold">{call_start_time}</div>
            ),
        },

        {
            accessor: "call_duration",
            title : "Duration",
            sortable: true,
            render: ({ call_duration }: any) => (
                <div className="flex items-center font-semibold">{call_duration}</div>
            ),
        },

        {
            accessor: "outgoing_call_status",
            title : "Status",
            sortable: true,
            render: ({ outgoing_call_status }: any) => (
                <div className="flex items-center font-semibold">{outgoing_call_status}</div>
            ),
        },

        {
            accessor: "created_by_id",
            title: "Creator",
            sortable: true,
            render: ({ creator }: any) => (
                <div className="flex items-center font-semibold">
                    {creator
                        ? creator.first_name + " " + creator.last_name
                        : "No Creator"}
                </div>
            ),
        },
        // {
        //     accessor: "created_at",
        //     title: "Created time",
        //     sortable: true,
        //     render: ({ created_at }) => {
        //         const date = new Date(created_at);
        //         const months = [
        //             "Jan",
        //             "Feb",
        //             "Mar",
        //             "Apr",
        //             "May",
        //             "Jun",
        //             "Jul",
        //             "Aug",
        //             "Sep",
        //             "Oct",
        //             "Nov",
        //             "Dec",
        //         ];
        //         const hours = date.getHours();
        //         const minutes = String(date.getMinutes()).padStart(2, "0");
        //         const ampm = hours >= 12 ? "PM" : "AM";
        //         const formattedDate = `${
        //             months[date.getMonth()]
        //         } ${date.getDate()}, ${date.getFullYear()} ${
        //             hours % 12 || 12
        //         }:${minutes} ${ampm}`;

        //         return <div className="font-semibold">{formattedDate}</div>;
        //     },
        // },

        {
            accessor: "action",
            sortable: false,
            render: ({ id }: any) => (
                <button
                    type="button"
                    className="flex hover:text-danger"
                    onClick={() => showCallLog(id)}
                >
                     <ViewIcon />
                </button>
            ),
        },
    ];

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
        sortStatus = {}
    ) => {
        setLoading(true);
        const {
            columnAccessor: sortField = "",
            direction: sortDirection = "",
        }: any = sortStatus;
        try {
            await api_instance[routeName]({
                page: page,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
                modelId,
            })
                .then((res: any) => {
                    setItems(res.data?.data?.data);
                    setTotalItems(res.data?.data?.total);
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
        fetchModelData(page, pageSize, { columnAccessor, direction });
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
        fetchModelData(page, pageSize, sortStatus);
    }, [page, pageSize, sortStatus]);

    return !hasPermission(`${permissionName}`) || loading ? (
        <LoadingSasCrm />
    ) : (
        <>
            <div className="panel px-0 ">
                <div className={`${permissionName}-table`}>
                    <div className="text-lg ps-5">
                        {title ? `${title}:` : <div className=""></div>}
                    </div>
                    <div className="grid grid-cols-1 gap-6 m-0 ">
                        <div className="panel col-span-12">
                            <div className="datatables pagination-padding">
                                {loading ? (
                                    <div className="flex justify-center">
                                        <span className="animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
                                    </div>
                                ) : (
                                    <DataTable
                                        className={`${isDark} whitespace-nowrap table-hover`}
                                        records={records}
                                        columns={tableColumns}
                                        highlightOnHover
                                        totalRecords={totalItems}
                                        recordsPerPage={pageSize}
                                        page={page}
                                        onPageChange={setPage}
                                        recordsPerPageOptions={PAGE_SIZES}
                                        onRecordsPerPageChange={setPageSize}
                                        sortStatus={sortStatus}
                                        onSortStatusChange={handleSortChange}
                                        selectedRecords={selectedRecords}
                                        onSelectedRecordsChange={
                                            setSelectedRecords
                                        }
                                        paginationText={({
                                            from,
                                            to,
                                            totalRecords,
                                        }) =>
                                            `Showing ${from} to ${to} of ${totalRecords} entries`
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenerateCallList;
