import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import Select from 'react-select';

const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ticket Add'));
    });
    const clinetList = [{value: '1', label: 'Example Client 1'}, {value: '2', label: 'Example Client 2'}, {value: '3', label: 'Example Client 3'}, {value: '4', label: 'Example Client 4'}, {value: '5', label: 'Example Client 5'}, {value: '6', label: 'Example Client 6'}, {value: '7', label: 'Example Client 7'}];
    const porjectList = [{value: '1', label: 'Example Poroject 1'}, {value: '2', label: 'Example Poroject 2'}, {value: '3', label: 'Example Poroject 3'}, {value: '4', label: 'Example Poroject 4'}, {value: '5', label: 'Example Poroject 5'}, {value: '6', label: 'Example Poroject 6'}, {value: '7', label: 'Example Poroject 7'}];

    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: '',
            description: '',
            rate: 0,
            quantity: 0,
            amount: 0,
        },
    ]);

    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, { id: maxId + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0 }]);
    };

    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };

    const changeQuantityPrice = (type: string, value: string, id: number) => {
        const list = items;
        const item = list.find((d: any) => d.id === id);
        if (type === 'quantity') {
            item.quantity = Number(value);
        }
        if (type === 'price') {
            item.amount = Number(value);
        }
        setItems([...list]);
    };

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
              <div className="xl:w-96 w-full xl:mt-0 mt-6">
            <label htmlFor="ticket-options">Ticket Option</label>

                <div className="panel mb-5">
                    <label htmlFor="Clinet">Clinet</label>
                    <Select placeholder="Select an Clinet" options={clinetList} />
                    <div className="mt-4">
                    <label htmlFor="peoject">Peoject</label>

                    <Select placeholder="Select an Project" options={porjectList} />

                    </div>
                   
                    <div className="mt-4">
                        <label htmlFor="payment-method">Priority</label>
                        <select id="priority" name="priority" className="form-select">
                            <option value=" ">Select Priority</option>
                            <option value="normal">Noraml</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                </div>
                <div className="panel">
                    <div className="grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        <button type="button" className="btn btn-success w-full gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ltr:mr-2 rtl:ml-2">
                                <path
                                    d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M17 22V21C17 19.1144 17 18.1716 16.4142 17.5858C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 17.5858C7 18.1716 7 19.1144 7 21V22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path opacity="0.5" d="M7 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            Save
                        </button>

                       

                        
                       
                    </div>
                </div>
            </div>
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
            <div className="mt-8 px-4">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div className="mt-4 flex items-center">
                             
                                <input id="subject" type="text" name="subject" className="form-input flex-1" placeholder="Enter Subject" />
                            </div>
                            <div className="mt-4 flex items-center">
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
           
            
              
            </div>
          
        </div>
    );
};

export default Add;
