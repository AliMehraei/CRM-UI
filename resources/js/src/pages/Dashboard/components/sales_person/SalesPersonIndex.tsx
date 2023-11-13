import React from 'react';
import {Link} from "react-router-dom";
import OpenQuotes from "../admin/OpenQuotes";
import BookingRevenue from "../admin/BookingRevenue";
import BillingYtdSales from "../admin/BillingYtdSales";
import BookingGp from "../admin/BookingGp";
import MtdBilling from "../admin/MtdBilling";
import BookingSalesYtd from "../admin/BookingSalesYtd";
import YTDBilling from "../admin/YTDBilling";
import DealsByStage from "../admin/DealsByStage";
import Rfq from "../admin/Rfq";
import CallAmount from "../admin/CallAmount";

const AdminIndex = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>

            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">


                    {/*<LastPeriodCompareWidget*/}
                    {/*    currentAmount={75}*/}
                    {/*    lastPeriodAmount={60}*/}
                    {/*    sectionTitle="User Engagement"*/}
                    {/*    isCurrency={false}*/}
                    {/*    firstColor="cyan-500"*/}
                    {/*    secondColor="cyan-400"*/}
                    {/*    currentTitle="Active Users"*/}
                    {/*    lastPeriodTitle="Previous Period"*/}
                    {/*/>*/}

                    {/*<LastPeriodCompareWidget*/}
                    {/*    currentAmount={7500}*/}
                    {/*    lastPeriodAmount={7000}*/}
                    {/*    sectionTitle="Sales"*/}
                    {/*    currency="USD"*/}
                    {/*    firstColor="fuchsia-500"*/}
                    {/*    secondColor="fuchsia-400"*/}
                    {/*    currentTitle="This Quarter"*/}
                    {/*    lastPeriodTitle="Last Quarter"*/}
                    {/*/>*/}
                </div>

            </div>
            <OpenQuotes/>
            <div className="flex flex-row gap-5">
                <BookingRevenue/>
                <BillingYtdSales/>
            </div>

            <div className="flex flex-row gap-5">
                <BookingGp/>
                <MtdBilling/>
            </div>
            <div className="flex flex-row gap-5">
                <BookingSalesYtd/>
                <YTDBilling/>
            </div>
            <div className="flex flex-row gap-5">
                <DealsByStage/>
                <Rfq/>
            </div>
            <CallAmount/>
        </div>
    );
};

export default AdminIndex;
