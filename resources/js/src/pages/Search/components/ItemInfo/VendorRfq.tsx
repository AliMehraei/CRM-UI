import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const VendorRfq = ({selectedItem}:any) => {
    const itemPath=`/rfq/preview/${selectedItem.val?.relatedRfqs?.rfq_id}`;
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Email:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor RFQ Number:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor_rfq_number}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Email Opt Out.:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email_opt_out}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>

            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Is full:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.is_full}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Requested Products JSON:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.requested_products}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Related RFQs:</span>
                    <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" href={itemPath}>
                        <span className="text-sm ml-2">{selectedItem.val?.relatedRfqs?.rfq_id} </span>
                    </a>
                </div>


            </div>

        </>
    );
};

export default VendorRfq;
