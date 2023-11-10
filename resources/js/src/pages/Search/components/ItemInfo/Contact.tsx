import React from 'react';

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
                    <span className="text-sm font-bold">Last Activity Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.last_activity}</span>
                </div>
            </div>

        </>
    );
};

export default Contact;
