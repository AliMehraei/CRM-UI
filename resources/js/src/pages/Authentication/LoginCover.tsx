import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setPageTitle } from "../../store/themeConfigSlice";
import { setToken, setUserData } from "../../config/config";
import api from "../../config/api";
import Swal from "sweetalert2";
import { useUserStatus } from "../../config/authCheck";
import LoadingSasCrm from "../../components/LoadingSasCrm";

const LoginCover = () => {
    const api_instance = new api();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, isLoading } = useUserStatus();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
            return;
        }
        dispatch(setPageTitle("Login Cover"));
    }, [isLoggedIn]);

    const submitForm = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await api_instance.login({ email, password });
            if (response.data.isOk && response.status === 200) {
                setToken(response.data.token, "token");
                setUserData(response.data.user);
                navigate("/");
            } else {
                showMessage(`Login failed : ${response.data.message}`, "error");
                console.error("Login failed:", response.data.message);
            }
        } catch (error) {
            console.error("Error during API call:", error);
            showMessage("An error occurred. Please try again later.", "error");
        }
    };

    const showMessage = (msg = "", type = "success") => {
        const toast: any = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: "toast" },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: "10px 20px",
        });
    };

    if (isLoading || isLoggedIn) {
        return <LoadingSasCrm />;
    }

    return (
        <div className="flex min-h-screen">
            <div className="bg-gradient-to-t from-[#4A90E2] to-[#203A43] w-1/2 min-h-screen hidden lg:flex flex-col items-center justify-center text-white dark:text-black p-4">
                <div className="w-full mx-auto mb-5">
                    <img
                        src="/assets/images/sascrm-cover.png"
                        alt="SasCrm"
                        className="lg:max-w-[370px] xl:max-w-[500px] mx-auto"
                    />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">
                    Your Gateway to CRM Success.
                </h3>
                <p>Streamline, Simplify, Succeed.</p>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                <div className="max-w-[480px] p-5 md:p-10">
                    <h2 className="font-bold text-3xl mb-3">Sign In</h2>
                    <p className="mb-7">
                        Enter your email and password to login
                    </p>
                    <form className="space-y-5" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-input"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div>
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                />
                                <span className="text-white-dark">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            SIGN IN
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginCover;
