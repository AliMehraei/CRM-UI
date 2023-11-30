import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Account = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Rating:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rating}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Website:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.website}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Phone:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.phone}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Email:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Shipping Country:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.shipping_country}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Shipping City:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.shipping_city}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Shipping Street:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.shipping_street}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Shipping Zip:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.shipping_code}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Number:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account_number}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Activity:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account_activity}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">BooksID USD:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.books_id_usd}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Exchange Rate:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.exchange_rate}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">DCheck:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.d_check}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Created Time:</span>
                    <span className="text-sm ml-2">{formatDate(selectedItem.val?.created_at)}</span>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account parent:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.parent?.account_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account child:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.child?.account_name}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">VAT No:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.vat_no}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Account Site:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account_site}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Payment Terms:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.payment_term}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Has No Contacts:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.has_no_contacts}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Billing Country:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.billing_country}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Billing City:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.billing_city}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Billing Street:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.billing_street}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Billing Zip:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.billing_code}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Account Margin:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.account_margin}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">Business Account:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.business_account}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Last Activity Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.last_activity_date}</span>
                </div>
            </div>

        </>
    );
};

export default Account;
