import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/accountFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const accountId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.accountForm);

    useEffect(() => {
        dispatch(setPageTitle('Account Preview'));
    });
    const exportTable = () => {
        window.print();
    };

    const fetchData = async () => {
        const accountResponse = await api.fetchSingleAccount(accountId);
        if (accountResponse.status != 200)
            return;
        const account = accountResponse.data.data.account;
        dispatch(updateFormData(account));

    };
    useEffect(() => {
        if (formState.contract_attachment) {
            displayFile('account', 'contract_attachment', formState.contract_attachment).then((data) => {
                console.log(data);
                dispatch(updateFormData({ [`contract_attachment_preview`]: data }));
            })
        }
    }, []);

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);

        });
    }, [accountId]);
    if (loading)
        return <LoadingSasCrm />;

    return (
        (!hasPermission(`read-account`) || loading) ? (
            <LoadingSasCrm />
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <button type="button" className="btn btn-primary gap-2" onClick={() => exportTable()}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 17.9827C4.44655 17.9359 3.51998 17.7626 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H16C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5535 17.9359 18 17.9827"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path opacity="0.5" d="M9 10H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M19 14L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path
                                d="M18 14V16C18 18.8284 18 20.2426 17.1213 21.1213C16.2426 22 14.8284 22 12 22C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                opacity="0.5"
                                d="M17.9827 6C17.9359 4.44655 17.7626 3.51998 17.1213 2.87868C16.2427 2 14.8284 2 12 2C9.17158 2 7.75737 2 6.87869 2.87868C6.23739 3.51998 6.06414 4.44655 6.01733 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <circle opacity="0.5" cx="17" cy="10" r="1" fill="currentColor" />
                            <path opacity="0.5" d="M15 16.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path opacity="0.5" d="M13 19H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Print
                    </button>
                    {!loading && hasPermission(`create-account`) ? (
                        <Link to="/account/add" className="btn btn-secondary gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Create
                        </Link>
                    ) : null}

                    {!loading && hasPermission(`update-account`) ? (
                        <Link to={`/account/edit/${accountId}`} className="btn btn-warning gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path
                            opacity="0.5"
                            d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>
                        <path
                            d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        ></path>
                        <path
                            opacity="0.5"
                            d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        ></path>
                            </svg>
                            Edit
                        </Link>
                    ) : null}

                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Account</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="account image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="space-y-1 mt-6 text-base text-gray-700">
                            <div>Account Name : <strong>{formState.account_name}</strong></div>
                            <div>Phone : <strong>{formState.phone}</strong></div>
                            <div>Website : <strong><a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a></strong></div>
                            <div>Account Site: <strong>{formState.shipping_city} | {formState.account_name}</strong></div>
                            <div>Account Owner : <strong>{formState.owner?.first_name} {formState.owner?.last_name} </strong></div>
                            <div>PM User : <strong>{formState.pm_user?.first_name} {formState.pm_user?.last_name} </strong></div>
                            <div>Created By : <strong>{formState.creator?.first_name} {formState.creator?.last_name}</strong> </div>
                            <div>Modifed By : <strong>{formState.modifier?.first_name} {formState.modifier?.last_name} </strong></div>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">

                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Cotract Attachment :</div>
                                    <div>
                                        <a disabled={!formState.contract_attachment} className="btn btn-sm btn-outline-primary cursor-pointer"
                                            href={formState.contract_attachment_preview ?? formState.contract_attachment}
                                            target="__blank"
                                            {...({} as React.ButtonHTMLAttributes<HTMLAnchorElement>)}
                                        >Download</a></div>
                                    {/* TODO: fix download file */}

                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Account Type :</div>
                                    <div>{formState.account_type}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Contracts :</div>
                                    {/* TODO: add account Contracts*/}
                                    <div>not Sets</div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark">Business Account :</div>
                                    <div>{formState.business_account ? 'Yes' : 'No'}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Currency:</div>
                                    <div>{formState.currency}</div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Approved by :</div>
                                    <div className="whitespace-nowrap">{formState.approvedBy?.first_name} {formState.approvedBy?.last_name}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">TAM :</div>
                                    <div>{formState.tam}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Exchagne Rate :</div>
                                    <div>{formState.exchange_rate}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Lead Reference :</div>
                                    <div>{formState.lead_reference}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Account Information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Primary First Name :</div>
                                    <div>
                                        {formState.primary_first_name}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Account Number :</div>
                                    <div>
                                        {formState.account_number}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Phone :</div>
                                    <div>{formState.phone}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Fax :</div>
                                    <div>{formState.fax}</div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark"> Email :</div>
                                    <div>
                                        <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>
                                            {formState.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Website:</div>
                                    <div><a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a></div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Primary Last Name :</div>
                                    <div>
                                        {formState.primary_last_name}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Parent Account :</div>
                                    <div>{formState.parent?.first_name} {formState.parent?.last_name}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Child Account :</div>
                                    <div>{formState.child?.first_name} {formState.child?.last_name}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Double Check Status :</div>
                                    <div>{formState.double_check_status}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">DCheck :</div>
                                    <div>{formState.business_account ? 'Yes' : 'No'}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Has No Contacts :</div>
                                    <div>{formState.business_account ? 'Yes' : 'No'}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Terms and Shipping</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Incoterms :</div>
                                    <div>
                                        {formState.incoterm}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Payment Terms :</div>
                                    <div>
                                        {formState.payment_term}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Credit Line :</div>
                                    <div>{formState.credit_line}</div>
                                </div>

                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">VAT No :</div>
                                    <div>
                                        {formState.vat_no}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Forwarder :</div>
                                    <div>{formState.parent?.forwarder}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Child Account :</div>
                                    <div>{formState.child?.first_name} {formState.child?.last_name}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Forwarder Account no :</div>
                                    <div>{formState.forwarder_account_no}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Address Information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Billing Street :</div>
                                    <div>{formState.billing_street}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Billing City :</div>
                                    <div>{formState.billing_city}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Billing Code :</div>
                                    <div>{formState.billing_code}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Billing State :</div>
                                    <div>{formState.billing_state}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Billing Country :</div>
                                    <div>{formState.billing_country}</div>
                                </div>

                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">

                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Shipping Street :</div>
                                    <div>{formState.shipping_street}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Shipping City :</div>
                                    <div>{formState.shipping_city}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Shipping Code :</div>
                                    <div>{formState.shipping_code}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Shipping State :</div>
                                    <div>{formState.shipping_state}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Shipping Country :</div>
                                    <div>{formState.shipping_country}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Description Information</h2>
                        <div className="flex justify-between flex-col gap-6 ">
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Description :</div>
                                <div>{formState.description}</div>
                            </div>
                            <div className="flex items-center w-full justify-between mb-2">
                                <div className="text-white-dark">Last Activity Date :</div>
                                <div>{formState.last_activity_date}</div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Technical information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">ZohoBooksID :</div>
                                    <div>{formState.zoho_books_id}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">BooksID EUR :</div>
                                    <div>{formState.books_id_eur}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">BooksID USD :</div>
                                    <div>{formState.books_id_usd}</div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">

                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">BOM/Excess Total Uploading Rows :</div>
                                    <div>{formState.bom_total_row}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Account Margin :</div>
                                    <div>{formState.account_margin}</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Unused information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Purchasing Volume Current :</div>
                                    <div>{formState.purchasing_volume_current}</div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">

                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Annual Revenue :</div>
                                    <div>{formState.annual_revenue}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Preview;
