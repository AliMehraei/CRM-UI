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

    const getDefaultParams =() =>({
        product_name: null,
        part_description: null,
        manufacture_id: null,
        datasheet_url: null,
        rfq: [],
        product_active: false,
        business_product: false,
        approved_by: null,
        product_owner: null,
        product_type: 'goods',
        manufacture_name: null,
        lifecycle_status: null,
        package: null,
        case_package: null,
        packaging: null,
        number_of_pins: null,
        weight: null,
        case_code_imperial: null,
        case_code_metric: null,
        product_category_id: null,
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
        usage_unit: 'pcs',
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
        length: null,
        depth: null,
        thickness: null,
        width: null,
        height: null,
        rohs: null,
        reach: null,
        rohs_status: null,
        reach_svhc: null,
        qty_ordered: null,
        quantity_in_stock: null,
        quantity_in_demand: null,
        alternative_mpn_1: null,
        alternative_mpn_2: null,
        alternative_mpn_3: null,
        alternative_mpn_4: null,
        tariff_code: null,
        eccn: null,
        octopart_id: null,
        octopart_url: null,
        update_by_mouser: false,
        zoho_books_id: null,
        op_last_update: null,
        op_failure_message: null,
        octopart_images: null,
        octopart_datasheets: null,
        octopart_compliance_documents: null,
        mouser_url: null,
        mouser_id: null,
        mouser_category: null,
        m_last_update: null,
        product_margin: null,
        description: null,
        octopart_short_description: null,
    });
    const [params, setParams] = useState(getDefaultParams());
    const clearForm = () => {
        setParams(getDefaultParams());
        setSelectedAporvedBy([]);
        setSelectedProductOwner([]);
        setSelectedProductType({ label: '-None-', value: null });
        setSelectedLifecylceStatus({ label: '-None-', value: null });
        setselectedUsageUnit({ label: 'PCS', value: 'pcs' });
        setselectedDuplicated({ label: '-None-', value: null });
        setSelectedPackage({ label: '-None-', value: null });
        setSelectedManufacture([]);
        setSelectedAltMpn1([]);
        setSelectedAltMpn2([]);
        setSelectedAltMpn3([]);
        setSelectedAltMpn4([]);
        setSelectedRfq([]);
        setSelectedCategory({ label: '-None-', value: null });
    };
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setParams({
            ...params,
            [name]: type === 'checkbox' ? checked : value,
        });
    }
    const handleSave = async () => {
        const errorMessage = validateProduct(params);
        if (errorMessage) {
            showMessage(errorMessage, 'error');
            return;
        }
        try {
            const response = await api_instance.create_single_product(params);
            if (response.data.status) {
                showMessage('Product successfully added');
                console.log(getDefaultParams);
                clearForm();            
                } else {
                showMessage('Error adding the product', 'error'); 
                console.error('Error adding the product', response.data.message);
            }
        } catch (error) {
            showMessage('Error making create request', 'error'); 
            console.error('Error making create request', error);
        }
    };
    const validateProduct = (data) => {
        if (!data.product_name) {
            return "Product Name is required.";
        }
    
        if (!data.manufacture_id) {
            return "Manufacture is required.";
        }
    
        return null;
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
    const [selectedUsageUnit, setselectedUsageUnit] = useState({ label: 'PCS', value: 'pcs' });
    const usageUnitOptions = [
        { label: 'PCS', value: 'pcs' },
    ];
    const handleUsageUnitChange = (selectedOption) => {
        setselectedUsageUnit(selectedOption);
        setParams({
            ...params,
            usage_unit: selectedOption ? selectedOption.value : '',
        });
    };
    const [selectedDuplicated, setselectedDuplicated] = useState({ label: '-None-', value: null });
    const duplicatedOptions = [
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
    const handleDuplicatedChange = (selectedOption) => {
        setselectedDuplicated(selectedOption);
        setParams({
            ...params,
            duplicated_status: selectedOption ? selectedOption.value : '',
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
    const [selectedManufacture, setSelectedManufacture] = useState([]);
    const [selectedAltMpn1, setSelectedAltMpn1] = useState([]);
    const [selectedAltMpn2, setSelectedAltMpn2] = useState([]);
    const [selectedAltMpn3, setSelectedAltMpn3] = useState([]);
    const [selectedAltMpn4, setSelectedAltMpn4] = useState([]);
    const loadManufacturers = async (inputValue) => {
        if (inputValue.length < 2) return [];
        const valField = 'id';
        const nameField = 'name';
        const ownerByField = 'owner_id';
        const ModifyByField = 'modified_by';

        try {
            const result = await api_instance.loadManufacturers(inputValue);            
            if (result.status) {
                const options = result.data.map((manufacturer) => ({
                    value: manufacturer[valField],
                    label: (
                        <div className="flex items-center">
                            <div className="text-sm font-bold">{manufacturer[nameField]}</div>
                        </div>
                    ),
                }));
                return options;
            } else {
                console.error('An error occurred while fetching manufacturers', result.message);
                return [];
            }
        } catch (error) {
            console.error('An error occurred while fetching manufacturers:', error);
            return [];
        }
    };
    const [selectedRfq, setSelectedRfq] = useState([]);
    const loadRfqs = async (inputValue) => {
        if (inputValue.length < 2) return [];
        const valField = 'id';
        const rfqName = 'rfq_name';
        try {
            const result = await api_instance.loadRfqs(inputValue);  
            console.log(result.data);
                      
            if (result.status) {
                const options = result.data.map((rfq) => ({
                    value: rfq[valField],
                    label: (
                        <div className="flex items-center">
                            <div className="text-sm font-bold">{rfq[rfqName]}</div>
                        </div>
                    ),
                }));
                return options;
            } else {
                console.error('An error occurred while fetching rfq', result.message);
                return [];
            }
        } catch (error) {
            console.error('An error occurred while fetching rfq:', error);
            return [];
        }
    };
    const handleRfqChange = (selectedRfqs) => {
        setSelectedRfq(selectedRfqs);
        setParams({
            ...params,
            rfq: selectedRfqs ? selectedRfqs.map(rfq => rfq.value) : [],
        });
    };
    const clearRfq = () => {
        setSelectedRfq(null);
        setParams({
            ...params,
            rfq: [],
        });
    };
    const handleMaufacturChange = (selectedOption, type) => {
        const typeMap = {
            'mpn': {
                setter: setSelectedManufacture,
                paramKey: 'manufacture_id'
            },
            'mpn1': {
                setter: setSelectedAltMpn1,
                paramKey: 'alternative_mpn_1'
            },
            'mpn2': {
                setter: setSelectedAltMpn2,
                paramKey: 'alternative_mpn_2'
            },
            'mpn3': {
                setter: setSelectedAltMpn3,
                paramKey: 'alternative_mpn_3'
            },
            'mpn4': {
                setter: setSelectedAltMpn4,
                paramKey: 'alternative_mpn_4'
            }
        };
    
        if (typeMap[type]) {
            const { setter, paramKey } = typeMap[type];
    
            setter(selectedOption);
            setParams(prevParams => ({
                ...prevParams,
                [paramKey]: selectedOption ? selectedOption.value : ''
            }));
        } else {
            console.error(`Unknown type: ${type}`);
        }
    };
    const clearManufacture = (type) => {
        const typeMap = {
            'mpn': {
                setter: setSelectedManufacture,
                paramKey: 'manufacture_id'
            },
            'mpn1': {
                setter: setSelectedAltMpn1,
                paramKey: 'alternative_mpn_1'
            },
            'mpn2': {
                setter: setSelectedAltMpn2,
                paramKey: 'alternative_mpn_2'
            },
            'mpn3': {
                setter: setSelectedAltMpn3,
                paramKey: 'alternative_mpn_3'
            },
            'mpn4': {
                setter: setSelectedAltMpn4,
                paramKey: 'alternative_mpn_4'
            }
        };
    
        if (typeMap[type]) {
            const { setter, paramKey } = typeMap[type];
    
            setter(null); // Resetting the state
            setParams(prevParams => ({
                ...prevParams,
                [paramKey]: null
            }));
        } else {
            console.error(`Unknown type: ${type}`);
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
            ...params, product_category_id: selectedOption ? selectedOption.value : '',
        });
    };
    useEffect(() => {
        loadCategory();
    }, []);
    return (
        <div className='px-4'>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Link to="/product/list" className="btn btn-danger gap-2">
                        Back
                    </Link>
                    <button onClick={handleSave} className="btn btn-primary gap-2">
                        Save and new
                    </button>
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
                                        Product Name <span className="text-red-500">*</span>
                                    </label>
                                    <input id="product_name"  required type="text" name="product_name" className={`form-input flex-1 ${!params.product_name ? 'border-red-500' : ''}`} value={params.product_name || ''} onChange={handleInputChange} placeholder="Enter Product Name" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="part_description" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Part Description
                                    </label>
                                    <input id="part_description" type="text" name="part_description" className="form-input flex-1" value={params.part_description || ''} onChange={handleInputChange} placeholder="Enter Part Description" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="manufacture_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Manufacture  <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex-1 ">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadManufacturers}
                                        onChange={(e) => handleMaufacturChange(e,'mpn')}
                                        isMulti={false}
                                        value={selectedManufacture}
                                        classNamePrefix="async-select"
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                ...(!params.manufacture_id && { borderColor: '#f56565' }),
                                                display: 'flex', 
                                            }),
                                        }}
                                    />


                                    </div>
                                    <button onClick={() => clearManufacture('mpn')} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="rfq" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    RFQ (Alternative) 
                                    </label>
                                    <div className="flex-1">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadRfqs}
                                        onChange={(e) => handleRfqChange(e)}
                                        isMulti
                                        value={selectedRfq}
                                    />

                                    </div>
                                    <button onClick={() => clearRfq()} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Bussiness Product
                                    </label>
                                    <label htmlFor="business_product" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="business_product" className="form-checkbox" checked={params.business_product || ''} onChange={handleInputChange} />
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
                                    <input id="datasheet_url" type="text" name="datasheet_url" className="form-input flex-1" value={params.datasheet_url || ''} onChange={handleInputChange} placeholder="Enter Datasheet URL" />
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Product Active
                                    </label>
                                    <label htmlFor="product_active" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="product_active" className="form-checkbox" checked={params.product_active || ''} onChange={handleInputChange} />
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
                                    <input id="manufacture_name" type="text" name="manufacture_name" className="form-input flex-1" value={params.manufacture_name || ''} onChange={handleInputChange} placeholder="Enter Product Name" />
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
                                    <input id="case_package" type="text" name="case_package" className="form-input flex-1" value={params.case_package || ''} onChange={handleInputChange} placeholder="Enter Case/Package" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="packaging" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Packaging
                                    </label>
                                    <input id="packaging" type="text" name="packaging" className="form-input flex-1" value={params.packaging || ''} onChange={handleInputChange} placeholder="Enter Packaging" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_pins" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Pins
                                    </label>
                                    <input id="number_of_pins" type="text" name="number_of_pins" className="form-input flex-1" value={params.number_of_pins || ''} onChange={handleInputChange} placeholder="Enter Number of Pins " />
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="weight" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Weight
                                    </label>
                                    <input id="weight" type="text" name="weight" className="form-input flex-1" value={params.weight || ''} onChange={handleInputChange} placeholder="Enter weight" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="case_code_imperial" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Case Code (Imperial)
                                    </label>
                                    <input id="case_code_imperial" type="text" name="case_code_imperial" className="form-input flex-1" value={params.case_code_imperial || ''} onChange={handleInputChange} placeholder="Enter case code (imperial) " />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="case_code_metric" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Case Code (Metric)
                                    </label>
                                    <input id="case_code_metric" type="text" name="case_code_metric" className="form-input flex-1" value={params.case_code_metric || ''} onChange={handleInputChange} placeholder="Enter Case Code (Metric)" />
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
                                    <label htmlFor="product_category_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
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
                                    <input id="average_lead_time" type="text" name="average_lead_time" className="form-input flex-1" value={params.average_lead_time || ''} onChange={handleInputChange} placeholder="Enter average lead time" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="capacitance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Capacitance
                                    </label>
                                    <input id="capacitance" type="text" name="capacitance" className="form-input flex-1" value={params.capacitance || ''} onChange={handleInputChange} placeholder="Enter capacitance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="dielectric" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Dielectric
                                    </label>
                                    <input id="dielectric" type="text" name="dielectric" className="form-input flex-1" value={params.dielectric || ''} onChange={handleInputChange} placeholder="Enter dielectric" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="flash_memory_size" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Flash Memory Size
                                    </label>
                                    <input id="flash_memory_size" type="text" name="flash_memory_size" className="form-input flex-1" value={params.flash_memory_size || ''} onChange={handleInputChange} placeholder="Enter flash memory size" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="frequency" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Frequency
                                    </label>
                                    <input id="frequency" type="text" name="frequency" className="form-input flex-1" value={params.frequency || ''} onChange={handleInputChange} placeholder="Enter frequency" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="halogen_free" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Halogen Free
                                    </label>
                                    <input id="halogen_free" type="text" name="halogen_free" className="form-input flex-1" value={params.halogen_free || ''} onChange={handleInputChange} placeholder="Enter halogen free status" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="lead_free" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Lead Free
                                    </label>
                                    <input id="lead_free" type="text" name="lead_free" className="form-input flex-1" value={params.lead_free || ''} onChange={handleInputChange} placeholder="Enter lead free status" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="max_operating_temperature" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Max Operating Temperature
                                    </label>
                                    <input id="max_operating_temperature" type="text" name="max_operating_temperature" className="form-input flex-1" value={params.max_operating_temperature || ''} onChange={handleInputChange} placeholder="Enter max operating temperature" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="max_supply_voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Max Supply Voltage
                                    </label>
                                    <input id="max_supply_voltage" type="text" name="max_supply_voltage" className="form-input flex-1" value={params.max_supply_voltage || ''} onChange={handleInputChange} placeholder="Enter max supply voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_ad_converters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of A/D Converters
                                    </label>
                                    <input id="number_of_ad_converters" type="text" name="number_of_ad_converters" className="form-input flex-1" value={params.number_of_ad_converters || ''} onChange={handleInputChange} placeholder="Enter number of A/D converters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_da_converters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of D/A Converters
                                    </label>
                                    <input id="number_of_da_converters" type="text" name="number_of_da_converters" className="form-input flex-1" value={params.number_of_da_converters || ''} onChange={handleInputChange} placeholder="Enter number of D/A converters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_i2c_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of I2C Channels
                                    </label>
                                    <input id="number_of_i2c_channels" type="text" name="number_of_i2c_channels" className="form-input flex-1" value={params.number_of_i2c_channels || ''} onChange={handleInputChange} placeholder="Enter number of I2C channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_timers_counters" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Timers/Counters
                                    </label>
                                    <input id="number_of_timers_counters" type="text" name="number_of_timers_counters" className="form-input flex-1" value={params.number_of_timers_counters || ''} onChange={handleInputChange} placeholder="Enter number of timers/counters" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_usart_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of USART Channels
                                    </label>
                                    <input id="number_of_usart_channels" type="text" name="number_of_usart_channels" className="form-input flex-1" value={params.number_of_usart_channels || ''} onChange={handleInputChange} placeholder="Enter number of USART channels" />
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
                                    <input id="radiation_hardening" type="text" name="radiation_hardening" className="form-input flex-1" value={params.radiation_hardening || ''} onChange={handleInputChange} placeholder="Enter radiation hardening" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="schedule_b" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Schedule B
                                    </label>
                                    <input id="schedule_b" type="text" name="schedule_b" className="form-input flex-1" value={params.schedule_b || ''} onChange={handleInputChange} placeholder="Enter schedule B" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="termination" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Termination
                                    </label>
                                    <input id="termination" type="text" name="termination" className="form-input flex-1" value={params.termination || ''} onChange={handleInputChange} placeholder="Enter termination" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage
                                    </label>
                                    <input id="voltage" type="text" name="voltage" className="form-input flex-1" value={params.voltage || ''} onChange={handleInputChange} placeholder="Enter voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage_rating" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage Rating
                                    </label>
                                    <input id="voltage_rating" type="text" name="voltage_rating" className="form-input flex-1" value={params.voltage_rating || ''}  onChange={handleInputChange} placeholder="Enter voltage rating" />
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="spq" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        SPQ
                                    </label>
                                    <input id="spq" type="text" name="spq" className="form-input flex-1" value={params.spq || '' } onChange={handleInputChange} placeholder="Enter SPQ" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="weight_in_kg" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Weight in kg
                                    </label>
                                    <input id="weight_in_kg" type="text" name="weight_in_kg" className="form-input flex-1" value={params.weight_in_kg || ''} onChange={handleInputChange} placeholder="Enter weight in kg" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="composition" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Composition
                                    </label>
                                    <input id="composition" type="text" name="composition" className="form-input flex-1" value={params.composition || ''} onChange={handleInputChange} placeholder="Enter composition" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="core_architecture" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Core Architecture
                                    </label>
                                    <input id="core_architecture" type="text" name="core_architecture" className="form-input flex-1" value={params.core_architecture || ''} onChange={handleInputChange} placeholder="Enter core architecture" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="ram_size" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        RAM Size
                                    </label>
                                    <input id="ram_size" type="text" name="ram_size" className="form-input flex-1" value={params.ram_size || ''} onChange={handleInputChange} placeholder="Enter RAM size" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="material" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Material
                                    </label>
                                    <input id="material" type="text" name="material" className="form-input flex-1" value={params.material || ''} onChange={handleInputChange} placeholder="Enter material" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="usage_unit" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Usage Unit
                                    </label>
                                    <div className='flex-1'>
                                        <Select
                                            placeholder="Select Unit..."
                                            options={usageUnitOptions}
                                            onChange={handleUsageUnitChange}
                                            value={selectedUsageUnit}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="unit_price" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Unit Price
                                    </label>
                                    <input id="unit_price" type="text" name="unit_price" className="form-input flex-1" value={params.unit_price || ''} onChange={handleInputChange} placeholder="Enter unit price" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="min_operating_temperature" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Min Operating Temperature
                                    </label>
                                    <input id="min_operating_temperature" type="text" name="min_operating_temperature" className="form-input flex-1" value={params.min_operating_temperature || ''} onChange={handleInputChange} placeholder="Enter min operating temperature" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="min_supply_voltage" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Min Supply Voltage
                                    </label>
                                    <input id="min_supply_voltage" type="text" name="min_supply_voltage" className="form-input flex-1" value={params.min_supply_voltage || ''} onChange={handleInputChange} placeholder="Enter min supply voltage" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="nominal_supply_current" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Nominal Supply Current
                                    </label>
                                    <input id="nominal_supply_current" type="text" name="nominal_supply_current" className="form-input flex-1" value={params.nominal_supply_current || ''} onChange={handleInputChange} placeholder="Enter nominal supply current" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of Channels
                                    </label>
                                    <input id="number_of_channels" type="text" name="number_of_channels" className="form-input flex-1" value={params.number_of_channels || ''} onChange={handleInputChange} placeholder="Enter number of channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_ios" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of I/Os
                                    </label>
                                    <input id="number_of_ios" type="text" name="number_of_ios" className="form-input flex-1" value={params.number_of_ios || ''} onChange={handleInputChange} placeholder="Enter number of I/Os" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_spi_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of SPI Channels
                                    </label>
                                    <input id="number_of_spi_channels" type="text" name="number_of_spi_channels" className="form-input flex-1" value={params.number_of_spi_channels || ''} onChange={handleInputChange} placeholder="Enter number of SPI channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="number_of_uart_channels" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Number of UART Channels
                                    </label>
                                    <input id="number_of_uart_channels" type="text" name="number_of_uart_channels" className="form-input flex-1" value={params.number_of_uart_channels || ''} onChange={handleInputChange} placeholder="Enter number of UART channels" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="resistance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Resistance
                                    </label>
                                    <input id="resistance" type="text" name="resistance" className="form-input flex-1" value={params.resistance || ''} onChange={handleInputChange} placeholder="Enter resistance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="temperature_coefficient" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Temperature Coefficient
                                    </label>
                                    <input id="temperature_coefficient" type="text" name="temperature_coefficient" className="form-input flex-1" value={params.temperature_coefficient || ''} onChange={handleInputChange} placeholder="Enter temperature coefficient" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="tolerance" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Tolerance
                                    </label>
                                    <input id="tolerance" type="text" name="tolerance" className="form-input flex-1" value={params.tolerance || ''} onChange={handleInputChange} placeholder="Enter tolerance" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="duplicated_status" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Duplicated Status
                                    </label>
                                    <div className='flex-1'>
                                        <Select
                                            placeholder="Select Duplicated Status..."
                                            options={duplicatedOptions}
                                            onChange={handleDuplicatedChange}
                                            value={selectedDuplicated}
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="voltage_rating_dc" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Voltage Rating (DC)
                                    </label>
                                    <input id="voltage_rating_dc" type="text" name="voltage_rating_dc" className="form-input flex-1" value={params.voltage_rating_dc || ''} onChange={handleInputChange} placeholder="Enter voltage rating (DC)" />
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
                                <div className="text-lg">Dimensions :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="length" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Length
                                    </label>
                                    <input id="length" type="text" name="length" className="form-input flex-1" value={params.length || ''} onChange={handleInputChange} placeholder="Enter length" />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="depth" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Depth
                                    </label>
                                    <input id="depth" type="text" name="depth" className="form-input flex-1" value={params.depth || ''} onChange={handleInputChange} placeholder="Enter depth" />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="thickness" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Thickness
                                    </label>
                                    <input id="thickness" type="text" name="thickness" className="form-input flex-1" value={params.thickness || ''} onChange={handleInputChange} placeholder="Enter thickness" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="width" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Width
                                    </label>
                                    <input id="width" type="text" name="width" className="form-input flex-1" value={params.width || ''} onChange={handleInputChange} placeholder="Enter width" />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="height" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Height
                                    </label>
                                    <input id="height" type="text" name="height" className="form-input flex-1" value={params.height || ''} onChange={handleInputChange} placeholder="Enter height" />
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
                                <div className="text-lg">Complience :</div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        RoHs
                                    </label>
                                    <label htmlFor="rohhs" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="rohhs" className="form-checkbox" checked={params.rohs || ''} onChange={handleInputChange} />
                                        <span className=" text-white-dark"> RoHs</span>
                                    </label>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Reach
                                    </label>
                                    <label htmlFor="reach" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="reach" className="form-checkbox" checked={params.reach || ''} onChange={handleInputChange} />
                                        <span className=" text-white-dark"> Reach </span>
                                    </label>
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="rohs_status" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        RoHs Status
                                    </label>
                                    <input id="rohs_status" type="text" name="rohs_status" className="form-input flex-1" value={params.rohs_status || ''} onChange={handleInputChange} placeholder="Enter  RoHs Status " />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="reach_svhc" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        REACH SVHC
                                    </label>
                                    <input id="reach_svhc" type="text" name="reach_svhc" className="form-input flex-1" value={params.reach_svhc || ''} onChange={handleInputChange} placeholder="Enter  REACH SVHC" />
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
                                <div className="text-lg">Stock Information :</div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="quantity_in_stock" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 flex items-center">
                                        Quantity in Stock
                                        <span className="ml-2 relative cursor-pointer group">
                                            <div className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                                                i
                                            </div>
                                            <div className="absolute left-0 bottom-0.5 text-center w-48 bg-black text-white text-xs rounded py-1 px-2 shadow-md transform -translate-y-full -translate-x-1/4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-10">
                                                Stock on Hand
                                            </div>
                                        </span>
                                    </label>
                                    <input id="quantity_in_stock" type="text" name="quantity_in_stock" className="form-input flex-1" value={params.quantity_in_stock || ''} onChange={handleInputChange} placeholder="Enter Quantity in Stock" />
                                </div>
                            </div>


                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="flex items-center mt-4">
                                    <label htmlFor="qty_ordered" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 flex items-center">
                                        Qty Ordered
                                        <span className="ml-2 relative cursor-pointer group">
                                            <div className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                                                i
                                            </div>
                                            <div className="absolute left-0 bottom-0.5 text-center w-48 bg-black text-white text-xs rounded py-1 px-2 shadow-md transform -translate-y-full -translate-x-1/4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-10">
                                                Committed Stock
                                            </div>
                                        </span>
                                    </label>
                                    <input id="qty_ordered" type="text" name="qty_ordered" className="form-input flex-1" value={params.qty_ordered || ''} onChange={handleInputChange} placeholder="Enter Qty Ordered" />
                                </div>
                                <div className="flex items-center mt-4">
                                    <label htmlFor="quantity_in_demand" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 flex items-center">
                                        Quantity in Demand
                                        <span className="ml-2 relative cursor-pointer group">
                                            <div className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                                                i
                                            </div>
                                            <div className="absolute left-0 bottom-0.5 text-center w-48 bg-black text-white text-xs rounded py-1 px-2 shadow-md transform -translate-y-full -translate-x-1/4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-10">
                                                Available for Sale
                                            </div>
                                        </span>
                                    </label>
                                    <input id="quantity_in_demand" type="text" name="quantity_in_demand" className="form-input flex-1" value={params.quantity_in_demand || ''} onChange={handleInputChange} placeholder="Enter Quantity in Demand" />
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
                                <div className="text-lg">Alternatives :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="alternative_mpn_1" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Alternative MPN 1
                                    </label>
                                    <div className="flex-1">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadManufacturers}
                                        onChange={(e) => handleMaufacturChange(e,'mpn1')}
                                        isMulti={false}
                                        value={selectedAltMpn1}
                                    />

                                    </div>
                                    <button onClick={() => clearManufacture('mpn1')} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="alternative_mpn_2" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Alternative MPN 2
                                    </label>
                                    <div className="flex-1">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadManufacturers}
                                        onChange={(e) => handleMaufacturChange(e,'mpn2')}
                                        isMulti={false}
                                        value={selectedAltMpn2}
                                    />

                                    </div>                                    
                                    <button onClick={() => clearManufacture('mpn2')} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                            <div className="mt-4 flex items-center">
                                    <label htmlFor="alternative_mpn_3" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Alternative MPN 3
                                    </label>
                                    <div className="flex-1">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadManufacturers}
                                        onChange={(e) => handleMaufacturChange(e,'mpn3')}
                                        isMulti={false}
                                        value={selectedAltMpn3}
                                    />

                                    </div>
                                    <button onClick={() => clearManufacture('mpn3')} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="alternative_mpn_4" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Alternative MPN 4
                                    </label>
                                    <div className="flex-1">
                                    <AsyncSelect
                                        placeholder="Type at least 2 characters to search..."
                                        loadOptions={loadManufacturers}
                                        onChange={(e) => handleMaufacturChange(e,'mpn4')}
                                        isMulti={false}
                                        value={selectedAltMpn4}
                                    />

                                    </div>
                                    <button onClick={() => clearManufacture('mpn4')} className="btn btn-clear ltr:ml-2 rtl:mr-2">              
                                        Clear
                                    </button>
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
                                <div className="text-lg">Export / Import Data :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="tariff_code" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Tariff Code
                                    </label>
                                    <input id="tariff_code" type="text" name="tariff_code" className="form-input flex-1" value={params.tariff_code || ''} onChange={handleInputChange} placeholder="Enter tariff code" />
                                </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="eccn" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        ECCN
                                    </label>
                                    <input id="eccn" type="text" name="eccn" className="form-input flex-1" value={params.eccn || ''} onChange={handleInputChange} placeholder="Enter ECCN" />
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
                                <div className="text-lg">API Data :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Octopart ID
                                    </label>
                                    <input id="octopart_id" type="text" name="octopart_id" className="form-input flex-1" value={params.octopart_id || ''} onChange={handleInputChange} placeholder="Enter Octopart ID" />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_url" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Octopart URL
                                    </label>
                                    <input id="octopart_url" type="text" name="octopart_url" className="form-input flex-1" value={params.octopart_url || ''} onChange={handleInputChange} placeholder="Enter Octopart URL" />
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Update By Mouser
                                    </label>
                                    <label htmlFor="update_by_mouser" className="flex items-center cursor-pointer">
                                        <input type="checkbox" name="update_by_mouser" className="form-checkbox" checked={params.update_by_mouser || ''} onChange={handleInputChange} />
                                        <span className=" text-white-dark"> Update By Mouser</span>
                                    </label>
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="zoho_books_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        ZohoBooks ID
                                    </label>
                                    <input id="zoho_books_id" type="text" name="zoho_books_id" className="form-input flex-1" value={params.zoho_books_id || ''} onChange={handleInputChange} placeholder="Enter ZohoBooks ID" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="op_last_update" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        OP Last Update                                     </label>
                                    <input id="op_last_update" type="date" name="op_last_update" className="form-input flex-1" value={params.op_last_update || ''} onChange={handleInputChange} placeholder="" />
                                    <button type="button" className="btn btn-clear ltr:ml-2 rtl:mr-2 rounded"
                                        onClick={() => {
                                            setParams(prevState => ({ ...prevState, op_last_update: "" }));
                                        }}>
                                        Clear
                                    </button>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="op_failure_message" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        OP Failure Message
                                    </label>
                                    <input id="op_failure_message" type="text" name="op_failure_message" className="form-input flex-1" value={params.op_failure_message || ''} onChange={handleInputChange} placeholder="Enter OP Failure Message" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_images" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Octopart Images
                                    </label>
                                    <textarea id="octopart_images"
                                        name="octopart_images"
                                        className="form-input flex-1"
                                        value={params.octopart_images || ''}
                                        onChange={handleInputChange}
                                        placeholder="Enter Octopart images links..."
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_datasheets" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Octopart Datasheets
                                    </label>
                                    <textarea id="octopart_datasheets"
                                        name="octopart_datasheets"
                                        className="form-input flex-1"
                                        value={params.octopart_datasheets || ''}
                                        onChange={handleInputChange}
                                        placeholder="Enter Octopart datasheet links..."
                                        rows="3"
                                    ></textarea>
                                </div>

                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_compliance_documents" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Octopart Compliance Documents
                                    </label>
                                    <textarea id="octopart_compliance_documents"
                                        name="octopart_compliance_documents"
                                        className="form-input flex-1"
                                        value={params.octopart_compliance_documents || ''}
                                        onChange={handleInputChange}
                                        placeholder="Enter Octopart compliance document links..."
                                        rows="3"
                                    ></textarea>
                                </div>


                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="mouser_url" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Mouser URL
                                    </label>
                                    <input id="mouser_url" type="text" name="mouser_url" className="form-input flex-1" value={params.mouser_url || ''} onChange={handleInputChange} placeholder="Enter Mouser URL" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="mouser_id" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Mouser ID
                                    </label>
                                    <input id="mouser_id" type="text" name="mouser_id" className="form-input flex-1" value={params.mouser_id || ''} onChange={handleInputChange} placeholder="Enter Mouser ID" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="mouser_category" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        Mouser Category
                                    </label>
                                    <input id="mouser_category" type="text" name="mouser_category" className="form-input flex-1" value={params.mouser_category || ''} onChange={handleInputChange} placeholder="Enter Mouser Category" />
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="m_last_update" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                        M Last Update
                                    </label>
                                    <input id="m_last_update" type="date" name="m_last_update" className="form-input flex-1" value={params.m_last_update || ''} onChange={handleInputChange} />
                                    <button type="button" className="btn btn-clear ltr:ml-2 rtl:mr-2 rounded"
                                        onClick={() => {
                                            setParams(prevState => ({ ...prevState, m_last_update: "" }));
                                        }}>
                                        Clear
                                    </button>
                                </div>
                               
                                <div className="flex items-center mt-4">
                                    <label htmlFor="product_margin" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 flex items-center">
                                        Product Margin
                                        <span className="ml-2 relative cursor-pointer group">
                                            <div className="w-4 h-4 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                                                i
                                            </div>
                                            <div className="absolute left-0 bottom-0.5 text-center w-48 bg-black text-white text-xs rounded py-1 px-2 shadow-md transform -translate-y-full -translate-x-1/4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 z-10">
                                            Has more priority than Account Margin
                                            </div>
                                        </span>
                                    </label>
                                    <input id="product_margin" type="text" name="product_margin" className="form-input flex-1" value={params.product_margin || ''} onChange={handleInputChange} placeholder="Enter Product Margin" />
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
                                <div className="text-lg">Description Information :</div>
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="description" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                         Description
                                    </label>
                                    <textarea id="description"
                                        name="description"
                                        className="form-input flex-1"
                                        value={params.description || ''}
                                        onChange={handleInputChange}
                                        placeholder="Enter description..."
                                        rows="3"
                                    ></textarea>                               
                                     </div>

                            </div>
                            <div className="lg:w-1/2 w-full md:mt-6">
                                <div className="mt-4 flex items-center">
                                    <label htmlFor="octopart_short_description" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Octopart Short Description 
                                    </label>
                                    <input id="octopart_short_description" type="text" name="octopart_short_description" className="form-input flex-1" value={params.octopart_short_description || ''} onChange={handleInputChange} placeholder="Enter description" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add;
