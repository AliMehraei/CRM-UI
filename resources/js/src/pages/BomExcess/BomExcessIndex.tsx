import React, { useState } from "react";

import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { displayImage, upFirstLetter } from "../../components/Functions/CommonFunctions";
import { CreateIcon } from "../../components/FormFields/CommonIcons";
import ListBom from "./components/ListBom";
import Api from "../../config/api";
import { resetForm, updateFormData } from "../../store/contactFormSlice";

const BomExcessIndex = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [btnRoute, setBtnRoute] = useState('bom');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const formState = useSelector((state: any) => state.contactForm);
    const api = new Api();
    const params = useParams();
    const contactId = params.id;
    const location = useLocation();
    const { pathname } = location;
    const [modelName, setModelName] = useState('contact');

    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
    

    const fetchData = async () => {
        if(pathname.split('/')[1]!='availability-vendor'){
            const modelResponse = await api.fetchSingleContact(contactId);
            if (modelResponse.status != 200)
                return
            const model = modelResponse.data.data.contact;
            dispatch(updateFormData(model));
        }
        else{
            const modelResponse = await api.fetchSingleVendor(contactId);
            if (modelResponse.status != 200)
                return
            const model = modelResponse.data.data.vendor;
            dispatch(updateFormData(model));
        }
       
    };

    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setModelName(pathParts[1]=='availability-vendor' ? 'vendor':'contact');

        setPageTitleCustom(upFirstLetter(pathParts[1])+" - File Upload"); 
        setBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your "+upFirstLetter(pathParts[1])+" List");
        setTableTitle("Your "+upFirstLetter(pathParts[1])+" List");
        setEmptyMessage("You don't have any"+upFirstLetter(pathParts[1])+" List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1])+" - File Upload"));
      }, []);

      useEffect(() => {
        fetchData().then(() => {
            setLoading(false);
        });
    }, [contactId]);

    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="flex justify-end flex-wrap gap-4 px-4" >
                    <div className="flex">
                        <div>
                            <div className="text-sm font-semibold mt-5">{formState.first_name} {formState.last_name} | {formState.vendor_name}</div>
                            <div className="text-s font-semibold ">{formState.email}</div>
                            <div className="text-s font-semibold ">{formState.phone}</div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div className="shrink-0">
                        <img src={displayImage(formState.image_data)} alt="Contact image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        <a className="text-sm font-semibold mt-5  text-primary " target="_blank" 
                            href={`/${modelName}/preview/${contactId}`}>View {modelName}</a>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#849bbc] my-6" />
                <div className="px-4 sm:px-6 lg:px-8">

                    <section className="border-b border-gray-200 pb-4">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="title-1"><b>{pageTitleCustom}</b></h3>
                            <div
                                className="mt-3 sm:mt-0 sm:ml-4"
                                id="bom-file-upload-tour"
                            >
                            <NavLink to={`/${btnRoute}/import/${contactId}`} 
                                className="flex btn btn-primary pulse-primary">
                                <CreateIcon />
                                {addBtnLabel}
                            </NavLink>
                                
                            </div>
                        </div>
                    </section>

                    <ListBom contactId={contactId} btnRoute={pathname.split('/')[1]} />

                </div>
            </div>
        </>
       
    );
};

export default BomExcessIndex;
