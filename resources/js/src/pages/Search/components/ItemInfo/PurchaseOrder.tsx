import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const PurchaseOrder = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate (Purchase Order):</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Pelin Offer:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.email}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor?.vendor_name}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Requested Delivery Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.requested_delivery_date}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Cost:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.cost}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Sub Total:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.margin}</span>*/}
                {/*</div>*/}
            </div>
            <div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Send Email:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.sales_total}</span>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Grand Total:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Item:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.lead_source}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Date Code:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.date_code}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quantity:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Reference Number:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.gp_total}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">send:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.approval}</span>*/}
                {/*</div>*/}

            </div>

        </>
    );
};

export default PurchaseOrder;
