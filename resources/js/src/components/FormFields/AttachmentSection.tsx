import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Api from "../../config/api";

const thumbsContainer: any = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};
const baseStyle: any = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const thumb: any = {
    display: 'inline-block',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


const AttachmentSection = ({modelName, modelId}: any) => {
    const [files, setFiles] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: (acceptedFiles: any) => {
            handleUploadAttachment(acceptedFiles);
            setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
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
            .then((response) => {
                console.log(response);
            }).catch((error) => {
            console.log(error);
        });
    }
    const handleDeleteAttachment: any = (attachmentId: string) => {
        api_instance.deleteAttachments(attachmentId)
            .then((response) => {
                response.status == 200
            }).catch((error) => {

        })
    }

    useEffect(() => {
        api_instance.fetchAttachments({modelId: modelId, modelName: modelName})
            .then(response => {
                console.log(response)
            }).catch((error: any) => {
            console.log(error)
        });

    }, [modelId, modelName]);

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);


    const thumbs = files.map((file: any, index: number) => (
        <div
            className="relative  m-2"
            style={thumb}
            key={file.name}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={handleDeleteAttachment}
        >
            <div
                style={thumbInner}
            >
                <img
                    alt={file.name}
                    src={file.preview}
                    style={{
                        ...img,
                        filter: hoveredIndex === index ? 'blur(8px)' : 'none',
                    }}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
                {/* Add a message on top of the image */}
                {hoveredIndex === index && (
                    <div
                        className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-red-700 bg-opacity-70 p-2 rounded">
                        &#10006;
                        Delete
                    </div>)}
            </div>

        </div>
    ));

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})} style={baseStyle}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
};

export default AttachmentSection;

