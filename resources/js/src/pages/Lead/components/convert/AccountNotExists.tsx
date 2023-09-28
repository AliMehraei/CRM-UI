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
            <div className="flex gap-2.5 items-center">
                <label>
                    Owner of the New Records
                </label>
                <input id="exchange_rate"
                       name="exchange_rate" type="text"
                       className="flex-1 max-w-[300px] form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
                       disabled
                       defaultValue={`${formState.owner.first_name} ${formState.owner.last_name}`}
                />
            </div>
            <div className="flex gap-2.5 my-40" style={{marginTop: '5rem'}}>
                <button className="btn btn-primary">Convert</button>

                <button className="btn btn-outline-dark">Cancel</button>

            </div>

        </div>
    );
};

export default AccountNotExists;
