import React, { useState, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { displayImage, upFirstLetter } from "../../components/Functions/CommonFunctions";
import Api from '../../config/api';
import { resetForm, updateFormData } from "../../store/contactFormSlice";
import LoadingSasCrm from '../../components/LoadingSasCrm';
import Swal from 'sweetalert2';


const BomExcessComplete = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [configHeaders, setConfigHeaders] = useState({});
    const [columnsData, setColumnsData] = useState({});
    const [emptyMessage, setEmptyMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const formState = useSelector((state: any) => state.contactForm);
    const api = new Api();
    const params = useParams();
    const contactId = params.contactId;
    const modelName = "contact";
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
    });
    const id = params.id;

    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
    const systemFields = [
        'Ignore',
        'Part-Number (MPN)',
        'Manufacturer',
        // ... add more fields as required
    ];
    const pieChart: any = {
        series: [44, 55, 13],
        options: {
            chart: {
                height: 300,
                type: 'pie',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            labels: ['Ignore Record', 'Founded MPN Record', 'Not Founded MPN Record'],
            colors: ['#4361ee', '#805dca', '#00ab55'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                    },
                },
            ],
            stroke: {
                show: false,
            },
            legend: {
                position: 'bottom',
            },
        },
    };


    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Overview");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("View " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List Overview");
        setEmptyMessage("Here you can see an overview about your uploaded " + upFirstLetter(pathParts[1]) + "  list");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Overview"));
    }, []);






    const handleSaveTemplate = () => {
        // Logic to save the template
    };

    const handleNextStep = () => {
        // Logic for going to the next step
        window.location.href = `/${addBtnRoute}/list/${contactId}`;

    };

    const handleReloadSampleData = () => {
        // Logic to reload sample data
    };

    const fetchData = async () => {
        const modelResponse = await api.fetchSingleContact(contactId);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [contactId]);

    const fetchDataProcess = async () => {
        setLoading(true);
        const modelResponse = await api.bomItemProcess(contactId, modelName, id);
        setLoading(false);
        if (modelResponse.status == 302) {
            toast.fire({
                icon: 'error',
                title: modelResponse.data.message,
                padding: '10px 20px',
            });
            setTimeout(() => {
                const currentPath = pathname;
                const pathParts = currentPath.split('/');
                window.location.href = `/${pathParts[1]}/list/${contactId}`;
            }, 1000);
        }

        const data = modelResponse.data.data;

        setConfigHeaders(data.configHeaders);
        setColumnsData(data.BOMItemDetails);


    };

    useEffect(() => {
        fetchDataProcess();
    }, []);
    const getStatusClass = (item: any) => {
        switch (item.process_status) {
            case 'incorrect_data':
                return 'text-red-600';
            case 'without_product_name':
                return 'text-red-400';
            case 'not_found':
                return 'text-yellow-500';
            case 'found':
                return 'text-green-500';
            default:
                return 'p-1 rounded font-bold';
        }
    };

    return (
        (loading) ? (
            <LoadingSasCrm />
        ) : (
            <>
                <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                    <div className="flex justify-end flex-wrap gap-4 px-4" >
                        <div className="flex">
                            <div>
                                <div className="text-sm font-semibold mt-5">{formState.first_name} {formState.last_name}</div>
                                <div className="text-s font-semibold ">{formState.email}</div>
                                <div className="text-s font-semibold ">{formState.phone}</div>

                            </div>

                        </div>


                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Contact image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                            <a className="text-sm font-semibold mt-5  text-primary " target="_blank"
                                href={`/contact/preview/${contactId}`}>View Contact</a>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#849bbc] my-6" />
                    <div className="px-4 sm:px-6 lg:px-8">
                        <section className="border-b border-gray-200 pb-4">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <h3 className="title-1"><b>{pageTitleCustom}</b></h3>

                            </div>
                        </section>

                    </div>
                    <div className="my-4">
                        <section className=" px-4 sm:px-6 lg:px-8 ">
                            <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4">
                                <h3 className="title-1"> </h3>
                                <div className="flex mt-3 sm:ml-4 sm:mt-0 space-x-1">

                                    <button id="confirmlist-next-tour" type="button" onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex items-center p-2 space-x-2 text-sm rounded border-primary-500">
                                        <span>{addBtnLabel}</span>
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8 ">
                            <div className="rounded-lg bg-white overflow-hidden shadow p-6 text-center">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    {tableTitle}
                                </h3>
                                <p className="text-sm font-medium text-gray-500 mt-4">
                                    {emptyMessage}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4 divide-x divide-y md:divide-y-0 divide-gray-200">
                                    <div className="col-span-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                        <div className="flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center">
                                            Data Source
                                        </div>
                                        <ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black" type="pie" height={300} />

                                    </div>
                                    <div className="col-span-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                        <div className="flex items-center justify-center p-5 text-lg font-medium leading-6 text-gray-900 text-center">
                                            Founded MPNs
                                        </div>
                                        <ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black" type="pie" height={300} />

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="table-section-list2-tour" className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8 mt-6">
                            <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                                <div className="">
                                    <div className="flex flex-row items-center justify-between h-full space-x-3">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            Your uploaded file data               
                                             </h3>
                                        
                                    </div>

                                    <div className="overflow-x-scroll mt-6">
                                        <div className="flex flex-col">
                                            <div className="flex-grow">

                                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">


                                                    <table className="datatable relative min-w-full border-collapse dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                                        <thead className="bg-gray-200 sticky z-30 top-0">
                                                            <tr className="header-row">
                                                                <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500 sorting sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="#: activate to sort column descending" aria-sort="ascending">
                                                                    #
                                                                </th>
                                                                {Object.keys(configHeaders).map((key, index) => (

                                                                    <React.Fragment key={index}>
                                                                        {index === 3 ? (
                                                                            <>
                                                                                <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                                    <div className="flex flex-row justify-between items-center space-x-3">
                                                                                        <span>Selected offer</span>
                                                                                    </div>
                                                                                </th>
                                                                                <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                                    Status
                                                                                </th>
                                                                            </>
                                                                        ) : (
                                                                            <th className="p-2 whitespace-nowrap text-left text-sm text-gray-500">
                                                                                {configHeaders[key]}
                                                                            </th>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}


                                                            </tr>
                                                        </thead>
                                                        <tbody>


                                                            {Object.values(columnsData).map((item: any, index) => (
                                                                <tr title={item.process_status} data-row-id={item.id} className="detail-row" key={index}>

                                                                    <td className="border p-2 text-sm text-gray-500">
                                                                        <span className={getStatusClass(item)}>
                                                                            {item.row_number}
                                                                        </span>
                                                                    </td>
                                                                    <td className="border p-2 text-sm text-gray-500">{item.processed_data.Product_Name}</td>
                                                                    <td className="border p-2 text-sm text-gray-500">{item.processed_data.Manufacture}</td>
                                                                    <td className="border p-2 text-sm text-gray-500">{item.processed_data.Quantity}</td>
                                                                    <td className="border p-2 text-sm text-gray-500">
                                                                        {item.process_status === 'found' ? (
                                                                            <div className="flex flex-col p-2">
                                                                               <span className={getStatusClass(item)}>
                                                                              {item.selected.product_name} | {item.selected.manufacture_name}
                                                                               </span>

                                                                            </div>
                                                                        ) : (
                                                                            <></>
                                                                        )

                                                                        }
                                                                    </td>
                                                                    <td className="border p-2 text-sm text-gray-500">
                                                                        <span className={getStatusClass(item)}>
                                                                            {item.process_status}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}



                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6">

                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>

            </>
        )
    );
};

export default BomExcessComplete;
