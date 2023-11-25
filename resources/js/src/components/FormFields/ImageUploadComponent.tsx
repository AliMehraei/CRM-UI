import {displayImage, getImageSource, handleUploadFile} from "../Functions/CommonFunctions";
import ClearButtonComponent from "./ClearButtonComponent";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const ImageUploadComponent = ({formState, modelName, id, formAttribute, updateFormData}: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (formState[`${formAttribute}_data`]) {
            dispatch(updateFormData({[`${formAttribute}_preview`]: displayImage(formState[`${formAttribute}_data`])}));
        }
    }, []);

    return (
        <div className="">
            <div className="flex">
                <input
                    id={id ?? formAttribute}
                    key={id ?? formAttribute}
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1"
                    accept="image/*"
                    onChange={(e:any) => handleUploadFile(e, modelName, 'images', (response: any) => {
                        dispatch(updateFormData({[`${formAttribute}_preview`]: e.target.files && URL.createObjectURL(e.target.files[0])}));
                        dispatch(updateFormData({[`${formAttribute}`]: `${response?.data.data.file_asset_path}`}));
                    })}
                    name={id ?? formAttribute}
                />
                <ClearButtonComponent callBack={() => {
                    const fileInput = document.getElementById(id ?? formAttribute) as HTMLInputElement | null;
                    if (fileInput) {
                        fileInput.value = '';
                        fileInput.dispatchEvent(new Event('change', {bubbles: true}));
                    }
                    dispatch(updateFormData({[formAttribute]: null}));
                    dispatch(updateFormData({[`${formAttribute}_preview`]: null}));

                }}/>
            </div>
            <img
                id={`${id ?? formAttribute}_preview`}
                src={formState[`${formAttribute}_preview`] ? formState[`${formAttribute}_preview`] : getImageSource(formState.oldImage)}
                alt="img" className="mt-4 w-20 h-20 rounded"/>
        </div>
    )
}
export default ImageUploadComponent;
