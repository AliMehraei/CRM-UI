import React, {useState} from 'react';
import AnimateHeight from "react-animate-height";
import {useSelector} from "react-redux";

const ErrorsAccordionComponent = () => {
    const [active, setActive] = useState<string>('0');
    const formErrors = useSelector((state: any) => state.formErrors);

    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    if (!formErrors.hasError)
        return <></>
    return (
        <div className="mb-5">
            <div className="space-y-2 font-semibold">
                <div className="border border-danger rounded dark:border-danger">
                    <button
                        type="button"
                        className={`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] !text-danger`}
                        onClick={() => togglePara('1')}
                    >
                        {formErrors.titleMessage ?? `You have error on submitting form ,Click here to show`}
                        <div className={`ltr:ml-auto rtl:mr-auto rotate-180`}>
                        </div>
                    </button>
                    <div>
                        <AnimateHeight duration={700} height={active === '1' ? 'auto' : 0}>
                            <div
                                className="space-y-2 p-4 text-white-dark text-[13px] border-t border-danger dark:border-danger">
                                {Object.entries(formErrors).filter(([key]) => key !== 'hasError').map(([key, value]) => (
                                    <div key={key}
                                         className="flex items-center p-3.5 rounded text-danger bg-danger-light dark:bg-danger-dark-light">
                                          <span className="ltr:pr-2 rtl:pl-2">
                                              <> {value} </>.
                                          </span>
                                    </div>
                                ))}
                            </div>
                        </AnimateHeight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorsAccordionComponent;
