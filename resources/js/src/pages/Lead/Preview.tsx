import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/leadFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.leadForm);

    useEffect(() => {
        dispatch(setPageTitle('Lead Preview'));
    });
    const exportTable = () => {
        window.print();
    };

    const fetchData = async () => {
        const modelResponse = await api.fetchSingleLead(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.lead;
        dispatch(updateFormData(model));
    };
    // useEffect(() => {
    //     if (formState.contract_attachment) {
    //         displayFile('account', 'contract_attachment', formState.contract_attachment).then((data) => {
    //             dispatch(updateFormData({ [`contract_attachment_preview`]: data }));
    //         })
    //     }
    // }, []);
    const LeadStatus = [
        { value: 'none', label: '-None-' },
        { value: '0.0 Cold lead / unqualified (CLU)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold lead / unqualified (CLU)</>) },
        { value: '1.0 Cold lead qualified (CLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>1.0 Cold lead qualified (CLQ)</>) },
        { value: '2.0 First contact made (FCM)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>2.0 First contact made (FCM)</>) },
        { value: '3.0 warm lead qualified (WLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>3.0 warm lead qualified (WLQ)</>) },
        { value: '4.0 Hot lead (HLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>4.0 Hot lead (HLQ)</>) },
        { value: 'Close Lead / Lost Lead', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Close Lead / Lost Lead</>) },

    ];
    function getStatusLabel(statusValue) {
        const statusObj = LeadStatus.find((title) => title.value === statusValue);
        return statusObj ? statusObj.label : statusValue;
    }
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    if (loading)
        return <LoadingSasCrm />;

    return (
        (!hasPermission(`read-lead`) || loading) ? (
            <LoadingSasCrm />
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <button type="button" className="btn btn-info gap-2" onClick={() => exportTable()}>
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
                        <Link to="/lead/add" className="btn btn-primary gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Create
                        </Link>
                    ) : null}

                    {!loading && hasPermission(`update-account`) ? (
                        <Link to={`/lead/edit/${modelID}`} className="btn btn-success gap-2">
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
                        <div className="text-2xl font-semibold uppercase">Lead</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Lead image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="space-y-1 mt-6 text-base text-gray-700">
                            <div>Lead Status :
                                <strong className="items-center font-semibold">
                                    {getStatusLabel(formState.status)}
                                </strong>
                            </div>
                            <div>Full Name : <strong>{formState.prefix_first_name} {formState.first_name} {formState.last_name}</strong></div>
                            <div>Email : <strong>
                                <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>
                                    {formState.email}
                                </a>
                            </strong>
                            </div>
                            <div>Company : <strong>{formState.company}</strong></div>
                            <div>Website : <strong><a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a></strong></div>
                            <div>Account Owner : <strong>{formState.owner?.first_name} {formState.owner?.last_name} </strong></div>
                            <div>Created By : <strong>{formState.creator?.first_name} {formState.creator?.last_name}</strong> </div>
                            <div>Modified By : <strong>{formState.modifier?.first_name} {formState.modifier?.last_name} </strong></div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Lead Information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Website :</div>
                                    <div>
                                        <a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a>
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Lost Reason :</div>
                                    <div>
                                        {formState.lost_reason}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Lost Reason Comment :</div>
                                    <div>
                                        {formState.lost_reason_comment}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Lead Source :</div>
                                    <div>{formState.lead_source}</div>
                                </div>


                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Industry :</div>
                                    <div>
                                        {formState.industry}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Email Opt Out :</div>
                                    <div>{formState.email_opt_out ? 'Yes' : 'No'}</div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark"> Company :</div>
                                    <div>
                                        {formState.company}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Company Type :</div>
                                    <div>{formState.company_type}</div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Contact Information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> First Name :</div>
                                    <div>
                                        {formState.first_name}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Last Number :</div>
                                    <div>
                                        {formState.last_name}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Phone :</div>
                                    <div>{formState.phone}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Mobile :</div>
                                    <div>{formState.mobile}</div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark"> Email :</div>
                                    <div>
                                        <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>
                                            {formState.email}
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Job Description :</div>
                                    <div>{formState.job_description} </div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark"> Contact LinkedIn :</div>
                                    <div>
                                       {formState.linkedin_contact}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between">
                                    <div className="text-white-dark"> Company LinkedIn :</div>
                                    <div>
                                       {formState.linkedin_company}
                                    </div>
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
                                    <div className="text-white-dark">City :</div>
                                    <div>
                                        {formState.city}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Address :</div>
                                    <div>
                                        {formState.address	}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark"> Zip Code :</div>
                                    <div>{formState.zip_code}</div>
                                </div>

                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Country :</div>
                                    <div>
                                        {formState.country}
                                    </div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">State :</div>
                                    <div>{formState.state}</div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Communication Details / History</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                              

                            </div>
                    
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Communication Details / History</h2>
                        <div className="flex justify-between flex-col gap-6 ">
                            <div className="flex items-center w-full justify-between ">
                                <div className="text-white-dark">Description :</div>
                            </div>
                            <div className='w-full'>{formState.description}</div>
                            <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Details and notes:</div>
                                    <div>{formState.detail_note}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">LinkedIn Communication :</div>
                                    <div className='flex'>{formState.linkedin_communication}</div>
                                </div>
                                
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Fields with Secondary Priority</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">No.of Employees :</div>
                                    <div>{formState.company_employee_count}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Title :</div>
                                    <div>{formState.books_id_eur}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Currency :</div>
                                    <div>{formState.currency}</div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">

                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Lead Reference :</div>
                                    <div>{formState.exchange_rate}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Job Position :</div>
                                    <div>{formState.job_position}</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                        <h2 className='text-base'>Development information</h2>
                        <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Imported Qualification Status :</div>
                                    <div>{formState.imported_qualification_status}</div>
                                </div>
                            </div>
                            <div className="xl:1/3 lg:w-2/5 sm:w-1/2">

                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Last Modified :</div>
                                    <div>{formState.last_modified}</div>
                                </div>
                                <div className="flex items-center w-full justify-between mb-2">
                                    <div className="text-white-dark">Created Date :</div>
                                    <div>{formState.created_date}</div>
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
