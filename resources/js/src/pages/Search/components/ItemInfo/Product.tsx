import React from 'react';

const Product = ({selectedItem}:any) => {
    return (
        <>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quantity in Demand:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity_in_demand}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Qty Ordered:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity_ordered}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Quantity in Stock:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.quantity_in_stock}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">M Last Update:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.m_last_update}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">updateByMouser:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.update_by_mouser}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Octopart ID:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.octopart_id}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">RoHs:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rohs}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">RoHs Status:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.rohs_status}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Max Operating Temperature:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.max_operating_temperature}</span>
                </div>


            </div>
            <div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Manufacture Name:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.manufacturer?.name}</span>
                </div>

                <div className="mb-4">
                    <span className="text-sm font-bold">SPQ:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.spq}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">OP Last Update:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.op_last_update}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">MPN ID:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mpn_id}</span>
                </div>
                <div className="mb-4">
                <span className="text-sm font-bold">ECCN:</span>
                <span className="text-sm ml-2">{selectedItem.val?.eccn}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Product Type:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product_type}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Usage Unit:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.usage_unit}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Min Operating Temperature:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.min_operating_temperature}</span>
                </div>
                {/*<div className="mb-4">*/}
                {/*<span className="text-sm font-bold">Lifecylce Status:</span>*/}
                {/*<span className="text-sm ml-2">{selectedItem.val?.currency}</span>*/}
                {/* </div>*/}
                <div className="mb-4">
                    <span className="text-sm font-bold">Octopart URL:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.octopart_url}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Product Active:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.product_active}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mouser URL:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mouser_url}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Business Product:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.business_product}</span>
                </div>
                <div className="mb-4">
                    <span className="text-sm font-bold">Mouser ID:</span>
                    <span className="text-sm ml-2">{selectedItem.val?.mouser_id}</span>
                </div>




            </div>
        </>
    );
};

export default Product;
