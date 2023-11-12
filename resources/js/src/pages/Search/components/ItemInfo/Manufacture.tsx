import React from 'react';

const Manufacture = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">email:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.email}</span>
                </div>


            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Active:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.is_active}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Currency:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.currency}</span>
                </div>

            </div>
        </>
    );
};

export default Manufacture;
