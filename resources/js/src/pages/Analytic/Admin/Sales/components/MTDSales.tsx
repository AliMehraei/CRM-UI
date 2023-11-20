import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import Api from "../../../../../config/api";

const MTDSales = ({dateStartFilter,dateEndFilter,statusFilter,personFilter}:any) => {
    const [loading, setLoading] = useState(true);
    const api_instance = new Api();
    const columnChart: any = {

        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }],
        options: {

            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                },
                dataLabels: {
                    enabled: false,

                }
            },
            dataLabels: {
                enabled: false,

            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    dataLabels: {
                        enabled: false,
                        total: {
                            enabled: false,
                        }
                    }
                },
                dataLabels: {
                    total: {
                        enabled: false,
                    }
                }
            },
            xaxis: {
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT'
                ],
            },
            legend: {
                position: 'right',
                offsetY: 40
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                opposite: false,
                labels: {
                    offsetX: 0,
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

    const [chartData, setChartData] = useState<any>(columnChart);

    const fetchData = async () => {
        try {
            const response = await api_instance.reportSalesChartMTD({
                status:statusFilter,
                date_start:dateStartFilter ?? '',
                date_end:dateEndFilter ?? '',
                sales_person:personFilter
            });
            if (response.status === 200) {
                const responseData = response.data.data;
                const colChart = columnChart;
                colChart.series = responseData.series;
                colChart.options.xaxis.categories = responseData.options;
                setChartData(colChart)
                setLoading(false);

            } else {
                console.error('Failed to fetch MTD Billing Inc.Backlog:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching MTD Billing Inc.Backlog: ', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [statusFilter,personFilter,dateStartFilter]);

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">MTD Sales</h5>

                        <div className="bg-white dark:bg-black rounded-lg">
                            {loading ? (
                                <LoadingSpinner/>
                            ) : (
                                <ReactApexChart
                                    series={chartData.series}
                                    options={chartData.options as any}
                                    className="rounded-lg bg-white dark:bg-black" type="bar" height={300}/>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MTDSales;
