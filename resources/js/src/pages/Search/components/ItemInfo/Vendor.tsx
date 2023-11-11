import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Vendor = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor Source:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor_source}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Email:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Phone:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.phone}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Website:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.website}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">First Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.first_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Last Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.last_name}</span>
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
                    <span className="text-sm font-bold">Vendor Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor Site:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor_site}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">SL Contains all MFRs:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.sl_contains_all_mfrs}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Vendor Rating:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vendor_rating}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Business Vendor:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.business_vendor}</span>
                </div>

            </div>

        </>
    );
};

export default Vendor;
