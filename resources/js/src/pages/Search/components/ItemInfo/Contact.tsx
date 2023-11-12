import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Contact = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account?.account_name}</span>
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
                    <span className="text-sm font-bold">Contact Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact_status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Portal Access:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.portal_access}</span>
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
                    <span className="text-sm font-bold">Contact Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.contact_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mailing Country:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mailing_country}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mailing City:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mailing_city}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mailing Street:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mailing_street}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mailing Zip:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mailing_code}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Books Contact:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.book_contact}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">DCheck:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.d_check}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Last Activity Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.last_activity}</span>
                </div>
            </div>

        </>
    );
};

export default Contact;
