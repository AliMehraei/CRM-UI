import { useEffect ,Fragment , useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Dialog, Transition } from '@headlessui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import Swal from 'sweetalert2';


const Preview = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ticket Preview'));
    });

    const [modal5, setModal5] = useState(false);
    const [value, setValue] = useState(
        ''
    );
    const [images, setImages] = useState<any>([]);
    const maxNumber = 69;
    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages(imageList as never[]);
    };
    const showAlert = async (type: number) => {
        if (type === 10) {
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: 'Delete',
                padding: '2em',
                customClass: 'sweet-alerts',
            }).then((result) => {
                if (result.value) {
                    Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
                }
            });
        }
    }
    return (
        <div>

<Transition appear show={modal5} as={Fragment}>
                <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-5xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Reply Ticket</h5>
                                        <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                        </button>
                                    </div>
                                    <div className="p-5">
                                      
                                    <ReactQuill theme="snow" value={value} onChange={setValue} />


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

                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

              <div className="sticky top-0 flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">

            <button type="button" onClick={() => setModal5(true)} className="btn btn-info">
                Reply           
            </button>
            <Link to="/support/edit" className="btn btn-warning gap-2">
                 Edit            
            </Link>
            <Link to="/support/list" className="btn btn-danger gap-2">
                Back            
            </Link>
            </div>

            <div className="panel">
                <div className="flex justify-between flex-wrap gap-4 px-4">
                    <div className="text-2xl font-semibold uppercase">Ticket : #5451</div>
                </div>
                <div className="px-4">
                    <div className="space-y-1 mt-6 text-dark">
                        <div>Client: <strong>Jeff | vristo@gmail.com | +1 (070) 123-4567</strong></div>
                        <div>Department: <strong>dofmdokfvd</strong></div>
                        <div>Subject: <strong>dofmdofdfsdfdkfvd</strong></div>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
             

                <div className="mb-5">
    <p className="text-white-dark font-bold mb-5 text-base">Latest</p>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-16.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <h6 className="inline-block font-bold mb-2 text-lg">Trending Style</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="ltr:pl-8 rtl:pr-8 gap-3 mt-6">

                <button type="button" onClick={() => setModal5(true)} className="badge bg-primary inline-block hover:top-0 mr-2 text-base">
                     Edit           
                </button>
                <button type="button" onClick={() => showAlert(10)} className="badge bg-danger inline-block hover:top-0 text-base">
                     Remove           
                </button>

                </div>
            </div>
        </div>
    </div>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-7.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Justin Cross</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">45 min</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <h6 className="inline-block font-bold mb-2 text-lg">Nature Photography</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ltr:pl-8 rtl:pr-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3 mt-6">
                    <img
                        src="/assets/images/drag-1.jpeg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-4.jpg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    
                </div>
                <div className="ltr:pl-8 rtl:pr-8 gap-3 mt-6">
                <button type="button" onClick={() => setModal5(true)} className="badge bg-primary inline-block hover:top-0 mr-2 text-base">
                    Edit           
                </button>
                <button type="button" onClick={() => showAlert(10)} className="badge bg-danger inline-block hover:top-0 text-base">
                    Remove           
                </button>

                </div>
            </div>
        </div>
    </div>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-16.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <h6 className="inline-block font-bold mb-2 text-lg">Create new Project</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ltr:pl-8 rtl:pr-8 gap-3 mt-6">

                <button type="button" onClick={() => setModal5(true)} className="badge bg-primary inline-block hover:top-0 mr-2 text-base">
                    Edit           
                </button>
                <button type="button" onClick={() => showAlert(10)} className="badge bg-danger inline-block hover:top-0 text-base">
                    Remove           
                </button>

                </div>
            </div>
        </div>
    </div>
</div>

            </div>
            
              <div className="sticky top-0 flex items-center lg:justify-end justify-center flex-wrap gap-4 mt-4">

            <button type="button" onClick={() => setModal5(true)} className="btn btn-info">
                Reply           
            </button>
            <Link to="/support/edit" className="btn btn-warning gap-2">
                 Edit            
            </Link>
            <Link to="/support/list" className="btn btn-danger gap-2">
                Back            
            </Link>
         
            </div>

          
        </div>
    );
};

export default Preview;
