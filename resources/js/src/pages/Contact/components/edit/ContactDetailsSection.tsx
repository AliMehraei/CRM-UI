import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
    searchAccounts,
    searchOwners,
    FirstNameTitles, displayImage
} from "../../../../components/Functions/CommonFunctions";
import Select from "react-select";
import {updateFormData} from "../../../../store/contactFormSlice";
import ImageUploadComponent from "../../../../components/FormFields/ImageUploadComponent";

const ContactDetailsSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.contactForm);

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const jobDescriptions = [
        {value: "none", label: "-None-"},
        {value: "buyer", label: "Buyer"},
        {value: "operative_buyer", label: "Operative Buyer"},
        {value: "strategic_buyer", label: "Strategic Buyer"},
        {value: "project_buyer", label: "Project Buyer"},
        {value: "commodity_buyer", label: "Commodity Buyer"},
        {value: "team_leader", label: "Team Leader"},
        {value: "purchasing_manager", label: "Purchasing Manager"},
        {value: "purchasing_director", label: "Purchasing Director"},
        {value: "director", label: "Director"},
        {value: "developer", label: "Developer"},
        {value: "sales", label: "Sales"}
    ];
    const contactSources = [
        {value: "none", label: "-None-"},
        {value: "ceo_connections", label: "CEO connections"},
        {value: "client_tipp", label: "Client Tipp"},
        {value: "competitor_tipp", label: "Competitor Tipp"},
        {value: "externe_vermittlung", label: "Externe Vermittlung"},
        {value: "fachtagung", label: "Fachtagung"},
        {value: "google_ad_campaign_sem", label: "Google Ad campaign SEM"},
        {value: "google_seo", label: "Google SEO"},
        {value: "internet_recherche", label: "Internetrecherche"},
        {value: "lead_called_alpyn", label: "Lead called ALPYN"},
        {value: "linkedin_ads", label: "LinkedIn Ads"},
        {value: "linkedin_social_selling", label: "LinkedIn Social selling activity"},
        {value: "messe", label: "Messe"},
        {value: "messe_at", label: "Messe AT"},
        {value: "messe_ch", label: "Messe CH"},
        {value: "messe_de", label: "Messe DE"},
        {value: "messe_ita", label: "Messe ITA"},
        {value: "netcomponents", label: "Netcomponents"},
        {value: "networking_linkedin", label: "Networking Linkedin"},
        {value: "networking_offline", label: "Networking offline"},
        {value: "online_events", label: "Online Events (b2bmatch e.g)"},
        {value: "online_messen", label: "Online Messen"},
        {value: "others", label: "Others"},
        {value: "portal_access_request", label: "Portal Access request"},
        {value: "reseller_tipp", label: "Reseller Tipp"},
        {value: "sales_activity_general", label: "Sales activity by general Assistant (BDR / SDR)"},
        {value: "sales_activity_ita", label: "Sales activity by ITA Assistent (BDR / SDR)"},
        {value: "team_connections", label: "Team Connections"},
        {value: "website_request", label: "Website request"}
    ];
    const contactStatuses = [
        {value: "none", label: "-None-"},
        {value: "not_qualified", label: "Nicht qualifiziert"},
        {value: "prequalified", label: "Vorqualifiziert"},
        {value: "contact_future", label: "Zukünftig kontaktieren"},
        {value: "not_contacted", label: "Nicht kontaktiert"},
        {value: "contact_attempt", label: "Kontaktversuch"},
        {value: "cold_call", label: "Cold Call"},
        {value: "follow_up", label: "Follow Up"},
        {value: "objection_handling", label: "Einwandbehandlung"},
        {value: "rfq", label: "RFQ"},
        {value: "quote", label: "Quote"},
        {value: "sales_order", label: "Sales Order"},
        {value: "worthless_contact", label: "Wertloser Kontakt"},
        {value: "lost_contact", label: "Verlorener Kontakt"},
    ];


    const fields = {
        'Contact Details': {
            'Contact Image':
                <ImageUploadComponent formState={formState}
                                      modelName={'contact'}
                                      id={'image'}
                                      formAttribute={'image'}
                                      updateFormData={updateFormData}
                />
            ,
            'First Name': (
                <div className="flex">
                    <Select id="prefix_first_name"
                            name="prefix_first_name"
                            onChange={({value}: any) => {
                                handleChangeField('prefix_first_name', value)
                            }}
                            className="flex-none w-32 mr-2"
                            options={FirstNameTitles}
                            defaultValue={FirstNameTitles.find((title) => title.value == formState.prefix_first_name)}

                    />
                    <input
                        id="first_name"
                        required
                        name="first_name"
                        className="form-input flex-1 "
                        onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                        defaultValue={formState.first_name}
                    />
                </div>

            ),

            'Last Name': (
                <input
                    id="last_name"
                    required
                    name="last_name"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.last_name}

                />
            ),
            'Job Description':
                <Select id="job_description"
                        name="job_description"
                        onChange={({value}: any) => {
                            handleChangeField('job_description', value)
                        }}
                        className="flex-1"
                        options={jobDescriptions}
                        defaultValue={jobDescriptions.find((title) => title.value == formState.job_description)}

                />,

            'Contact Type': <Select id="contact_type"
                                    name="contact_type"
                                    onChange={({value}: any) => {
                                        handleChangeField('contact_type', value)
                                    }}
                                    className="flex-1 disabled" isDisabled={true}
                                    defaultValue={{value: "none", label: "-None-"}}

            />,
        },
        '': {
            'Account Name': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="account_id"
                required
                placeholder="Type at least 2 characters to search..."
                name="account_id"
                loadOptions={searchAccounts}
                onChange={({value}: any) => {
                    handleChangeField('account_id', value)
                }}
                className="flex-1"
                defaultValue={{
                    value: formState.account?.id,
                    label: (
                        <div key={formState.account?.id} className="flex items-center">
                            {formState.account ? (
                                <img
                                    src={formState.account.image ?? '/assets/images/user-profile.jpeg'}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                            ) : null}
                            <div>
                                <div className="text-sm font-bold">{formState.account?.account_name}</div>
                                <div className="text-xs text-gray-500">{formState.account?.email}</div>
                            </div>
                        </div>
                    ),
                }}
            />,
            'Contact Source': <Select id="contact_source"
                                      name="contact_source"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_source', value)
                                      }}
                                      className="flex-1 "
                                      options={contactSources}
                                      defaultValue={contactSources.find((title) => title.value == formState.contact_source)}

            />,
            'Contact Owner': <AsyncSelect
                defaultOptions={true}
                isMulti={false}
                id="owner_id"
                placeholder="Type at least 2 characters to search..."
                name="owner_id"
                loadOptions={searchOwners}
                onChange={({value}: any) => {
                    handleChangeField('owner_id', value)
                }}
                className=""
                defaultValue={{
                    value: formState.owner?.id,
                    label: (
                        <div key={formState.owner?.id} className="flex items-center">
                            {formState.owner ? (
                                <img
                                    src={displayImage(formState.owner.avatar)}
                                    alt="avatar"
                                    className="w-8 h-8 mr-2 rounded-full"
                                />
                            ) : null}
                            <div>
                                <div
                                    className="text-sm font-bold">{formState.owner?.first_name + " " + formState.owner?.last_name}</div>
                                <div className="text-xs text-gray-500">{formState.owner?.email}</div>
                            </div>
                        </div>
                    ),
                }}
            />,
            'Contact Status': <Select id="contact_status"
                                      name="contact_status"
                                      onChange={({value}: any) => {
                                          handleChangeField('contact_status', value)
                                      }}
                                      className="flex-1 "
                                      options={contactStatuses}
                                      defaultValue={contactStatuses.find((title) => title.value == formState.contact_status)}

            />,


        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default ContactDetailsSection;
