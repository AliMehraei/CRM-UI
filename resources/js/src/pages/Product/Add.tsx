import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ProductFormFields from "./components/create/ProductFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import 'flatpickr/dist/flatpickr.css';
import {resetForm, updateFormData} from "../../store/productFormSlice";
import Api from "../../config/api";
import FormLayoutGenerate from "../../components/FormFields/FormLayoutGenerate";
import {useUserStatus} from "../../config/authCheck";
import LoadingSasCrm from '../../components/LoadingSasCrm';

const Add = () => {
    const {hasPermission} = useUserStatus();
    const formState = useSelector((state: any) => state.productForm);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const api = new Api();

    const fetchData = async () => {
        const formLayout = await api.getFormLayout({'model': 'Product'});
        if (formLayout.status != 200)
            return
        const layout = formLayout.data;
        dispatch(updateFormData({layout: layout}));

    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        dispatch(setPageTitle('Product Add'));
    });

    if (loading)
        return <LoadingSasCrm/>

    return (
        (!hasPermission(`create-product`) || loading) ? (
            <LoadingSasCrm/>
        ) : (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState} resetForm={resetForm}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <FormLayoutGenerate formState={formState} updateFormData={updateFormData}/>
                    {/*<ProductFormFields/>*/}
                </div>
            </div>
        </div>
        )

    );
};

export default Add;
