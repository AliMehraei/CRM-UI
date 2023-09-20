import {Link, NavLink} from 'react-router-dom';
import {DataTable, DataTableSortStatus} from 'mantine-datatable';
import {useEffect, useRef, useState} from 'react';
import sortBy from 'lodash/sortBy';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../store';
import Select from 'react-select';
import Swal from 'sweetalert2';
import api from '../../config/api';
import {useUserStatus} from '../../config/authCheck';
import LoadingSasCrm from '../LoadingSasCrm';
import {findApiToCall, upFirstLetter} from "../Functions/CommonFunctions";
import {DeleteIcon, EditIcon} from "../FormFields/CommonIcons";
import FilterValueField from "./FilterValueField";
import {resetFilterSlice} from "../../store/filterSlice";

const GenerateIndexTable = ({modelName, tableColumns}: any) => {
    const dispatch = useDispatch();
    const filterState = useSelector((state: any) => state.filters);

    const {hasPermission, isLoading, isLoggedIn} = useUserStatus();
    const [loading, setLoading] = useState(false);
    const [resetFilter, setResetFilter] = useState(false);
    const api_instance: any = new api();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark';

    const [items, setItems] = useState([]);
    const [optionsFilter, setOptionsFilter] = useState([]);
    const [selectedFields, setSelectedFields] = useState<any>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<any>([]);
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

    const filterOptionRef: any = useRef();

    const fetchDataFilterOption = async () => {
        setLoading(true);
        try {
            const res = await findApiToCall(`filterOption${upFirstLetter(modelName)}`).call(api_instance);
            // Transform the data
            const transformedData = res.data.data.map((item: any) => {
                const conditions = item.condition;
                return {
                    ...item,
                    conditions: Object.entries(conditions).map(([key, condition]: any) => ({
                        value: key,
                        label: condition.value,
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


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const applyFilters = ({page, pageSize, filters, sortStatus}: any) => {
        setResetFilter(false);
        scrollToTop();
        fetchModelData(page, pageSize, filters, sortStatus);
    };

    // Filter the options based on search query
    let filteredOptions: any = [];
    if (optionsFilter && optionsFilter.length > 0) {
        filteredOptions = optionsFilter.filter((option: any) =>
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

    const deleteSingleRow = async (rowId: number) => {
        try {
            setLoading(true);

            findApiToCall(`deleteSingle${upFirstLetter(modelName)}`).call(api_instance, rowId)
                .then((res: any) => {
                    const result = res.data;
                    if (result.status) {
                        applyFilters(filterOptionRef.current);
                    } else {
                        showMessage(`Error deleting the ${modelName}: ` + result.message, 'error');
                        console.error(`Error deleting the ${modelName} : `, result.message);
                    }
                });
            setLoading(false);
        } catch (error) {
            showMessage('Error making delete request', 'error');
            console.error('Error making delete request', error);
            setLoading(false);
        }
    };


    const fetchModelData = async (page = 1, pageSize = PAGE_SIZES[0], filters = [], sortStatus = {}) => {
        setLoading(true);
        const {columnAccessor: sortField = '', direction: sortDirection = ''}: any = sortStatus;
        const filterParam = encodeURIComponent(JSON.stringify(filters));
        try {

            findApiToCall(`fetchData${upFirstLetter(modelName)}`).call(api_instance, {
                page: page,
                pageSize: pageSize,
                sortField: sortField,
                sortDirection: sortDirection,
                filterParam: filterParam
            }).then((res: any) => {
                setItems(res.data.data.data);
                setTotalItems(res.data.data.total);
                setLoading(false);
            }).catch((error: any) => {
                console.error('Error fetching data:', error);
                setLoading(false);
                showMessage(`Error fetching  ${modelName} data.`, 'error');
            });
        } catch (error) {
            showMessage(`Error fetching ${modelName} data.`, 'error');
            console.error('Error fetching data: ', error);
            setLoading(false);
        }
    };


    const resetFilters = () => {
        setSelectedFields([]); // Reset selected fields
        setFilters([]); // Reset filters
        setSearchQuery(''); // Reset search query
        setPage(1);
        setResetFilter(true);
        scrollToTop();
    };

    const handleFieldChange = (event: any, option: any) => {
        const {value, checked}: any = event.target;
        if (checked) {
            setFilters((prevFilters: any) => ({
                ...prevFilters,
                [value]: {field: value, condition: '', value: '', model: option.model, type: option.type},
            }));
            setSelectedFields((prevSelectedFields: any) => [...prevSelectedFields, value]);
        } else {
            setFilters((prevFilters: any) => {
                const updatedFilters = {...prevFilters};
                delete updatedFilters[value];
                return updatedFilters;
            });
            setSelectedFields((prevSelectedFields: any) =>
                prevSelectedFields.filter((field: any) => field !== value)
            );
        }
    };

    const handleSortChange = (sortStatus: any) => {
        const {columnAccessor, direction = 'asc'} = sortStatus;
        setSortStatus({columnAccessor, direction});
        setPage(1);
        fetchModelData(page, pageSize, filters, {columnAccessor, direction});
    };

    const handleConditionChange = (field: any, event: any) => {
        const conditionsToClear = ['between', 'in_the_last', 'due_in'];
        let updatedFilterValue: any = {...(filters[field] as object), condition: event.value};
        if (conditionsToClear.includes(updatedFilterValue.condition)) {
            updatedFilterValue.value = '';
        }
        const updatedFilters = {
            ...filters,
            [field]: updatedFilterValue
        };

        setFilters(updatedFilters);
    };

    useEffect(() => {
        const data = sortBy(items, sortStatus.columnAccessor);
        const reversedData = sortStatus.direction !== 'asc' ? data.reverse() : data;
        filterOptionRef.current = {...filterOptionRef.current, sortStatus};
        setInitialRecords(reversedData);
    }, [items, sortStatus]);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        setRecords([...initialRecords.slice(0, pageSize)]);
        filterOptionRef.current = {...filterOptionRef.current, page, pageSize};
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        filterOptionRef.current = {...filterOptionRef.current, page, pageSize, sortStatus};
        fetchModelData(page, pageSize, filters, sortStatus);
    }, [page, pageSize, sortStatus, resetFilter]);

    useEffect(() => {
        filterOptionRef.current = {...filterOptionRef.current, filters};
    }, [filters]);
    useEffect(() => {
        if (!isLoading && !hasPermission(`filter-${modelName}`) && !hasPermission(`read-${modelName}`)) {
            setLoading(true);
        }

        setLoading(false);
        return;
    }, [isLoading, isLoggedIn, hasPermission]);

    useEffect(() => {
        fetchDataFilterOption();
        dispatch(resetFilterSlice())
    }, []);


    useEffect(() => {
        tableColumns = tableColumns.map((col: any) => {
            if (col.accessor === 'action') {
                const OriginalRender = col.render;

                // Overwrite the render function and add the <span>test</span>
                col.render = ({id}: any) => (
                    <div className="flex gap-4 items-center w-max mx-auto">
                        {OriginalRender({id})}
                        {hasPermission(`update-${modelName}`) && (
                            <NavLink to={`/${modelName}/edit/${id}`} className="flex hover:text-info">
                                <EditIcon/>
                            </NavLink>
                        )}
                        {hasPermission(`delete-${modelName}`) && (
                            <button type="button" className="flex hover:text-danger"
                                    onClick={() => deleteRow(id)}>
                                <DeleteIcon/>
                            </button>
                        )}
                    </div>
                );
            }
            return col;
        });
    }, [tableColumns]);

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

    return (
        (!hasPermission(`read-${modelName}`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <>

                <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">

                    <div className={`${modelName}-table`}>
                        <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                            <div className="flex items-center gap-2">

                                {hasPermission(`delete-${modelName}`) && deleteButton}

                                {hasPermission(`create-${modelName}`) && (
                                    <Link to={`/${modelName}/add`} className="btn btn-primary gap-2">
                                        Add New
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-6 mb-6">
                            {hasPermission(`filter-${modelName}`) && (
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
                                                        <span className="text-dark">{option.label}</span>
                                                    </label>
                                                </div>
                                                {/* Search options and Input text for selected fields */}
                                                {selectedFields.length > 0 && selectedFields.includes(option.value) && (
                                                    <div key={index + option.value}>
                                                        <h3 className="text-lg font-semibold mt-4">Search Options</h3>
                                                        <div className="mb-4">
                                                            <div className="mb-2">
                                                                <label className="block font-semibold">Search include
                                                                    for {option.value}:</label>
                                                                <Select
                                                                    onChange={(e) => handleConditionChange(option.value, e)}
                                                                    placeholder="Select an include"
                                                                    options={option.conditions}/>
                                                            </div>
                                                            {filters[option.value] && (
                                                                <div className="mb-2">

                                                                    <FilterValueField key={index + option.value}
                                                                                      filterSelect={filters[option.value]}
                                                                                      option={option}
                                                                                      setFilters={setFilters}
                                                                                      filters={filters}
                                                                                      filterState={filterState}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>


                                    {/* Apply filter button */}
                                    {selectedFields.length > 0 && (
                                        <div className="flex justify-between space-x-2  "
                                             style={{position: 'fixed', left: -58, zIndex: 99999, top: "50vh", transform: "rotate(90deg)"}}>
                                            <button onClick={() => applyFilters({page, pageSize, filters, sortStatus})}
                                                    className="btn btn-sm btn-primary">
                                                Apply Filter
                                            </button>

                                            <button onClick={resetFilters} className="btn btn-sm btn-dark">
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

export default GenerateIndexTable;
