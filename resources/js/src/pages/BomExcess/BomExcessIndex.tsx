import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { formatDate } from "@fullcalendar/core";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { upFirstLetter } from "../../components/Functions/CommonFunctions";
import { CreateIcon } from "../../components/FormFields/CommonIcons";

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
    

    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1])+" - File Upload"); 
        setAddBtnRoute(pathParts[1]);
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
                        <h3 className="title-1">{pageTitleCustom}</h3>
                        <div
                            className="mt-3 sm:mt-0 sm:ml-4"
                            id="bom-file-upload-tour"
                        >
                            <a
                                href={addBtnRoute}
                                className="flex btn btn-primary pulse-primary"
                            >
                               <CreateIcon />
                                {addBtnLabel}
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    id="bom-list-tour"
                    className="dashboard-item-view-page  px-4 sm:px-6 lg:px-8"
                >
                    <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {tableTitle}
                            </h3>
                            <ul
                                role="list"
                                className="mt-4 border-t border-gray-200 divide-y divide-gray-200"
                            >
                                {items.length > 0 ? (
                                    items.map((item) => (
                                        //   <ExcessBomIndexRow key={item.id} item={item} />
                                        <li className="py-4 flex items-center justify-center space-x-3">
                                            {emptyMessage}
                                        </li>
                                    ))
                                ) : (
                                    <li className="py-4 flex items-center justify-center space-x-3">
                                        {emptyMessage}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </>
       
    );
};

export default BomExcessIndex;
