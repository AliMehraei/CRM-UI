import React, { useState } from "react";
import GenerateTableList from "./GenerateTableList";
import Swal from "sweetalert2";
import api from '../../../config/api';
import { findApiToCall } from "../../../components/Functions/CommonFunctions";

const ListBom = () => {

    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const api_instance: any = new api();


    const deleteRow = (id: any = null) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                if (id) {
                    deleteSingleRow(id);
                    setSelectedRecords([]);
                } else {
                    let selectedRows = selectedRecords || [];
                    const ids = selectedRows.map((d: any) => d.id);
                    ids.forEach((rowId: any) => deleteSingleRow(rowId));
                    setSelectedRecords([]);
                    setPage(1);
                }
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Row has been deleted.',
                    icon: 'success',
                    customClass: 'sweet-alerts'
                });
            }
        });
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    const deleteSingleRow = async (rowId: number) => {
        try {
            setLoading(true);

            findApiToCall(`deleteSingleBomItem`).call(api_instance, rowId)
                .then((res: any) => {
                    const result = res.data;
                    if (result.status) {
                        // applyFilters(filterOptionRef.current);
                        showMessage(`Successful deleting the Bom Item: ` + result.message, 'success');
                    } else {
                        showMessage(`Error deleting the Bom Item: ` + result.message, 'error');
                        console.error(`Error deleting the Bom Item : `, result.message);
                    }
                });
            setLoading(false);
        } catch (error) {
            showMessage('Error making delete request', 'error');
            console.error('Error making delete request', error);
            setLoading(false);
        }
    };


    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id } : any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'title',
            sortable: true,
            render: ({ title } : any) => <div className="font-semibold">{title}</div>,
        },
        {
            accessor: 'status',
            title: 'Status',
            sortable: true,
            render: ({ status } : any) => (
                <div className="font-semibold">{`${status}`}</div>
            ),
        },
        
        {
            accessor: 'created_at',
            title: 'Created At',
            sortable: true,
            render: ({ created_at} : any) => (
                <div className="font-semibold">
                    {created_at}
                </div>
            ),
        },

        {
            accessor: 'action',
            title: 'Actions',
            sortable: false,
            textAlignment: 'center',
            render: ({ id, status} : any) => (
                <>
                    <div className="flex gap-4 items-center w-max mx-auto">

                    {['new', 'header_selected'].includes(status) && (
                    <a href="#"
                        className="bg-white p-2 rounded-md text-primary-500 border border-primary-500 hover:text-white hover:bg-sky-600 default-transition pulse-primary flex items-center justify-center">
                        <span className="text-sm">Go to header selection page</span>
                        <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </a>
                    )}

                    {['pre_processing', 'pre_processed_with_failures'].includes(status) && (
                    <a href="#"
                    className="bg-white p-2 rounded-md text-primary-500 border border-primary-500 hover:text-white hover:bg-sky-600 default-transition pulse-primary flex items-center justify-center">
                    <span className="text-sm">Go to the pre-process page</span>
                    <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                    </a>
                    )}

                    {['processed_successfully', 'processed_with_failures'].includes(status) && (
                    <a href="#"
                    className="bg-white p-2 rounded-md text-primary-500 border border-primary-500 hover:text-white hover:bg-sky-600 default-transition pulse-primary">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </a>
                    )}

                    {['processed_successfully', 'processed_with_failures', 'processing'].includes(status) && (
                    <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5">
                        <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path
                            d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>
                        <path opacity="0.5" d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path opacity="0.5" d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path
                            opacity="0.5"
                            d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        ></path>
                    </svg>
                    Delete
                </button>
                    )}



                    </div>
                </>
            ),
        },


    ];

   

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">List bom</h5>

                        <div className="bg-white dark:bg-black rounded-lg">

                                <GenerateTableList
                                    tableColumns={columns}
                                    frontRoute="bomItemList"   
                                />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListBom;
