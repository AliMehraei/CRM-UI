import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import themeConfig from '../../theme.config';

const ErrorPage = ({ errorCode }) => {
    const dispatch = useDispatch();

    const errorMessages = {
        400: "Bad Request: The server did not understand your request.",
        401: "Unauthorized: You need to authenticate to access this page.",
        403: "Forbidden: You don't have permission to access this page.",
        404: "Not Found: The page you're looking for does not exist.",
        500: "Internal Server Error: Something went wrong on the server.",
        // Add more error codes and messages as needed
    };

    const errorMessage = errorMessages[errorCode] || "An error occurred.";

    useEffect(() => {
        dispatch(setPageTitle(`Error ${errorCode}`));
    }, [dispatch, errorCode]);

    return (
        <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 205px)" }}>
            <div className="text-center p-5 font-semibold">
                <Link to="/" className="main-logo flex items-center justify-center my-5">
                    {themeConfig.isDarkMode ? (
                        <img className="w-24 rtl:ml-1 inline" src="/assets/images/logo-light.webp" alt="logo" />
                    ) : (
                        <img className="w-24 rtl:ml-1 inline" src="/assets/images/logo.webp" alt="logo" />
                    )}
                </Link>
                <p className="text-[18px] md:text-[22px] text-gray-700">{errorCode} Error: {errorMessage}</p>
                <div className='inline-flex my-5'>
                    <Link to="/auth/login" className="btn btn-primary mt-2 mr-3 w-max mx-auto">
                        Login
                    </Link>
                    <Link to="/" className="btn btn-primary mt-2 w-max mx-auto">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
