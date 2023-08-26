import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import Select from 'react-select';
import Swal from 'sweetalert2';
import api from '../../config/api';
import { renderFilterValueFiled } from '../../components/FilterValueFiled'
const List = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('lead List'));
    });
    const [loading, setLoading] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);
    const api_instance = new api();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;
    const [items, setItems] = useState([]);
    const [optionsFilter, setOptionsFilter] = useState([]);
    const [selectedFields, setSelectedFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [filters, setFilters] = useState([]);

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [totalItems, setTotalItems] = useState(0);

    //const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const fetchDataFilterOption = async () => {
        setLoading(true);
        try {
            const res = await api_instance.filterOptionLead();
            // Transform the data
            const transformedData = res.data.data.map((item) => {
                const conditions = item.condition;
                // console.log('condition.model',item);

                return {
                    ...item,
                    conditions: Object.entries(conditions).map(([key, condition]) => ({
                        value: key,
                        label: condition.value, // or any other property to use as the label
                        input: condition.input,
                        type: condition.type,
                        model: item.model,
                    }))
                };
            });
            setOptionsFilter(transformedData);

        } catch (error) {
            showMessage('Error fetching filter options.', 'error');
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };




    useEffect(() => {
        fetchDataFilterOption();
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
        fetchDatalead(page, pageSize, filters);

    };

    // Filter the options based on search query
    let filteredOptions = [];
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
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

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
                const deleteSingleRow = async (rowId: number) => {
                    try {
                        setLoading(true);
                        api_instance.deleteSingleLead(rowId).then((res) => {
                            const result = res.data;
                            if (result.status) {
                                const filteredItems = items.filter((user) => user.id !== rowId);
                                setRecords(filteredItems);
                                setInitialRecords(filteredItems);
                                setItems(filteredItems);
                            } else {
                                showMessage('Error deleting the lead: ' + result.message, 'error');
                                console.error('Error deleting the lead', result.message);
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
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    };

    const fetchDatalead = async (page = 1, pageSize = PAGE_SIZES[0], filters = [], sortStatus = {}) => {
        setLoading(true);
        console.log('filters', filters);


        const { columnAccessor: sortField = '', direction: sortDirection = '' } = sortStatus;
        const filterParam = encodeURIComponent(JSON.stringify(filters));

        try {
            api_instance.fetchDataLead({
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
                showMessage('Error fetching lead data.', 'error');
            });
        } catch (error) {
            showMessage('Error fetching lead data.', 'error');
            console.error('Error fetching data:', error);
            setLoading(false);
        }


    };

    useEffect(() => {
        const data = sortBy(items, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [items, sortStatus]);

    useEffect(() => {
        fetchDatalead(page, pageSize);
        setInitialRecords(sortBy(items, 'id'));

    }, [page, pageSize]); // Added page and pageSize as dependencies

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const to = pageSize;
        setRecords([...initialRecords.slice(0, to)]);
    }, [page, pageSize, initialRecords]);


    useEffect(() => {
        fetchDatalead(page, pageSize, filters, sortStatus);
    }, [page, pageSize, sortStatus]);
    useEffect(() => {
        if (resetFilter)
            fetchDatalead(page, pageSize, filters, sortStatus);
    }, [resetFilter]);

    const resetFilters = () => {
        setSelectedFields([]); // Reset selected fields
        setFilters([]); // Reset filters
        setSearchQuery(''); // Reset search query
        setPage(1);
        setResetFilter(true);
        scrollToTop();
        // fetchDatalead(page, pageSize, filters, sortStatus);
    };
    const handleFieldChange = (event, option) => {
        const { value, checked } = event.target;


        if (checked) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [value]: { field: value, condition: '', value: '', model: option.model, type: option.type },
            }));

            setSelectedFields((prevSelectedFields) => [...prevSelectedFields, value]);
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters };
                delete updatedFilters[value];
                return updatedFilters;
            });

            setSelectedFields((prevSelectedFields) =>
                prevSelectedFields.filter((field) => field !== value)
            );
        }


    };

    const handleSortChange = (sortStatus) => {
        const { columnAccessor, direction = 'asc' } = sortStatus; // Destructure with a default value
        setSortStatus({ columnAccessor, direction });
        fetchDatalead(page, pageSize, filters, { columnAccessor, direction });
    };

    const handleConditionChange = (field, event) => {
        const conditionsToClear = ['between', 'in_the_last', 'due_in'];
        let updatedFilterValue = { ...filters[field], condition: event.value };
        if (conditionsToClear.includes(updatedFilterValue.condition)) {
            updatedFilterValue.value = '';
        }
        const updatedFilters = {
            ...filters,
            [field]: updatedFilterValue
        };

        setFilters(updatedFilters);
    };




    return (
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]" >
            <div className="lead-table">
                <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
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
                        <Link to="/vendor_rfq/add" className="btn btn-primary gap-2">
                            Add New
                        </Link>

                    </div>

                </div>
                <div className="grid grid-cols-5 gap-6 mb-6">
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
                            {filteredOptions.map((option) => (
                                <div>
                                    <div key={option.value} className="mb-2">
                                        <label className="flex items-center cursor-pointer">
                                            <input type="checkbox"
                                                value={option.value}
                                                onChange={(e) => handleFieldChange(e, option)}
                                                checked={selectedFields.includes(option.value)}
                                                className="form-checkbox" />
                                            <span className=" text-dark">{option.label}</span>
                                        </label>

                                    </div>
                                    {/* Search options and Input text for selected fields */}
                                    {selectedFields.length > 0 && (
                                        <>
                                            {
                                                selectedFields.includes(option.value) ? (
                                                    <div key={option.value}>
                                                        <h3 className="text-lg font-semibold mt-4">Search Options</h3>
                                                        <div className="mb-4">
                                                            <div className="mb-2">
                                                                <label className="block font-semibold">Search include for {option.value}:</label>
                                                                <Select
                                                                    onChange={(e) => handleConditionChange(option.value, e)}
                                                                    placeholder="Select an include"
                                                                    options={option.conditions} />
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
                    <div className="panel col-span-4">
                        <div className="datatables pagination-padding" >
                            {loading ? (
                                <div className='flex justify-center'>
                                    <span className="animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
                                </div>
                            ) : (

                                <DataTable
                                    className={`${isDark} whitespace-nowrap table-hover`}
                                    records={records}
                                    columns={[
                                        {
                                            accessor: 'ID',
                                            sortable: true,
                                            render: ({ id }) => <div className="font-semibold">{id}</div>,
                                        },
                                        {
                                            accessor: 'company',
                                            sortable: true,
                                            render: ({ company }) => (
                                                <NavLink to="/lead/preview">
                                                    <div className="text-primary underline hover:no-underline font-semibold">{`#${company}`}</div>
                                                </NavLink>
                                            ),
                                        },
                                        {
                                            accessor: 'lead',
                                            sortable: true,
                                            render: ({ lead }) => (
                                                <div className="flex items-center font-semibold">
                                                    {lead}
                                                </div>
                                            ),
                                        },
                                        {
                                            accessor: 'lead_owner',
                                            sortable: true,
                                            render: ({ lead_owner }) => <div className="font-semibold">{lead_owner}</div>,
                                        },
                                        {
                                            accessor: 'lead Type',
                                            sortable: true,
                                            render: ({ lead_type }) => <div className="font-semibold">{lead_type}</div>,
                                        },
                                        {
                                            accessor: 'action',
                                            title: 'Actions',
                                            sortable: false,
                                            textAlignment: 'center',
                                            render: ({ id }) => (
                                                <div className="flex gap-4 items-center w-max mx-auto">
                                                    <NavLink to={`/lead/edit/${id}`} className="flex hover:text-info">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5">
                                                            <path
                                                                opacity="0.5"
                                                                d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                            ></path>
                                                            <path
                                                                d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            ></path>
                                                            <path
                                                                opacity="0.5"
                                                                d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            ></path>
                                                        </svg>
                                                    </NavLink>
                                                    <NavLink to="/lead/preview" className="flex hover:text-primary">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                opacity="0.5"
                                                                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                        </svg>
                                                    </NavLink>
                                                    {/* <NavLink to="" className="flex"> */}
                                                    <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
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
                                                    </button>
                                                    {/* </NavLink> */}
                                                </div>
                                            ),
                                        },
                                    ]}
                                    highlightOnHover
                                    totalRecords={totalItems}
                                    recordsPerPage={pageSize}
                                    page={page}
                                    onPageChange={(p) => setPage(p)}
                                    recordsPerPageOptions={PAGE_SIZES}
                                    onRecordsPerPageChange={setPageSize}
                                    sortStatus={sortStatus}
                                    onSortStatusChange={handleSortChange}
                                    selectedRecords={selectedRecords}
                                    onSelectedRecordsChange={setSelectedRecords}
                                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                />
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
