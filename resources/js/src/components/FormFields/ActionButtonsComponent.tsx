import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import api from "../../config/api";
import {useDispatch} from "react-redux";
import {resetErrors, updateErrors} from "../../store/formErrorsSlice";
import Swal from "sweetalert2";
import {resetForm} from "../../store/manufactureFormSlice";


const ActionButtonsComponent = ({formState}: any) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const api_instance: any = new api();

    const submitForm = async (action: string = 'save') => {

        dispatch(resetErrors());
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });

        const methodToCall = api_instance[formState.api];
        if (typeof methodToCall !== 'function') {
            return;
        }

        const response = await methodToCall.call(api_instance, formState);
        if (response.isOk) {
            dispatch(resetForm());
            toast.fire({
                icon: 'success',
                timer: 2000,
                title: 'Form submitted successfully',
                padding: '10px 20px',

            }).then(() => {
                if (action === 'save') {
                    const pathToNavigate = location.pathname.replace('\/add', `\/edit/${response.data.data.id}`);
                    navigate(pathToNavigate, {replace: true});
                }
            });

        } else if (response.status === 422) {
            const errorData = response.data.data;
            const errorsToUpdate = {hasError: true, ...Object.fromEntries(Object.entries(errorData).map(([field, value]: any) => [field, value[0]]))};
            dispatch(updateErrors(errorsToUpdate));
        } else {
            toast.fire({
                icon: 'error',
                title: 'Internal Server Error ,submitting form failed',
                padding: '10px 20px',
            });
        }
    };

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
                    <button onClick={() => submitForm('new')} className="btn btn-primary gap-2">
                        Save and new
                    </button>
                    <button onClick={() => submitForm('save')} className="btn btn-success gap-2">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default ActionButtonsComponent;
