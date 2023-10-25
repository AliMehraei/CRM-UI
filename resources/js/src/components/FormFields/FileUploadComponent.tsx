import {displayFile, displayImage, handleUploadFile} from "../Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import ClearButtonComponent from "./ClearButtonComponent";
import {useEffect} from "react";

const FileUploadComponent = ({updateFormData, formState, modelName, id, formAttribute}: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (formState[formAttribute]) {
            displayFile(modelName, formAttribute, formState[formAttribute]).then((data) => {
                // const blob = new Blob([new Uint8Array(data)]);

                dispatch(updateFormData({[`${formAttribute}_preview`]: data}));

            })
        }
    }, []);
    const download = (field: any) => {
        console.log(field);
        const pdfLink = `${field.file}`;
        const anchorElement = document.createElement('a');
        const fileName = `test.png`;
        anchorElement.href = pdfLink;
        anchorElement.download = fileName;
        anchorElement.click();
    }

    return (
        <div className="flex">
            <input
                id={id ?? formAttribute}
                key={id ?? formAttribute}
                type="file"
                className="form-input mr-1 file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                // accept="image/*"
                onChange={(e) => handleUploadFile(e, modelName, 'attachments', (response: any) => {
                    dispatch(updateFormData({
                        [formAttribute]: `${response?.data.data.file_asset_path}`
                    }));
                    dispatch(updateFormData({
                        [`${formAttribute}_preview`]: e.target.files && URL.createObjectURL(e.target.files[0]),
                    }))
                })}
                name={id ?? formAttribute}
            />

            <a disabled={!formState[formAttribute]} className="btn btn-outline-primary cursor-pointer"
               href={formState[`${formAttribute}_preview`] ?? formState[formAttribute]}
               target="_blank"
               {...({} as React.ButtonHTMLAttributes<HTMLAnchorElement>)}
            >Download</a>
            <ClearButtonComponent callBack={() => {
                const fileInput = document.getElementById(id ?? formAttribute) as HTMLInputElement | null;
                if (fileInput) {
                    fileInput.value = '';
                    fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                }
                dispatch(updateFormData({[formAttribute]: null}));
            }}/>
        </div>
    )
}

export default FileUploadComponent;
