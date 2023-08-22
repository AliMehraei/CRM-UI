import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import QuotesFormFields from "./components/create/QuotesFormFields";
import 'flatpickr/dist/flatpickr.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Quotes Add'));
    });
    const handleSave = async () => {

        try {
            // const response = await api_instance.createSingleProduct(params);
            // if (response.data.status) {
            showMessage('Product successfully added');
            // clearForm();            
            // } else {
            // showMessage('Error adding the product', 'error'); 
            // console.error('Error adding the product', response.data.message);
            // }
        } catch (error) {
            showMessage('Error making create request', 'error');
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
    return (
        <div className='px-4'>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Link to="/quotes/list" className="btn btn-danger gap-2">
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
                    <QuotesFormFields />
                </div>
            </div>
        </div>
    );
};

export default Add;
