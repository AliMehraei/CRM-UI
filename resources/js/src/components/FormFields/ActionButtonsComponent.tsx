import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import api from "../../config/api";
import {useDispatch, useSelector} from "react-redux";
import {resetErrors, updateErrors} from "../../store/formErrorsSlice";
import Swal from "sweetalert2";


const ActionButtonsComponent = ({formState, resetForm}: any) => {
    const dispatch = useDispatch();
    const themeState = useSelector((state: any) => state.themeConfig);

    const navigate = useNavigate();
    const api_instance: any = new api();


    const submitForm = async (action: string = 'save') => {


        dispatch(resetErrors());
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 5000,
        });

        const methodToCall = api_instance[formState.api];
        if (typeof methodToCall !== 'function') {
            console.log('fds', 'error api');
            return;
        }

        const response = await methodToCall.call(api_instance, formState);
        if (response.isOk) {
            if (formState.action === 'create')
                dispatch(resetForm());
            toast.fire({
                icon: 'success',
                timer: 2000,
                title: 'Form submitted successfully',
                padding: '10px 20px',

            }).then(() => {
                if (action === 'save') {
                    const pathToNavigate = formState.redirectTo.replace(':id', `${response.data.data.id}`);
                    navigate(pathToNavigate, {replace: true});
                } else if (formState.action !== 'create') {
                    const pathToNavigate = formState.createRoute;
                    navigate(pathToNavigate, {replace: true});
                }
            });

        } else if (response.status === 422) {
            const errorData = response.data.data;
            const errorsToUpdate = {hasError: true, ...Object.fromEntries(Object.entries(errorData).map(([field, value]: any) => [field, value[0]]))};
            dispatch(updateErrors(errorsToUpdate));
            toast.fire({
                icon: 'error',
                html: `<h5>Form Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,
                padding: '10px 20px',

            });
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
        if (formState.action == 'edit')
            navigate(-1);
        else
            navigate(pathToNavigate, {replace: true});
    }

    useEffect(() => {
        dispatch(resetErrors());
        dispatch(resetForm());

    }, []);

    return (
        <>
            <div className=" sticky top-0 z-10 px-0 flex-1 py-2 ltr:xl:mr-6 rtl:xl:ml-6 px-10">
                <div className=" ">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <span className="text-xl font-bold">{themeState.pageTitle} : </span>
                        </div>
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
                </div>
            </div>
        </>
    )

}

export default ActionButtonsComponent;
