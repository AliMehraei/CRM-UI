import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";

const SuccessfulConvert = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const navigate = useNavigate();


    return (
        <div className='px-4'>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <div className="mt-8 px-4">
                        <div className="flex flex-row items-center gap-2.5">
                            <h3 className="font-bold text-xl ">Convert Lead</h3>
                            <span
                                className="text-sm">({`${formState.first_name} ${formState.last_name} - ${formState.company}`})</span>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                        <div className="p-3 space-y-2">
                            <h5 className="font-semibold text-lg ">The Lead
                                "{formState.first_name} {formState.last_name}" converted successfully</h5>

                            <div className="flex gap-2.5 items-center">
                                <label>
                                    Account
                                </label>
                                <Link to={`/account/edit/${formState.convertResponse.account.id}`}
                                      className="text-blue-500">
                                    {formState.convertResponse.account.account_name}
                                </Link>

                            </div>


                            <div className="flex gap-2.5 items-center">
                                <label>
                                    Contact
                                </label>
                                <Link to={`/contact/edit/${formState.convertResponse.contact.id}`}
                                      className="text-blue-500">
                                    {formState.convertResponse.contact.contact_name}
                                </Link>
                            </div>
                        </div>


                        <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                        <div className="flex gap-2.5 px-5">

                            <button onClick={() => {
                                navigate(`/lead/list/`, {replace: true});
                            }} className="btn btn-outline-primary">Back to leads
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessfulConvert;
