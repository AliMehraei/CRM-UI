import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';



const Add = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ticket Add'));
    });
    const clinetList = [{value: '1', label: 'Example Client 1'}, {value: '2', label: 'Example Client 2'}, {value: '3', label: 'Example Client 3'}, {value: '4', label: 'Example Client 4'}, {value: '5', label: 'Example Client 5'}, {value: '6', label: 'Example Client 6'}, {value: '7', label: 'Example Client 7'}];
    const porjectList = [{value: '1', label: 'Example Poroject 1'}, {value: '2', label: 'Example Poroject 2'}, {value: '3', label: 'Example Poroject 3'}, {value: '4', label: 'Example Poroject 4'}, {value: '5', label: 'Example Poroject 5'}, {value: '6', label: 'Example Poroject 6'}, {value: '7', label: 'Example Poroject 7'}];

    const [images, setImages] = useState<any>([]);
    const maxNumber = 69;
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages(imageList as never[]);
    };
    const [value, setValue] = useState(
        ''
    );

    return (
        <>             
        <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
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

export default Add;
