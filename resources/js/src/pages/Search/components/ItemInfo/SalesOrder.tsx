import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const SalesOrder = ({selectedItem}:any) => {
    return (
        <>
            <div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Discount Percentage:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.company}</span>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Discount Amount:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.email}</span>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Adjustments:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.phone}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Requested Delivery:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.requested_delivery_date}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Shipping Charges:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.imported_qualification_status}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Price:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.price}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Margin:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.margin}</span>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Sub Total:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.sales_total}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Item:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.lead_source}</span>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Date Code:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.lead_reference}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Sales Person:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.sales_person?.first_name} {selectedItem.val?.sales_person?.last_name}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Grand Total:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.gp_total}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Approved:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.approval}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">GP:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.gp_total}</span>
                </div>
            </div>

        </>
    );
};

export default SalesOrder;
