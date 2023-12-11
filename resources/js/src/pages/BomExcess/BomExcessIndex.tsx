import React, { useState } from "react";

import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { upFirstLetter } from "../../components/Functions/CommonFunctions";
import { CreateIcon } from "../../components/FormFields/CommonIcons";
import ListBom from "./components/ListBom";

const BomExcessIndex = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);
    const params = useParams();
    const UserId = params.id;

    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1])+" - File Upload"); 
        setAddBtnRoute(pathParts[1]+`/import/${UserId}`);
        setAddBtnLabel("Add Your "+upFirstLetter(pathParts[1])+" List");
        setTableTitle("Your "+upFirstLetter(pathParts[1])+" List");
        setEmptyMessage("You don't have any"+upFirstLetter(pathParts[1])+" List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1])+" - File Upload"));
      }, []);
    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="px-4 sm:px-6 lg:px-8">
                <section className="border-b border-gray-200 pb-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h3 className="title-1"><b>{pageTitleCustom}</b></h3>
                        <div
                            className="mt-3 sm:mt-0 sm:ml-4"
                            id="bom-file-upload-tour"
                        >
                        <NavLink to={`/${addBtnRoute}`} 
                            className="flex btn btn-primary pulse-primary">
                            <CreateIcon />
                            {addBtnLabel}
                        </NavLink>
                            
                        </div>
                    </div>
                </section>

                <ListBom />

                </div>
            </div>
        </>
       
    );
};

export default BomExcessIndex;
