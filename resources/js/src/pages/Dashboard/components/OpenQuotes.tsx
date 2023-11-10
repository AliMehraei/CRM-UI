import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Api from "../../../config/api";

const OpenQuotes = () => {
    const [loading, setLoading] = useState(true);
    const api_instance = new Api();
    const columnChart: any = {
        series: [],
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
                categories: [],
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
                    formatter: function (val: any) {
                        return new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                        }).format(val);
                    },
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
    const [chartData, setChartData] = useState<any>(columnChart);

    const fetchData = async () => {
        try {
            const response = await api_instance.dashboardOpenQuotes();
            if (response.status === 200) {
                const responseData = response.data.data;
                const colChart = columnChart;
                colChart.series = [responseData.series];
                colChart.options.xaxis.categories = responseData.options;
                setChartData(colChart)
                setLoading(false);
            } else {
                console.error('Failed to fetch Open Quotes:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching Open Quotes: ', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pt-5">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">Open Quotes</h5>

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

export default OpenQuotes;
