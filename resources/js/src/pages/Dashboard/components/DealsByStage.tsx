import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Api from "../../../config/api";

const DealsByStage = () => {
    const [loading, setLoading] = useState(true);
    const api_instance = new Api();
    const columnChart: any = {

        series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            colors: ['#ffad19'],

            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#101310']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
        },


    };
    const [chartData, setChartData] = useState<any>(columnChart);

    const fetchData = async () => {
        try {
            const response = await api_instance.dashboardDealsByStage();
            if (response.status === 200) {
                const responseData = response.data.data;

                const colChart = columnChart;
                colChart.series = [responseData.series];
                colChart.options.xaxis.categories = responseData.options;
                setChartData(colChart)
                setLoading(false);
            } else {
                console.error('Failed to fetch Deals By Stage:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching Deals By Stage: ', error);
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
                        <h5 className="font-semibold text-lg">Deals By Stage</h5>

                        <div className="bg-white dark:bg-black rounded-lg">
                            {loading ? (
                                <LoadingSpinner/>
                            ) : (
                                <>
                                    <ReactApexChart
                                        series={chartData.series}
                                        options={chartData.options as any}
                                        className="rounded-lg bg-white dark:bg-black" type="bar" height={500}/>
                                </>

                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DealsByStage;
