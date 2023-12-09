import React, { useState, useCallback } from 'react';

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { formatDate } from "@fullcalendar/core";
import { useDispatch } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { upFirstLetter } from "../../components/Functions/CommonFunctions";
import { CreateIcon } from "../../components/FormFields/CommonIcons";
import './index.css';
import { useDropzone } from 'react-dropzone';
import {useParams} from "react-router-dom";

const BomExcessImport = () => {
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
    const [files, setFiles] = useState([]);
    const params = useParams();
    const contactId = params.id;
    const userType = "App\Model/Contact";

    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      setFiles([...files, ...acceptedFiles]);
    }, [files]);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
    });
    
    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Import");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel("Add Your " + upFirstLetter(pathParts[1]) + " List");
        setTableTitle("Your " + upFirstLetter(pathParts[1]) + " List");
        setEmptyMessage("You don't have any" + upFirstLetter(pathParts[1]) + " List");
        dispatch(setPageTitle(upFirstLetter(pathParts[1]) + " - Import"));
    }, []);




    const [hasHeader, setHasHeader] = useState(true);
    const [ignoredTopRows, setIgnoredTopRows] = useState(0);

    const handleHasHeaderToggle = () => {
        setHasHeader(!hasHeader);
    };

    const handleIgnoredTopRowsChange = (event) => {
        setIgnoredTopRows(Number(event.target.value));
    };
    const handleDownloadSample = async () => {
        const data=(import.meta as any).env.VITE_API_URL_PRODUCT+"/ALPYN%20electronics%20BOM-List%20Samplefile.xlsx";
        console.log(data);
        
        const anchorElement = document.createElement('a');
        anchorElement.href = data;
        anchorElement.target = '_blank';
        // anchorElement.download = formState[formAttribute].split('/').pop();
        anchorElement.click();
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.href = `/bom/confirmation/${contactId}`;

        // Submit the form
        const formData = new FormData(event.target);
        formData.append('has_header', hasHeader);
        formData.append('ignored_top_rows', ignoredTopRows);

        console.log("formData", formData);
        
        // fetch('excess-bom/${contactId}/${userType}/import', {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle success or error response
        //         if (data.success) {
        //             // Redirect to success page
        //             window.location.href = '/dashboard/excess-bom';
        //         } else {
        //             // Show error message
        //             alert(data.message);
        //         }
        //     });
    };

    return (
        <>
            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="px-4 sm:px-6 lg:px-8">
                    <section className="border-b border-gray-200 pb-4">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="title-1"><b>{pageTitleCustom}</b></h3>

                        </div>
                    </section>
                    <div className=" p-6 bg-white shadow-md">
                        <h1 className="text-2xl font-bold mb-5">BOM Import</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter your new BOM list name"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Upload your BOM list</label>
                                <div {...getRootProps()} className="dropzone border-dashed border-2 border-gray-300 rounded py-2 px-4 text-center cursor-pointer">
                                    <input {...getInputProps()} />
                                    <p className="text-gray-700">Drag and drop some files here, or click to select files</p>
                                </div>
                                <p className="text-gray-600 text-xs italic mt-2">* Please kindly note that there is a maximum limit of 1000 rows allowed in a single sheet of an Excel file.</p>
                                <button type="button" onClick={handleDownloadSample} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Download Sample Data
                                </button>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="has_header" className="block text-gray-700 text-sm font-bold mb-2">Files has a Header</label>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input
                                        type="checkbox"
                                        name="has_header"
                                        id="has_header"
                                        checked={hasHeader}
                                        onChange={() => setHasHeader(!hasHeader)}
                                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                    />
                                    <label htmlFor="has_header" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="ignored_top_rows" className="block text-gray-700 text-sm font-bold mb-2">Ignored rows from top</label>
                                <input
                                    type="number"
                                    id="ignored_top_rows"
                                    name="ignored_top_rows"
                                    min="0"
                                    value={ignoredTopRows}
                                    onChange={(e) => setIgnoredTopRows(e.target.value)}
                                    className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BomExcessImport;
