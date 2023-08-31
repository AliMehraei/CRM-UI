import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ProductFormFields from "./components/edit/ProductFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/productFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"
import Api from "../../config/api";
import {useParams} from "react-router-dom";

const Edit = () => {
    const formState = useSelector((state: any) => state.productForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const productId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Product Edit'));
    });

    const fetchData = async () => {
        const productResponse = await api.fetchSingleProduct(productId);
        if (productResponse.status != 200)
            return
        const product = productResponse.data.data.product;
        dispatch(updateFormData(product));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);


        });
    }, [productId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleProduct',
            redirectTo: '/product/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <ProductFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
