import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';

const Operation = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const module = params.module;
    const [moduleName, setModuleName] = useState('');
    const [operation, setOperation] = useState('create');

    useEffect(() => {
        setModuleName(module.charAt(0).toUpperCase() + module.slice(1));
        dispatch(setPageTitle('Import ' + moduleName));
    }, []);

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [loading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };    

    const operationDetailBox = () => {
        switch (operation) {
            case 'create':
                return (
                    <div className="bg-primary-light p-5 rounded-md my-4">
                        <div className="flex items-center justify-between space-x-4">
                            <label htmlFor="ctnSelect1" >Skip existing contacts based on</label>
                            <select id="ctnSelect1" className="form-select flex-1 text-white-dark" required>
                                <option>--None--</option>
                                <option>{ moduleName } Id</option>
                            </select>
                        </div>
                    </div>
                );
                break;
            case 'update':
            case 'create_update':
                return (
                    <div className="bg-primary-light p-5 rounded-md my-4 space-y-4">
                        <div className="flex items-center justify-between space-x-4">
                            <label htmlFor="ctnSelect1" >Find existing contacts based on</label>
                            <select id="ctnSelect1" className="form-select flex-1 text-white-dark" required>
                                <option>--None--</option>
                                <option>{ moduleName } Id</option>
                            </select>
                        </div>
                        <div>
                            <label className="inline-flex cursor-pointer">
                                <input type="checkbox" className="form-checkbox bg-white    " />
                                <span className="">Don't update empty values for existing contacts </span>
                            </label>
                        </div>
                    </div>
                );
                break;
        
            default:
                break;
        }
    }

    return (
        <div>
            <section className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-400/20 pb-4">
                <h3 className="text-xl font-bold dark:text-white-dark">{ 'Import ' + moduleName }</h3>
            </section>

            <section className="mt-6">
                <div className=" mb-5 space-y-6">
                    <div className="border border-gray-500/20 dark:border-gray-400/20 rounded-md shadow-sm dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 bg-white dark:bg-black">
                        <h5 className="text-lg font-semibold mb-3.5 dark:text-white-light">What do you want to do with the records in the file?</h5>
                        {/* <p className="text-white-dark text-[15px]  mb-3.5">You can import records through an .xls, .xlsx, .csv file.</p> */}
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div>
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="operation" className="form-radio" defaultChecked value="create" onChange={(e) => setOperation(e.target.value)} />
                                    <span className="text-dark dark:text-white">Add as new { moduleName }</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="operation" className="form-radio" value="update" onChange={(e) => setOperation(e.target.value)} />
                                    <span className="text-dark dark:text-white">Update existing { moduleName } only</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center cursor-pointer">
                                    <input type="radio" name="operation" className="form-radio" value="create_update" onChange={(e) => setOperation(e.target.value)} />
                                    <span className="text-dark dark:text-white">Both</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex">
                            { operationDetailBox() }
                        </div>
                        {/* <div>
                            <label htmlFor="ctnEmail">Email address</label>
                            <input id="ctnEmail" type="email" placeholder="name@example.com" className="form-input" required />
                        </div> */}
                        <div className="flex items-center space-x-3 border-t">
                            <button type="submit" className="btn btn-dark !mt-4">
                                Cancel
                            </button>
                            <Link to="/import/account/operation" type="submit" className="btn btn-primary !mt-4">
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Operation;
