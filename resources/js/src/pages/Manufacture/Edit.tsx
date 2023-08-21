import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import ManufactureFormFields from "./components/edit/ManufactureFormFields";
import ActionButtonsComponent from "../../components/FormFields/ActionButtonsComponent";
import Api from "../../config/api";
import {useParams} from "react-router-dom";
import {updateFormData} from "../../store/manufactureFormSlice";

const Edit = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const manufactureId = params.id; // Assuming you are using React Router to handle routes
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
        dispatch(updateFormData(manufacture));

        const vendorLineResponse = await api.fetchSingleVendor(manufacture.vendor_line_card_id);
        const vendorLine = vendorLineResponse.data.data['vendor'];
        dispatch(updateFormData({['vendor_line_card']: vendorLine}))

        const vendorStrongResponse = await api.fetchSingleVendor(manufacture.vendor_strong_lines_id);
        const vendorStrong = vendorStrongResponse.data.data['vendor'];
        dispatch(updateFormData({['vendor_strong_lines']: vendorStrong}));
        const ownerResponse = await api.loadUserById({id: manufacture.owner_id});
        const owner = ownerResponse.data.data;
        dispatch(updateFormData({['owner']: owner}));
    };
    useEffect(() => {

        fetchData().then(() => {
            setLoading(false);
        });
    }, [manufactureId]);

    if (loading)
        return "loading";

    return (
        <div className='px-4'>
            <ActionButtonsComponent formState={formState}/>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <ManufactureFormFields/>
                </div>
            </div>
        </div>

    );
};

export default Edit;
