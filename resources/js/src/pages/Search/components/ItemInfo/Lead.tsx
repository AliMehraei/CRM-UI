import React from 'react';
import {formatDate} from "../../../../components/Functions/CommonFunctions";

const Lead = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Company:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.company}</span>
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
                    <span className="text-sm font-bold">Company Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.company_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Imported Qualification Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.imported_qualification_status}</span>
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
                    <span className="text-sm font-bold">Contact LinkedIn:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.linkedin_contact}</span>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Email Opt Out:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email_opt_out}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Lead Source:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.lead_source}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Lead Reference:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.lead_reference}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">From Panel Side:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.from_panel_site}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Country:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.country}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Job Description:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.job_description}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Company LinkedIn:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.linkedin_company}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Last Activity Date:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.last_activity}</span>
                </div>
            </div>

        </>
    );
};

export default Lead;
