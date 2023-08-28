import React, {Fragment, useRef, useState} from "react";
import {Popover, Transition} from "@headlessui/react";
import EditPencilIcon from "../../../../components/EditPencilIcon";

const PopoverComponent = ({item, field, handleChangeField}: any) => {
    const [isPercentage, setIsPercentage] = useState(true);
    const buttonRef = useRef<HTMLButtonElement | null>(null); // Set the correct type for the ref
    const percentageRef = useRef<HTMLInputElement | null>(null); // Set the correct type for the ref
    const directRef = useRef<HTMLInputElement | null>(null); // Set the correct type for the ref

    const handleChangeType = () => {
        setIsPercentage((prevState) => !prevState)
    }
    const handleSubmit = () => {
        let value;
        if (isPercentage) {
            value = (percentageRef.current ? parseFloat(percentageRef.current?.value) : 0) / 100 * item.amount;
        } else {
            value = (directRef.current ? parseFloat(directRef.current?.value) : 0)
        }
        handleChangeField(field, value, item.id);

        buttonRef.current?.click();

    }

    return (
        <>
            <Popover className="relative">
                {({open}) => (
                    <>
                        <Popover.Button ref={buttonRef} className="btn w-5 h-5 p-0 rounded-full ml-1">

                            <EditPencilIcon/>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-80">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                    <div className="relative grid gap-8 bg-white p-7 w-full">
                                        <div className="flex gap-3">
                                            <label className="inline-block">
                                                <input checked={isPercentage} type="radio" name="type"
                                                       className="form-radio" onChange={handleChangeType}
                                                />
                                                <span>Percentage</span>
                                            </label>
                                            <input name="total"
                                                   ref={percentageRef}
                                                   hidden={!isPercentage}
                                                   className="form-input mx-2 w-20  h-8  cursor-text"
                                            />
                                        </div>
                                        <div className="block gap-3">
                                            <label className="inline-block">
                                                <input
                                                    checked={!isPercentage}
                                                    type="radio"
                                                    name="type"
                                                    className="form-radio"
                                                    onChange={handleChangeType}/>
                                                <span className="">Direct Price Reduction</span>
                                            </label>
                                            <input
                                                ref={directRef}
                                                name="total"
                                                hidden={isPercentage}
                                                className="form-input mx-2 w-20 h-8 cursor-text"
                                            />
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                            <button className="btn btn-warning"
                                                    onClick={() => buttonRef.current?.click()}>Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}
export default PopoverComponent;

function IconThree() {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5"/>
            <rect x="13" y="32" width="2" height="4" fill="#FDBA74"/>
            <rect x="17" y="28" width="2" height="8" fill="#FDBA74"/>
            <rect x="21" y="24" width="2" height="12" fill="#FDBA74"/>
            <rect x="25" y="20" width="2" height="16" fill="#FDBA74"/>
            <rect x="29" y="16" width="2" height="20" fill="#FB923C"/>
            <rect x="33" y="12" width="2" height="24" fill="#FB923C"/>
        </svg>
    )
}
