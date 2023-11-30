import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Api from "../../../../config/api";

const CallAmount = () => {
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
            colors: ['#ffad19'],
            dataLabels: {
                enabled: true,

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
                    text: 'CallAmount Date',
                },
                categories: [],
                axisBorder: {
                    color: '#e0e6ed',
                },
            },
            yaxis: {
                title: {
                    text: 'Record Count ',
                },
                opposite: false,
                labels: {
                    offsetX: 0,

                },
            },
            tooltip: {
                theme: 'light',
            },
        },
    };
    const [chartData, setChartData] = useState<any>(columnChart);

    const fetchData = async () => {
        try {
            const response = await api_instance.dashboardCallAmount();
            if (response.status === 200) {
                const responseData = response.data.data;
                const colChart = columnChart;
                colChart.series = [responseData.series];
                colChart.options.xaxis.categories = responseData.options;
                setChartData(colChart)
                setLoading(false);
            } else {
                console.error('Failed to fetch Call Amount:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching Call Amount: ', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">CallAmount</h5>

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

export default CallAmount;
