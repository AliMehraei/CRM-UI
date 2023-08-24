import AsyncSelect from "react-select/async";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../../config/api";
import { updateFormData } from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import { handleUploadFile, Currencies, PortalAccess,searchOwners } from "../../../../components/Functions/CommonFunctions";

const TechDataSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };

    const searchProduct = async (query: string) => {
        const valField = 'id';
        const nameField = 'product_name';

        const result = await api_instance.searchProduct({ query: query });

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };
    const searchCategoryProduct = async (query: string) => {
        const valField = 'id';
        const nameField = 'name';

        const result = await api_instance.searchCategoryProduct({ query: query });

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };
    

    const duplicatedOptions = [
        { label: '-None-', value: 'none' },
        {
            label: (<><span className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"></span>Must be deleted</>),
            value: 'must_be_deleted'
        },
        {
            label: (<><span className="inline-block w-4 h-4 mr-2 bg-yellow-500 rounded-full"></span>Must be merged</>),
            value: 'must_be_merged'
        },
        {
            label: (<><span className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>Must be renamed</>),
            value: 'must_be_renamed'
        },
        {
            label: (<><span className="inline-block w-4 h-4 mr-2 bg-red-800 rounded-full"></span>Delete confirmed</>),
            value: 'delete_confirmed'
        },
    ];
    const usageUnitOptions = [
        { label: 'PCS', value: 'pcs' },
    ];


    const fields = {
        'Tech Data': {
            'Category': (
                <AsyncSelect
                    isMulti={false}
                    required
                    id="product_category_id"
                    placeholder="Type at least 2 characters to search..."
                    name="product_category_id"
                    loadOptions={searchCategoryProduct}
                    onChange={({ value }: any) => {
                        handleChangeField('product_category_id', value)
                    }} // Use 'owner_id' if it's the field name
                    className="flex-1"
                />
            ),

            'Average Lead Time': (
                <input
                    id="average_lead_time"
                    name="average_lead_time"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Capacitance': (
                <input
                    id="capacitance"
                    name="capacitance"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Dielectric': (
                <input
                    id="dielectric"
                    name="dielectric"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Flash Memory Size': (
                <input
                    id="flash_memory_size"
                    name="flash_memory_size"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Frequency': (
                <input
                    id="frequency"
                    name="frequency"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Halogen Free': (
                <input
                    id="halogen_free"
                    name="halogen_free"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),


            'Lead Free': (
                <input
                    id="lead_free"
                    name="lead_free"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Max Operating Temperature': (
                <input
                    id="max_operating_temperature"
                    name="max_operating_temperature"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Max Supply Voltage': (
                <input
                    id="max_supply_voltage"
                    name="max_supply_voltage"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of A/D Converters': (
                <input
                    id="number_of_ad_converters"
                    name="number_of_ad_converters"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of D/A Converters': (
                <input
                    id="number_of_da_converters"
                    name="number_of_da_converters"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of I2C Channels': (
                <input
                    id="number_of_i2c_channels"
                    name="number_of_i2c_channels"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of Timers/Counters': (
                <input
                    id="number_of_timers_counters"
                    name="number_of_timers_counters"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of USART Channels': (
                <input
                    id="number_of_usart_channels"
                    name="number_of_usart_channels"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Mount': (
                <input
                    id="mount"
                    name="mount"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Radiation Hardening': (
                <input
                    id="radiation_hardening"
                    name="radiation_hardening"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Schedule B': (
                <input
                    id="schedule_b"
                    name="schedule_b"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Termination': (
                <input
                    id="termination"
                    name="termination"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Voltage ': (
                <input
                    id="voltage"
                    name="voltage"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Voltage Rating': (
                <input
                    id="voltage_rating"
                    name="voltage_rating"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
        },
        '': {
            'SPQ': (
                <input
                    id="spq"
                    name="spq"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Weight in kg': (
                <input
                    id="weight_in_kg"
                    name="weight_in_kg"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Composition': (
                <input
                    id="composition"
                    name="composition"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Core Architecture': (
                <input
                    id="core_architecture"
                    name="core_architecture"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'RAM Size': (
                <input
                    id="ram_size"
                    name="ram_size"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Material': (
                <input
                    id="material"
                    name="material"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Usage Unit': (
                <Select
                    options={usageUnitOptions}
                    name="usage_unit"
                    id="usage_unit"
                    onChange={({ value }: any) => {
                        handleChangeField('usage_unit', value)
                    }}
                    className="flex-1"
                    defaultValue={{ label: 'PCS', value: 'pcs' }}
                />
            ),
            'Unit Price': (
                <input
                    id="unit_price"
                    name="unit_price"
                    type="number"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={0}
                />
            ),
            'Min Operating Temperature': (
                <input
                    id="min_operating_temperature"
                    name="min_operating_temperature"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Min Supply Voltage': (
                <input
                    id="min_supply_voltage"
                    name="min_supply_voltage"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Nominal Supply Current': (
                <input
                    id="nominal_supply_current"
                    name="nominal_supply_current"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of Channels': (
                <input
                    id="number_of_channels"
                    name="number_of_channels"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of I/Os': (
                <input
                    id="number_of_ios"
                    name="number_of_ios"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of SPI Channels': (
                <input
                    id="number_of_spi_channels"
                    name="number_of_spi_channels"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Number of UART Channels': (
                <input
                    id="number_of_uart_channels"
                    name="number_of_uart_channels"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Resistance': (
                <input
                    id="resistance"
                    name="resistance"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Temperature Coefficient ': (
                <input
                    id="temperature_coefficient"
                    name="temperature_coefficient"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Tolerance': (
                <input
                    id="tolerance"
                    name="tolerance"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),
            'Duplicated Status': (
                <Select
                    options={duplicatedOptions}
                    name="duplicated_status"
                    id="duplicated_status"
                    onChange={({ value }: any) => {
                        handleChangeField('duplicated_status', value)
                    }}
                    className="flex-1"
                    defaultValue={{ label: '-None-', value: 'none' }}
                />
            ),
            'Voltage Rating (DC)': (
                <input
                    id="voltage_rating_dc"
                    name="voltage_rating_dc"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}

                />
            ),

        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
        </>
    )
}

export default TechDataSection;
