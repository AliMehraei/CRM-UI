import React from "react";
import AccountSection from "./AccountSection";
import {useParams} from "react-router-dom";
const FiscalAccountFormFields = ({ action = 'create' }: any) => {
    const params = useParams();
    const accountId = params.id;
    return (
        <div className="mt-8 px-4">
            <AccountSection key="accountSection" action={action}/>
            <hr className="border-white-light dark:border-[#1b2e4b] my-6"/>
          
        </div>
    )


}

export default FiscalAccountFormFields;
