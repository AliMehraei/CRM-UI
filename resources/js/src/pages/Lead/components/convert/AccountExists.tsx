import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import SelectAccount from "./SelectAccount";

const AccountExists = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const [createNewAccount, setCreateNewAccount] = useState(true);
    const [selectAccountModal, setSelectAccountModal] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<any>(null);

    const dispatch = useDispatch();

    const handleChangeOperation = () => {
        setCreateNewAccount((prevState) => !prevState);
    }

    useEffect(() => {
        dispatch(updateFormData({
            createNewAccount: createNewAccount
        }))
        if (!createNewAccount)
            setSelectAccountModal(true);
    }, [createNewAccount])

    return (
        <div className="space-y-5 p-10">
            <div className="flex gap-2.5">
                <span className="font-semibold text-base ">
                    Accounts with similar details in <span className="font-bold"> Account Name</span> already exist.
                </span>
            </div>
            <div className="flex flex-col gap-4 ">
                <label className="flex-1 items-center cursor-pointer">
                    <input onChange={handleChangeOperation} type="radio" name="operation" className="form-radio"
                           value="false"/>
                    <span className="text-dark dark:text-white">Add to existing account :
                        {selectedAccount != null && (<span
                            className="mx-2 px-3 px-7 rounded-lg bg-blue-100">
                              {`${selectedAccount?.account_name}`}
                        </span>)}

                    </span>
                </label>
                <label className="flex-1 items-center cursor-pointer">
                    <input onChange={handleChangeOperation} defaultChecked type="radio" name="operation"
                           className="form-radio"
                           value="true"/>
                    <span className="text-dark dark:text-white">Create New Account : <span
                        className="px-3 px-7 rounded-lg bg-blue-100">
                    {formState.company}
                        </span>
                    </span>
                </label>
                {createNewAccount && (<span className="mx-3">
                    A new contact
                    <span
                        className="px-3 mx-2 rounded-lg bg-blue-100">
                    {`${formState.first_name} ${formState.last_name}`}
                        </span>
                     will be created for the Account.
                </span>)}

            </div>
            <SelectAccount selectAccountModal={selectAccountModal} setSelectAccountModal={setSelectAccountModal}
                           selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
        </div>
    );
}

export default AccountExists;
