import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Rfq = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Processed for VRFQ round 1:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.processed_for_vrfq_round_1}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">RFQ Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rfq_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Open Status Time:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.open_status_time}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Processed for VRFQ round 2:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.processed_for_vrfq_round_2}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
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
                    <span className="text-sm font-bold">Contact Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact?.first_name} {selectedItem.val?.contact?.last_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Product Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product?.product_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">RFQ Source:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rfq_source}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quantity:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor_RFQs_Line:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendorRfqsLine?.vendor_name}</span>
                </div>



            </div>

        </>
    );
};

export default Rfq;
