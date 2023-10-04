import React from 'react';
import {useSelector} from "react-redux";


const AccountNotExists = () => {
    const formState = useSelector((state: any) => state.leadForm);

    return (
        <div className="space-y-5 p-10">
            <div className="flex gap-2.5">
                <span className="font-semibold ">
                    Create New Account
                </span>
                <span className="px-3 px-7 rounded-lg bg-blue-100">
                    {formState.company}
                </span>
            </div>
            <div className="flex gap-2.5">
                <span className="font-semibold">
                    Create New Contact
                </span>
                <span className="px-3 px-7 rounded-lg bg-blue-100">
                   {formState.first_name} {formState.last_name}
                </span>
            </div>



        </div>
    );
};

export default AccountNotExists;
