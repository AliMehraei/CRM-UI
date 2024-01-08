import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Availability = ({selectedItem}:any) => {
    return (
        <>
            <div>
                {/*<div className="mb-4">*/}
                {/*    <span className="text-sm font-bold">Availability No:</span>*/}
                {/*    <span className="text-sm ml-2">{selectedItem.val?.company}</span>*/}
                {/*</div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Cost:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.cost}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Availability Source:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.availability_source}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Availability Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.availability_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Send letter owner:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.send_letter_owner}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">In Stock Quantity:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.in_stock_quantity}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Lead Time:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.lead_time}</span>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">From Our Inventory:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.from_our_inventory}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor.vendor_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">MOQ:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.moq}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Product name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product?.product_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Availability Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.availability_date}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">SKU name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.sku_name}</span>
                </div>

            </div>

        </>
    );
};

export default Availability;
