import React from "react";

const EmailMarketing = () => {
  return (
    <div className="flex justify-center items-center bg-white mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Turn Emails into Revenue</h1>
        <p className="text-lg my-7">
          Win new customers with the #1 email marketing and automations
          platform* <br /> that recommends ways to get more opens, clicks, and
          sales.
        </p>
        <div className="bg-black rounded-full inline-block">
          <button
            type="button"
            className="rounded-full hover:-translate-y-[4px] transition-all duration-300 border border-black px-5 py-3 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#FFE01B] focus-visible:outline-black"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
