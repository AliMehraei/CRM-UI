import AsyncSelect from "react-select/async";

import {RequiredComponent} from "../../../components/FormFields/RequiredComponent";
import 'flatpickr/dist/flatpickr.css';
import Header from "../../../components/Layouts/Header";
import {RFQHeaderSection} from "./HeaderSection";


const RFQFormField = () => {
    return (
        <div className="mt-8 px-4">
            <div className="flex justify-between lg:flex-row flex-col">
                <RFQHeaderSection/>
            </div>
        </div>
    )


}

export default RFQFormField;
