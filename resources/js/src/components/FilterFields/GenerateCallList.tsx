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
import { DeleteIcon, EditIcon, ViewIcon } from "../FormFields/CommonIcons";
import Api from "../../config/api";
import ExtraEmailLogDataSectionPreview from "../Preview/ExtraEmailLogDataSectionPreview";

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
    const api_instance: any = new Api();
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
    const api = new Api();

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: "id",
        direction: "asc",
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    interface MoreCallLogInformation {
        leftObjects: { label: string; value: string }[];
        rightObjects: { label: string; value: string }[];
    }

    const [selectedItemCallLog, setSelectedItemCallLog] =
        useState<MoreCallLogInformation | null>(null);

    let moreCallLogInformation: MoreCallLogInformation = {
        leftObjects: [],
        rightObjects: [],
    };    
    // const showCallLog = (id: any = null) => {
    //     Swal.fire({
    //         title: "<strong>HTML <u>example</u></strong>",
    //         icon: "info",
    //         html: `
    //           You can use <b>bold text</b>,
    //           <a href="#">links</a>,
    //           and other HTML tags
    //         `,
    //         showCloseButton: true,
    //         showCancelButton: true,
    //         focusConfirm: false,
    //         confirmButtonText: `
    //           <i class="fa fa-thumbs-up"></i> Great!
    //         `,
    //         confirmButtonAriaLabel: "Thumbs up, great!",
    //         cancelButtonText: `
    //           <i class="fa fa-thumbs-down"></i>
    //         `,
    //         cancelButtonAriaLabel: "Thumbs down"
    //       });
    // };

    const setMoreDataCallLog = (callLog: any) => {

   
        moreCallLogInformation = {
            leftObjects: [
                { label: "Callable Type", value: `${callLog.callable_type ?? ""}` },
                { label: "Relatable Type", value: `${callLog.relatable_type ?? ""}` },
                {
                    label: "Modifier",
                    value: `${callLog.modifier?.first_name ?? ""} ${
                        callLog.modifier?.last_name ?? ""
                    }`,
                },
                { label: "Voice Recording", value: `${callLog.voice_recording ?? ""}` },
            ],
            rightObjects: [
                
                { label: "Call Purpose", value: `${callLog.call_purpose ?? ""}` },
                {
                    label: "Call Agenda",
                    value: `${callLog.call_agenda ?? ""}`,
                },
                { label: "Call Result", value: `${callLog.call_result ?? ""}` },
                { label: "Description", value: `${(callLog.description ?? "").substring(0, 50)}${
                    callLog.description && callLog.description.length > 15
                        ? "..."
                        : ""
                }`, },
            ],
        };

        setSelectedItemCallLog(moreCallLogInformation);

        setIsPopupOpen(true);
    };

    const fetchSingleData = async (id) => {
        const response = await api.fetchSingleCall(id);
        
        if (response.status != 200)
            return
        const callLog = response.data.data.call;
        setMoreDataCallLog(callLog);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
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
                    onClick={() => fetchSingleData(id)}
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
                                    <>
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
                                    {isPopupOpen && selectedItemCallLog && (
                                        <div
                                            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white shadow-md rounded z-50 border  shadow-gray-300`}
                                        >
                                            <div
                                                className="absolute top-2 right-2 cursor-pointer"
                                                onClick={handleClosePopup}
                                            >
                                                <svg
                                                    className="w-6 h-6 text-gray-600 hover:text-red-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <ExtraEmailLogDataSectionPreview
                                                title="Email Log"
                                                leftObjects={selectedItemCallLog.leftObjects}
                                                rightObjects={selectedItemCallLog.rightObjects}
                                            />
                
                                            <div className="mt-auto px-2 py-3 sm:flex sm:flex-row-reverse sm:px-3 my-5">
                                                <button
                                                    className="fixed bottom-5 w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    onClick={handleClosePopup}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    </>
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
