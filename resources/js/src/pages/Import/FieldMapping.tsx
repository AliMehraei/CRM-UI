import React, { useEffect, useState, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Tab } from '@headlessui/react';

const FieldMapping = () => {
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
                    <div className="bg-primary-light dark:bg-primary-dark-light p-5 rounded-md my-4">
                        <div className="flex items-center justify-between space-x-4">
                            <label htmlFor="ctnSelect1" className="dark:text-dark-light w-full whitespace-nowrap">Skip existing contacts based on</label>
                            <select id="ctnSelect1" className="form-select text-white-dark dark:text-white-light" required>
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
                    <div className="bg-primary-light dark:bg-primary-dark-light p-5 rounded-md my-4 space-y-4">
                        <div className="flex items-center justify-between space-x-4">
                            <label htmlFor="ctnSelect1" className="dark:text-dark-light w-full whitespace-nowrap" >Find existing contacts based on</label>
                            <select id="ctnSelect1" className="form-select text-white-dark dark:text-white-light" required>
                                <option>--None--</option>
                                <option>{ moduleName } Id</option>
                            </select>
                        </div>
                        <div>
                            <label className="inline-flex cursor-pointer">
                                <input type="checkbox" className="form-checkbox bg-white dark:bg-dark-dark-light" />
                                <span className="dark:text-dark-light">Don't update empty values for existing contacts </span>
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
                <h3 className="text-xl font-bold dark:text-white-dark">{ 'Import ' + moduleName } - Field Mapping</h3>
            </section>

            <section className="">
                <Tab.Group>
                    <Tab.List className="flex flex-wrap">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                                >
                                    Fields Mapping
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={`${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                                >
                                    Assign Default Value
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="active pt-5">
                                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div>
                                <div className="flex items-start pt-5">
                                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                        <img
                                            src="/assets/images/profile-34.jpeg"
                                            alt="img"
                                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                                        />
                                    </div>
                                    <div className="flex-auto">
                                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                        <p className="text-white-dark">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                
            </section>
        </div>
    );
};

export default FieldMapping;
