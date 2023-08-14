import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import Swal from 'sweetalert2';
import api from '../../config/api';
const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Product Add'));
    });
    const api_instance = new api();
    const [params, setParams] = useState({
        product_name: null,
        part_description: null,
        manufacture_id: null,
        datasheet_url: null,
        product_active: false,
        approved_by: null,
        product_owner: null,
        product_type: null,
        manufacture_name: null,
        lifecycle_status: null,
        package: null,
        case_package: null,
        packaging: null,
        number_of_pins: null,
        weight: null,
        case_code_imperial: null,
        case_code_metric: null,
        category_id: null,
        average_lead_time: null,
        capacitance: null,
        dielectric: null,
        flash_memory_size: null,
        frequency: null,
        halogen_free: null,
        lead_free: null,
        max_operating_temperature: null,
        max_supply_voltage: null,
        number_of_ad_converters: null,
        number_of_da_converters: null,
        number_of_i2c_channels: null,
        number_of_timers_counters: null,
        number_of_usart_channels: null,
        mount: null,
        radiation_hardening: null,
        schedule_b: null,
        termination: null,
        voltage: null,
        voltage_rating: null,
        spq: null,
        weight_in_kg: null,
        composition: null,
        core_architecture: null,
        ram_size: null,
        material: null,
        usage_unit: null,
        pcs: null,
        unit_price: null,
        min_operating_temperature: null,
        min_supply_voltage: null,
        nominal_supply_current: null,
        number_of_channels: null,
        number_of_ios: null,
        number_of_spi_channels: null,
        number_of_uart_channels: null,
        resistance: null,
        temperature_coefficient: null,
        tolerance: null,
        duplicated_status: null,
        voltage_rating_dc: null,
    });
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setParams({
            ...params,
            [name]: type === 'checkbox' ? checked : value,
        });
    }
    const handleSave = async () => {
        try {
            const response = await api_instance.create_single_product(params);
            if (response.data.status) {
                showMessage('Product successfully added'); // Calling showMessage with the success message
            } else {
                showMessage('Error adding the product', 'error'); // Calling showMessage with an error message and error type
                console.error('Error adding the product', response.data.message);
            }
        } catch (error) {
            showMessage('Error making create request', 'error'); // Calling showMessage with an error message and error type
            console.error('Error making create request', error);
        }
    };
    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };
    const [selectedAporvedBy, setSelectedAporvedBy] = useState([]);
    const [selectedProductOwner, setSelectedProductOwner] = useState([]);
    const [selectedProductType, setSelectedProductType] = useState({ label: '-None-', value: null });
    const productTypeOptions = [
        { label: '-None-', value: null },
        { label: 'Goods', value: 'goods' },
        { label: 'Service', value: 'service' },
    ];
    const handleProductTypeChange = (selectedOption) => {
        setSelectedProductType(selectedOption);
        setParams({
            ...params,
            product_type: selectedOption ? selectedOption.value : '',
        });
    };
    const [selectedLifecylceStatus, setSelectedLifecylceStatus] = useState({ label: '-None-', value: null });
    const lifecylceStatusOptions = [
        { label: '-None-', value: null },
        { label: 'Production', value: 'production' },
        { label: 'Phase out', value: 'phase_out' },
        { label: 'EOL', value: 'eol' },
        { label: 'Unknown', value: 'unknown' },
    ];
    const handleLifecylceStatusChange = (selectedOption) => {
        setSelectedLifecylceStatus(selectedOption);
        setParams({
            ...params,
            lifecycle_status: selectedOption ? selectedOption.value : '',
        });
    };
    const [selectedPackage, setSelectedPackage] = useState({ label: '-None-', value: null });
    const packageOptions = [
        { label: '-None-', value: null },
        { label: 'SMD', value: 'smd' },
        { label: 'THT', value: 'tht' },
        { label: 'Peripheral', value: 'peripheral' },
        { label: 'Other', value: 'other' },
    ];
    const handlePackageChange = (selectedOption) => {
        setSelectedPackage(selectedOption);
        setParams({
            ...params,
            package: selectedOption ? selectedOption.value : '',
        });
    };
    const handleSelectUser = (selectedOption, type) => {
        if (type === 'approved_by') {
            setSelectedAporvedBy(selectedOption);
            setParams({
                ...params,
                approved_by: selectedOption ? selectedOption.value : null,
            });
        }
        else if (type === 'product_owner') {
            setSelectedProductOwner(selectedOption);
            setParams({
                ...params,
                product_owner: selectedOption ? selectedOption.value : null,
            });
        }
    };
    const clearSelectedUser = (type) => {
        if (type === 'approved_by') {
            setSelectedAporvedBy(null);
            setParams({
                ...params,
                approved_by: null,
            });
        }
        else if (type === 'product_owner') {
            setSelectedProductOwner(null);
            setParams({
                ...params,
                product_owner: null,
            });
        }
    };
    const loadAdminUsersX = async (inputValue) => {
        if (inputValue.length < 2) return [];
        const valField = 'id';
        const nameField = 'name';
        const avatarField = 'avatar';
        const emailField = 'email';
        try {
            const result = await api_instance.loadAdminUsers(inputValue);
            if (result.status) {
                const options = result.data.map((user) => ({
                    value: user[valField],
                    label: (
                        <div className="flex items-center">
                            <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full" />
                            <div>
                                <div className="text-sm font-bold">{user[nameField]}</div>
                                <div className="text-xs text-gray-500">{user[emailField]}</div>
                            </div>
                        </div>
                    ),
                }));
                return options;
            } else {
                console.error('An error occurred while fetching users', result.message);
                return [];
            }
        } catch (error) {
            console.error('An error occurred while fetching users:', error);
            return [];
        }
    };
    const [selectedCategory, setSelectedCategory] = useState({ label: '-None-', value: null });
    const [categoryOptions, setCategoryOptions] = useState([]);
    const loadCategory = async () => {
        try {
            const res = await api_instance.loadCategory();
            const options = [{ label: '-None-', value: null }]; 
            if (res.status) {
                const categories = res.data.data.map((category) => ({
                    label: category.name,
                    value: category.id,
                }));
                options.push(...categories); 
            } else {
                console.error('Error fetching categories:', res.message);
            }
            setCategoryOptions(options);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
        setParams({
            ...params,category_id : selectedOption ? selectedOption.value : '',
        });
    };
    useEffect(() => {
        loadCategory();
    }, []);
    return (
        <>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Link to="/product/list" className="btn btn-danger gap-2">
                        Back
                    </Link>
                    <Link to="/product/add" className="btn btn-primary gap-2">
                        Save and new
                    </Link>
                    <button onClick={handleSave} className="btn btn-success gap-2">
                        Save
                    </button>
            </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="text-lg">Product Information :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="product_name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Product Name
                                    </label>
                                    <input id="product_name" type="text" name="product_name" className="form-input flex-1" value={params.product_name} onChange={handleInputChange} placeholder="Enter Product Name" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="part_description" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Part Description
                                    </label>
                                    <input id="part_description" type="text" name="part_description" className="form-input flex-1" value={params.part_description} onChange={handleInputChange} placeholder="Enter Part Description" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="manufacture" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Manufacture
                                    </label>
                                    <input id="manufacture" type="text" name="manufacture" className="form-input flex-1" value={params.manufacture} onChange={handleInputChange} placeholder="Enter Manufacture" />
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Bussiness Product
                                    </label>
                                    <label htmlFor="business_product" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="business_product" className="form-checkbox" checked={params.product_active} onChange={handleInputChange} />
                                        <span className=" text-white-dark"> Bussiness Product</span>
                                    </label>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="approved_by" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Approved By
                                    </label>
                                    <div className="flex-1">
                                        <AsyncSelect
                                            placeholder="Type at least 2 characters to search..."
                                            loadOptions={(e) => loadAdminUsersX(e)}
                                            onChange={(e) => handleSelectUser(e, 'approved_by')}
                                            isMulti={false}
                                            value={selectedAporvedBy}
                                        />
                                    </div>
                                    <button onClick={() => clearSelectedUser('approved_by')} className="btn btn-clear ltr:ml-2 rtl:mr-2">
                                        Clear
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="flex items-center mt-4">
                                    <label htmlFor="datasheet_url" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Datasheet URL
                                    </label>
                                    <input id="datasheet_url" type="text" name="datasheet_url" className="form-input flex-1" value={params.datasheet_url} onChange={handleInputChange} placeholder="Enter Datasheet URL" />
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Product Active
                                    </label>
                                    <label htmlFor="product_active" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="product_active" className="form-checkbox" checked={params.product_active} onChange={handleInputChange} />
                                        <span className=" text-white-dark"> Product Active</span>
                                    </label>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="product_owner" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Product Owner
                                    </label>
                                    <div className="flex-1">
                                        <AsyncSelect
                                            placeholder="Type at least 2 characters to search..."
                                            loadOptions={(e) => loadAdminUsersX(e)}
                                            onChange={(e) => handleSelectUser(e, 'product_owner')}
                                            isMulti={false}
                                            value={selectedProductOwner}
                                        />
                                    </div>
                                    <button onClick={() => clearSelectedUser('product_owner')} className="btn btn-clear ltr:ml-2 rtl:mr-2">
                                        Clear
                                    </button>
                                </div>
                                <div className="flex items-center mt-4">
                                   <label htmlFor="product_type" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Product Type
                                    </label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Product Type..."
                                            options={productTypeOptions}
                                            onChange={handleProductTypeChange}
                                            value={selectedProductType}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="text-lg">Supply Chain :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="manufacture_name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Manufacture Name
                                    </label>
                                    <input id="manufacture_name" type="text" name="manufacture_name" className="form-input flex-1" value={params.manufacture_name} onChange={handleInputChange} placeholder="Enter Product Name" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="flex items-center mt-4">
                                    <label htmlFor="lifecylce_status" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Lifecylce Status
                                    </label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Lifecylce..."
                                            options={lifecylceStatusOptions}
                                            onChange={handleLifecylceStatusChange}
                                            value={selectedLifecylceStatus}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="text-lg">Physical Properties :</div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="package" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Package
                                    </label>
                                    <div className="flex-1">
                                        <Select
                                            placeholder="Select Product Type..."
                                            options={packageOptions}
                                            onChange={handlePackageChange}
                                            value={selectedPackage}
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="case_package" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Case/Package
                                    </label>
                                    <input id="case_package" type="text" name="case_package" className="form-input flex-1" value={params.case_package} onChange={handleInputChange} placeholder="Enter Case/Package" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="packaging" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Packaging
                                    </label>
                                    <input id="packaging" type="text" name="packaging" className="form-input flex-1" value={params.packaging} onChange={handleInputChange} placeholder="Enter Packaging" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_pins" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Pins
                                    </label>
                                    <input id="number_of_pins" type="text" name="number_of_pins" className="form-input flex-1" value={params.number_of_pins} onChange={handleInputChange} placeholder="Enter Number of Pins " />
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="weight" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Weight
                                    </label>
                                    <input id="weight" type="text" name="weight" className="form-input flex-1" value={params.weight} onChange={handleInputChange} placeholder="Enter weight" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="case_code_imperial" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Case Code (Imperial)
                                    </label>
                                    <input id="case_code_imperial" type="text" name="case_code_imperial" className="form-input flex-1" value={params.case_code_imperial} onChange={handleInputChange} placeholder="Enter case code (imperial) " />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="case_code_metric" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Case Code (Metric)
                                    </label>
                                    <input id="case_code_metric" type="text" name="case_code_metric" className="form-input flex-1" value={params.case_code_metric} onChange={handleInputChange} placeholder="Enter Case Code (Metric)" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="text-lg">Tech Data :</div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="category_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Catagory 
                                    </label>
                                    <div className="flex-1">
                                    <Select
                                        placeholder="Select Category..."
                                        options={categoryOptions}
                                        onChange={handleCategoryChange}
                                        value={selectedCategory}
                                    />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="average_lead_time" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Average Lead Time
                                    </label>
                                    <input id="average_lead_time" type="text" name="average_lead_time" className="form-input flex-1" value={params.average_lead_time} onChange={handleInputChange} placeholder="Enter average lead time" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="capacitance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Capacitance
                                    </label>
                                    <input id="capacitance" type="text" name="capacitance" className="form-input flex-1" value={params.capacitance} onChange={handleInputChange} placeholder="Enter capacitance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="dielectric" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Dielectric
                                    </label>
                                    <input id="dielectric" type="text" name="dielectric" className="form-input flex-1" value={params.dielectric} onChange={handleInputChange} placeholder="Enter dielectric" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="flash_memory_size" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Flash Memory Size
                                    </label>
                                    <input id="flash_memory_size" type="text" name="flash_memory_size" className="form-input flex-1" value={params.flash_memory_size} onChange={handleInputChange} placeholder="Enter flash memory size" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="frequency" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Frequency
                                    </label>
                                    <input id="frequency" type="text" name="frequency" className="form-input flex-1" value={params.frequency} onChange={handleInputChange} placeholder="Enter frequency" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="halogen_free" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Halogen Free
                                    </label>
                                    <input id="halogen_free" type="text" name="halogen_free" className="form-input flex-1" value={params.halogen_free} onChange={handleInputChange} placeholder="Enter halogen free status" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="lead_free" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Lead Free
                                    </label>
                                    <input id="lead_free" type="text" name="lead_free" className="form-input flex-1" value={params.lead_free} onChange={handleInputChange} placeholder="Enter lead free status" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="max_operating_temperature" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Max Operating Temperature
                                    </label>
                                    <input id="max_operating_temperature" type="text" name="max_operating_temperature" className="form-input flex-1" value={params.max_operating_temperature} onChange={handleInputChange} placeholder="Enter max operating temperature" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="max_supply_voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Max Supply Voltage
                                    </label>
                                    <input id="max_supply_voltage" type="text" name="max_supply_voltage" className="form-input flex-1" value={params.max_supply_voltage} onChange={handleInputChange} placeholder="Enter max supply voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_ad_converters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of A/D Converters
                                    </label>
                                    <input id="number_of_ad_converters" type="text" name="number_of_ad_converters" className="form-input flex-1" value={params.number_of_ad_converters} onChange={handleInputChange} placeholder="Enter number of A/D converters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_da_converters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of D/A Converters
                                    </label>
                                    <input id="number_of_da_converters" type="text" name="number_of_da_converters" className="form-input flex-1" value={params.number_of_da_converters} onChange={handleInputChange} placeholder="Enter number of D/A converters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_i2c_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of I2C Channels
                                    </label>
                                    <input id="number_of_i2c_channels" type="text" name="number_of_i2c_channels" className="form-input flex-1" value={params.number_of_i2c_channels} onChange={handleInputChange} placeholder="Enter number of I2C channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_timers_counters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Timers/Counters
                                    </label>
                                    <input id="number_of_timers_counters" type="text" name="number_of_timers_counters" className="form-input flex-1" value={params.number_of_timers_counters} onChange={handleInputChange} placeholder="Enter number of timers/counters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_usart_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of USART Channels
                                    </label>
                                    <input id="number_of_usart_channels" type="text" name="number_of_usart_channels" className="form-input flex-1" value={params.number_of_usart_channels} onChange={handleInputChange} placeholder="Enter number of USART channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="mount" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Mount
                                    </label>
                                    <input id="mount" type="text" name="mount" className="form-input flex-1" value={params.mount} onChange={handleInputChange} placeholder="Enter mount" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="radiation_hardening" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Radiation Hardening
                                    </label>
                                    <input id="radiation_hardening" type="text" name="radiation_hardening" className="form-input flex-1" value={params.radiation_hardening} onChange={handleInputChange} placeholder="Enter radiation hardening" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="schedule_b" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Schedule B
                                    </label>
                                    <input id="schedule_b" type="text" name="schedule_b" className="form-input flex-1" value={params.schedule_b} onChange={handleInputChange} placeholder="Enter schedule B" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="termination" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Termination
                                    </label>
                                    <input id="termination" type="text" name="termination" className="form-input flex-1" value={params.termination} onChange={handleInputChange} placeholder="Enter termination" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage
                                    </label>
                                    <input id="voltage" type="text" name="voltage" className="form-input flex-1" value={params.voltage} onChange={handleInputChange} placeholder="Enter voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage_rating" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage Rating
                                    </label>
                                    <input id="voltage_rating" type="text" name="voltage_rating" className="form-input flex-1" value={params.voltage_rating} onChange={handleInputChange} placeholder="Enter voltage rating" />
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                            <div className="mt-4 flex items-center">
                                    <label htmlFor="spq" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        SPQ
                                    </label>
                                    <input id="spq" type="text" name="spq" className="form-input flex-1" value={params.spq} onChange={handleInputChange} placeholder="Enter SPQ" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="weight_in_kg" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Weight in kg
                                    </label>
                                    <input id="weight_in_kg" type="text" name="weight_in_kg" className="form-input flex-1" value={params.weight_in_kg} onChange={handleInputChange} placeholder="Enter weight in kg" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="composition" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Composition
                                    </label>
                                    <input id="composition" type="text" name="composition" className="form-input flex-1" value={params.composition} onChange={handleInputChange} placeholder="Enter composition" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="core_architecture" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Core Architecture
                                    </label>
                                    <input id="core_architecture" type="text" name="core_architecture" className="form-input flex-1" value={params.core_architecture} onChange={handleInputChange} placeholder="Enter core architecture" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="ram_size" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        RAM Size
                                    </label>
                                    <input id="ram_size" type="text" name="ram_size" className="form-input flex-1" value={params.ram_size} onChange={handleInputChange} placeholder="Enter RAM size" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="material" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Material
                                    </label>
                                    <input id="material" type="text" name="material" className="form-input flex-1" value={params.material} onChange={handleInputChange} placeholder="Enter material" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="usage_unit" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Usage Unit
                                    </label>
                                    <input id="usage_unit" type="text" name="usage_unit" className="form-input flex-1" value={params.usage_unit} onChange={handleInputChange} placeholder="Enter usage unit" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="pcs" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        pcs
                                    </label>
                                    <input id="pcs" type="text" name="pcs" className="form-input flex-1" value={params.pcs} onChange={handleInputChange} placeholder="Enter pcs" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="unit_price" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Unit Price
                                    </label>
                                    <input id="unit_price" type="text" name="unit_price" className="form-input flex-1" value={params.unit_price} onChange={handleInputChange} placeholder="Enter unit price" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="min_operating_temperature" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Min Operating Temperature
                                    </label>
                                    <input id="min_operating_temperature" type="text" name="min_operating_temperature" className="form-input flex-1" value={params.min_operating_temperature} onChange={handleInputChange} placeholder="Enter min operating temperature" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="min_supply_voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Min Supply Voltage
                                    </label>
                                    <input id="min_supply_voltage" type="text" name="min_supply_voltage" className="form-input flex-1" value={params.min_supply_voltage} onChange={handleInputChange} placeholder="Enter min supply voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="nominal_supply_current" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Nominal Supply Current
                                    </label>
                                    <input id="nominal_supply_current" type="text" name="nominal_supply_current" className="form-input flex-1" value={params.nominal_supply_current} onChange={handleInputChange} placeholder="Enter nominal supply current" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Channels
                                    </label>
                                    <input id="number_of_channels" type="text" name="number_of_channels" className="form-input flex-1" value={params.number_of_channels} onChange={handleInputChange} placeholder="Enter number of channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_ios" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of I/Os
                                    </label>
                                    <input id="number_of_ios" type="text" name="number_of_ios" className="form-input flex-1" value={params.number_of_ios} onChange={handleInputChange} placeholder="Enter number of I/Os" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_spi_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of SPI Channels
                                    </label>
                                    <input id="number_of_spi_channels" type="text" name="number_of_spi_channels" className="form-input flex-1" value={params.number_of_spi_channels} onChange={handleInputChange} placeholder="Enter number of SPI channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_uart_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of UART Channels
                                    </label>
                                    <input id="number_of_uart_channels" type="text" name="number_of_uart_channels" className="form-input flex-1" value={params.number_of_uart_channels} onChange={handleInputChange} placeholder="Enter number of UART channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="resistance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Resistance
                                    </label>
                                    <input id="resistance" type="text" name="resistance" className="form-input flex-1" value={params.resistance} onChange={handleInputChange} placeholder="Enter resistance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="temperature_coefficient" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Temperature Coefficient
                                    </label>
                                    <input id="temperature_coefficient" type="text" name="temperature_coefficient" className="form-input flex-1" value={params.temperature_coefficient} onChange={handleInputChange} placeholder="Enter temperature coefficient" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="tolerance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Tolerance
                                    </label>
                                    <input id="tolerance" type="text" name="tolerance" className="form-input flex-1" value={params.tolerance} onChange={handleInputChange} placeholder="Enter tolerance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="duplicated_status" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Duplicated Status
                                    </label>
                                    <input id="duplicated_status" type="text" name="duplicated_status" className="form-input flex-1" value={params.duplicated_status} onChange={handleInputChange} placeholder="Enter duplicated status" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage_rating_dc" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage Rating (DC)
                                    </label>
                                    <input id="voltage_rating_dc" type="text" name="voltage_rating_dc" className="form-input flex-1" value={params.voltage_rating_dc} onChange={handleInputChange} placeholder="Enter voltage rating (DC)" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add;
