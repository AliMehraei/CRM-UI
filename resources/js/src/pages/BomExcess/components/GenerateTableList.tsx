import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import api from '../../../config/api';
import { useUserStatus } from '../../../config/authCheck';
import { IRootState } from '../../../store';
import LoadingSasCrm from '../../../components/LoadingSasCrm';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const GenerateTableList = ({ tableColumns,reload, frontRoute}: any) => {
    const dispatch = useDispatch();
    const filterState = useSelector((state: any) => state.filters);

    const { hasPermission, isLoading, isLoggedIn } = useUserStatus();
    const api_instance: any = new api();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark';
    const [items, setItems] = useState([]);
    const [filters, setFilters] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const params = useParams();
    const id = params.id;
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [totalItems, setTotalItems] = useState(0);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'desc',
    });



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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


    const fetchModelData = async (page = 1, pageSize = PAGE_SIZES[0], filters = [], sortStatus = {}) => {
        setLoading(true);
        const { columnAccessor: sortField = '', direction: sortDirection = '' }: any = sortStatus;
        try {

            await api_instance[frontRoute](id,{
                page: page,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
            }).then((res: any) => {
                setItems(res.data?.data?.data);
                setTotalItems(res.data?.data?.total);
                setLoading(false);
            }).catch((error: any) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
                showMessage(`Error fetching data.`, 'error');
            });
        } catch (error) {
            showMessage(`Error fetching data.`, 'error');
            console.error('Error fetching data: ', error);
            setLoading(false);
        }
    };




    const handleSortChange = (sortStatus: any) => {
        const { columnAccessor, direction = 'asc' } = sortStatus;
        setSortStatus({ columnAccessor, direction });
        setPage(1);
        fetchModelData(page, pageSize, filters, { columnAccessor, direction });
    };


    useEffect(() => {
        const data = sortBy(items, sortStatus.columnAccessor);
        const reversedData = sortStatus.direction !== 'asc' ? data.reverse() : data;
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
    }, [page, pageSize, sortStatus,reload]);


   






    return (
        loading ? (
            <LoadingSasCrm />
        ) : (
            <>
                <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">

                    <div className={`bom-excess-table`}>

                        <div className="grid grid-cols-1 gap-6 mb-6">

                            <div className="panel col-span-12">
                                <div className="datatables pagination-padding">
                                    {loading ? (
                                        <div className='flex justify-center'>
                                            <span
                                                className="animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
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
                                            onSelectedRecordsChange={setSelectedRecords}
                                            paginationText={({
                                                from,
                                                to,
                                                totalRecords
                                            }) => `Showing ${from} to ${to} of ${totalRecords} entries`}
                                        />
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
