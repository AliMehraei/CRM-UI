import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Api from "../../config/api";
import Swal from "sweetalert2";
import {baseStyle, img, thumb, thumbInner, thumbsContainer} from "./AttachmentSectionStyle";
import {notifyErrorMessage} from "../Functions/CommonFunctions";


const AttachmentSection = ({modelName, modelId}: any) => {
    const [files, setFiles] = useState<any>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            "application/pdf": [".pdf"],
            "text/plain": [".txt"],
            "text/csv": [".csv"],
            "application/msword": [".doc", ".docx"],
            "application/vnd.ms-excel": [".xls", ".xlsx"],
            "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
        },
        onDrop: (acceptedFiles: any, fileRejections) => {
            if (fileRejections.length > 0)
                notifyErrorMessage("Some files did not upload");
            handleUploadAttachment(acceptedFiles);

        }
    });
    const api_instance = new Api();
    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleUploadAttachment = (files: any) => {
        api_instance.uploadAttachments(files, modelName, modelId)
            .then((response: any) => {
                if (response.status != 200)
                    throw Error(response);
                setFiles((prevFiles: any) => [...prevFiles, ...response.data?.data]);
            }).catch((error) => {
            notifyErrorMessage("Files did not upload");
            console.error(error);
        });
    }
    const handleDeleteAttachment: any = (attachmentId: string) => {
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
                api_instance.deleteAttachments(attachmentId)
                    .then(() => {
                        setFiles((prevFiles: any) =>
                            prevFiles.filter((file: any) => file.id != attachmentId));
                    }).catch((error) => {
                    notifyErrorMessage("Error deleting attachment");
                    console.error(error);

                })
            }
        });
    }

    const handleDownload = (file: any) => {
        api_instance.downloadAttachment(file.id, file.original_name);
    }

    useEffect(() => {
        api_instance.fetchAttachments({modelId: modelId, modelName: modelName})
            .then(response => {
                if(response.status==200)
                    setFiles(response.data.attachments);
            }).catch((error: any) => {
            notifyErrorMessage("Error Fetching attachments")
            console.error(error)
        });

    }, [modelId, modelName]);

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);


    const thumbs = files.map((file: any, index: number) => (
        <div key={file.id} style={thumb} className="relative">

            <div style={thumbInner}
                 onMouseEnter={() => handleMouseEnter(index)}
                 onMouseLeave={handleMouseLeave}
            >
                <img
                    alt={file.original_name}
                    src="/assets/images/filethumbnail.png"
                    style={{
                        ...img,
                        filter: hoveredIndex === index ? 'blur(8px)' : 'none',
                    }}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
                {hoveredIndex === index && (
                    <div
                        onClick={() => handleDeleteAttachment(file.id)}
                        className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-center text-red-700 bg-opacity-70 p-2 rounded"
                    >
                        &#10006; Delete
                    </div>
                )}
                <div
                    className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-center text-blue-950">
                    {file.original_name?.length > 10 ? file.original_name?.substring(0, 10) + '...' : file.original_name}
                </div>
            </div>
            <button onClick={() => {
                handleDownload(file);
            }} className="cursor-pointer mt-3 text-center btn btn-primary w-20 h-7">
                Download
            </button>
        </div>

    ));

    return (
        <div className="flex justify-between lg:flex-row flex-col mb-10">
            <label key="Attachment" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2">
            Attachment</label>
            <section className="container">
                <div {...getRootProps({className: 'dropzone'})} style={baseStyle}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
            </section>
        </div>

    );
};

export default AttachmentSection;

