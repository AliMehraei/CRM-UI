import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/quoteFormSlice";
import {displayImage, displayFile, getStatusLabel, StatusOption} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.quoteForm);

    useEffect(() => {
        dispatch(setPageTitle('Quote Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleQuote(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.quote;
        dispatch(updateFormData(model));
    };


    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);

    const SOTypeOption = [
        {value: 'none', label: '-None-'},
        {value: 'single_order', label: 'Single Order'},
        {value: 'frame_contract', label: 'Frame Contract'},
        {value: 'call_off', label: 'Call Off'},
        {value: 'forecast', label: 'Forecast'},

    ];

    const quoteHeaderSection = {
        'leftObjects': [
            {label: "Account Name", value: `${formState.account?.account_name}`},
            {
                label: "Contact Name",
                value: `${formState.contact ? formState.contact?.first_name + ' ' + formState.contact?.last_name : ''}`
            },
            {label: "Quote Name", value: formState.qoute?.subject},
            {label: "Currency", value: `${formState.currency}`},

        ],
        'rightObjects': [
            {label: "SO Number", value: `${formState.so_number}`},
            {label: "Deals Name", value: `${formState.deal?.deal_name}`},
            {label: "Deal Stage", value: `${formState.deal?.deal_stage}`},
            {label: "Lost Reason", value: `${formState.lead?.lost_reason}`}, //Todo : from where ?
            {label: "Lost Reason Comment", value: `${formState.lead?.lost_reason}`}, //Todo : from where ?
            {label: "SO Date", value: `${formState.so_date}`},
            {label: "Owner Name", value: `${formState.owner?.first_name} ${formState.owner?.last_name}`},
            {
                label: "Quote Person",
                value: `${formState.quote_person?.first_name} ${formState.quote_person?.last_name}`
            },
            {label: "Created By", value: `${formState.creator?.first_name} ${formState.creator?.last_name}`},
            {label: "Modified By", value: `${formState.modifier?.first_name} ${formState.modifier?.last_name}`},
            {label: "Approved By", value: `${formState.approved_by?.first_name} ${formState.approved_by?.last_name}`},
            {label: "Exchange Rate ", value: `${formState.exchange_rate}`},
        ],
    };

    const QuoteInformationSection =
        {
            'leftObjects': [
                {label: "Purchase Order", value: `${formState.purchase_order}`},
                {label: "Customer PO date", value: `${formState.customer_po_date}`},
                {label: "PO upload", value: `${formState.po_upload} `},  //TODO : what about here ?
                {label: "SO Type", value: getStatusLabel(formState.so_type, SOTypeOption)},
                {label: "Parent SO Nr", value: formState.parent_so_nr},
            ],
            'rightObjects': [
                {label: "Subject", value: `${formState.subject}`},
                {label: "Pending", value: `${formState.pending}`},
                {label: "Status", value: `${getStatusLabel(formState.subject, StatusOption)}`},
                {label: "ZohoBooksId", value: `${formState.zoho_books_id}`},

            ],
        }


    const SOLineSection = {
        'leftObjects': [
            {label: "Quote Total", value: `${formState.total}`}, //TODO : where is it ?
            {
                label: "GP Total",
                value: parseFloat(formState.list_price) - parseFloat(formState.availability?.availability_cost) * parseFloat(formState.Quantity)
            },
            {
                label: "Margin",
                value: (1 - (parseFloat(formState.availability?.availability_cost) / parseFloat(formState.list_price))) * 100
            },
        ],
        'rightObjects': [
            {label: "Resale Price", value: `${formState.list_price}`},
            {label: "Cost Vendor", value: `${formState.availability?.availability_cost}`},
        ],
    }

    const LinkedAvailabilitySection = {
        'leftObjects': [
            {label: "Availability Name", value: `${formState.availability?.name}`},
            {label: "Availability No", value: `${formState.availability?.availability_no}`},
            {label: "Availability Cost", value: `${formState.availability?.availability_cost}`},
        ],
        'rightObjects': [
            {label: "Availability Quantity", value: `${formState.availability?.quantity}`},
            {label: "Availability LT", value: `${formState.availability?.lead_time}`},
            {label: "Availability DC", value: `${formState.availability?.date_code}`},
        ],
    }

    const AddressInformationSection = {
        'leftObjects': [
            {label: "Billing Street", value: `${formState.billing_street}`},
            {label: "Billing City", value: `${formState.billing_city}`},
            {label: "Billing State", value: `${formState.billing_state}`},
            {label: "Billing Code", value: `${formState.billing_code}`},
            {label: "Billing Country", value: `${formState.billing_country}`},
        ],
        'rightObjects': [
            {label: "Shipping Street", value: `${formState.shipping_street}`},
            {label: "Shipping City", value: `${formState.shipping_city}`},
            {label: "Shipping State", value: `${formState.shipping_state}`},
            {label: "Shipping Code", value: `${formState.shipping_code}`},
            {label: "Shipping Country", value: `${formState.shipping_country}`},
        ],
    }

    if (loading)
        return <LoadingSasCrm/>;
    return (
        (!hasPermission(`read-quote`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="quote"
                        permissionModel="quote"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Quote Order</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="Quote Order image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InformationSectionPreview
                        title="Header"
                        leftObjects={quoteHeaderSection.leftObjects}
                        rightObjects={quoteHeaderSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <InformationSectionPreview
                        title="Quote Order Information"
                        leftObjects={QuoteInformationSection.leftObjects}
                        rightObjects={QuoteInformationSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <InformationSectionPreview
                        title="SO Line"
                        leftObjects={SOLineSection.leftObjects}
                        rightObjects={SOLineSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <InformationSectionPreview
                        title="Linked Availability"
                        leftObjects={LinkedAvailabilitySection.leftObjects}
                        rightObjects={LinkedAvailabilitySection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <InformationSectionPreview
                        title="Address Information"
                        leftObjects={AddressInformationSection.leftObjects}
                        rightObjects={AddressInformationSection.rightObjects}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Terms And Conditions"
                        data={[
                            {label: 'Terms and Conditions', value: formState.terms_and_conditions},
                        ]}/>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <MultipleLineSectionPreview
                        sectionTitle="Description "
                        data={[
                            {label: 'Description', value: formState.description},
                        ]}/>
                </div>
            </div>
        )
    );
};
export default Preview;
