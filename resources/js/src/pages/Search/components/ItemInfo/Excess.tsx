import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Excess = ({selectedItem}:any) => {
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
                    <span className="text-sm font-bold">Cost:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.cost}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Excess No:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.excess_no}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quantity.:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>

            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Excess Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.excess_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Contact:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact?.first_name} {selectedItem.val?.contact?.last_name}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Product Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product?.product_name}</span>
                </div>
            </div>

        </>
    );
};

export default Excess;
