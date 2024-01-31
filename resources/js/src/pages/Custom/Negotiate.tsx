import React, { useEffect, useState } from "react";
import Api from "../../config/api";
import { useLocation } from "react-router-dom";

const Negotiate = () => {
  const api = new Api();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quoteId = queryParams.get('quoteId');
  const trackingUuid = queryParams.get('trackingUuid');

  const [message, setMessage] = useState("Processing your request...");

  const sendEmail = async () => {
    try {
      const emailResponse = await api.sendQuotationRelatedEmail(quoteId,trackingUuid, {type: "negotiate"});
      if (emailResponse.data.status_code === 200) {
        // Email sent successfully
        setMessage("We will contact you for the further negotiations and hopefully we can find the win-win situation.");
      } else if (emailResponse.data.status_code === 403) {
        // Email action expired or already used
        setMessage("This action is no longer valid or has already been processed.");
      } else {
        // Other errors
        setMessage("An error occurred while processing your request.");
      }
    } catch (error) {
      setMessage("An error occurred while processing your request.");
    }
  }

  useEffect(() => {
    if (quoteId != null) {
        sendEmail();
    }
}, [quoteId]);

  return (
    <div className="...">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-36 py-8 lg:py-10 bg-frosted-2 rounded">
        <div className="text-center h-full flex flex-col space-y-4 text-black">
          <div className="">
          </div>
          <h2 className="title-1 text-xl">
            {message}
          </h2>
          {message === "We will contact you for the further negotiations and hopefully we can find the win-win situation." && (
            <p className="flex text-xl flex-col space-y-2 description-2 text-black mt-6">
              <span>
                Warm greetings,
              </span>
              <span>
                ALPYN electronics team
              </span>
            </p>
          )}
          <div className="flex items-center justify-center flex-col">
            <a href="/" className="btn btn-primary pulse-primary btn">
              back to the website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Negotiate;
