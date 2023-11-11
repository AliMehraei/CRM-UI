import React from 'react';

const Call = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Call Start Time:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.call_start_time}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Call Duration:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.call_duration}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Call Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.type}</span>
                </div>
            </div>
            <div>

            </div>
        </>
    );
};

export default Call;
