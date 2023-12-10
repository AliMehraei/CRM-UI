import React from "react";
import GenerateTableList from "./GenerateTableList";

const ListBom = () => {

    const actionPlus=[
        {
            'icon':<div>
                <a href="#"
                    className="bg-white p-2 rounded-md text-primary-500 border border-primary-500 hover:text-white hover:bg-sky-600 default-transition pulse-primary flex items-center justify-center">
                    <span className="text-sm">Go to header selection page</span>
                    <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </a>
            </div>,
            'route':'attribute-values/list'
        },
        {
            'icon':<div><a href="#"
            className="p-2 ">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </a></div>,
            'route':'attribute-values/list'
        }
    ];

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
                                    actionPlus={actionPlus}
                                />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ListBom;
