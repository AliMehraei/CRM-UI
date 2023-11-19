import React from 'react';

const Details = () => {
    return (
        // <div className="mb-5 flex items-center justify-center">
        //     <div className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        //         <div className="py-7 px-6">
        //             <h2 className="text-xl font-bold mb-4">Details</h2>
        //             <div className="flex justify-between items-center p-4">
        //                 <div className="flex-1 w-32 font-semibold text-[16px]">
        //                     Sales Total:
        //                 </div>
        //                 <div className="flex-1 w-32 font-normal text-[16px]">
        //                     jjjjjjjjjjjjjjjjj
        //                 </div>
        //                 <div className="flex-1 w-32 font-semibold text-[16px]">
        //                     GP Total:
        //                 </div>
        //                 <div className="flex-1 w-32 font-normal text-[16px]">
        //                     kkkkkkkkkkkkkkkkkkkkkkk
        //                 </div>
        //
        //                 <div className="flex-1 w-32 font-semibold text-[16px]">
        //                     Owner:
        //                 </div>
        //                 <p className="flex-1 w-32 font-normal text-gray-500 text-[16px]">
        //                     kkkkkkkkkkkkkkkkkkkkkkk
        //                 </p>
        //
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="panel  border-white-light dark:border-[#1b2e4b]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                <div className="inline-flex">
                    <label>Sales Total:</label>
                    <span>50</span>
                </div>

            </div>
        </div>
    );
};

export default Details;
