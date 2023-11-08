import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const OpenQuotes = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    // const fetchData = async () => {
    //     try {
    //         const dashboardResponse = await api.dashboardData();
    //         if (dashboardResponse.status === 200) {
    //             setSalesOrderData(dashboardResponse.data.data.sales_order);
    //         } else {
    //             console.error('Failed to fetch dashboard data:', dashboardResponse);
    //         }
    //     } catch (error) {
    //         console.error('An error occurred while fetching dashboard data:', error);
    //     } finally {
    //         setLoading(false);
    //
    //     }
    // };

    useEffect(() => {
        // fetchData();
        setLoading(false);
    }, []);

    const columnChart: any = {
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: true,
                },
                toolbar: {
                    show: true,
                },
            },
            colors: ['#ff8b60'],
            dataLabels: {
                enabled: true,
                formatter: function (val: any) {
                    return new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                    }).format(val);
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top',
                    }
                },
            },
            grid: {
                borderColor: '#e0e6ed',
            },
            xaxis: {
                title: {
                    text: 'Quote Owner',
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                title: {
                    text: 'Sum of Total Sales',
                },
                opposite: false,
                labels: {
                    offsetX: 0,
                },
            },
            tooltip: {
                theme: 'light',
                y: {
                    formatter: function (val: any) {
                        return new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                        }).format(val);
                    },
                },
            },
        },
    };
    return (
        <div className="pt-5">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <div className="bg-white dark:bg-black rounded-lg">
                            {loading ? (
                                <LoadingSpinner/>
                            ) : (
                                <ReactApexChart series={columnChart.series} options={columnChart.options}
                                                className="rounded-lg bg-white dark:bg-black" type="bar" height={300}/>

                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OpenQuotes;
