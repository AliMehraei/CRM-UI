import React, {useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import {notifyErrorMessage, notifySuccess} from "../../components/Functions/CommonFunctions";
import Api from "../../config/api";

const Closed = () => {
    const api = new Api();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const quoteId = queryParams.get('quoteId');


    const sendEmail = async () => {
        const emailResponse = await api.sendQuotationRelatedEmail(quoteId, {type: "closed"});
    }

    useEffect(() => {
        sendEmail();
    }, [quoteId]);


    return (
        <div className="">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-36 py-8 lg:py-10 bg-frosted-2 rounded">
                <div className="text-center h-full flex flex-col space-y-4 text-black">
                    <div className="">
                    </div>
                    <h2 className="title-1">
                        Thank you for your Feedback! </h2>
                    <h2 className="font-light text-xl tracking-wider">
                        Unfortunately, you decided to close this offer. In case of any changes or new details, please
                        let us know if there is anything we can do to support you. </h2>
                    <p className="flex flex-col space-y-2 description-2 text-black mt-6">
            <span>
              Have a wonderful day,                                                    </span>
                        <span>
              ALPYN electronics team                    </span>
                    </p>
                    <div className="flex items-center justify-center flex-col">
                        <a href="/" className="btn btn-primary pulse-primary btn-sm">
                            back to the website </a>
                    </div>
                </div>
            </div>
        </div>)
}


export default Closed;
