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
        product_name: '',
        part_description: '',
        manufacture: '',
        datasheet_url: '',
        product_active: false,
        product_type: ''
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
    const handleSelectUser = (selectedOption,type) => {
        if(type==='approved_by'){
        setSelectedAporvedBy(selectedOption);
        setParams({
            ...params,
            approved_by: selectedOption ? selectedOption.value : null,
            });
        }
        else if(type==='product_owner'){
            setSelectedProductOwner(selectedOption);
            setParams({
                ...params,
                product_owner: selectedOption ? selectedOption.value : null,
            });
        }
    };
    const clearSelectedUser = (type) => {
        if(type==='approved_by'){
        setSelectedAporvedBy(null);
        setParams({
            ...params,
            approved_by: null,
        });
     }
     else if(type==='product_owner'){
        setSelectedProductOwner(null);
        setParams({
            ...params,
            product_owner: null,
        });
     }
    };
    const loadAdminUsers = async (inputValue) => {
        if (inputValue.length < 2) return [];
        const valField ='id';
        const nameField ='name';
        const avatarField ='avatar';
        const emailField ='email';
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
                                <input id="product_name" type="text" name="product_name" className="form-input flex-1" value={params.product_name} onChange={handleInputChange}  placeholder="Enter Product Name" />
                            </div>
                            <div className="mt-4 flex items-center">
                                <label htmlFor="part_description" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                Part Description
                                </label>
                                <input id="part_description" type="text" name="part_description" className="form-input flex-1" value={params.part_description} onChange={handleInputChange}  placeholder="Enter Part Description" />
                            </div>
                            <div className="mt-4 flex items-center">
                                <label htmlFor="manufacture" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                Manufacture
                                </label>
                                <input id="manufacture" type="text" name="manufacture" className="form-input flex-1" value={params.manufacture} onChange={handleInputChange}  placeholder="Enter Manufacture" />
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    Bussiness Product
                                </label>
                                <label  htmlFor="business_product" className="flex items-center cursor-pointer">
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
                                        loadOptions={(e) => loadAdminUsers(e)}
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
                                <input id="datasheet_url" type="text" name="datasheet_url" className="form-input flex-1" value={params.datasheet_url} onChange={handleInputChange}  placeholder="Enter Datasheet URL" />
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                Product Active
                                </label>
                                <label  htmlFor="product_active" className="flex items-center cursor-pointer">
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
                                        loadOptions={(e) => loadAdminUsers(e)}
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
        </>
    );
};

export default Add;
