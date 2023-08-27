import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ManufactureFormFields from "./components/edit/ManufactureFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {updateFormData} from "../../store/manufactureFormSlice";
import LoadingAlpyn from "../../components/LoadingAlpyn"

const Edit = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const manufactureId = params.id;
    const api = new Api();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manufacture Edit'));
    });

    const fetchData = async () => {
        const manufactureResponse = await api.fetchSingleManufacturer(manufactureId);
        if (manufactureResponse.status != 200)
            return
        const manufacture = manufactureResponse.data.data.manufacture;
        manufacture.oldImage = manufacture.image;
        dispatch(updateFormData(manufacture));
    };


    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);

        });
    }, [manufactureId]);

    useEffect(() => {
        const formDataUpdates = {
            api: 'updateSingleManufacture',
            redirectTo: '/manufacture/edit/:id',
            action: 'edit'
        };

        dispatch(updateFormData(formDataUpdates));
    }, []);

    if (loading)
        return <LoadingAlpyn/>

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                    <ManufactureFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
