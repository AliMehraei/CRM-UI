import React, { useState } from 'react';

import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserStatus } from "../../config/authCheck";
import { displayImage, upFirstLetter } from "../../components/Functions/CommonFunctions";
import './index.css';
import {useParams} from "react-router-dom";
import Api from "../../config/api";
import Swal from "sweetalert2";
import { resetForm, updateFormData } from "../../store/contactFormSlice";

const BomExcessImport = () => {
    const dispatch = useDispatch();
    const { hasPermission } = useUserStatus();
    const [pageTitleCustom, setPageTitleCustom] = useState('');
    const [addBtnRoute, setAddBtnRoute] = useState('');
    const [addBtnLabel, setAddBtnLabel] = useState('');
    const [tableTitle, setTableTitle] = useState('');
    const [items, setItems] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('');
    const [loading, setLoading] = useState(true);
    
    const [files, setFiles] = useState('');
    const formState = useSelector((state: any) => state.contactForm);
    const api = new Api();
    const params = useParams();
    const contactId = params.contactId;
    const modelName = "contact";

    useEffect(() => {
        dispatch(setPageTitle(pageTitleCustom));
    }, [dispatch]);

    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        setPageTitleCustom(upFirstLetter(pathParts[1]) + " - Import");
        setAddBtnRoute(pathParts[1]);
        setAddBtnLabel(upFirstLetter(pathParts[1]) + " Import");
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

    const handleFileBomChange = (event : any) => {
        // Assuming you want to work with a single file, you can access it using event.target.files[0]
        const selectedFile = event.target.files[0];
        setFiles(selectedFile);
    };

    const handleSubmit = async (event : any) => {

        event.preventDefault();

        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 5000,
        });

        try{

        // window.location.href = `/${addBtnRoute}/confirmation/${contactId}`;

        // Submit the form
        const formData = new FormData(event.target);
        // prepare type for BomItem
        const type = modelName + '_' + addBtnRoute+'_list' ;

        formData.append('has_header', hasHeader);
        formData.append('ignored_top_rows', ignoredTopRows);
        formData.append('type', type);
        formData.append('excess_bom_file', files);

        const response = await api.importBomExcess(contactId,modelName,formData);

        if (response.status === 200) {
            toast.fire({
                icon: 'success',
                timer: 2000,
                title: 'Form submitted successfully',
                padding: '10px 20px',

            })

            window.location.href = `/${addBtnRoute}/confirmation/${contactId}`;
            
        } else {
            toast.fire({
                icon: 'error',
                title: 'Internal Server Error ,submitting form failed',
                padding: '10px 20px',
            });
        }
    } catch (error) {

        toast.fire({
            icon: 'error',
            title: 'Internal Server Error ,submitting form failed',
            padding: '10px 20px',
        });
    }
 
    };

    const fetchData = async () => {
        const modelResponse = await api.fetchSingleContact(contactId);
        if (modelResponse.status != 200)
            return
        const model = modelResponse.data.data.contact;
        dispatch(updateFormData(model));
    };

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
                            <div className="text-sm font-semibold mt-5">{formState.first_name} {formState.last_name}</div>
                            <div className="text-s font-semibold ">{formState.email}</div>
                            <div className="text-s font-semibold ">{formState.phone}</div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div className="shrink-0">
                        <img src={displayImage(formState.image_data)} alt="Contact image" className="w-20 ltr:ml-auto rtl:mr-auto" />
                        <a className="text-sm font-semibold mt-5  text-primary " target="_blank" 
                            href={`/contact/preview/${contactId}`}>View Contact</a>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#849bbc] my-6" />
                <div className="px-4 sm:px-6 lg:px-8">
                    <section className="border-b border-gray-200 pb-4">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h3 className="title-1"><b>{pageTitleCustom}</b></h3>

                        </div>
                    </section>
                    <div className=" p-6 bg-white shadow-md">
                        <h1 className="text-2xl font-bold mb-5">{addBtnLabel}</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder={`Enter your new ${addBtnRoute} list name`}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="file" className="block text-gray-700 text-sm font-bold mb-2">Upload your {addBtnRoute} list</label>
                                {/* <div {...getRootProps()} className="dropzone border-dashed border-2 border-gray-300 rounded py-2 px-4 text-center cursor-pointer">
                                    <input {...getInputProps()} />
                                    <p className="text-gray-700">Drag and drop some files here, or click to select files</p>
                                </div> */}
                                <input className="block w-full py-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                                id="excess-bom-file" type="file" onChange={handleFileBomChange} />

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
                                {addBtnLabel}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BomExcessImport;
