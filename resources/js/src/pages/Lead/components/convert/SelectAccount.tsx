import React, {Fragment, useEffect, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {useDispatch, useSelector} from "react-redux";
import {findApiToCall, upFirstLetter} from "../../../../components/Functions/CommonFunctions";
import Api from "../../../../config/api";
import {updateFormData} from "../../../../store/leadFormSlice";

const MyComponent = ({selectAccountModal, setSelectAccountModal, selectedAccount, setSelectedAccount}: any) => {
    const formState = useSelector((state: any) => state.leadForm);
    const dispatch = useDispatch();

    const [accounts, setAccounts] = useState([]);
    const api = new Api();
    const handleAccountSelect = (e: any) => {
        setSelectedAccount(e);
        dispatch(updateFormData({selectedAccount: e.id}))
    }

    useEffect(() => {

        const filterParams = {
            'account_name': {
                'field': 'account_name',
                'condition': 'is',
                'value': {
                    'value': formState.company,
                },
                'type': 'text'
            }
        }

        api.fetchDataAccount({
            page: 1,
            pageSize: 100,
            sortField: 'account_name',
            sortDirection: 'desc',
            filterParam: encodeURIComponent(JSON.stringify(filterParams))
        }).then((res: any) => {
            setAccounts(res.data.data.data);
        }).catch((error: any) => {
            console.error('Error fetching data: ', error);
        });


    }, [])

    return (
        <Transition appear show={selectAccountModal} as={Fragment}>
            <Dialog as="div" open={selectAccountModal} onClose={() => setSelectAccountModal(false)}
                    className="relative z-50">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                                  enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
                                  leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-[black]/60"/>
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center px-4 py-8">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                <button
                                    type="button"
                                    onClick={() => setSelectAccountModal(false)}
                                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <div
                                    className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                    Matching Account Record(s)
                                </div>
                                <div className="p-5">
                                    <table className="table-auto overflow-scroll ">
                                        <thead>
                                        <tr>
                                            <th className="w-1">Account Name</th>
                                            <th className="w-1">Account Type</th>
                                            <th className="w-1">Phone</th>
                                            <th className="w-1">Website</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {accounts?.map((account: any) => (
                                            <tr key={account.id}>
                                                <td>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="selectedAccount"
                                                            value={account.id}
                                                            checked={selectedAccount.id === account.id}
                                                            onChange={() => handleAccountSelect(account)}
                                                        />
                                                        {account.account_name}
                                                    </label>
                                                </td>
                                                <td>{account.account_type}</td>
                                                <td>{account.phone}</td>
                                                <td>{account.website}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <div className="flex justify-end items-center mt-8">
                                        <button disabled={selectedAccount == null} type="button"
                                                onClick={() => setSelectAccountModal(false)}
                                                className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
};

export default MyComponent;
