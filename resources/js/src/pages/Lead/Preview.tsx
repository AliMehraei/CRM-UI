import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/leadFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';

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

    const LeadStatus = [
        { value: 'none', label: '-None-' },
        { value: '0.0 Cold lead / unqualified (CLU)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-gray-500 rounded-full"></span>0.0 Cold lead / unqualified (CLU)</>) },
        { value: '1.0 Cold lead qualified (CLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-blue-300 rounded-full"></span>1.0 Cold lead qualified (CLQ)</>) },
        { value: '2.0 First contact made (FCM)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-purple-200 rounded-full"></span>2.0 First contact made (FCM)</>) },
        { value: '3.0 warm lead qualified (WLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-orange-300 rounded-full"></span>3.0 warm lead qualified (WLQ)</>) },
        { value: '4.0 Hot lead (HLQ)', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-orange-600 rounded-full"></span>4.0 Hot lead (HLQ)</>) },
        { value: 'Close Lead / Lost Lead', label: (<> <span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Close Lead / Lost Lead</>) },

    ];
    const getStatusLabel = (status) => {
        const statusObj = LeadStatus.find(item => item.value === status);
        return statusObj ? statusObj.label : status;
    };

    const headerDataToDisplay = [
        { label: "Lead Status", value: getStatusLabel(formState.status) },
        { label: "Full Name", value: `${formState.prefix_first_name} ${formState.first_name} ${formState.last_name}` },
        { label: "Email", value: <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>{formState.email}</a> },
        { label: "Company", value: formState.company },
        { label: "Website", value: <a className='text-primary' target='_blank' href={formState.website}>{formState.website}</a> },
        { label: "Account Owner", value: `${formState.owner?.first_name} ${formState.owner?.last_name}` },
        { label: "Created By", value: `${formState.creator?.first_name} ${formState.creator?.last_name}` },
        { label: "Modified By", value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}` }
    ];

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
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="lead"
                        permissionModel="lead"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Lead</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Lead image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

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
                                        {formState.address}
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
