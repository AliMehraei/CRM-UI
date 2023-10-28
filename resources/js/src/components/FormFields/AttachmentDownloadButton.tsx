import {displayFile} from "../Functions/CommonFunctions";
import {useState} from "react";

const AttachmentDownloadButton = ({formAttribute, modelName, formState}: any) => {
    const [firstRender, setFirstRender] = useState(true);

    const download = async () => {
        console.log(modelName, formAttribute, formState[formAttribute]);
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
        <button disabled={!formState[formAttribute]} className="btn btn-outline-primary cursor-pointer"
                onClick={download}
        >Download
        </button>
    )
}

export default AttachmentDownloadButton;
