import React from 'react';

const TableSectionPreview = ({
                                 title, items, columns, total = null, discount = null,
                                 tax = null, subtotal = null, adjustment = null
                             }: any) => {
    return (

        <div className=" justify-between ">
            <h2 className='text-base'>{title}</h2>
            <div className="justify-between ">
                <div className="table-responsive mt-6">
                    <table className="table-striped">
                        <thead>
                        <tr>
                            {columns.map((column: any) => {
                                return (
                                    <th key={column.key} className={column?.class}>
                                        {column.label}
                                    </th>
                                );
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    {columns.map((column: any) => (
                                        <td key={column.key}>
                                            {column.model ? item[column.model][column.key] : item[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 px-4 mt-6">
                    <div></div>
                    <div className="ltr:text-right rtl:text-left space-y-2">
                        {subtotal!=null && (
                            <div className="flex items-center font-semibold text-lg">
                                <div className="flex-1">Subtotal</div>
                                <div className="w-[37%]">€{subtotal}</div>
                            </div>
                        )}
                        {tax!=null && (
                            <div className="flex items-center font-semibold text-lg">
                                <div className="flex-1">Tax</div>
                                <div className="w-[37%]">€{tax}</div>
                            </div>
                        )}
                        {discount!=null && (
                            <div className="flex items-center font-semibold text-lg">
                                <div className="flex-1">Discount</div>
                                <div className="w-[37%]">€{discount}</div>
                            </div>
                        )}
                        {adjustment!=null && (
                            <div className="flex items-center font-semibold text-lg">
                                <div className="flex-1">Adjustment</div>
                                <div className="w-[37%]">€{adjustment}</div>
                            </div>
                        )}

                        {total!=null && (
                            <div className="flex items-center font-semibold text-lg">
                                <div className="flex-1">Total</div>
                                <div className="w-[37%]">€{total}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TableSectionPreview;
