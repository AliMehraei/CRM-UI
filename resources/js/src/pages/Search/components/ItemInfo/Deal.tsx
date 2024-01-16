import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Deal = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Probability (%):</span>
                    <span className="text-sm ml-2">{selectedItem.val?.probability}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Amount:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.amount}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.deal_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Closing Date:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.closing_date)}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Stage:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.deal_stage}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Expected Revenue:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.expected_revenue}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>

            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">dealNumber:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.deal_number}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Contact Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact?.first_name} {selectedItem.val?.contact?.last_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Lead Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.lead?.first_name} {selectedItem.val?.lead?.last_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Sales Order:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.sales_order?.subject}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Invoice:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.invoice?.subject}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quote Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quote?.subject}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Rfq Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rfq?.rfq_name}</span>
                </div>
            </div>

        </>
    );
};

export default Deal;
