import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const OpenQuotes = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const revenueChart: any = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
            {
                name: 'Expenses',
                data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: ['#1B55E2', '#E7515A'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: false,
            },
            grid: {
                borderColor: '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.28,
                    opacityTo: 0.05,
                    stops: [45, 100],
                },
            },
        },
    };

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
                formatter: function (val:) {
                    return val + "%";
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
                        return val;
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
