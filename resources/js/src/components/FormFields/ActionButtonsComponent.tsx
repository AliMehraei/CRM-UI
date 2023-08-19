import {Link, useNavigate} from "react-router-dom";
import React from "react";
import api from "../../config/api";
import any = jasmine.any;
import {an} from "@fullcalendar/core/internal-common";


const ActionButtonsComponent = ({formState}: any) => {
    const navigate = useNavigate();
    const api_instance: any = new api();
    const submitForm = async () => {
        await callMethod(formState);
    };
    const callMethod = (parameters: any) => {
        const methodToCall = api_instance[formState.api];
        if (typeof methodToCall === 'function') {
            return methodToCall.call(api_instance, parameters);
        }
    }
    const handlePreviousPage = () => {
        const pathToNavigate = location.pathname.replace('\/add', '\/list');
        navigate(pathToNavigate, {replace: true});
    }

    return (
        <>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <button onClick={handlePreviousPage} className="btn btn-danger gap-2">
                        Back
                    </button>
                    <button className="btn btn-primary gap-2">
                        Save and new
                    </button>
                    <button onClick={submitForm} className="btn btn-success gap-2">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default ActionButtonsComponent;
