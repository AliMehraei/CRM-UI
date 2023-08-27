import React, {Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";


const solutions = [
    {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '##',
        icon: IconThree,
    },
    {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '##',
        icon: IconThree,
    },
    {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '##',
        icon: IconThree,
    },
]
const popoverComponent = () => {
    return (
        <>
            <div data-headlessui-state="open">
                <button data-headlessui-state="open">Solutions</button>
                <div data-headlessui-state="open">
                    <a href="/insights">Insights</a>
                    <a href="/automations">Automations</a>
                    <a href="/reports">Reports</a>
                </div>
            </div>
        </>
    )
}
export default popoverComponent;

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
