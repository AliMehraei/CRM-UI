import {displayFile, displayImage, handleUploadFile} from "../Functions/CommonFunctions";
import {useDispatch} from "react-redux";
import ClearButtonComponent from "./ClearButtonComponent";
import {useEffect, useState} from "react";

const FileUploadComponent = ({updateFormData, formState, modelName, id, formAttribute}: any) => {
    const dispatch = useDispatch();
    const [firstRender, setFirstRender] = useState(true);

    const download = async () => {
        let data = null;
        if (firstRender)
            data = await displayFile(modelName, formAttribute, formState[formAttribute])
        else
            data = formState[`${formAttribute}_preview`];
        const anchorElement = document.createElement('a');
        anchorElement.href = data;
        anchorElement.target = '_blank';
        anchorElement.download = formState[formAttribute].split('/').pop();
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
                    setFirstRender(false);
                })}
                name={id ?? formAttribute}
            />

            <button disabled={!formState[formAttribute]} className="btn btn-outline-primary cursor-pointer"
                    onClick={download}
            >Download
            </button>
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
