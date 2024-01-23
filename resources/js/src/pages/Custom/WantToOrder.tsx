import React, {useEffect} from "react";
import Api from "../../config/api";
import {useLocation} from "react-router-dom";

const WantToOrder = () => {
    const api = new Api();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const quoteId = queryParams.get('quoteId');


    const sendEmail = async () => {
        const emailResponse = await api.sendQuotationRelatedEmail(quoteId, {type: "want-to-order"});
    }

    useEffect(() => {
        sendEmail();
    }, [quoteId]);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-36 py-8 lg:py-10 bg-frosted-2 rounded">
            <div className="text-center h-full flex flex-col space-y-4 text-black">
                <div className="">
                </div>
                <h2 className="title-1">
                    Such a wonderful news! <br/> Thank you for your Feedback! </h2>
                <h2 className="font-black text-xl tracking-wider color-red">
                    Should you have any question on the order preparation, please contact us any time so we will support
                    you on the further steps. </h2>
                <p className="flex flex-col space-y-2 description-2 text-black kmt-6">
          <span>
            Best Wishes,                                                    </span>
                    <span>
            ALPYN electronics team                    </span>
                </p>
                <div className="flex items-center justify-center flex-col">
                </div>
            </div>
        </div>)
}


export default WantToOrder;
