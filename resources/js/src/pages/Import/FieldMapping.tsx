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

    const tableData = [
        {
            id: 1,
            field_in_file: 'Contact ID',
            field_in_system: null,
            column_3: 'input',
            column_4: 'input',
            sample_data_1: 'zcrm_538281000039706083',
            sample_data_2: 'zcrm_538281000039706084',
        },
        {
            id: 2,
            field_in_file: 'Contact Owner',
            field_in_system: null,
            column_3: 'input',
            column_4: null,
            sample_data_1: 'Petra Hacker',
            sample_data_2: 'Mohammad Alaeerad',
        },
        {
            id: 3,
            field_in_file: 'Contact Name',
            field_in_system: null,
            column_3: 'input',
            column_4: null,
            sample_data_1: 'Petra Hacker',
            sample_data_2: 'Mohammad Alaeerad',
        },
        {
            id: 4,
            field_in_file: 'Contact Email',
            field_in_system: null,
            column_3: null,
            column_4: 'input',
            sample_data_1: 'Petra Hacker',
            sample_data_2: 'Mohammad Alaeerad',
        },
        {
            id: 5,
            field_in_file: 'Contact Test',
            field_in_system: null,
            column_3: 'input',
            column_4: null,
            sample_data_1: 'Petra Hacker',
            sample_data_2: 'Mohammad Alaeerad',
        },
    ];

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
                                    className={`${selected ? 'border-b !border-primary text-primary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary hover:text-primary`}
                                >
                                    Fields Mapping
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={`${selected ? 'border-b !border-primary text-primary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary hover:text-primary`}
                                >
                                    Assign Default Value
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="active pt-4">
                            <Tab.Group>
                                <div className="flex">
                                    <div className="bg-white p-2 rounded-full border">
                                        <Tab.List className="flex flex-wrap justify-start space-x-2 rtl:space-x-reverse">
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'bg-primary text-white font-bold !outline-none' : ''}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`}
                                                    >
                                                        All
                                                    </button>
                                                )}
                                            </Tab>
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'bg-primary text-white font-bold !outline-none' : ''}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`}
                                                    >
                                                        Mapped (38)
                                                    </button>
                                                )}
                                            </Tab>
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'bg-primary text-white font-bold !outline-none' : ''}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`}
                                                    >
                                                        Unmapped (27)
                                                    </button>
                                                )}
                                            </Tab>
                                        </Tab.List>
                                    </div>
                                </div>
                            
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="active">
                                            <div className="table-responsive my-4">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData.map((data) => {
                                                            console.log(data);
                                                            
                                                            return (
                                                                <tr key={data.id}>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.field_in_file}</div>
                                                                    </td>
                                                                    <td>
                                                                        <select id="ctnSelect1" className="form-select text-white-dark dark:text-white-light" required>
                                                                            <option>--None--</option>
                                                                            <option>{ moduleName } Id</option>
                                                                            <option>{ moduleName } Name</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>{!data.column_3 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>{!data.column_4 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_1}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_2}</div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div>
                                            <div className="table-responsive my-4">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData.map((data) => {
                                                            console.log(data);
                                                            
                                                            return (
                                                                <tr key={data.id}>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.field_in_file}</div>
                                                                    </td>
                                                                    <td>
                                                                        <select id="ctnSelect1" className="form-select text-white-dark dark:text-white-light" required>
                                                                            <option>--None--</option>
                                                                            <option>{ moduleName } Id</option>
                                                                            <option>{ moduleName } Name</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>{!data.column_3 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>{!data.column_4 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_1}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_2}</div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="">
                                            <div className="table-responsive my-4">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData.map((data) => {
                                                            console.log(data);
                                                            
                                                            return (
                                                                <tr key={data.id}>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.field_in_file}</div>
                                                                    </td>
                                                                    <td>
                                                                        <select id="ctnSelect1" className="form-select text-white-dark dark:text-white-light" required>
                                                                            <option>--None--</option>
                                                                            <option>{ moduleName } Id</option>
                                                                            <option>{ moduleName } Name</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>{!data.column_3 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>{!data.column_4 ? '' : (
                                                                        <input type="text" placeholder="Some Text..." className="form-input" required />
                                                                    )}</td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_1}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="whitespace-nowrap">{data.sample_data_2}</div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>FIELDS IN FILE</th>
                                                            <th>FIELDS IN OUR SYSTEM</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th>SAMPLE DATA FROM FILE</th>
                                                            <th></th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>

                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
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
