import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import { useUserStatus } from "../../config/authCheck";
import { resetForm, updateFormData } from "../../store/contactFormSlice";
import { displayImage, displayFile } from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';

const Preview = () => {
    const { hasPermission } = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.contactForm);

    useEffect(() => {
        dispatch(setPageTitle('Contact Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleContact(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };
   
    const headerDataToDisplay = [
        { label: "First Name", value: `${formState.prefix_first_name} ${formState.first_name}` },
        { label: "Last Name", value: `${formState.last_name}` },
        
        { label: "Job Description", value: formState.job_description },
        { label: "Contact Type", value: formState.contact_type },
        { label: "Account Name", value:  formState.account?.account_name },
        { label: "Contact Source", value:  formState.contact_source },
        { label: "Contact Owner", value: `${formState.owner?.first_name} ${formState.owner?.last_name}` },

        { label: "Contact Status", value:  formState.contact_status },
        // { label: "Lead Ursprung", value:  formState.contact_type },

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
        (!hasPermission(`read-contact`) || loading) ? (
            <LoadingSasCrm />
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="contact"
                        permissionModel="contact"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Contact</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Contact image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay} />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Contact Information"
                        leftObjects={[
                            { label: "Email", value: <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>{formState.email}</a> },
                            { label: "Mobile", value: formState.mobile },
                            { label: "Phone", value: formState.phone },
                            { label: "Department", value: formState.department },
                            { label: "Asst Phone", value: formState.asst_phone },
                            { label: "Home Phone", value: formState.home_phone },
                            { label: "Other Phone", value: formState.other_phone },
                            { label: "Fax", value: formState.fax },

                        ]}
                        rightObjects={[
                            { label: "Last Activity Date", value: formState.last_activity_date },
                            { label: "Reporting To", value: formState.reporting_to},
                            { label: "LinkedIn Contact", value: formState.linkedin },
                            { label: "Portal Access", value: formState.portal_access },
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Contact Information"
                        leftObjects={[
                            { label: "First Name", value: formState.first_name },
                            { label: "Last Name", value: formState.last_name },
                            { label: "Phone", value: formState.phone },
                            { label: "Mobile", value: formState.mobile },
                            { label: "Email", value: <a className='text-primary' target='_blank' rel='noopener noreferrer' href={'mailto:' + formState.email}>{formState.email}</a> },
                        ]}
                        rightObjects={[
                            { label: "Job Description", value: formState.job_description },
                            { label: "Contact LinkedIn", value: formState.linkedin_contact },
                            { label: "Company LinkedIn", value: formState.linkedin_company },
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <InformationSectionPreview
                        title="Address Information"
                        leftObjects={[
                            { label: "Mailing Country", value: formState.mailing_country },
                            { label: "Mailing City", value: formState.mailing_city },
                            { label: "Mailing Zip", value: formState.mailing_code },
                        ]}
                        rightObjects={[
                            { label: "Mailing State", value: formState.mailing_state },
                            { label: "Mailing Street", value: formState.mailing_street }
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <MultipleLineSectionPreview
                        sectionTitle="Communication Details / History"
                        data={[
                            { label: 'Description', value: formState.description },
                            { label: 'LinkedIn Communication', value: formState.linkedin_communication },
                        ]} />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    {/* <InformationSectionPreview
                        title="Field Visit Summary"
                        leftObjects={[
                            { label: "No.of Employees", value: formState.company_employee_count },
                            { label: "Title", value: formState.books_id_eur },
                            { label: "Currency", value: formState.currency }
                        ]}
                        rightObjects={[
                            { label: "Contact Reference", value: formState.exchange_rate },
                            { label: "Job Position", value: formState.job_position }
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                    <InformationSectionPreview
                        title="Fields with Secondary Priority"
                        leftObjects={[
                            { label: "Approved By", value: `${formState.approved_by?.first_name ?? '-'} ${formState.approved_by?.last_name ?? '-'}` },
                            { label: "Books Contact", value: formState.book_contact ? 'Yes':'No' },
                            { label: "Contact Activity", value: formState.contact_activity },
                            { label: "Title", value: formState.title },
                            { label: "Private Email", value: formState.private_email },
                            { label: "Secondary Email", value: formState.secondary_email },
                            { label: "Portal Operation Tag", value: formState.portal_operation_tag },

                        ]}
                        rightObjects={[
                            { label: "Email Opt Out", value: formState.email_opt_out ? 'Yes':'No' },
                            { label: "Lead Reference", value: formState.lead_reference },
                            { label: "Double Check Status", value: formState.double_check_status },
                            { label: "D Check", value: formState.d_check ? 'Yes':'No'},
                        ]}
                    />
                </div>
            </div>
        )
    );
};
export default Preview;