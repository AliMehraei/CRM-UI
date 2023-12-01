import ReactApexChart from "react-apexcharts";
import {useEffect, useState} from "react";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import Api from "../../../../../config/api";

const ListVendor = ({dateStartFilter,dateEndFilter,statusFilter,vendorFilter}:any) => {
    const [loading, setLoading] = useState(true);
    const api_instance = new Api();
    
    const [filterChange, setFilterChange] = useState(false);
    const [chartData, setChartData] = useState<any>(columnChart);

    const fetchData = async () => {
        try {
            const response = await api_instance.reportVendorList({
                status:statusFilter,
                date_start:dateStartFilter ?? '',
                date_end:dateEndFilter ?? '',
                vendor_name:vendorFilter
            });
            if (response.status === 200) {
                const responseData = response.data.data;
               
                setChartData(responseData)
                setLoading(false);
            } else {
                console.error('Failed to fetch Vendor List:', response);
            }
        } catch (error) {
            console.error('An error occurred while fetching Vendor List: ', error);
        }
    };
    useEffect(() => {
        fetchData();

        if(statusFilter.length>0 || vendorFilter.length>0 || dateStartFilter!=''){
            setFilterChange(true);
        }
    }, [statusFilter,vendorFilter,dateStartFilter]);

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">{filterChange === false ? 'YTD Sales' : 'Filtered Sales Performance Analysis'}</h5>

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

export default ListVendor;
