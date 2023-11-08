import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Api from "../../../config/api";

const DealsByStage = () => {
    const [loading, setLoading] = useState(true);
    const api_instance = new Api();
    const columnChart: any = {

        series: [
            {
                name: "",
                data: [200, 5000, 548, 740, 880, 990, 1100, 1380],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                    distributed: true,
                    barHeight: '80%',
                    isFunnel: true,
                },
            },
            colors: [
                '#F44F5E',
                '#E55A89',
                '#D863B1',
                '#CA6CD8',
                '#B57BED',
                '#8D95EB',
                '#62ACEA',
                '#4BC3E6',
            ],
            dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex]
                },
                dropShadow: {
                    enabled: true,
                },
            },
            title: {
                text: 'Pyramid Chart',
                align: 'middle',
            },
            xaxis: {
                categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
            },
            legend: {
                show: false,
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
                console.error('Failed to fetch Billing YTD Sales:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching Billing YTD Sales: ', error);
        }
    };
    useEffect(() => {
        // fetchData();
        setLoading(false);
    }, []);

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">Billing YTD Sales</h5>

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

export default DealsByStage;
