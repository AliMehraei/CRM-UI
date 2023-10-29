import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/userFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';
import InfoListComponent from "../../components/Preview/InfoListComponent";
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import AttachmentDownloadButton from '../../components/FormFields/AttachmentDownloadButton';

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelId = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.userForm);
    useEffect(() => {
        dispatch(setPageTitle('User Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleUser(modelId);
        if (modelResponse.status != 200)
            return;
        const model = modelResponse.data.data.user;
        dispatch(updateFormData(model));
    };
    const roleNames = formState.roles?.map(role => role?.name).join(', ');

    const headerDataToDisplay = [
        { label: "First Name", value: `${formState.first_name ?? ''}` },
        { label: "Last Name", value: `${formState.first_name ?? ''}` },
        { label: "Role(s)", value: roleNames  },
        { label: "Email", value: <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>{formState.email}</a> },
        { label: "Phone", value: formState.phone },
        { label: "Mobile", value: formState.mobile },
        { label: "Fax", value: formState.fax },
        { label: "Language", value: formState.language },
        { label: "Country", value: formState.country },
        { label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}` },
        { label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}` }

    ];
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);

        });
    }, [modelId]);
    if (loading)
        return <LoadingSasCrm />;
    return (
        (!hasPermission(`read-user`) || loading) ? (
            <LoadingSasCrm />
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelId}
                        exportTable={exportTable}
                        routeModel="user"
                        permissionModel="user"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">User</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.avatar_data)} alt="User image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="General Information"
                        leftObjects={[
                            { label: "Alias Name", value: formState.alias },
                            { label: "Date of Birth", value: formState.date_of_birth },
                            {
                                label: "Website",
                                value: <a className='text-primary' target='_blank' rel='noreferrer' href={formState.website}>{formState.website}</a>
                            },
                            { label: "Currency", value: formState.currency },
                            { label: "Grouping", value: formState.grouping },
                            { label: "Zuid", value: formState.zuid },

                        ]}
                        rightObjects={[
                
                            { label: "Time Format", value: formState.time_format },
                            { label: "Name Format", value: formState.name_format },
                            { label: "Confirmation status", value: formState.confirmation_status ? 'Yes' : 'No' },
                            { label: "User Status", value: formState.user_status },
                            { label: "Email Verified at", value: formState.email_verified_at },
                            { label: "Status", value: formState.status },

                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Other"
                        leftObjects={[
                            { label: "Shift Effective From", value: formState.shift_effective_from },
                            { label: "Next Shift Id", value: formState.next_shift_id },
                            { label: "Current Shift Id", value: formState.current_shift_id },

                        ]}
                        rightObjects={[
                            { label: "Type", value: formState.type },
                            { label: "Status Reason", value: formState.status_reason },

                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Address Information"
                        leftObjects={[
                            { label: "Street", value: formState.street },
                            { label: "City", value: formState.city },
                            { label: "Zip Code", value: formState.zip_code },
                            { label: "State", value: formState.state },
                            { label: "Country", value: formState.country }
                        ]}
                        rightObjects={[
                            { label: "Country Locale", value: formState.country_locale },
                            { label: "Time Zone, value", value : formState.time_zone },
                        ]}
                    />

                  
                </div>
            </div>
        )
    );
};
export default Preview;