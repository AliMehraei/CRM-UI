import {Link, NavLink} from 'react-router-dom';
import {DataTable, DataTableSortStatus} from 'mantine-datatable';
import {useState, useEffect} from 'react';
import sortBy from 'lodash/sortBy';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../store';
import {setPageTitle} from '../../store/themeConfigSlice';
import Select from 'react-select';
import Swal from 'sweetalert2';
import api from '../../config/api';
import {renderFilterValueFiled} from '../../components/FilterValueFiled';
import {useUserStatus} from '../../config/authCheck';
import LoadingSasCrm from '../../components/LoadingSasCrm';
import {formatDate} from "@fullcalendar/core";

const List = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Product List'));
    }, [dispatch]);

    const {hasPermission, isLoading, isLoggedIn} = useUserStatus();

    useEffect(() => {
        if (!isLoading && !hasPermission('filter-product') && !hasPermission('read-product')) {
            setLoading(true);

            return <LoadingSasCrm/>;
        }

        setLoading(false);
        return;
    }, [isLoading, isLoggedIn, hasPermission]);

    const [loading, setLoading] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);
    const api_instance = new api();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark';

    const [items, setItems] = useState([]);
    const [optionsFilter, setOptionsFilter] = useState([]);
    const [selectedFields, setSelectedFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState([]);
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [totalItems, setTotalItems] = useState(0);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const fetchDataFilterOption = async () => {
        setLoading(true);
        try {
            // if (!isLoading && hasPermission('filter-product') && hasPermission('read-product')) {

            const res = await api_instance.filterOptionProduct();
            // Transform the data
            const transformedData = res.data.data.map((item) => {
                const conditions = item.condition;
                return {
                    ...item,
                    conditions: Object.entries(conditions).map(([key, condition]) => ({
                        value: key,
                        label: condition.value,
                        input: condition.input,
                        type: condition.type,
                        model: item.model,
                    }))
                };
            });
            setOptionsFilter(transformedData);
            //  }
        } catch (error) {
            showMessage('Error fetching filter options.', 'error');
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        // if (!isLoading && hasPermission('filter-product') && hasPermission('read-product')) {
        fetchDataFilterOption();
        // }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const applyFilters = () => {
        setResetFilter(false);
        scrollToTop();
        // if (!isLoading && hasPermission('filter-product') && hasPermission('read-product')) {
        fetchDataProduct(page, pageSize, filters, sortStatus);
        // }
    };

    // Filter the options based on search query
    let filteredOptions: any = [];
    if (optionsFilter && optionsFilter.length > 0) {
        filteredOptions = optionsFilter.filter((option) =>
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: {container: 'toast'},
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    const deleteRow = (id: any = null) => {
        // if (!isLoading && hasPermission('filter-product') && hasPermission('cam-delete-product')) {
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
                const deleteSingleRow = async (rowId: number) => {
                    try {
                        setLoading(true);
                        api_instance.deleteSingleProduct(rowId).then((res) => {
                            const result = res.data;
                            if (result.status) {
                                const filteredItems = items.filter((user) => user.id !== rowId);
                                setRecords(filteredItems);
                                setInitialRecords(filteredItems);
                                setItems(filteredItems);
                            } else {
                                showMessage('Error deleting the product: ' + result.message, 'error');
                                console.error('Error deleting the product', result.message);
                            }
                        });
                        setLoading(false);
                    } catch (error) {
                        showMessage('Error making delete request', 'error');
                        console.error('Error making delete request', error);
                        setLoading(false);
                    }
                };

                if (id) {
                    deleteSingleRow(id);
                    setSelectedRecords([]);
                } else {
                    let selectedRows = selectedRecords || [];
                    const ids = selectedRows.map((d: any) => d.id);
                    ids.forEach((rowId) => deleteSingleRow(rowId));
                    setSelectedRecords([]);
                    setPage(1);
                }
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    customClass: 'sweet-alerts'
                });
            }
        });
        // }
        // else showMessage('You don\'t have permission to perform this action.', 'error');
    };

    const fetchDataProduct = async (page = 1, pageSize = PAGE_SIZES[0], filters = [], sortStatus = {}) => {
        setLoading(true);
        // if (!isLoading && hasPermission('filter-product') && hasPermission('read-product')) {
        const {columnAccessor: sortField = '', direction: sortDirection = ''} = sortStatus;
        const filterParam = encodeURIComponent(JSON.stringify(filters));
        try {
            api_instance.fetchDataProduct({
                page: page,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
                filterParam: filterParam
            }).then((res) => {
                setItems(res.data.data.data);
                setTotalItems(res.data.data.total);
                setLoading(false);
            }).catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
                showMessage('Error fetching product data.', 'error');
            });
        } catch (error) {
            showMessage('Error fetching product data.', 'error');
            console.error('Error fetching data:', error);
            setLoading(false);
        }
        // }
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
        const to = pageSize;
        setRecords([...initialRecords.slice(0, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        // if (isLoading && hasPermission('filter-product') && hasPermission('read-product')) {
        fetchDataProduct(page, pageSize, filters, sortStatus);
        // }
    }, [page, pageSize, sortStatus, resetFilter]);

    const resetFilters = () => {
        setSelectedFields([]); // Reset selected fields
        setFilters([]); // Reset filters
        setSearchQuery(''); // Reset search query
        setPage(1);
        setResetFilter(true);
        scrollToTop();
    };

    const handleFieldChange = (event, option) => {
        const {value, checked} = event.target;
        if (checked) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [value]: {field: value, condition: '', value: '', model: option.model, type: option.type},
            }));
            setSelectedFields((prevSelectedFields) => [...prevSelectedFields, value]);
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = {...prevFilters};
                delete updatedFilters[value];
                return updatedFilters;
            });
            setSelectedFields((prevSelectedFields) =>
                prevSelectedFields.filter((field) => field !== value)
            );
        }
    };

    const handleSortChange = (sortStatus) => {
        const {columnAccessor, direction = 'asc'} = sortStatus;
        setSortStatus({columnAccessor, direction});
        setPage(1);
        fetchDataProduct(page, pageSize, filters, {columnAccessor, direction});
    };

    const handleConditionChange = (field, event) => {
        const conditionsToClear = ['between', 'in_the_last', 'due_in'];
        let updatedFilterValue = {...filters[field], condition: event.value};
        if (conditionsToClear.includes(updatedFilterValue.condition)) {
            updatedFilterValue.value = '';
        }
        const updatedFilters = {
            ...filters,
            [field]: updatedFilterValue
        };

        setFilters(updatedFilters);
    };


    // if (isLoading) {
    //     setLoading(true);
    //     return <div><LoadingSasCrm /></div>;
    // }
    const deleteButton = (<button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
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
    </button>)

    const EditIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-4.5 h-4.5">
            // ... (contents of the edit icon SVG here) ...
        </svg>
    );

    const DeleteIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5">
            // ... (contents of the delete icon SVG here) ...
        </svg>
    );

    const ProductLink = ({id, children}: any) => (
        hasPermission('update-product')
            ? <NavLink to={`/product/edit/${id}`}>{children}</NavLink>
            : children
    );

    const getColumns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({id}: any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'product_name',
            sortable: true,
            render: ({product_name, id}: any) =>
                hasPermission('update-product') ? (
                    <NavLink to={`/product/edit/${id}`}>
                        <div
                            className="text-primary underline hover:no-underline font-semibold">{`#${product_name}`}</div>
                    </NavLink>
                ) : (
                    <div className="font-semibold">{`#${product_name}`}</div>
                ),
        },
        {
            accessor: 'manufacturer',
            sortable: true,
            render: ({manufacturer}: any) => (
                <div className="flex items-center font-semibold">
                    {manufacturer ? manufacturer.name : 'No manufacturer'}
                </div>
            ),
        },
        {
            accessor: 'owner',
            title: 'Product Owner',
            sortable: false,
            render: ({owner}: any) =>
                <div className="font-semibold">
                    {owner ? owner.name : 'No Owner'}
                </div>,
        },
        {
            accessor: 'product_active',
            title: 'Product Active',
            sortable: true,
            render: ({product_active}: any) => (
                <div className="flex items-center font-semibold">
                    {product_active === 1 ? '✔' : ''}
                </div>
            ),
        },
        {
            accessor: 'created_at',
            title: 'Created time',
            sortable: true,
            render: ({created_at}: any) => {
                const formattedDate = formatDate(created_at);
                return (
                    <div className="font-semibold">
                        {formattedDate}
                    </div>
                );
            },
        },
        {
            accessor: 'Product Type',
            sortable: true,
            render: ({product_type}: any) =>
                <div className="font-semibold">{product_type}</div>,
        },
        {
            accessor: 'action',
            title: 'Actions',
            sortable: false,
            textAlignment: 'center',
            render: ({id}: any) => (
                <div className="flex gap-4 items-center w-max mx-auto">
                    {hasPermission('update-product') && (
                        <NavLink to={`/product/edit/${id}`} className="flex hover:text-info">
                            {/* SVG for Edit goes here */}
                        </NavLink>
                    )}
                    {hasPermission('delete-product') && (
                        <button type="button" className="flex hover:text-danger" onClick={() => deleteRow(id)}>
                            {/* SVG for Delete goes here */}
                        </button>
                    )}
                </div>
            ),
        },
    ];

    return (
        (!hasPermission('read-product') || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="product-table">
                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                        <div className="flex items-center gap-2">

                            {hasPermission('delete-product') && deleteButton}

                            {hasPermission('create-product') && (
                                <Link to="/product/add" className="btn btn-primary gap-2">
                                    Add New
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-6 mb-6">
                        {hasPermission('filter-product') && (
                            <div className="panel col-span-1">
                                <h2 className="text-xl font-bold mb-4">Filter By Fields</h2>

                                {/* Search input */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search fields..."
                                        className="border p-2 w-full"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Filter by options */}
                                <div className="mb-4">
                                    <label className="block font-semibold">Filter by:</label>
                                    {filteredOptions.map((option: any, index: any) => (
                                        <div key={option.value + index}>
                                            <div key={option.value} className="mb-2">
                                                <label className="flex items-center cursor-pointer">
                                                    <input type="checkbox"
                                                           value={option.value}
                                                           onChange={(e) => handleFieldChange(e, option)}
                                                           checked={selectedFields.includes(option.value)}
                                                           className="form-checkbox"/>
                                                    <span className=" text-dark">{option.label}</span>
                                                </label>

                                            </div>
                                            {/* Search options and Input text for selected fields */}
                                            {selectedFields.length > 0 && (
                                                <>
                                                    {
                                                        selectedFields.includes(option.value) ? (
                                                            <div key={option.value}>
                                                                <h3 className="text-lg font-semibold mt-4">Search
                                                                    Options</h3>
                                                                <div className="mb-4">
                                                                    <div className="mb-2">
                                                                        <label className="block font-semibold">Search
                                                                            include for {option.value}:</label>
                                                                        <Select
                                                                            onChange={(e) => handleConditionChange(option.value, e)}
                                                                            placeholder="Select an include"
                                                                            options={option.conditions}/>
                                                                    </div>
                                                                    {filters[option.value] != null && (
                                                                        <>
                                                                            <div className="mb-2">
                                                                                {renderFilterValueFiled(filters[option.value], option, setFilters, filters)}
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    }
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>


                                {/* Apply filter button */}
                                {selectedFields.length > 0 && (
                                    <div className="flex flex-wrap justify-between space-x-2 md:space-x-4">
                                        <button onClick={(e) => applyFilters()} className="btn btn-sm btn-primary">
                                            Apply Filter
                                        </button>

                                        <button onClick={resetFilters} className="btn btn-sm btn-outline-primary">
                                            Reset
                                        </button>
                                    </div>

                                )}
                            </div>
                        )}
                        <div className="panel col-span-4">
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
                                        columns={getColumns}
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
        )
    );
};

export default List;
