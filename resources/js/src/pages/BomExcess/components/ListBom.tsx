import React from "react";
import GenerateTableList from "./GenerateTableList";

const ListBom = () => {

    const columns: any = [
        {
            accessor: 'id',
            sortable: true,
            render: ({ id } : any) => <div className="font-semibold">{id}</div>,
        },
        {
            accessor: 'title',
            sortable: true,
            render: ({ title } : any) => <div className="font-semibold">{title}</div>,
        },
        {
            accessor: 'status',
            title: 'Status',
            sortable: true,
            render: ({ status } : any) => (
                <div className="font-semibold">{`${status}`}</div>
            ),
        },
        
        {
            accessor: 'created_at',
            title: 'Created At',
            sortable: true,
            render: ({ created_at} : any) => (
                <div className="font-semibold">
                    {created_at}
                </div>
            ),
        },


    ];

   

    return (
        <div className="pt-5 flex-1">
            <div className="grid  gap-6 mb-6">
                <div className="panel h-full xl:col-span-2">
                    <div className="relative">
                        <h5 className="font-semibold text-lg">List bom</h5>

                        <div className="bg-white dark:bg-black rounded-lg">

                                <GenerateTableList
                                    tableColumns={columns}
                                    frontRoute="bomItemList" 
                                />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListBom;
