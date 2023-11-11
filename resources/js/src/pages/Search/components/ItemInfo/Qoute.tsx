import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Quote = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quote Stage:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quote_stage}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quote valid:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quote_valid}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">SPQ:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.spq}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quote Number.:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quote_number}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">RFQ:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rfq?.rfq_number}</span>
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
                    <span className="text-sm font-bold">Availability:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.availability?.subject}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quote Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quote_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Contact Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact?.first_name} {selectedItem.val?.contact?.last_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Resale:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.resale}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Cost Vendor:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.cost_vendor}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Margin:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.country}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Total Sales:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.total_sales}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Cost:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.cost}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">List Price:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.list_price}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">GP Total:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.gp_total}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Product Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product?.product_name}</span>
                </div>
            </div>

        </>
    );
};

export default Quote;
