import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {setPageTitle} from '../../store/themeConfigSlice';
import Api from "../../config/api";
import LoadingSasCrm from "../../components/LoadingSasCrm";
import {useUserStatus} from "../../config/authCheck";
import {resetForm, updateFormData} from "../../store/productFormSlice";
import {displayImage, displayFile} from '../../components/Functions/CommonFunctions';
import InfoListComponent from '../../components/Preview/InfoListComponent';
import ActionButtonsPreview from '../../components/Preview/ActionButtonsPreview';
import InformationSectionPreview from '../../components/Preview/InformationSectionPreview';
import MultipleLineSectionPreview from '../../components/Preview/MultipleLineSectionPreview';
import AttachmentSection from "../../components/FormFields/AttachmentSection";

const Preview = () => {
    const {hasPermission} = useUserStatus();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const modelID = params.id;
    const api = new Api();
    const formState = useSelector((state: any) => state.productForm);

    useEffect(() => {
        dispatch(setPageTitle('Product Preview'));
    });
    const exportTable = () => {
        window.print();
    };
    const fetchData = async () => {
        const modelResponse = await api.fetchSingleProduct(modelID);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.product;
        dispatch(updateFormData(model));
    };

    const headerDataToDisplay = [
        {label: "Manufacture", value: formState.manufacturer?.name ?? ''},
        {label: "Part Description", value: formState.part_description},
        {label: "Product Owner", value: `${formState.owner?.first_name ?? ''} ${formState.owner?.last_name ?? ''}`},
        {label: "Created By", value: `${formState.creator?.first_name ?? ''} ${formState.creator?.last_name ?? ''}`},
        {label: "Modified By", value: `${formState.modifier?.first_name ?? ''} ${formState.modifier?.last_name ?? ''}`},
        {
            label: "Approved By",
            value: `${formState.approvedBy?.first_name ?? ''} ${formState.approvedBy?.last_name ?? ''}`
        }
    ];
    useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [modelID]);
    if (loading)
        return <LoadingSasCrm/>;
    return (
        (!hasPermission(`read-product`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
            <div>
                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                    <ActionButtonsPreview
                        loading={loading}
                        hasPermission={hasPermission}
                        modelId={modelID}
                        exportTable={exportTable}
                        routeModel="product"
                        permissionModel="product"
                    />
                </div>
                <div className="panel">
                    <div className="flex justify-between flex-wrap gap-4 px-4">
                        <div className="text-2xl font-semibold uppercase">Product</div>
                        <div className="shrink-0">
                            <img src={displayImage(formState.image_data)} alt="product image"
                                 className="w-20 ltr:ml-auto rtl:mr-auto"/>
                        </div>
                    </div>
                    <InfoListComponent data={headerDataToDisplay}/>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Product Information"
                        leftObjects={[
                            {
                                label: "Datasheet URL",
                                value: <a className='text-primary' target='_blank'
                                          href={formState.datasheet_url}>{formState.datasheet_url}</a>
                            },
                            {label: "Product Type", value: formState.product_type},
                            {label: "Lost Reason Comment", value: formState.lost_reason_comment},
                            {label: "Lead Source", value: formState.lead_source},
                        ]}
                        rightObjects={[
                            {label: "Mpn", value: formState.mpn_id},
                            {label: "Business Product", value: formState.business_product ? 'Yes' : 'No'},
                            {label: "Product Active", value: formState.product_active ? 'Yes' : 'No'},
                            {label: "Company", value: formState.company},
                            {label: "Company Type", value: formState.company_type},
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Supply Chain"
                        leftObjects={[
                            // { label: "Manufacture Name", value: formState.manufacturer_name },
                        ]}
                        rightObjects={[
                            {label: "Lifecylce Status", value: formState.lifecycle_status},
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Physical Properties"
                        leftObjects={[
                            {label: "Package", value: formState.city},
                            {label: "Case/Package", value: formState.address},
                            {label: "Packaging", value: formState.zip_code},
                            {label: "Number of Pins", value: formState.zip_code},
                        ]}
                        rightObjects={[
                            {label: "Weight", value: formState.country},
                            {label: "Case Code (Imperial)", value: formState.state},
                            {label: "Case Code (Metric)", value: formState.state}
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Tech Data"
                        leftObjects={[
                            {label: "Category", value: formState.category?.name},
                            {label: "Average Lead Time", value: formState.average_lead_time},
                            {label: "Capacitance", value: formState.capacitance},
                            {label: "Dielectric", value: formState.dielectric},
                            {label: "Flash Memory Size", value: formState.flash_memory_size},
                            {label: "Frequency", value: formState.frequency},
                            {label: "Halogen Free", value: formState.halogen_free},
                            {label: "Lead Free", value: formState.lead_free},
                            {label: "Max Operating Temperature", value: formState.max_operating_temperature},
                            {label: "Max Supply Voltage", value: formState.max_supply_voltage},
                            {label: "Number of A/D Converters", value: formState.number_of_ad_converters},
                            {label: "Number of D/A Converters", value: formState.number_of_da_converters},
                            {label: "Number of I2C Channels", value: formState.number_of_i2c_channels},
                            {label: "Number of Timers/Counters", value: formState.number_of_timers_counters},
                            {label: "Number of USART Channels", value: formState.number_of_usart_channels},
                            {label: "Mount", value: formState.mount},
                            {label: "Radiation Hardening", value: formState.radiation_hardening},
                            {label: "Schedule B", value: formState.schedule_b},
                            {label: "Termination", value: formState.termination},
                            {label: "Voltage", value: formState.voltage},
                            {label: "Voltage Rating", value: formState.voltage_rating},
                        ]}
                        rightObjects={[
                            {label: "SPQ", value: formState.spq},
                            {label: "Weight in kg", value: formState.weight_in_kg},
                            {label: "Composition", value: formState.composition},
                            {label: "Core Architecture", value: formState.core_architecture},
                            {label: "RAM Size", value: formState.ram_size},
                            {label: "Material", value: formState.material},
                            {label: "Usage Unit", value: formState.usage_unit},
                            {label: "Unit Price", value: formState.unit_price},
                            {label: "Min Operating Temperature", value: formState.min_operating_temperature},
                            {label: "Min Supply Voltage", value: formState.min_supply_voltage},
                            {label: "Nominal Supply Current", value: formState.nominal_supply_current},
                            {label: "Number of Channels", value: formState.number_of_channels},
                            {label: "Number of I/Os", value: formState.number_of_ios},
                            {label: "Number of SPI Channels", value: formState.number_of_spi_channels},
                            {label: "Number of UART Channels", value: formState.number_of_uart_channels},
                            {label: "Resistance", value: formState.resistance},
                            {label: "Temperature Coefficient", value: formState.temperature_coefficient},
                            {label: "Tolerance", value: formState.tolerance},
                            {label: "Duplicated Status", value: formState.duplicated_status},
                            {label: "Voltage Rating (DC)", value: formState.voltage_rating_dc},
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Dimensions information"
                        leftObjects={[
                            {label: "Length", value: formState.length},
                            {label: "Depth", value: formState.depth},
                            {label: "Thickness", value: formState.thickness},

                        ]}
                        rightObjects={[
                            {label: "Width", value: formState.width},
                            {label: "Height", value: formState.height}
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Compliance information"
                        leftObjects={[
                            {label: "RoHs", value: formState.rohs ? 'Yes' : 'No'},
                            {label: "Reach", value: formState.reach ? 'Yes' : 'No'},

                        ]}
                        rightObjects={[
                            {label: "RoHs Status", value: formState.rohs_status},
                            {label: "REACH SVHC", value: formState.reach_svhc}
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Stock Information"
                        leftObjects={[
                            {label: "Quantity in Stock", value: formState.quantity_in_stock},

                        ]}
                        rightObjects={[
                            {label: "QTY Ordered", value: formState.quantity_ordered},
                            {label: "Quantity in Demand", value: formState.quantity_in_demand},
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Alternatives"
                        leftObjects={[
                            {label: "Alternative MPN 1", value: formState.alternative_mpn1?.product_name ?? ''},
                            {label: "Alternative MPN 2", value: formState.alternative_mpn2?.product_name ?? ''},

                        ]}
                        rightObjects={[
                            {label: "Alternative MPN 3", value: formState.alternative_mpn3?.product_name ?? ''},
                            {label: "Alternative MPN 4", value: formState.alternative_mpn4?.product_name ?? ''},
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="Export / Import Data"
                        leftObjects={[
                            {label: "Tariff Code", value: formState.tariff_code},
                        ]}
                        rightObjects={[
                            {label: "ECCN", value: formState.eccn},
                        ]}
                    />
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <InformationSectionPreview
                        title="API Data"
                        leftObjects={[
                            {label: "Octopart ID", value: formState.octopart_id},
                            {
                                label: "Octopart URL",
                                value: <a className='text-primary' target='_blank'
                                          href={formState.octopart_url}>{formState.octopart_url}</a>
                            },
                            {label: "updateByMouser", value: formState.update_by_mouser ? 'Yes' : 'No'},
                            {label: "ZohoBooksID", value: formState.zoho_books_id},
                            {label: "OP Last Update", value: formState.op_last_update},
                            {label: "OP Failure Message", value: formState.op_failure_message},


                        ]}
                        rightObjects={[
                            {
                                label: "Mouser URL",
                                value: <a className='text-primary' target='_blank'
                                          href={formState.mouser_url}>{formState.mouser_url}</a>
                            },
                            {label: "Mouser ID", value: formState.mouser_id},
                            {label: "Mouser Category", value: formState.mouser_category},
                            {label: "M Last Update", value: formState.m_last_update},
                            {label: "Product Margin", value: formState.product_margin},
                        ]}
                    />

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
                    <MultipleLineSectionPreview
                        sectionTitle="Communication Details / History"
                        data={[
                            {label: 'Octopart Datasheets', value: formState.octopart_datasheets},
                            {label: 'Octopart Compliance Documents', value: formState.octopart_compliance_documents},
                            {label: 'Octopart Images', value: formState.octopart_images},
                        ]}/>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>

                    <AttachmentSection modelId={modelID} modelName={'product'}/>
                </div>
            </div>
        )
    );
};
export default Preview;
