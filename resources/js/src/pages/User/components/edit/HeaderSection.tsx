import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/userFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Flatpickr from "react-flatpickr";
import {
    generateRandomPassword,
    copyToClipboard,
} from "../../../../components/Functions/CommonFunctions";
import { useState } from "react";
import Swal from "sweetalert2";

const HeaderSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.userForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };
    const [showPassword, setShowPassword] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const handleGeneratePassword = () => {
        const newPassword = generateRandomPassword();
        setGeneratedPassword(newPassword);
        copyToClipboard(newPassword);
        handleChangeField("password", newPassword);
        showMessage(`Password copied to clipboard!`);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
    const formErrors = useSelector((state: any) => state.formErrors);

    const fields = {
        Header: {
            "First Name": (
                <input
                    id="first_name"
                    name="first_name"
                    className="form-input flex-1 "
                    defaultValue={formState.first_name}
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),

            "Last Name": (
                <input
                    id="last_name"
                    name="last_name"
                    className="form-input flex-1 "
                    defaultValue={formState.last_name}
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),

            Alias: (
                <input
                    id="alias"
                    name="alias"
                    className="form-input flex-1 "
                    defaultValue={formState.alias}
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),

            "Date of birth": (
                <Flatpickr
                    options={{
                        dateFormat: "Y-m-d ",
                        position: "auto left",
                        defaultDate: formState.date_of_birth
                            ? new Date(formState.date_of_birth)
                            : (null as any),
                    }}
                    defaultValue={formState.date_of_birth}
                    name="date_of_birth"
                    className="form-input flex-1"
                    onChange={(_, dateString) =>
                        handleChangeField("date_of_birth", dateString)
                    } // Update the field value on change
                />
            ),
        },
        "": {
            Email: (
                <input
                    id="email"
                    name="email"
                    defaultValue={formState.email}
                    className="form-input flex-1 "
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),

            Phone: (
                <input
                    id="phone"
                    name="phone"
                    defaultValue={formState.phone}
                    className="form-input flex-1 "
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),

            Mobile: (
                <input
                    id="mobile"
                    name="mobile"
                    defaultValue={formState.mobile}
                    className="form-input flex-1 "
                    onChange={(e) =>
                        handleChangeField(e.target.name, e.target.value)
                    }
                />
            ),
        },
    };
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields} />
            </div>
            <div className="flex justify-between lg:flex-row flex-col">
                <div className="mt-4 items-center">
                    <div className="flex">
                        <label
                            className="ltr:mr-2 rtl:ml-2  mb-0 mt-2"
                            htmlFor="password"
                        >
                            Password:
                        </label>
                        <div className="w-full flex items-center">
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    defaultValue={formState.password}
                                    className="form-input flex-1"
                                    onChange={(e) =>
                                        handleChangeField(
                                            e.target.name,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="password-toggle-button btn btn-sm btn-outline-info m-2"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={handleGeneratePassword}
                            className="generate-password-button btn btn-sm btn-outline-primary m-2"
                        >
                            Generate&Copy
                        </button>
                        {formErrors.password && (
                            <div className="text-red-500 mt-2">
                                {formErrors.password}{" "}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSection;
