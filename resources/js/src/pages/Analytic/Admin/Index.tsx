
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../../config/authCheck";

const List = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    useEffect(() => {
        dispatch(setPageTitle('Admin Analytics'));
    }, [dispatch]);

    return (

        <div className="panel  border-white-light dark:border-[#1b2e4b]">
            {(!hasPermission(`admin-analytics`)) ? (
                null
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {(!hasPermission(`admin-sales-order-analytics`)) ? (
                        null
                    ) : (
                        <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                            style={{ background: 'linear-gradient(0deg, #0000cd -227%, #00008b)' }}>
                            <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                                <h5 className="font-semibold text-lg">Sales Performance</h5>
                                <div className="relative text-xl whitespace-nowrap">
                                    <span className="table text-[#fff] bg-[#0000cd] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">Sales data insights</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between z-10">
                                <Link type='button' className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#0000cd] z-10" to={`/admin-analytics/sales-order`}>Management</Link>
                            </div>
                        </div>
                    )}

                    {/* Quote performance */}
                    <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                        style={{ background: 'linear-gradient(0deg, #4169e1 -227%, #000080)' }}>
                        <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                            <h5 className="font-semibold text-lg">Quote Performance</h5>

                            <div className="relative text-xl whitespace-nowrap">

                                <span className="table text-[#d3d3d3] bg-[#4169e1] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">Quote to conversion rates</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between z-10">

                            <Link type='button' className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#0000cd] z-10" to={`/admin-analytics/quote`}>Management</Link>
                        </div>
                    </div>

                    <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                        style={{ background: 'linear-gradient(0deg, #00d2ff -227%, #3a7bd5)' }}>
                        <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                            <h5 className="font-semibold text-lg">Bulling performance</h5>

                            <div className="relative text-xl whitespace-nowrap">
                                <span className="table text-[#d3d3d3] bg-[#3a7bd5] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">Bulling performance</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between z-10">

                            <Link type='button' className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#0000cd] z-10" to={`/admin-analytics/invoice`}>Management</Link>
                        </div>
                    </div>

                    <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                        style={{ background: 'linear-gradient(0deg, #00c6fb -227%, #005bea)' }}>
                        <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                            <h5 className="font-semibold text-lg">Customer Performance</h5>

                            <div className="relative text-xl whitespace-nowrap">
                                <span className="table text-[#fff] bg-[#005bea] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">Customer engagement and satisfaction</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between z-10">

                            <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#005bea] z-10">
                                Management (soon)
                            </button>
                        </div>
                    </div>

                    <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                        style={{ background: 'linear-gradient(0deg, #87CEEB -227%, #4682B4)' }}>
                        <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                            <h5 className="font-semibold text-lg">Inventory and Order Performance</h5>

                            <div className="relative text-xl whitespace-nowrap">
                                <span className="table text-[#fff] bg-[#4682B4] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">Inventory health and order timelines</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between z-10">

                            <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#4682B4] z-10">
                                Management(soon)
                            </button>
                        </div>
                    </div>

                    {/* <div className="panel h-full overflow-hidden grid grid-cols-1 content-between"
                    style={{ background: 'linear-gradient(0deg, #89cff0 -227%, #1e90ff)' }}>

                    <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                        <h5 className="font-semibold text-lg">Sales Performance</h5>

                        <div className="relative text-xl whitespace-nowrap">
                            $ 41,741.42
                            <span className="table text-[#d3d3d3] bg-[#1e90ff] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">+ 2453</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between z-10">

                        <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1e90ff] z-10">
                            Managment
                        </button>
                    </div>
                </div> */}
                </div>
            )
            }
        </div >
    );
};

export default List;
