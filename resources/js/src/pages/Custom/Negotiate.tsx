import React, {useEffect} from "react";
import Api from "../../config/api";
import {useLocation} from "react-router-dom";

const Negotiate = () => {
  const api = new Api();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quoteId = queryParams.get('quoteId');


  const sendEmail = async () => {
    const emailResponse = await api.sendQuotationRelatedEmail(quoteId, {type: "negotiate"});
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
            Thank you for your feedback!                                            </h2>
          <h2 className="font-light text-xl tracking-wider">
            We will contact you for the further negotiations and hopefully we can find the win-win situation.                                            </h2>
          <p className="flex flex-col space-y-2 description-2 text-black mt-6">
            <span>
              Warm greetings,                                                    </span>
            <span>
              ALPYN electronics team                    </span>
          </p>
          <div className="flex items-center justify-center flex-col">
            <a href="/" className="btn btn-primary pulse-primary btn-sm">
              back to the website                    </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Negotiate;
