import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/accountFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';

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
                dispatch(updateFormData({ [`contract_attachment_preview`]: data }));
            })
        }
    }, []);

    const headerDataToDisplay = [
        { label: "Account Name", value: formState.account_name },
        { label: "Phone", value: formState.phone },
        { label: "Website", value: <a className='text-primary' target='_blank' rel='noreferrer' href={formState.website}>{formState.website}</a> },
        { label: "Account Site", value: `${formState.shipping_city} | ${formState.account_name}` },
        { label: "Account Owner", value: `${formState.owner?.first_name} ${formState.owner?.last_name}` },
        { label: "PM User", value: `${formState.pm_user?.first_name} ${formState.pm_user?.last_name}` },
        { label: "Created By", value: `${formState.creator?.first_name} ${formState.creator?.last_name}` },
        { label: "Modified By", value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}` }
    ];


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
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={accountId}
                        exportTable={exportTable}
                        routeModel="account"
                        permissionModel="account"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Account</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="account image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

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
                            <div className="flex items-center w-full justify-between ">
                                <div className="text-white-dark">Description :</div>
                            </div>
                            <div className='w-full'>{formState.description}</div>
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
