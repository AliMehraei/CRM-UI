import React from 'react';
import {useSelector} from "react-redux";

const AccountExists = () => {
    const formState = useSelector((state: any) => state.leadForm);


    return (
        <div className="space-y-5 p-10">
            <div className="flex gap-2.5">
                <span className="font-semibold text-base ">
                    Accounts with similar details in <span className="font-bold"> Account Name</span> already exist.
                </span>
            </div>
            <div className="flex flex-col gap-4 ">
                <label className="flex-1 items-center cursor-pointer">
                    <input type="radio" name="operation" className="form-radio" defaultChecked value="create"/>
                    <span className="text-dark dark:text-white">Add as new </span>
                </label>
                <label className="flex-1 items-center cursor-pointer">
                    <input type="radio" name="operation" className="form-radio" value="update"/>
                    <span className="text-dark dark:text-white">Update existing  only</span>
                </label>
                <label className="flex-1 items-center cursor-pointer">
                    <input type="radio" name="operation" className="form-radio" value="create_update"/>
                    <span className="text-dark dark:text-white">Both</span>
                </label>
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
}

export default AccountExists;
