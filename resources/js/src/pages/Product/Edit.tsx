import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import Swal from 'sweetalert2';

const Edit = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Invoice Edit'));
    });
    const { id } = useParams();
    const API_URL_PRODUCT =import.meta.env.VITE_API_URL_PRODUCT;
    const [params, setParams] = useState({
        product_name: '',
        part_description: '',
        manufacture: '',
        datasheet_url: '',
        product_active: '',
        product_type: ''
    });

    const fetchProductData = async () => {
        try {
            const response = await fetch(`${API_URL_PRODUCT}/api/product/${id}`);
            const productData = await response.json();
            if (productData.status) {
                setParams(productData.data); // Assuming the API returns the product data in `data` field
            } else {
                showMessage('Error fetching product: ', 'error'); // Calling showMessage with an error message and error type
                console.error('Error fetching product', productData.message);
            }
        } catch (error) {
            showMessage('Error fetching product: Network error', 'error'); // Calling showMessage with an error message and error type
            console.error('Error fetching product', error);
        }
    };
    
    useEffect(() => {
        fetchProductData();
    }, [id,API_URL_PRODUCT]);

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setParams({
            ...params,
            [name]: type === 'checkbox' ? checked : value,
        });
    }
    const handleSave = async () => {
        try {
            const response = await fetch(`${API_URL_PRODUCT}/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            const result = await response.json();
            if (result.status) {
                showMessage('Product successfully updated'); // Calling showMessage with the success message
            } else {
                showMessage('Error updating the product', 'error'); // Calling showMessage with an error message and error type
                console.error('Error updating the product', result.message);
            }
        } catch (error) {
            showMessage('Error making update request', 'error'); // Calling showMessage with an error message and error type
            console.error('Error making update request', error);
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
    return (<>            
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
                                <label htmlFor="product_type" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                Product Type
                                </label>
                                <input id="product_type" type="text" name="product_type" className="form-input flex-1" value={params.product_type} onChange={handleInputChange} placeholder="Enter SWIFT Number" />
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        </>
    );
};

export default Edit;
