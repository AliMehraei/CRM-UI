import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setPageTitle } from '../../store/themeConfigSlice';
import { setToken } from '../../config/config';
import api from '../../config/api';
import Swal from 'sweetalert2';
import { useUserStatus } from '../../config/authCheck';  
import LoadingAlpyn from '../../components/LoadingAlpyn';

const LoginCover = () => {
    const api_instance = new api();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, isLoading } = useUserStatus(); 

    useEffect(() => {
        if (isLoggedIn) {  
            navigate('/');
            return;
        }
        dispatch(setPageTitle('Login Cover'));
    }, [isLoggedIn]);

    const submitForm = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await api_instance.login({ email, password });
            if (response.data.isOk && response.status === 200) {
                // Handle successful login
                setToken(response.data.token, 'token');
                navigate('/');
            } else {
                showMessage(`Login failed : ${response.data.message}`, 'error');
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error during API call:', error);
            showMessage('An error occurred. Please try again later.', 'error');
        }
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    if (isLoading || isLoggedIn) {
        return <LoadingAlpyn />;
    }

    return (
        <div className="flex min-h-screen">
        <div className="bg-gradient-to-t from-[#ff1361bf] to-[#44107A] w-1/2  min-h-screen hidden lg:flex flex-col items-center justify-center text-white dark:text-black p-4">
            <div className="w-full mx-auto mb-5">
                <img src="/assets/images/auth-cover.svg" alt="coming_soon" className="lg:max-w-[370px] xl:max-w-[500px] mx-auto" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Join the community of expert developers</h3>
            <p>It is easy to setup with great customer experience. Start your 7-day free trial</p>
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="max-w-[480px] p-5 md:p-10">
                <h2 className="font-bold text-3xl mb-3">Sign In</h2>
                <p className="mb-7">Enter your email and password to login</p>
                <form className="space-y-5" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" className="form-input" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-input" placeholder="Enter Password" />
                    </div>
                    <div>
                        <label className="cursor-pointer">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Remember me</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        SIGN IN
                    </button>
                </form>
                <div className="relative my-7 h-5 text-center before:w-full before:h-[1px] before:absolute before:inset-0 before:m-auto before:bg-[#ebedf2]  dark:before:bg-[#253b5c]">
                    <div className="font-bold text-white-dark bg-[#fafafa] dark:bg-[#060818] px-2 relative z-[1] inline-block">
                        <span>OR</span>
                    </div>
                </div>

                <p className="text-center">
                    Dont&apos;t have an account ?
                    <Link to="/auth/cover-register" className="font-bold text-primary hover:underline ltr:ml-1 rtl:mr-1">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    </div>
    );
};

export default LoginCover;
