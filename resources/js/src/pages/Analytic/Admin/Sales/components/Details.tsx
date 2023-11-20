import React, {useEffect, useState} from 'react';
import Api from "../../../../../config/api";
import LoadingSpinner from "../../../../../components/LoadingSpinner";

const Details = ({dateStartFilter,dateEndFilter,statusFilter,personFilter}:any) => {
    const api_instance = new Api();
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(null);
    const [gpTotal, setGpTotal] = useState(null);
    const [average, setAverage] = useState(null);
    const [count, setCount] = useState(null);

    const fetchData = async () => {
        try {
            const response = await api_instance.reportSalesDetails({
                status:statusFilter,
                date_start:dateStartFilter ?? '',
                date_end:dateEndFilter ?? '',
                sales_person:personFilter
            });
            if (response.status === 200) {
                const responseData = response.data;
                setAverage(responseData.average);
                setCount(responseData.count);
                setGpTotal(responseData.gpTotal);
                setTotal(responseData.total);
                setLoading(false);
            } else {
                console.error('Failed to fetch Sales Details:', response);
            }
        } catch (error) {
            console.error('An error Sales Details: ', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [statusFilter,personFilter,dateStartFilter]);
    return (
        <>
            <div className="panel  border-white-light dark:border-[#1b2e4b]">
                <h2 className="text-xl font-bold mb-4">Details</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {loading ? (
                            <LoadingSpinner/>
                        ) : (
                    <div className="flex justify-between items-center p-4">
                        <div className="inline-flex">
                            <label>Sales Total:</label>
                            <span>{total}</span>
                        </div>
                        <div className="inline-flex">
                            <label>GP Total:</label>
                            <span>{gpTotal}</span>
                        </div>
                        <div className="inline-flex">
                            <label>Count:</label>
                            <span>{count}</span>
                        </div>
                        <div className="inline-flex">
                            <label>Average:</label>
                            <span>{average}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Details;
