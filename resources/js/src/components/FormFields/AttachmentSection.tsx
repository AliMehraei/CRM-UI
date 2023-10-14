import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Api from "../../config/api";
import Swal from "sweetalert2";
import {baseStyle, img, thumb, thumbInner, thumbsContainer} from "./AttachmentSectionStyle";


const AttachmentSection = ({modelName, modelId}: any) => {
    const [files, setFiles] = useState<any>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {getRootProps, getInputProps} = useDropzone({
        /*accept: {
            'image/!*': []
        },*/
        onDrop: (acceptedFiles: any) => {
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
                    .then((response) => {
                        response.status == 200
                    }).catch((error) => {

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
                setFiles(response.data.attachments);
            }).catch((error: any) => {
            console.log(error)
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
                        onClick={() => handleDeleteAttachment(index)}
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

