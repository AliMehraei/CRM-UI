import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const Edit = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ticket Edit'));
    });
    const currencyList = ['USD - US Dollar', 'GBP - British Pound', 'IDR - Indonesian Rupiah', 'INR - Indian Rupee', 'BRL - Brazilian Real', 'EUR - Germany (Euro)', 'TRY - Turkish Lira'];
    const [value, setValue] = useState(
        ''
    );

    const [images, setImages] = useState<any>([]);
    const maxNumber = 69;
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages(imageList as never[]);
    };
    const clinetList = [{value: '1', label: 'Example Client 1'}, {value: '2', label: 'Example Client 2'}, {value: '3', label: 'Example Client 3'}, {value: '4', label: 'Example Client 4'}, {value: '5', label: 'Example Client 5'}, {value: '6', label: 'Example Client 6'}, {value: '7', label: 'Example Client 7'}];
    const porjectList = [{value: '1', label: 'Example Poroject 1'}, {value: '2', label: 'Example Poroject 2'}, {value: '3', label: 'Example Poroject 3'}, {value: '4', label: 'Example Poroject 4'}, {value: '5', label: 'Example Poroject 5'}, {value: '6', label: 'Example Poroject 6'}, {value: '7', label: 'Example Poroject 7'}];

    const [tax, setTax] = useState<any>(0);
    const [discount, setDiscount] = useState<any>(0);
    const [shippingCharge, setShippingCharge] = useState<any>(0);
    const [paymentMethod, setPaymentMethod] = useState<any>('bank');

    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: 'Calendar App Customization',
            description: 'Make Calendar App Dynamic',
            quantity: 2,
            amount: 120,
            isTax: false,
        },
        {
            id: 2,
            title: 'Chat App Customization',
            description: 'Customized Chat Application to resolve some Bug Fixes',
            quantity: 1,
            amount: 25,
            isTax: false,
        },
    ]);
    const [selectedCurrency, setSelectedCurrency] = useState('USD - US Dollar');
    const [params, setParams] = useState<any>({
        title: 'Tailwind',
        invoiceNo: '#0001',
        to: {
            name: 'Jesse Cory',
            email: 'redq@company.com',
            address: '405 Mulberry Rd. Mc Grady, NC, 28649',
            phone: '(128) 666 070',
        },
        invoiceDate: '',
        dueDate: '',
        bankInfo: {
            no: '1234567890',
            name: 'Bank of America',
            swiftCode: 'VS70134',
            country: 'United States',
            ibanNo: 'K456G',
        },
        notes: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
    });
    useEffect(() => {
        let dt: Date = new Date();
        const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
        let date = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        setParams({
            ...params,
            invoiceDate: dt.getFullYear() + '-' + month + '-' + date,
            dueDate: dt.getFullYear() + '-' + month + '-' + date,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <>
     <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
             <Link to="/support/list" className="btn btn-danger gap-2">
                 Cancel            
            </Link>
            <Link to="/support/add" className="btn btn-primary gap-2">
                Save and new
            </Link>
            <Link to="/support/add" className="btn btn-success gap-2">
                 Save            
            </Link>
        </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-2.5 panel">
              <div className="xl:w-96 w-full xl:mt-0 ">
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
            </div>
            <div className="panel px-0 flex-1 py-1 ltr:xl:mr-6 rtl:xl:ml-6">
            <div className="mt-2 px-4">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-3">
                            <div className="mt-2  items-center">
                            <label htmlFor="subject">Subject</label>

                                <input id="subject" type="text" name="subject" className="form-input flex-1" placeholder="Enter Subject" />
                            </div>
                            <div className="mt-4">
                            <label htmlFor="massage">Massage</label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                            </div>
                            <div className="custom-file-container mt-4" data-upload-id="myFirstImage">
                                <div className="label-containe">
                                    <label className='!text-black'>Upload </label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages([]);
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                                <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose Image...
                                            </button>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="custom-file-container__image-preview relative">
                                                    <img src={image.dataURL} alt="img" className="m-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Edit;
